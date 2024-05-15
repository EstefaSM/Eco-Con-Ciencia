import React from 'react';
import Nav from './Nav';
import '../css/navStyle.css'

const Layout = ({ children }) => {
  return (
    <div>
      <Nav routes={[ '/', '/dashboard', '/about' ]} />
      <div className="container">
        {children}
      </div>
    </div>
  );
};

export default Layout;
