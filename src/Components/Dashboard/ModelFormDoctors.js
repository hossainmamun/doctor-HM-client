import React, { useState } from 'react';
import Modal from 'react-modal';
const customStyles = {
    content: {
        top: "50%",
        left: "50%",
        bottom: "auto",
        transform: "translate(-50%, -50%)",
        border: "0px",
        borderRadius: "8px",
        padding: "40px",
        boxShadow:
            "rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px",
    },
};
Modal.setAppElement('#root');

const ModelFormDoctors = ({ modalIsOpen, closeModal, editDoctor }) => {
    const [doctorInfo, setDoctorInfo] = useState({ editDoctor })
    const handleDataChange = (e) => {
        const newDoctorInfo = { ...doctorInfo }
        newDoctorInfo[e.target.name] = e.target.value;
        setDoctorInfo(newDoctorInfo)
        console.log(newDoctorInfo)
    }

    const updateDoctorInfo = (id) => {
        fetch(`https://lit-coast-50910.herokuapp.com/updatedoctorinfo/${id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(doctorInfo)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
            })
    }

    return (
        <div>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <div className='d-flex justify-content-between align-items-center mb-4'>
                    <h4>Edit Doctors Info</h4>
                    <button className='btn btn-danger px-3' onClick={closeModal}>close</button>
                </div>
                <div>
                    <strong>Doctor Id: {editDoctor._id}</strong>
                    <p className='mb-2'><strong>Name</strong>: {editDoctor.name}</p>
                    <p className='mb-2'><strong>Degree</strong>: {editDoctor.designation}</p>
                    <p className='mb-2'><strong>Email</strong>: {editDoctor.email}</p>
                    <p className='mb-2'><strong>Contact</strong>: {editDoctor.phone}</p>
                </div>
                {/* form start here */}
                <div className="row">
                    <div className="col-md-6">
                        <div className="form-group mb-3">
                            <input type="text" name='name' onBlur={handleDataChange} placeholder='Enter Name' className='form-control' />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="form-group mb-3">
                            <input type="text" name='designation' onBlur={handleDataChange} placeholder='Enter Degree' className='form-control' />
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-6">
                        <div className="form-group mb-3">
                            <input type="email" name='email' onBlur={handleDataChange} placeholder='Enter Email' className='form-control' />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="form-group mb-3">
                            <input type="number" name='phone' onBlur={handleDataChange} placeholder='Enter Contact' className='form-control' />
                        </div>
                    </div>
                </div>
                <button className='btn btn-dark' onClick={() => updateDoctorInfo(editDoctor._id)}>update</button>
            </Modal>
        </div>
    );
};

export default ModelFormDoctors;