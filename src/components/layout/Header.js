import React from 'react'
import { Link } from 'react-router-dom';
const Header = () => {

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href='/'>Pedidos Web</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a href="/" className="nav-link">Pedidos</a>
          </li>
          <li className="nav-item">
          <a href="/insumos" className="nav-link" >Insumos</a>
          </li>
          <li className="nav-item">
          <a href="/empleados" className="nav-link" >Empleados</a>
          </li>
          <li className="nav-item">
          <a href="/locales" className="nav-link">Locales</a>
          </li>
      </ul>
    </div>
  </div>
</nav>
    )
}

export default Header;
