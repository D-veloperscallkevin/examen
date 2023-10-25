import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.min.js"
import { Link } from "react-router-dom";


function Navbar() {
  return (
<nav className="navbar bg-primary" data-bs-theme="dark">
    <div className="container-fluid">
        <Link className="navbar-brand" to='/'>MENTAL COMPANY</Link>
        <button className="navbar-toggler bg-warning" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav mx-auto">
                <li className="nav-item">
                    <Link className="nav-link active" aria-current="page" to='/Descripcion'>Descripcion</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to='/Contacto'>Contacto</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to='Disculpas'>Disculpas</Link>
                </li>
            </ul>
        </div>
    </div>
</nav>
  );
}

export default Navbar;
