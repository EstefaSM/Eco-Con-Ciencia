import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import avatarOne from '../img/avatarOne.jpg';
import estefa from '../img/FotoEstefa.jpg';
import sebas from '../img/FotoSebas.jpg';
import Footer from '../components/Footer';
import '../css/aboutus.css'
import linkedin from '../img/linkedin.png'
import github from '../img/github.png'



const AboutUs = () => {
  return (
    <div className='aboutUs'>
         <div class="container-fluid">
            <div className='row'>
               <h1>Equipo de trabajo</h1>
               <div className='col-md-3 team' >
                  <img src={sebas} className="card-img-top"  alt="Sebas" />
                  <h3>Juan Sebastián Zapata</h3>
                  <p>Sebas, a cargo de la recopilación y estructuración de la información en nuestra web:"Es nuestro experto en la gestión de datos"Sebastián es pieza fundamental en el desarrollo de nuestra nueva página web, siendo el responsable de la recopilación, organización y estructuración de toda la información que se presenta en la plataforma.</p>
                  <div className="social-icon">
                  <a href="#"  target='blank' class="social-icon"><img src={linkedin}   alt="iconoLinkedIn" /></a>
                  <a href="#"  target='blank' class="social-icon"><img src={github} className="social-icon"  alt="iconoLinkedIn" /></a>
                  </div>
               </div>
               <div className='col-md-3 team'>
                  <img src={estefa} className="card-img-top"  alt="Sebas" />
                  <h3>Estefanía Saldarriaga</h3>
                  <p>Estefa, ¡apasionada estudiante de desarrollo de software! Estoy dedicada a crear soluciones innovadoras y tengo conocimiento en varios lenguajes de programación. Actualmente, estoy adquiriendo conocimiento en Cesde. Estoy ansiosa por contribuir a proyectos de impacto y colaborar con profesionales afines. Abierta a nuevas oportunidades y desafíos en la industria tecnológica.</p>
                  <div className="social-icon">
                  <a href="https://www.linkedin.com/in/estefa-saldarriaga/"  target='blank' class="social-icon"><img src={linkedin}   alt="iconoLinkedIn" /></a>
                  <a href="https://github.com/EstefaSM"  target='blank' ><img src={github}   alt="iconoLinkedIn" /></a>
                  </div>
               </div>
               <div className='col-md-3 team'>
                  <img src={avatarOne} className="card-img-top"  alt="Sebas" />
                  <h3>Manuel Pemberthy</h3>
                  <p>Manuel, quien apoya el área de backend y la estructuración de la información en nuestra web: Es un miembro clave de nuestro equipo de desarrollo web, aportando su amplia experiencia en la gestión del backend y la estructuración de la información que se presenta en nuestra plataforma. Después de obtener su título en Ingeniería de Sistemas en la Universidad Autónoma, Manuel ha acumulado una sólida trayectoria trabajando en diversas empresas tecnológicas, donde ha demostrado su dominio en el diseño y mantenimiento de soluciones backend robustas y eficientes. </p>
                  <div className="social-icon">
                  <a href="#"  target='blank' class="social-icon"><img src={linkedin}   alt="iconoLinkedIn" /></a>
                  <a href="#"  target='blank' class="social-icon"><img src={github} className="social-icon"  alt="iconoLinkedIn" /></a>
                  </div>
               </div>
            </div>
         </div>
         <Footer/>
    </div>
    

  );
};

export default AboutUs;