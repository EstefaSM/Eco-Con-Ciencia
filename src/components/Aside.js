import React from 'react';
import '../css/aside.css';

const Aside = () => {
    return (
        <div className="blog">
            <div className="container-fluid">
                <div className="row">
                    <h3>Blog</h3>
                    <hr/>
                    <div className="col-md-12 mt-1">
                        <div className="card-body">
                            <h6 className="card-title">¿Has escuchado hablar de Urban pixel y Newton?</h6>
                            <p className="card-text" ><small>Urban Pixel predice cómo crecerá la ciudad y la población, mientras que Newton calcula cuánta agua potable se requerirá. Son algoritmos para mejorar la planeación urbana y anticipar la demanda de agua.
                                <a href='https://www.eltiempo.com/colombia/medellin/innovacion-paisa-permite-predecir-el-crecimiento-urbano-de-las-ciudades-593757'>   Ver más...</a></small></p>
                            </div>
                        </div>  
                    <hr/>
                    <div className="col-md-12 mt-1">
                        <div className="card-body">
                            <h6 className="card-title">Conoce informes y estadísticas del medio ambiente de nuestra ciudad</h6>
                            <p className="card-text" ><small>En esta página de creada con el apoyo de grandes organizaciones de nuestra ciudad y el país, se recopila data de diferentes aspectos de nuestra bella ciudad entre sus temas de importancia tienen un área enfocada en reportes de nuestro medio ambiente.
                                <a href='https://www.medellincomovamos.org/sectores/medio-ambiente'>   Ver más...</a></small></p>
                            </div>
                        </div>  
                    <hr/>
                    <div className="col-md-12 mt-1">
                        <div className="card-body">
                            <h6 className="card-title">El SIGAM (Sistema de Gestión Ambiental Municipal) tiene información valiosa para tí</h6>
                            <p className="card-text" ><small>Como propuesta organizacional, el Sigam identifica los elementos y componentes de la organización municipal y de la gestión pública, y los ordena bajo una mirada sistémica, precisamente para lograr el adecuado funcionamiento del sistema municipal
                                <a href='https://www.medellin.gov.co/es/secretaria-medio-ambiente/sistema-de-gestion-ambiental-de-medellin/'>   Ver más...</a></small></p>
                            </div>
                        </div>  
                </div>
            </div>
        </div>      
    );
};

export default Aside;