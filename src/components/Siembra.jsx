import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import axios from 'axios';
import siembra from '../img/siembra_plot.png'

const Siembra = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('/data/siembra.json');
                setData(response.data);
            } catch (error) {
                console.error('Error al cargar los datos:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div className='container-fluid'>
            <div className="row" >
                <div className='col-md-6'>
                    <h1>Tabla de Siembra de Árboles</h1>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>Municipio Siembra</th>
                                <th>Árboles Sembrados</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((row, index) => (
                                <tr key={index}>
                                    <td>{row['Ciudad']}</td>
                                    <td>{row['Arboles']}</td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </div>
                <div className='col-md-6'>
                <img src={siembra} className="card-img-top"  alt="Foto del testimonio" />
                </div>
            </div>
        </div>
    );
};

export default Siembra;
