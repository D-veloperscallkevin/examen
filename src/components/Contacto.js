import React from "react";
import "../components/Contactos.css"
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.min.js"

function Contacto() {
    return (
        <div className="caja d-flex bg-secondary rounded-3 container-form shadow-lg w-30 mx-auto w-50">

            <div className="usuario text-light mx-auto mt-5 mb-5 w-50">
                <form className="d-flex mx-auto flex-column" action="/add" method="post">
                    <div className="mb-3">
                        <label for="exampleInputEmail1" className="form-label">Email address</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                    </div>
                    <div className="mb-3">
                        <label for="exampleInputPassword1" className="form-label">Password</label>
                        <input type="password" className="form-control" id="exampleInputPassword1"/>
                    </div>
                    <div className="mb-3 form-check">
                        <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                        <label class="form-check-label" for="exampleCheck1">Check me out</label>
                    </div>
                    <button type="submit" className="m-3 btn btn-primary">Submit</button>
                </form>
            </div>
        </div>
    );
  }
  
  export default Contacto;