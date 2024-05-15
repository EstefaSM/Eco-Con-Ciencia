import React from 'react';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import facebook from "../img/facebook.svg"
import twitter from "../img/twitter-x.svg"
import instagram from "../img/instagram.svg"
import linked from "../img/linkedin.svg"
import '../css/footer.css';


const Footer = () => {
    return (
        <div class="footer">
            
            <div class="social-icons">
                <img src={facebook} className="social-icon"  alt="iconofacebook" />
                <a href="#" class="social-icon"> <i class="facebook"></i></a>
                <img src={twitter} className="social-icon"  alt="iconotwitter"/>
                <a href="#" class="social-icon"> <i class="twitter"></i></a>
                <img src={instagram} className="social-icon"  alt="iconoinstagram"/>
                <a href="#" class="social-icon"> </a>                
                <a href="#" class="social-icon"></a><img src={linked} className="social-icon"  alt="iconolinked"/>
            </div>
        <div class="contactofooter"><p><a href="#" class="social-icon">¡Contáctanos!</a></p></div>  
        <div class="terminosofooter"><p><a href="#" class="social-icon">Términos y condiciones.</a></p></div>
        <p>&copy; 2024 EcoConciencia. Todos los derechos reservados.</p>   
        </div>
    );
};

export default Footer;