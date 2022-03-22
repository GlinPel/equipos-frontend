import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Modal from 'react-modal';

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
};

const List = () => {
    
    const [equipos, setEquipos] = useState([]);
    const [modalIsOpen, setIsOpen] = React.useState(false);
    const [idToDelete, setIdToDelete] = useState("");
    
    useEffect(() => {
        axios.get("http://localhost:8000/api/equipos/")
            .then( resp => {
                console.log(resp.data.equipo);
                setEquipos(resp.data.equipo);
            })
            .catch( err => console.log(err))
    }, [])

    function deleteEquipo(){
        axios.delete(`http://localhost:8000/api/equipos/delete/${idToDelete}`)
            .then( resp => {
                const newEquipos = equipos.filter( e => e._id !== idToDelete);
                setEquipos(newEquipos);
                closeModal();
            })
            .catch( err => console.log(err))
    }

    function openModal(id) {
        setIsOpen(true);
        setIdToDelete(id);
    }

    function closeModal() {
        setIsOpen(false);
        setIdToDelete("");
    }

    return (
        <table className="table">
            <thead>
                <tr>
                    <th scope="col">Team name</th>
                    <th scope="col">Preferred position</th>
                    <th scope="col">Actions</th>
                </tr>
            </thead>
            <tbody>
                {equipos.map( equipo => (
                    <tr key={equipo._id}>
                        <td>{equipo.name}</td>
                        <td>{equipo.position ? equipo.position : ""}</td>
                        <td><button className="btn btn-danger" onClick={() => openModal(equipo._id)}>Delete</button></td>
                    </tr>
                ))}
            </tbody>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <div className="p-4">
                    <h2 className="mb-3">¿Estás seguro?</h2>
                    <button className="btn btn-success m-2" onClick={closeModal}>Cancelar</button>
                    <button className="btn btn-danger m-2" onClick={deleteEquipo}>Eliminar</button>
                </div>
            </Modal>
        </table>
    )
}

export default List