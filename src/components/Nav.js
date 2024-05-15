import React from 'react';
import { Link } from 'react-router-dom';
import '../css/navStyle.css';
import logo from '../img/logo.png';

const Nav = ({ routes }) => {
  return (
      <nav className="navbar navbar-expand-lg navbar-dark fixed-top">
          <div className="container">
              <Link className="navbar-brand" to="/"><img src={logo}/></Link>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                  <ul className="navbar-nav">
                      {routes.map(route => (
                          <li className="nav-item" key={route}>
                              <Link className="nav-link" to={route}>
                                  {route === '/' ? 'Inicio' : route === '/dashboard' ? 'Información' : route === '/about' ? 'Sobre Nosotros' : ''}
                              </Link>
                          </li>
                      ))}
                  </ul>
              </div>
          </div>
          <hr/>
      </nav>
  );
};


export default Nav;



