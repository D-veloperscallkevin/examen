import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.min.js"
import Carousel from "./Carousel";
import Presenta from "./Presenta";

export const Inicio = () => {
    return (
        <div className="w-50 h-100 mx-auto m-4">
            <Carousel />
            <Presenta />
        </div>
    );
  }
  
  export default Inicio;