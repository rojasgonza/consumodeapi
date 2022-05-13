import React, { Fragment, useState, useEffect } from 'react';
import clienteAxios from '../../config/Axios';
import Swal from 'sweetalert2';
import { withRouter } from 'react-router-dom';
function EditarLocal(props) {
    const { id } = props.match.params;
    const [local, datosLocal] = useState({
        nombre: '',
        direccion: ''
    });
    const consultarAPI = async () => {
        const localesConsulta = await clienteAxios.get(`/locales/${id}`);

        //colocar datos en el state

        datosLocal(localesConsulta.data);
    }
    useEffect(() => {
        consultarAPI()
    }, []);

    const actualizarState = e => {
        datosLocal({
            ...local,
            [e.target.name]: e.target.value
        })
    }

    //agregar insumo
    const actualizarLocal = e => {
        e.preventDefault();
        /// enviar peticion 
        clienteAxios.put(`/locales/${local._id}`, local)
            .then(res => {
                if (res.data.code === 11000) {
                    Swal.fire({
                        icon: 'error',
                        title: 'Hubo un error',
                        text: 'Error en la carga de insumo'
                    })
                } else {
                    Swal.fire(
                        'Bien hecho!',
                        res.data.mensaje,
                        'success'
                    )

                }
                props.history.push('/locales')
            })


    }

    return (
        <Fragment>
            <div className='col-sm-6'>
                <h2>Editar Local</h2>

                <form onSubmit={actualizarLocal}>
                    <label className="form-label" >Nombre</label>
                    <input className="form-control" value={local.nombre} name="nombre" onChange={actualizarState} />
                    <label className="form-label" >Direccion</label>
                    <input className="form-control" value={local.direccion} name="direccion" onChange={actualizarState} />

                    <button type="submit" className="btn btn-success mt-2" name="submit" id="submit" >Enviar form</button>
                </form>
            </div>
        </Fragment>
    )
}
export default withRouter(EditarLocal);