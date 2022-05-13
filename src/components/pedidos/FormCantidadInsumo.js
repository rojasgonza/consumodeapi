import React from 'react'

function FormCantidadInsumo(props) {
    const {insumo, eliminarInsumoPedido} = props;
    return(
        <tr>
        <td scope="row"> {insumo.nombre}  </td>
        <td> {insumo.medida}  </td>
        <td> 
            <input type='number' name='cantidad'/>
        </td>
        <td><a href='#' 
        className='btn btn-danger'
        onClick={() => eliminarInsumoPedido(insumo._id)}
        >Borrar</a></td>

        </tr>
    )
}
export default FormCantidadInsumo;