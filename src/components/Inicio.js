import React, { useState } from "react";
import { useNavigate } from "react-router-dom"


const Inicio = () => {
    const navigate = useNavigate();

    const handleCargar = () => {
        navigate('/aves-Guatemala');
    }
    
    return (
        <div style={{ textAlign: "center", marginTop: "50px" }}>
            <h1>Inicio</h1>
            <p>Nombre:Erick Fernando Ortiz Perez</p>
            <p>Carnet: 23003920</p>
            <button onClick={handleCargar}>Cargar</button>
        </div>
    );
};

export default Inicio;