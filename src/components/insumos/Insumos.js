import React, { useEffect, useState, Fragment } from 'react'
import clienteAxios from '../../config/Axios';
import Insumo from './Insumo';

function Insumos() {
    const [insumos, guardarInsumos] = useState([]);

    //query a la api
    const consultarAPI = async () => {
        const insumosConsulta = await clienteAxios.get('/insumos');
        guardarInsumos(insumosConsulta.data);

    };
    useEffect(() => {
        consultarAPI();
    }, [insumos])




    return (
        <Fragment>        
            <h2>Insumos</h2>
            <a href="/insumos/nuevo" className='btn btn-danger'>Nuevo</a>
            <table className="table table-striped content-center">
               <thead>
                <tr>
                    <th scope="col">Nombre</th>
                    <th scope="col">Medida</th>
                    <th scope="col">ACCIONES</th>

                </tr>
                </thead>
                <tbody>
          

                {insumos.map(insumo => (
                    <Insumo insumo={insumo}
                            key={insumo._id}/>
                ))}
              
        </tbody>
                    
            
            </table>

                         
        </Fragment>

    )
}
export default Insumos;