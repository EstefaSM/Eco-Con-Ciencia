// src/components/CalidadAire.jsx
import React from 'react';

const CalidadAire = () => {
  return (
    <div className="iframe-container">
      <iframe 
        src="./tables/CalidadAire.html" 
        className="w-100" 
        height="400"
        title="Calidad del Aire"
      ></iframe>
    </div>
  );
}

export default CalidadAire;
