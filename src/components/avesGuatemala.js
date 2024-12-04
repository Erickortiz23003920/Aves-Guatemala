import React, {useEffect, useState} from "react";
import axios from "axios";

const AvesGuatemala = () => {
    const [aves, setAves] = useState([]);

    useEffect(() => {
        axios.get('https://xeno-canto.org/api/2/recordings?query=cnt:guatemala')
            .then(response => {
                console.log(response.data.recordings);
                setAves(response.data.recordings)
            })
            .catch(error => {
                console.error("error al obtener los datos", error);
            });
    }, []);

    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <h1>Aves de Guatemala</h1>
            {aves.map((ave, index) => (
                <div key={index} style={{ marginBottom: '20px' }}>
                    <h2>{ave.en}</h2>
                    <p><strong>Familia:</strong> {ave.family ? ave.family : "No disponible"}</p>
                    <p><strong>Ubicacion:</strong>{ave.loc}</p>
                    <p><strong>Descubridor:</strong>{ave.rec}</p>
                </div>
            ))}


        </div>
    );
};

export default AvesGuatemala;