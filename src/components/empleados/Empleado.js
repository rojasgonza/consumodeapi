import { Fragment } from "react";
import React from 'react'
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import clienteAxios from "../../config/Axios";
function Empleado({empleado}) {
    const eliminarEmpleado = idEmpleado => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {
                clienteAxios.delete(`/empleados/${idEmpleado}`)
                .then(res =>{
                    Swal.fire(
                        'Deleted!',
                       res.data.mensaje,
                        'success'
                      )
                })
            }
          })

    };
    const {_id,nombre, telefono, direccion, email} = empleado;
    return(
    <Fragment>
                               <div className="col-sm-12 col-lg-4 col-md-6 ">
            <div className="card mb-3">
                    <div className="card-body">
                        <h4 className="card-title">{ nombre }</h4>
                        <p className="card-text">Tel: {telefono}</p>
                        <p className="card-text">Dir: {direccion}</p>
                        <p className="card-text">Email: {email }</p>    
                        <Link to={`/pedidos/nuevo/${_id}`} type="button" className="btn btn-primary m-1"><i class="fa fa-pencil" aria-hidden="true">Pedir</i></Link>
                        <Link to={`/empleados/editar/${_id}`} type="button" className="btn btn-primary m-1"><i class="fa fa-pencil" aria-hidden="true">Editar</i></Link>
                        <a type="button" className="btn btn-danger m-1" onClick={()=>eliminarEmpleado(_id)}><i class="fa fa-trash" aria-hidden="true">Borrar</i></a>
                    </div>
                    </div>
                    </div>

    </Fragment>
)
}
export default Empleado;