import React, { useState } from 'react';
import ModelFormDoctors from './ModelFormDoctors.js';


const EditDoctor = ({ doctors }) => {
    // ! react modal element
    const [modalIsOpen, setIsOpen] = useState(false);
    const [editDoctor, setEditDoctor] = useState({})

    function openModal(id) {
        fetch(`https://lit-coast-50910.herokuapp.com/editdoctor/${id}`)
            .then(res => res.json())
            .then(data => {
                setEditDoctor(data)
            })
        setIsOpen(true);
    }
    function closeModal() {
        setIsOpen(false);
    }


    // ! delete doctor info
    const handleDeleteDoctor = (id) => {
        fetch(`https://lit-coast-50910.herokuapp.com/deletedoctor/${id}`, {
            method: 'DELETE',
        })
            .then(res => res.json())
            .then(data => {
                if (data) {
                    window.alert('Doctor Delete Successfully')
                }
                console.log(data)
            })
    }
    return (
        <div>
            <div className="row">
                {
                    doctors.map(doctor => (
                        <div className="col-md-4 my-3">
                            <div className="card text-center">
                                <img src={doctor.image} className='img-fluid' alt="" style={{ height: '250px' }} />
                                <div className="card-body">
                                    <h3>Dr:{doctor.name}</h3>
                                    <p><strong>Degree:</strong> {doctor.designation}</p>
                                    <p><strong>Email:</strong> {doctor.email}</p>
                                    <p><strong>Contact:</strong> {doctor.phone}</p>
                                    <button className='btn btn-outline-dark px-3 me-3' onClick={() => openModal(doctor._id)}>Edit</button>
                                    <button className='btn btn-outline-danger px-3' onClick={() => handleDeleteDoctor(doctor._id)}>Delete</button>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>

            <div>
                <ModelFormDoctors modalIsOpen={modalIsOpen} closeModal={closeModal} editDoctor={editDoctor} />
            </div>
        </div>
    );
};

export default EditDoctor;