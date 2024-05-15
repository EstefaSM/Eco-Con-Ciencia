import React from 'react';
import '../css/main.css'

const Services = () => {
    return (         
        <div className='services'>
            <div className='container-fluid'>
                <div className="row justify-content-center">
                <div className="card mb-3" style={{ maxWidth: '26rem', margin: '0 10px', backgroundColor: '#E8DFCA'}}>
                    <div className="card-header bg-transparent border-dark text-center">Herramientas</div>
                    <div className="card-body text-dark">
                        <h5 className="card-title text-center">Sistemas de Información Geográfica (SIG)</h5>
                        <p className="card-text text-center">Plataformas SIG como ArcGIS o Google Earth Engine son herramientas para el análisis espacial de datos ambientales. Permiten la integración de datos geoespaciales, como imágenes satelitales, mapas topográficos y datos de uso del suelo, para realizar análisis detallados de deforestación, cambios en el uso del suelo y distribución de la biodiversidad.</p>
                    </div>
                </div>
                <div className="card mb-3" style={{ maxWidth: '26rem', margin: '0 10px', backgroundColor: '#E8DFCA' }}>
                    <div className="card-header bg-transparent border-dark text-center">Herramientas</div>
                    <div className="card-body text-dark">
                        <h5 className="card-title text-center">Modelos predictivos</h5>
                        <p className="card-text text-center">Utilizando datos históricos y variables ambientales relevantes, se pueden desarrollar modelos predictivos para estimar la calidad del aire, la calidad del agua y la distribución de la biodiversidad en el futuro. Herramientas como modelos de dispersión atmosférica, hidrológicos y de distribución de especies pueden usarse.</p>
                    </div>
                </div>
                <div className="card mb-3" style={{ maxWidth: '26rem', margin: '0 10px', backgroundColor: '#E8DFCA' }}>
                    <div className="card-header bg-transparent border-dark text-center">Herramientas</div>
                    <div className="card-body text-dark">
                        <h5 className="card-title text-center">Plataformas de visualización de datos</h5>
                        <p className="card-text text-center">Para presentar los resultados de los análisis de datos de manera accesible y comprensible, se pueden utilizar plataformas de visualización de datos como Tableau, Power BI o herramientas de desarrollo web para crear dashboards interactivos y mapas en línea que muestren los hallazgos clave y las tendencias ambientales.</p>
                    </div>
                </div>
                {/* <div className="card border-dark mb-3" style={{ maxWidth: '26rem' }}>
                    <div className="card-header bg-transparent border-dark text-center">Herramientas</div>
                    <div className="card-body text-dark">
                        <h5 className="card-title text-center">Estaciones de monitoreo ambiental</h5>
                        <p className="card-text text-center">Las estaciones de monitoreo distribuidas en todo el Valle de Aburrá recopilan datos en tiempo real sobre la calidad del aire, la calidad del agua y otros parámetros ambientales clave. Estos datos se pueden integrar en sistemas de información ambiental para generar informes periódicos sobre la calidad ambiental y las tendencias a lo largo del tiempo.</p>
                    </div>
                </div> */}
                <div className="card mb-3" style={{ maxWidth: '26rem', margin: '0 10px', backgroundColor: '#E8DFCA' }}>
                    <div className="card-header bg-transparent border-dark text-center">Informes</div>
                    <div className="card-body text-dark">
                        <h5 className="card-title text-center">Calidad del aire</h5>
                        <p className="card-text text-center">Análisis de los niveles de contaminantes atmosféricos como el dióxido de nitrógeno, el ozono y las partículas suspendidas. Incluye el análisis de tendencias a lo largo del tiempo, identificando áreas críticas con altos niveles de contaminación y proporcionando predicciones futuras sobre la calidad del aire basadas en datos meteorológicos y patrones de emisiones.</p>
                    </div>
                </div>
                <div className="card mb-3" style={{ maxWidth: '26rem', margin: '0 10px', backgroundColor: '#E8DFCA' }}>
                    <div className="card-header bg-transparent border-dark text-center">Informes</div>
                    <div className="card-body text-dark">
                        <h5 className="card-title text-center">Calidad del agua</h5>
                        <p className="card-text text-center">Evaluación de la calidad de los cuerpos de agua, incluyendo ríos, quebradas y fuentes de agua potable. Se analizan parámetros como la turbidez, el pH, los niveles de nutrientes y la presencia de contaminantes químicos. Además de las tendencias históricas, el informe podría incluir predicciones sobre la disponibilidad y la calidad del agua en función de cambios en el uso del suelo y actividades industriales.</p>
                    </div>
                </div>
                <div className="card mb-3" style={{ maxWidth: '26rem', margin: '0 10px', backgroundColor: '#E8DFCA' }}>
                    <div className="card-header bg-transparent border-dark text-center">Informes</div>
                    <div className="card-body text-dark">
                        <h5 className="card-title text-center">Deforestación y uso del suelo</h5>
                        <p className="card-text text-center">Análisis de cambios en la cobertura vegetal y el uso del suelo en el Valle de Aburrá. Utilizando imágenes satelitales y datos geoespaciales, se identifican áreas de deforestación, urbanización y cambio en la vegetación natural. Además de evaluar las tendencias actuales, el informe podría prever el impacto futuro de la expansión urbana y las actividades agrícolas en la biodiversidad.</p>
                    </div>
                </div>
                {/* <div className="card border-dark mb-3" style={{ maxWidth: '26rem' }}>
                    <div className="card-header bg-transparent border-dark text-center">Informes</div>
                    <div className="card-body text-dark">
                        <h5 className="card-title text-center">Biodiversidad</h5>
                        <p className="card-text text-center">Estudio de la diversidad biológica, incluyendo la distribución de especies de plantas, animales y microorganismos. Se identifican áreas de alta biodiversidad y hábitats críticos en riesgo de degradación. Descripción de las tendencias actuales en la pérdida de biodiversidad, predicciones sobre la viabilidad a largo plazo de las poblaciones en función de la fragmentación del hábitat y el cambio climático.</p>
                    </div>
                </div> */}

                </div>
            </div>
        </div>
    )
};

export default Services;