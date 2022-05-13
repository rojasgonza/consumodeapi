import React from 'react'

function FormBuscarInsumo(props){
    return(
        <form onSubmit={props.buscarInsumo}>
            <legend>Buscar insumo y agregar Cant</legend>
            <div>
            <label className='form-label'>Insumos</label>
            <input
                className='form-control'
                type='text'
                placeholder='Nombre Insumos'
                name='insumos'
                onChange={props.leerDatosBusqueda}/>
            </div>
            <input 
                type='submit'
                classname='btn btn-success'
                value='Buscar'/>
        </form>
    )
}
export default FormBuscarInsumo;