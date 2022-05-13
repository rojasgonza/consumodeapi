import React, {useEffect, useState, Fragment} from 'react'
import clienteAxios from '../../config/Axios';
import Empleado from './Empleado';
import { Link } from 'react-router-dom';
function Empleados(){
    const [empleados, guardarEmpleados] = useState([]);
    
        //QUERY A LA API
    const consultarAPI= async ()=>{
    const empleadosConsulta = await clienteAxios.get('/empleados');
    //colocar respuesta
    guardarEmpleados(empleadosConsulta.data);
    };

    ///didmount willmount
    useEffect( () => {
    consultarAPI();
    },[empleados]);
 
    return(
        <Fragment>
            
            <h1>Empleados</h1>
            <a href="/empleados/nuevo" className="btn btn-danger">Nuevo</a>
           <div className="row mt-2">

            
                    {empleados.map(empleado =>(
                        <Empleado empleado={empleado}
                                    key={empleado._id}/>
    ))}
       </div>

        </Fragment>
    )
}
export default Empleados;