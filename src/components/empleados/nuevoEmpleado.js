import React, { Fragment, useState } from 'react';
import clienteAxios from '../../config/Axios';
import Swal from 'sweetalert2';
import { withRouter } from 'react-router-dom';
function NuevoEmpleado({history}) {

    ///cliente = state, giardar cliente para guardarlos
const[empleado, guardarEmpleados] = useState({
    nombre: '',
    telefono: '',
    direccion: '',
    email:''
});

const actualizarState = e =>{
    guardarEmpleados({
        ...empleado,
        [e.target.name]: e.target.value
    })
}

//validar cliente
const validarCliente = () => {
    const {nombre, telefono, direccion, email} = empleado;

    let valido = !nombre.length || !telefono.length || !direccion.length || !email.length;

    return valido;
}

//agregar emp

const agregarEmpleado = e => {
    e.preventDefault();
    
    //enviar peticion
    clienteAxios.post('/empleados', empleado)
    .then(res=>{
        if (res.data.code === 11000) {
           Swal.fire({
               icon: 'error',
               title: 'Hubo un error',
               text: 'Ese mail ya se encuentra registrado'

           })
        }else{

                Swal.fire(
                'Good job!',
                res.data.mensaje,
                'success'
            )
        }

        //a donde quiero que me reedireccione
        history.push('/empleados');
    });
}




return (
<Fragment>
<div className='col-sm-6'>
<h2>Nuevo Empleado</h2>

<form onSubmit={agregarEmpleado}>
    <label className="form-label" >Nombre</label>
    <input className="form-control" name="nombre" id="nombre" onChange={actualizarState}/>
    <label className="form-label" >Telefono</label>
    <input className="form-control" type="number" name="telefono" id="telefono" onChange={actualizarState}/>
    <label className="form-label" >Direccion</label>
    <input className="form-control" name="direccion" type="text" id="direccion" onChange={actualizarState}/>
    <label className="form-label" >Email</label>
    <input className="form-control" name="email" id="email" type="email" onChange={actualizarState}/>
    <button type="submit" className="btn btn-success mt-2" name="submit" id="submit" disabled={validarCliente()}>Enviar form</button>
</form>
</div>
</Fragment>
)
}
export default withRouter(NuevoEmpleado);