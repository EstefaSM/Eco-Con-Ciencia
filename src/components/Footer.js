import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import github from '../img/github.png'
import linkedin from '../img/linkedin.png'
import logo from '../img/logo.png'
import '../css/footer.css';


const Footer = () => {
    return (
        <div className='footer'>
            <div className='footerLogo'>
            <a href="#"  target='blank' className="logo"><img src={logo}  className="logo" alt="iconoFacebook" /></a>
            </div>
            <div className='contactUs'>
                <div className='title'><h4 className='text'>Contáctate con nuestro equipo de trabajo</h4></div>
                <div className='prueba'> 
                <div className='contactUsInfo'>
                <p className='text'>Sebastián Zapata</p>
                <div className="social-icon-footer">
                    <a href="https://www.linkedin.com/in/estefa-saldarriaga/"  target='blank' class="social-icon-footer"><img src={linkedin}   alt="iconoLinkedIn" /></a>
                    <a href="https://github.com/EstefaSM"  target='blank' ><img src={github}   alt="iconoLinkedIn" /></a>
                </div>
                </div>
                <div className='contactUsInfo'>
                <p className='text'>Estefanía Saldarriaga</p>
                <div className="social-icon-footer">
                    <a href="https://www.linkedin.com/in/estefa-saldarriaga/"  target='blank' class="social-icon-footer"><img src={linkedin}   alt="iconoLinkedIn" /></a>
                    <a href="https://github.com/EstefaSM"  target='blank' ><img src={github}   alt="iconoLinkedIn" /></a>
                </div>
                </div>
                <div className='contactUsInfo'>
                <p className='text'>Manuel Pemberthy</p>
                <div className="social-icon-footer">
                    <a href="https://www.linkedin.com/in/estefa-saldarriaga/"  target='blank' class="social-icon-footer"><img src={linkedin}   alt="iconoLinkedIn" /></a>
                    <a href="https://github.com/EstefaSM"  target='blank' ><img src={github}   alt="iconoLinkedIn" /></a>
                </div>
                </div>
                </div>
                <div className='rights'>
                <p className='text'>&copy; 2024 Eco Con Ciencia. Todos los derechos reservados.</p>        
                </div>      
        </div>
        </div>
        
    );
};

export default Footer;