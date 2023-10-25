import React from "react";
import { Link } from "react-router-dom";
import "../components/Disculpas.css"
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.min.js"

function Disculpas() {
    return (
        <div className="contenedor d-flex m-2">
            <div className="cajon d-flex flex-column mx-auto bg-primary shadow-lg rounded">
                <div className="d-flex texto1 fluid">
                    <p className="text-center text-light fs-4 fw-bold p-5">Como parte del equipo de desarrolladores queremos ofrecer una disculpa a nuestros nuevos clientes ya que la página no se va aperturar aún por lo que tendrán que estár espectantes a cualquier actualización.</p>

                    <p className="text-center text-light fs-4 fw-bold p-5">Estamos orgullosos de la cantidad de personas que están formando la comunidad de los desarrolladores web junior, se estima que la empresa siga creciendo para mejores relaciones sociales, es un deber de todos cooperar con la salud mental.</p>
                </div>
                <div className="d-flex card">
                    <div className="d-flex-column mx-auto text-center card-body">
                        <h5 className="card-title">Nota de la empresa</h5>
                        <p className="card-text">Si deseas saber más sobre la empresa puedes clickear en el botón que aparece abajo.</p>
                        <Link type="button" className="nav-link btn btn-primary" to='/Descripcion'>Ver más Información</Link>
                    </div>
                </div>
            </div>
        </div>
    );
  }
  
  export default Disculpas;