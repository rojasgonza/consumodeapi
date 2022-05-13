import React, { Fragment, useState } from 'react';
import clienteAxios from '../../config/Axios';
import Swal from 'sweetalert2';
import { withRouter } from 'react-router-dom';
function NuevoLocal({history}) {

    const [local, guardarLocales] = useState({
        nombre: '',
        direccion: ''
    });
    const actualizarState = e => {
        guardarLocales({
            ...local, 
            [e.target.name]: e.target.value
        })
    }

    const validarLocal = () =>{
        const {nombre, direccion} = local;
        let valido = !nombre.length || !direccion.length;
        return valido;
    }

    //agregar insumo
    const agregarLocal = e =>{
        e.preventDefault();
    /// enviar peticion 
    clienteAxios.post('/locales', local)
    .then(res=>{
        if(res.data.code === 11000){
            Swal.fire({
                icon: 'error',
                title: 'Hubo un error',
                text: 'Error en la carga de local'
            })
        }else{
            Swal.fire(
                'Bien hecho!',
                res.data.mensaje,
                'success'
            )
            
        }
        history.push('/locales');
    })
        
    
    }

    return(
<Fragment>
<div className='col-sm-6'>
<h2>Nuevo local</h2>

    <form onSubmit={agregarLocal}>
        <label className="form-label" >Nombre</label>
        <input className="form-control" name="nombre" onChange={actualizarState}/>
        <label className="form-label" >Direccion</label>
        <input className="form-control" name="direccion" onChange={actualizarState}/>

        <button type="submit" className="btn btn-success mt-2" name="submit" id="submit" disabled={validarLocal()}>Enviar form</button>
    </form>
    </div>
</Fragment>
    )
}
export default NuevoLocal;