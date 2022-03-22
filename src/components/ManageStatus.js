import axios from 'axios';
import React, { useEffect, useState } from 'react';

const ManageStatus = () => {
    
    const [equipos, setEquipos] = useState([]);
    
    useEffect(() => {
        axios.get("http://localhost:8000/api/equipos/")
            .then( resp => {
                setEquipos(resp.data.equipo);
            })
            .catch( err => console.log(err))
    }, [])

    function changeStatus(status, id){
        axios.put(`http://localhost:8000/api/equipos/update/${id}`,{
            status
        })
        .then( resp => {
            const newEquipos = equipos.filter( e => e._id !== id);
            setEquipos([...newEquipos, resp.data.equipo])
        })
        .catch( err => console.log(err))
    }

    return (
        <div className="card">
            <div className="card-body">
                <h2 className="card-title">Player Status</h2>
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">Team name</th>
                            <th scope="col">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        { equipos.map( equipo => (
                            <tr key={equipo._id}>
                                <td>{equipo.name}</td>
                                <td className="d-flex">
                                    <p className={`m-1 btn ${equipo.status === 2 ? "btn-success" : "btn-ligth"}`}
                                        onClick={() => changeStatus(2, equipo._id)}
                                    >Playing</p>
                                    <p className={`m-1 btn ${equipo.status === 1 ? "btn-danger" : "btn-ligth"}`}
                                        onClick={() => changeStatus(1, equipo._id)}
                                    >Not Playing</p>
                                    <p className={`m-1 btn ${equipo.status === 0 ? "btn-warning" : "btn-ligth"}`}
                                        onClick={() => changeStatus(0, equipo._id)}
                                    >Undecided</p>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default ManageStatus