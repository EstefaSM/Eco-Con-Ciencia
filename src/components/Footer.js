import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import github from '../img/github.png'
import linkedin from '../img/linkedin.png'
import logo from '../img/logo.png'
import '../css/footer.css';


const Footer = () => {
    return (
        <div className='footer'>
            <a href="#"  target='blank' className="logo"><img src={logo}  className="logo" alt="iconoFacebook" /></a>
            <div className='contactUs'>
                <h3 className='text'>Contáctate con el equipo de trabajo</h3>
                <h6 className='text'>Juan Sebastián Zapata</h6>
                <div className="social-icon-footer">
                    <a href="https://www.linkedin.com/in/estefa-saldarriaga/"  target='blank' class="social-icon-footer"><img src={linkedin}   alt="iconoLinkedIn" /></a>
                    <a href="https://github.com/EstefaSM"  target='blank' ><img src={github}   alt="iconoLinkedIn" /></a>
                </div>
                <h6 className='text'>Estefanía Saldarriaga</h6>
                <div className="social-icon-footer">
                    <a href="https://www.linkedin.com/in/estefa-saldarriaga/"  target='blank' class="social-icon-footer"><img src={linkedin}   alt="iconoLinkedIn" /></a>
                    <a href="https://github.com/EstefaSM"  target='blank' ><img src={github}   alt="iconoLinkedIn" /></a>
                </div>
                <h6 className='text'>Manuel Pemberthy</h6>
                <div className="social-icon-footer">
                    <a href="https://www.linkedin.com/in/estefa-saldarriaga/"  target='blank' class="social-icon-footer"><img src={linkedin}   alt="iconoLinkedIn" /></a>
                    <a href="https://github.com/EstefaSM"  target='blank' ><img src={github}   alt="iconoLinkedIn" /></a>
                </div>
                <p className='text'>&copy; 2024 Eco Con Ciencia. Todos los derechos reservados.</p>              
        </div>
        </div>
        
    );
};

export default Footer;