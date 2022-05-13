import './App.css'
import Header from './components/layout/Header';
import Pedidos from './components/pedidos/Pedidos';
import Insumos from './components/insumos/Insumos';
import Empleados from './components/empleados/Empleados';
import Locales from './components/locales/Locales';
import React, { Fragment} from 'react';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import NuevoEmpleado from './components/empleados/nuevoEmpleado';
import editarEmpleado from './components/empleados/editarEmpleado';
import EditarInsumo from './components/insumos/editarInsumo';
import nuevoInsumo from './components/insumos/nuevoInsumo';
import NuevoLocal from './components/locales/nuevoLocal';
import EditarLocal from './components/locales/editarLocal';
import NuevoPedido from './components/pedidos/nuevoPedido';

//routing
function App() {
  return (
    <Router>
    <Fragment>
    <Header />
    <div className="container">
      <Switch>
        <Route exact path='/' component={Pedidos}/>
        <Route exact path='/empleados' component={Empleados}/>
        <Route exact path='/locales' component={Locales}/>
        <Route exact path='/empleados/nuevo' component={NuevoEmpleado}/>
        <Route exact path='/empleados/editar/:id' component={editarEmpleado}/>
        <Route exact path='/insumos' component={Insumos}/>
        <Route exact path='/insumos/nuevo' component={nuevoInsumo}/>
        <Route exact path='/insumos/editar/:id' component={EditarInsumo}/>
        <Route exact path='/locales/nuevo' component={NuevoLocal} />
        <Route exact path='/locales/editar/:id' component={EditarLocal}/>
        <Route exact path='/pedidos/nuevo/:id' component={NuevoPedido}/>



      </Switch>
      
      </div>
    </Fragment>
    </Router>
  )
}

export default App;
