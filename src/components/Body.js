import React, { useEffect } from 'react';
import "./styles/Normalize.css";
import './styles/Navbar.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Aos from "aos";
import "aos/dist/aos.css";

import php from './images/php.svg';
import piton from './images/piton.svg';
import js from './images/js.svg';
import java from './images/java.svg';
import cmasmas from './images/cmasmas.svg';
import css from './images/css.svg';
import go from './images/go.svg';
import html from './images/html.svg';
import sql from './images/sql.svg';
import c from './images/c.svg';


import docker from './images/docker.svg';
import react from './images/react.svg';
import github from './images/github.svg';
import mysql from './images/mysql.svg';
import sass from './images/sass.svg';
import node from './images/node.svg';
import json from './images/json.svg';
import vue from './images/vue.svg';
import bootstrap from './images/bootstrap.svg';
import postman from './images/postman.svg';
import django from './images/django.svg';
import xampp from './images/xampp.svg';
import office from './images/office.svg';
import photoshop from './images/photoshop.svg';
import ilustrator from './images/ilustrator.svg';

import wh from './images/wh.svg';
import email from './images/email.svg';

const Body = () => {
    useEffect(() => {
        Aos.init({ duration: 3000 });
    }, []);
    return (
        <div className="container" id="sobreMi">

            <div className="container text-black p-5 centrar-texto">
                <h2 className="pt-5">Sobre Mi</h2>
                <div class="row p-4 align-items-center ">
                    <h3>Quien soy</h3>
                    <p>
                    Soy estudiante de la carrera de Ingeniería en Computación en la 
                    Facultad de Estudios Superiores Aragón de la Universidad Nacional Autónoma de México,
                    me desarrollo como programador en distintos lenguajes como lo son Java, Python, 
                    PHP, JavaScript, C, C++ entre otros, además de saber manejar distintas Tecnologías
                    como los son bases de datos, redes de computadoras, cuestiones de electrónica, matemáticas, algebra, 
                    física y experiencia en mantenimiento y reparación de equipos de cómputo. 
                    Además, estoy en constante aprendizaje autodidacta para aprender nuevas tecnologías y 
                    mejorar mis conocimientos.
                    </p>
                    <hr />
                </div>

                {/* 
                <div className="separador">
                    <img src={bg2} alt="" />
                </div> */}

                <div className="container row align-items-center borde-5 ">
                    <h3 >Habilidades</h3>
                    <div className=" p-5">
                    <h3 className="">Lenguajes</h3>
                        <div data-aos="fade-left" className="row p-5 align-items-center borde-5">
                            
                            <div className="container p-4 mb-5 iconos">
                                <div>
                                    <img className="w-100 mb-4 rounded" src={php} alt="" />
                                    <div>
                                        <p>PHP</p>
                                    </div>
                                </div>

                                <div>
                                    <img className="w-100 mb-4 rounded" src={piton} alt="" />
                                    <div>
                                        <p>PYTHON</p>
                                    </div>
                                </div>

                                <div>
                                    <img className="w-100 mb-4 rounded" src={js} alt="" />
                                    <div>
                                        <p>JAVA SCRIPT</p>
                                    </div>
                                </div>

                                <div>
                                    <img className="w-100 mb-4 rounded" src={java} alt="" />
                                    <div>
                                        <p>JAVA</p>
                                    </div>
                                </div>

                                <div>
                                    <img className="w-100 mb-4 rounded" src={cmasmas} alt="" />
                                    <div>
                                        <p>C++</p>
                                    </div>
                                </div>

                                <div>
                                    <img className="w-100 mb-4 rounded" src={html} alt="" />
                                    <div>
                                        <p>HTML</p>
                                    </div>
                                </div>

                                <div>
                                    <img className="w-100 mb-4 rounded" src={css} alt="" />
                                    <div>
                                        <p>CSS</p>
                                    </div>
                                </div>

                                <div>
                                    <img className="w-100 mb-4 rounded" src={go} alt="" />
                                    <div>
                                        <p>GO</p>
                                    </div>
                                </div>

                                <div>
                                    <img className="w-100 mb-4 rounded" src={sql} alt="" />
                                    <div>
                                        <p>SQL</p>
                                    </div>
                                </div>

                                <div>
                                    <img className="w-100 mb-4 rounded" src={c} alt="" />
                                    <div>
                                        <p>C</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <hr />

                        <h3 className="pt-5">Tecnologías</h3>
                        <div data-aos="fade-right" className="row p-5 align-items-center">
                            <div className="container p-4 mb-5 iconos">
                                <div>
                                    <img className="w-100 mb-4 rounded" src={docker} alt="" />
                                    <div>
                                        <p>DOCKER</p>
                                    </div>
                                </div>

                                <div>
                                    <img className="w-100 mb-4 rounded" src={react} alt="" />
                                    <div>
                                        <p>REACT</p>
                                    </div>
                                </div>

                                <div>
                                    <img className="w-100 mb-4 rounded" src={github} alt="" />
                                    <div>
                                        <p>GIT HUB</p>
                                    </div>
                                </div>

                                <div>
                                    <img className="w-100 mb-4 rounded" src={mysql} alt="" />
                                    <div>
                                        <p>MYSQL</p>
                                    </div>
                                </div>

                                <div>
                                    <img className="w-100 mb-4 rounded" src={sass} alt="" />
                                    <div>
                                        <p>SASS</p>
                                    </div>
                                </div>

                                <div>
                                    <img className="w-100 mb-4 rounded" src={node} alt="" />
                                    <div>
                                        <p>NODE JS</p>
                                    </div>
                                </div>

                                <div>
                                    <img className="w-100 mb-4 rounded" src={json} alt="" />
                                    <div>
                                        <p>JSON</p>
                                    </div>
                                </div>

                                <div>
                                    <img className="w-100 mb-4 rounded" src={vue} alt="" />
                                    <div>
                                        <p>VUE</p>
                                    </div>
                                </div>

                                <div>
                                    <img className="w-100 mb-4 rounded" src={bootstrap} alt="" />
                                    <div>
                                        <p>BOOTSTRAP</p>
                                    </div>
                                </div>

                                <div>
                                    <img className="w-100 mb-4 rounded" src={postman} alt="" />
                                    <div>
                                        <p>POSTMAN</p>
                                    </div>
                                </div>

                                <div>
                                    <img className="w-100 mb-4 rounded" src={photoshop} alt="" />
                                    <div>
                                        <p>PHOTOSHOP</p>
                                    </div>
                                </div>

                                <div>
                                    <img className="w-100 mb-4 rounded" src={ilustrator} alt="" />
                                    <div>
                                        <p>ILUSTRATOR</p>
                                    </div>
                                </div>

                                <div>
                                    <img className="w-100 mb-4 rounded" src={django} alt="" />
                                    <div>
                                        <p>DJANGO</p>
                                    </div>
                                </div>

                                <div>
                                    <img className="w-100 mb-4 rounded" src={xampp} alt="" />
                                    <div>
                                        <p>XAMPP</p>
                                    </div>
                                </div>

                                <div>
                                    <img className="w-100 mb-4 rounded" src={office} alt="" />
                                    <div>
                                        <p>PAQUETERIA OFFICE</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <hr />
                    </div>
                </div>
            </div>

            <div className="container " id="contacto">
                <h2 className="centrar">Contacto</h2>
                <div data-aos="zoom-in" className="text-black p-5 iconos-contacto ">
                    <div>
                        <a href="mailto:carloscorona32@aragon.unam.mx?">
                            <img src={email} alt="" />
                        </a>
                        <p className="centrar">Correo Electrónico</p>
                    </div>
                    <div>
                        <a href="https://api.whatsapp.com/send?phone=+525566222979&text=Hola%20Carlos">
                            <img src={wh} alt="" />
                        </a>
                        <p className="centrar">WhatsApp</p>
                    </div>
                </div>
                <hr />
            </div>
            <h5 className="centrar text-white">Esta página está hecha con React y Bootstrap</h5>
        </div>
    )
}

export default Body;