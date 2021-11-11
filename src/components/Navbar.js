// import React, { useEffect } from 'react';
// import "./styles/Normalize.css";
// import "./styles/Navbar.css";
// import "bootstrap/dist/css/bootstrap.min.css"
// import Aos from "aos";
// import "aos/dist/aos.css";
import React, { useEffect } from 'react';
import Aos from 'aos';
import "aos/dist/aos.css";
import "./styles/Normalize.css";
import './styles/Navbar.css'; 

const Navbar=()=>{
    useEffect( ()=>{
        Aos.init({duration: 50});
    }, []);
    return(
        // <header data-aos="slide-down" className="fijo" id="nav">
        <header data-aos="slide-down" id="nav">
            <nav class="navbar navbar-expand-lg navbar-dark bg-black">
                <div class="container container-md">
                    <a class="navbar-brand" href="#inicio"><h1>Carlos Corona </h1></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
                    <ul class="navbar-nav centrar-nav">
                        <li class="nav-item">
                        <a class="nav-link text-white" aria-current="page" href="#inicio"><h4>Inicio</h4></a>
                        </li>
                        <li class="nav-item">
                        <a class="nav-link text-white" href="#sobreMi"><h4>Sobre Mi</h4></a>
                        </li>
                        <li class="nav-item">
                        <a class="nav-link text-white" href="#contacto"><h4>Contacto</h4></a>
                        </li>
                    </ul>
                    </div>
                </div>
            </nav>
        </header>
        
    )
}
      
export default Navbar;