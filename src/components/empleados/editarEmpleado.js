import React, { Fragment, useState, useEffect } from 'react';
import clienteAxios from '../../config/Axios';
import Swal from 'sweetalert2';
import { withRouter } from 'react-router-dom';
function EditarEmpleado(props) {

const { id } = props.match.params;

    ///cliente = state, giardar cliente para guardarlos
const[empleado, datosEmpleados] = useState({
    nombre: '',
    telefono: '',
    direccion: '',
    email:''
});

const consultarAPI = async () => {
    const empleadoConsulta = await clienteAxios.get(`/empleados/${id}`);
    
    //colocar datos en el state

    datosEmpleados(empleadoConsulta.data);
}

useEffect(() => {
    consultarAPI()
}, []);

const actualizarState = e =>{
    datosEmpleados({
        ...empleado,
        [e.target.name]: e.target.value
    })
}

//axios para actualizar empleado
const actualizarEmpleado = e =>{ 
    e.preventDefault();

    //enviar peticion
    clienteAxios.put(`/empleados/${empleado._id}`, empleado)
    .then(res => {
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
         props.history.push('/empleados')
    })
}





return (
<Fragment>
<div className='col-sm-6'>
<h2>Editar Empleado</h2>

<form onSubmit={actualizarEmpleado}>
    <label className="form-label" >Nombre</label>
    <input className="form-control" name="nombre" id="nombre" value={empleado.nombre}  onChange={actualizarState}/>
    <label className="form-label" >Telefono</label>
    <input className="form-control" type="number" name="telefono" id="telefono" value={empleado.telefono}  onChange={actualizarState}/>
    <label className="form-label" >Direccion</label>
    <input className="form-control" name="direccion" type="text" id="direccion" value={empleado.direccion} onChange={actualizarState}/>
    <label className="form-label" >Email</label>
    <input className="form-control" name="email" id="email" type="email" onChange={actualizarState} value={empleado.email} />
    <button type="submit" className="btn btn-success mt-2" name="submit" id="submit">Guardar Cambios</button>
</form>
</div>
</Fragment>
)
}
export default withRouter(EditarEmpleado);