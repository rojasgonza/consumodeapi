import React, { Fragment, useState } from 'react';
import clienteAxios from '../../config/Axios';
import Swal from 'sweetalert2';
import { withRouter } from 'react-router-dom';
function nuevoInsumo({history}) {

    const [insumo, guardarInsumos] = useState({
        nombre: '',
        medida: ''
    });
    const actualizarState = e => {
        guardarInsumos({
            ...insumo, 
            [e.target.name]: e.target.value
        })
    }



    //agregar insumo
    const agregarInsumo = e =>{
        e.preventDefault();
    /// enviar peticion 
    clienteAxios.post('/insumos', insumo)
    .then(res=>{
        if(res.data.code === 11000){
            Swal.fire({
                icon: 'error',
                title: 'Hubo un error',
                text: 'Error en la carga de insumo'
            })
        }else{
            Swal.fire(
                'Bien hecho!',
                res.data.mensaje,
                'success'
            )
            
        }
        history.push('/insumos');
    })
        
    
    }

    return(
<Fragment>
<div className='col-sm-6'>
<h2>Nuevo Insumo</h2>

    <form onSubmit={agregarInsumo}>
        <label className="form-label" >Nombre</label>
        <input className="form-control" name="nombre" onChange={actualizarState}/>
        <label className="form-label" >Medida</label>
        <input className="form-control" name="medida" onChange={actualizarState}/>

        <button type="submit" className="btn btn-success mt-2" name="submit" id="submit">Enviar form</button>
    </form>
    </div>
</Fragment>
    )
}
export default nuevoInsumo;