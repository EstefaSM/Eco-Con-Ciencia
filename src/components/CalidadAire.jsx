import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import axios from 'axios';

const CalidadAire = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        // Leer el archivo JSON
        axios.get('/data/calidadAire.json')
            .then(response => {
                setData(response.data);
            })
            .catch(error => {
                console.error('Error al cargar los datos:', error);
            });
    }, []);
    // Función para calcular el índice de calidad
        const calcularIndiceCalidad = (concentracion) => {
        if (concentracion < 50) {
        return 'Bueno';
        } else if (concentracion >= 50 && concentracion < 100) {
        return 'Moderado';
        } else if (concentracion >= 100 && concentracion < 150) {
        return 'Insalubre para grupos sensibles';
        } else if (concentracion >= 150 && concentracion < 200) {
        return 'Insalubre';
        } else if (concentracion >= 200 && concentracion < 300) {
        return 'Muy insalubre';
        } else {
        return 'Peligroso';
        }
        };

    return (
        <div className="container mt-5" style={{ maxHeight: '400px', overflowY: 'auto' }}>
            <h1>Calidad del Aire</h1>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Fecha</th>
                        <th>Municipio</th>
                        <th>Concentración</th>
                        <th>Índice calidad</th>
                        {/* Añadir otras columnas según tu data */}
                    </tr>
                </thead>
                <tbody>
                    {data.map((row, index) => (
                        <tr key={index}>
                            <td>{row.fecha}</td>
                            <td>{row.nombre_del_municipio}</td>
                            <td>{row.concentraci_n}</td>
                            <td>{calcularIndiceCalidad(row.concentraci_n)}</td>
                            {/* Añadir otras columnas según tu data */}
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    );
};


export default CalidadAire;
