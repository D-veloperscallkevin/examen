import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.min.js"

function Footer() {
    return (
        <div className="container d-flex-column">
            <footer className="d-flex justify-content-between align-items-center py-3 my-4 border-top">
                <div className="col-md-4 d-flex align-items-center">
                    <h1 className="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1">
                        <h1>Ucreativa</h1>
                    </h1>
                    <span className="text-muted fs-6">2023 University, CR</span>
                </div>
                <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
                    <li className="ms-3">
                        <h2 className="text-muted">TechGround</h2>
                    </li>
                    <li className="ms-3">
                        <h2 className="text-muted">Kevin Aguilar</h2>
                    </li>
                </ul>
            </footer>
        </div>
    );
  }
  
  export default Footer;
