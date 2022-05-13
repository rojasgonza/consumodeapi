import React, { Fragment, useEffect, useState } from 'react'
import clienteAxios from '../../config/Axios';
import Local from './Local';


function Locales () {
   const [locales, guardarLocales] = useState([]);

   const consultarAPI = async () => {
       const localesConsulta = await clienteAxios.get('/locales');
       guardarLocales(localesConsulta.data);
   };
   useEffect(() =>{
       consultarAPI();
   }, [locales]);
   
   
   
   
   
   
   
   
   
    return(
        <Fragment>
            <h2>Locales</h2>
            <a href="/locales/nuevo" className='btn btn-success'>Nuevo Local</a>
          

                {locales.map(local => (
                    <Local local={local}
                            key={local._id}/>
                ))}

        
        </Fragment>
    )
}
export default Locales;