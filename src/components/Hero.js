import React, { useEffect } from 'react';
import "./styles/Normalize.css";
import "bootstrap/dist/css/bootstrap.min.css";
import perfil from './images/perfil.svg';
import Aos from "aos";
import "aos/dist/aos.css";

const Hero=()=>{
    useEffect( ()=>{
        Aos.init({duration: 1500});
    }, []);
    return(
        <div className="pt-5" id="inicio">
            <div class="container-fluid container-md" >
                <div className="row p-5 align-items-center borde-5">
                    <div className="col mx-5">
                        <h1 data-aos="fade-right" className="centrar">Bienvenidos</h1>
                        <hr />
                    <p data-aos="fade-right" className="centrar">Mi nombre es Carlos y esta es mi página de presentación como desarrollador de software :)</p>
                    </div>
                    <div className="col ms-5">
                        <img data-aos="fade-left" className="icono-perfil profile-img d-block my-auto icon justify-content-around" src={perfil} alt="" />
                    </div>
                </div>
                <hr />
            </div>
        </div>
    )
    }

export default Hero;