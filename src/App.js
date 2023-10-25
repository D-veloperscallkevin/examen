import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Inicio } from "./components/Inicio" 
import Navbar from "./components/Navbar";
import Descripcion  from "./components/Descripcion";
import Contacto from "./components/Contacto";
import Disculpas from "./components/Disculpas";
import Footer from "./components/Footer";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
          <Routes>
            <Route path="/" element={<Inicio/>}/>
            <Route path="/descripcion" element={<Descripcion/>}/>
            <Route path="/contacto" element={<Contacto/>}/>
            <Route path="/disculpas" element={<Disculpas/>}/>
          </Routes>
      </BrowserRouter>
      <Footer/>
    </div>
  );
}

export default App;
