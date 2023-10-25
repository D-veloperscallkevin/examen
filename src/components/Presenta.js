import React from "react";
import "../components/Presenta.css"
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.min.js"

export const Presenta = () => {

    const fraseFeliz = (e) =>{
        console.log("Estoy Feliz");
        if(e){
            
        }

    }

    const fraseTriste = (e) => {
        console.log('Estoy triste');
    }

    return (
        <div class="container d-flex-column m-auto ">
            <h1 className="d-flex fs-3">Como te sientes el día de hoy?</h1>
            <button class="btn d-flex m-2 btn-primary btn-lg" onClick={fraseFeliz}>Estoy feliz</button>
            <button class="btn d-flex m-2 btn-primary btn-lg" className="btn boton" onClick={(e) =>{fraseTriste(e)}}>Estoy triste</button>
        </div>
    );

    }

  
export default Presenta;