import React from 'react';

const DoctorsDisplay = (props) => {
    const {name, email, phone, designation, image} = props.doctor
    return (
        <div className="col mx-3 my-4" style={{boxShadow: 'rgba(0, 0, 0, 0.16) 0px 1px 4px'}}>
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

export default DoctorsDisplay;