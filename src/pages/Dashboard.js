import React from 'react';
// import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/dashboard.css'
import CalidadAire from '../components/CalidadAire';
import Siembra from '../components/Siembra.jsx'
import CalidadAgua from '../components/CalidadAgua.jsx'
import Footer from '../components/Footer.js'


const Dashboard = () => {
  return (
    <div className="App">
      {/* <CalidadAire /> */}
      <Siembra />
      <CalidadAgua/>
      <Footer/>
    </div>
  );
};

export default Dashboard;
