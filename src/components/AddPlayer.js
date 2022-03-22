import axios from 'axios';
import React, { useState } from 'react'
import { useHistory } from 'react-router-dom';

const AddPlayer = () => {

    const [name, setName] = useState("");
    const [position, setPosition] = useState("");
    const history = useHistory();
    
    function submitForm(e){
        e.preventDefault();
        if(name === ""){
            return;
        }
        axios.post("http://localhost:8000/api/equipos/new", {
            name,
            position
        }).then(resp => {
            history.push("/players/list");
        }).catch( err => console.log(err)) 
    }

    return (
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">Add player</h5>
                <form onSubmit={submitForm}>
                    <div className="mb-3">
                        <label className="form-label">Player name:</label>
                        <input type="text" className="form-control" onChange={e => setName(e.target.value)} value={name}/>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Preferred position (optional):</label>
                        <select className="form-select" value={position} onChange={ e => setPosition(e.target.value)}>
                            <option value="">-- Seleccionar posición -- </option>
                            <option value="Defensa central">Defensa central</option>
                            <option value="Lateral">Lateral</option>
                            <option value="Carrilero">Carrilero</option>
                            <option value="Líbero">Líbero</option>
                            <option value="Pivote">Pivote</option>
                            <option value="Interior">Interior</option>
                            <option value="Media punta">Media punta</option>
                            <option value="Volante">Volante</option>
                            <option value="Extremo">Extremo</option>
                            <option value="Segundo delantero">Segundo delantero</option>
                            <option value="Delantero centro">Delantero centro</option>
                        </select>
                    </div>
                    <button type="submit" className="btn btn-success">ADD</button>
                </form>
            </div>
        </div>
    )
}

export default AddPlayer