import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css'
import { Button } from 'react-bootstrap';

const Colores = ({ borrarColor }) => {
    const [inputColor, setInputColor] = useState('');
    const [guardarColor, setGuardarColor] = useState([]);

    const handleInputChange = (e) => {
        setInputColor(e.target.value);
    };

    const handleSaveColor = () => {
        setGuardarColor([...guardarColor, inputColor]);
        setInputColor('');
    };

    const handleColorDelete = (colorBorrar) => {
        let listaColoresFiltrados = guardarColor.filter((itemColor) => itemColor !== colorBorrar);
        setGuardarColor(listaColoresFiltrados);
    }

    return (
        <>
            <h1 className='text-center'>Paleta de colores</h1>
            <div style={{ backgroundColor: inputColor, width: '100px', height: '100px' }}></div>
            <section className='text-center'>
                <input type="text" value={inputColor} onChange={handleInputChange} />
                <button onClick={handleSaveColor}>Guardar color</button>
            </section>

            <h3 className='text-center'>Colores guardados:</h3>
            <div className='d-flex justify-content-between'>
                <ul className='text-center'>
                    {guardarColor.map((color, index) => (
                        <li key={index} style={{ backgroundColor: color }}>
                            {color}
                            <Button variant='danger' onClick={() => handleColorDelete(color)}>Borrar</Button>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
};

export default Colores;
