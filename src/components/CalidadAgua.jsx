//Se realizan pruebas constantes para controlar y verificar que el agua cumpla con los estándares de calidad establecidos por la Organización Mundial de la Salud (OMS). Estos controles incluyen la evaluación de parámetros físicos, químicos y microbiológicos.

//El agua se obtiene principalmente del río Aburrá-Medellín y de otras fuentes superficiales. Pasa por un proceso riguroso de filtración, decantación y desinfección antes de ser distribuida a los hogares de la ciudad.

import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import axios from 'axios';
import calidadAgua from '../img/calidadAgua_grafica.png'

const CalidadAgua = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('/data/calidadAgua.json');
                setData(response.data);
            } catch (error) {
                console.error('Error al cargar los datos:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div className='container-fluid'>
            <div className="row agua" >
            <h1>Calidad del agua Valle del Aburrá 2018</h1>        
                <div className='col-md-6'> 
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>Municipio</th>
                                <th>IRCA</th>
                                <th>Nivel de riesgo</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((row, index) => (
                                <tr key={index}>
                                    <td>{row['Municipio']}</td>
                                    <td>{row['IRCA']}</td>
                                    <td>{row['Nivel de riesgo']}</td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>                
                </div>
                <div className='col-md-6'>
                <img src={calidadAgua} className="card-img-top"  alt="Gráfica" />
                </div>
            </div>    
        </div>
    );
};

export default CalidadAgua;