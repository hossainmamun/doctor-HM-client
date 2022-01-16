import React from 'react';

const AllDoctorListDisplay = (props) => {
    const {name, email, phone, designation, image} = props.doctor
    return (
        <div className='col-md-4 mb-4'>
            <div className="card text-center">
                <img src={image} className='img-fluid' alt="" style={{height: '250px'}} />
                <div className="card-body">
                    <h3>Dr:{name}</h3>
                    <p><strong>Degree:</strong> {designation}</p>
                    <p><strong>Email:</strong> {email}</p>
                    <p><strong>Contact:</strong> {phone}</p>
                    <button className='btn btn-outline-dark px-3'>Appointment</button>
                </div>
            </div>
        </div>
    );
};

export default AllDoctorListDisplay;