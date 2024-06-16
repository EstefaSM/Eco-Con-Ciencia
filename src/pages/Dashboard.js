import React from 'react';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/dashboard.css'
import CalidadAire from '../components/CalidadAire';
import Siembra from '../components/Siembra.jsx'


const Dashboard = () => {
  return (
    <div className="App">
      <h1>Calidad del Aire</h1>
      <h1>Calidad del Aire</h1>
      {/* <CalidadAire /> */}
      <Siembra />
    </div>
  );
};

export default Dashboard;
