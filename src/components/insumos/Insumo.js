import { Fragment } from "react";
import React from 'react'
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import clienteAxios from "../../config/Axios";
function Insumo({insumo}) {

    const eliminarInsumo = idInsumo => {
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
                clienteAxios.delete(`/insumos/${idInsumo}`)
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
   const {_id, nombre, medida} = insumo;   
    return(
    <Fragment>
        <tr>
      <td scope="row"> {nombre} </td>
      <td> {medida} </td>
 

      <td>
      <Link to={`/insumos/editar/${_id}`} type="button" className="btn btn-primary"><i class="fa fa-pencil" aria-hidden="true">EDITAR</i></Link>
      <a type="button" className="btn btn-danger" onClick={()=>eliminarInsumo(_id)}><i class="fa fa-trash" aria-hidden="true">BORRAR</i></a>

      </td>
      </tr>
      </Fragment>

    )
}
export default Insumo;