import React, { useState, useEffect, Fragment } from 'react'
import clienteAxios from '../../config/Axios';
import Swal from 'sweetalert2';
import FormBuscarInsumo from './FormBuscarInsumo';
import FormCantidadInsumo from './FormCantidadInsumo';


function NuevoPedido(props) {
    //extraer id empleado
    const { id } = props.match.params;

    const [empleado, guardarEmpleado] = useState({});
    const [busqueda, guardarBusqueda] = useState('');
    const [insumos, guardarInsumos] = useState([]);



    useEffect(() => {
        //obtener cliente
        const consultarAPI = async () => {
            const resultado = await clienteAxios.get(`/empleados/${id}`);
            guardarEmpleado(resultado.data);
        }


        consultarAPI();
    }, []);


    const buscarInsumo = async e => {
        e.preventDefault();

        //obtener
        const resultadoBusqueda = await clienteAxios.post(`/insumos/busqueda/${busqueda}`);
        //si no hay resultados
        if (resultadoBusqueda.data[0]) {
            let insumoResultado = resultadoBusqueda.data[0];
            // agregar la llave 
            insumoResultado.insumo = resultadoBusqueda.data[0]._id;
            insumoResultado.cantidad= 0;
           // pornelo en state
            guardarInsumos([...insumos, insumoResultado]);
        } else {
            Swal.fire({
                icon: 'error',
                title: 'No resultados',
                text: 'no hay resultados'
            })
        }
    };
    //almacenar
    const leerDatosBusqueda = e => {
        guardarBusqueda(e.target.value);
    };
    const eliminarInsumoPedido = id =>{
        const todosInsumos = insumos.filter(insumo => insumo.insumo !== id);
        guardarInsumos(todosInsumos);
    }
    const realizarPedido = async e =>{
        e.preventDefault();
        const {id} = props.params.match;
        ///construir obj
        const pedido = {
        "empleado":id,
        "local": [],
        "pedido": insumos
        }
        const resultado = await clienteAxios.post(`/pedidos/nuevo/${id}`,pedido);
        if(resultado.status ===200){
            Swal.fire({
                icon: 'success',
                title:'Enviado el pedido',
                text: 'NO SE GUARDO'
            })
        }else{
            Swal.fire({
                icon: 'error',
                title:'error al enviar el pedido',
                text: 'NO SE GUARDO'
            })
        }
    }

    return (
        <Fragment>
            <div className='container'>
                <div className='col-sm-12 col-md-10 col-lg-6'>
                    <h2>Nuevo Pedido</h2>
                    <h3>{empleado.nombre}</h3>
                    <h3>{empleado.email}</h3>
                    <FormBuscarInsumo buscarInsumo={buscarInsumo}
                        leerDatosBusqueda={leerDatosBusqueda} />
            <table className="table table-striped content-center">
               <thead>
                <tr>
                    <th scope="col">Nombre</th>
                    <th scope="col">Medida</th>
                    <th scope="col">ACCIONES</th>
                    <th scope="col">ACCIONES</th>


                </tr>
                </thead>
                <tbody>
                    {insumos.map((insumo) =>(
                         <FormCantidadInsumo
                         key={insumo.insumo}
                         insumo={insumo}
                         eliminarInsumoPedido={eliminarInsumoPedido} />
                    ))}
           
              
        </tbody>
                    
            
            </table>
            <button type='submit' onSubmit={realizarPedido}>enviar</button>
            </div>
            </div>
        </Fragment>
    )
}
export default NuevoPedido;