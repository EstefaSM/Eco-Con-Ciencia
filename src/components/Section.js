import 'react-responsive-carousel/lib/styles/carousel.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import React from 'react';
import '../css/section.css';

const Data = () => {
    return (         
        <div className='data'>
            <div className='container-fluid'>
                <div className="row justify-content-center">
                <div className="card mb-3" style={{ maxWidth: '20rem', margin: '0 10px', backgroundColor: '#E8DFCA'}}>
                    <div className="card-header bg-transparent border-dark text-center"><strong>Importancia de los datos</strong></div>
                    <div className="card-body text-dark">
                        <p className="card-text text-center"><small>Los datos son importantes porque aumentan la conciencia pública sobre cuestiones ambientales, respaldan la toma de decisiones informada y permiten el monitoreo y la detección temprana de problemas ambientales.</small> </p>
                    </div>
                </div>
                <div className="card mb-3" style={{ maxWidth: '20rem', margin: '0 10px', backgroundColor: '#E8DFCA' }}>
                <div className="card-header bg-transparent border-dark text-center"><strong>Actualización de los datos</strong></div>
                    <div className="card-body text-dark">
                        <p className="card-text text-center"><small>La frecuencia de actualización de los datos en un sitio web ambiental puede variar dependiendo del tipo de información y su relevancia para los usuarios. En general, se recomienda actualizar los datos regularmente para reflejar con precisión cualquier cambio en las condiciones ambientales.</small> </p>
                    </div>
                </div>
                <div className="card mb-3" style={{ maxWidth: '20rem', margin: '0 10px', backgroundColor: '#E8DFCA' }}>
                <div className="card-header bg-transparent border-dark text-center"><strong>Origen de los datos</strong></div>
                    <div className="card-body text-dark">
                        <p className="card-text text-center"><small>Obtenemos nuestros datos de sitios geolocalizados, utilizando una variedad de fuentes confiables como agencias gubernamentales, instituciones de investigación y organizaciones ambientales. Nos aseguramos de recopilar datos de calidad utilizando metodologías estandarizadas y equipos calibrados.</small></p>
                    </div>
                </div>
                <div className="card mb-3" style={{ maxWidth: '20rem', margin: '0 10px', backgroundColor: '#E8DFCA' }}>
                <div className="card-header bg-transparent border-dark text-center"><strong>Uso de los datos</strong></div>
                    <div className="card-body text-dark">
                        <p className="card-text text-center"><small>Utilizamos técnicas estadísticas y herramientas de análisis avanzadas para procesar los datos y detectar tendencias, patrones y anomalías significativas. Nuestro equipo de expertos en análisis ambiental interpreta los resultados obtenidos, contextualizando la información dentro del marco científico y ambiental correspondiente</small></p>
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
};

export default Data;