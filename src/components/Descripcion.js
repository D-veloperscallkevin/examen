import React from "react";
import "../components/Descripcion.css"
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.min.js"

function Descripcion() {
    return (
        <div className="d-flex m-2">
            <div className="cajon d-flex flex-column mx-auto bg-secondary shadow-lg rounded">
                <div className="d-flex texto1 fluid">
                    <p className="text-center text-light fs-4 fw-bold p-4">Esta es una página que tiene como objetivo ver los valores de una página web y ver cuanto respeto se merece porque todos merecemos un lugar en el planeta tierra y no es justo que una página web no tenga el derecho de sentirse igual. Así como el desarrollador es amante de la naturaleza de la web, tenemos que comprender el sentimiento que tiene cada página web y ayudarlos a rehabilitarse lo más antes posible en un centro de engrasado.</p>
                </div>
                <div className="d-flex texto2 fluid">
                    <p className="text-center text-light fs-4 fw-bold p-5">Este es un tipo de página web que puede llegar a ser tipo empresarial esperese, delen unos 2 años para que vean como se pone a funcionar este proyecto tan bonito como es hacer cosas radiactivas con React, es un honor formar parte de la academía del TechGround ya que aprendí muchas herramientas del Front-End.</p>
                </div>
        
            </div>
        </div>

    );
  }
  
  export default Descripcion;
