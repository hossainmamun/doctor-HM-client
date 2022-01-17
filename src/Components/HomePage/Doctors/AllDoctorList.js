import React, { useEffect, useState } from 'react';
import AllDoctorListDisplay from './AllDoctorListDisplay.js';

const AllDoctorList = (props) => {
    const [doctors, setDoctors] = useState([])
    useEffect(() => {
        fetch('https://lit-coast-50910.herokuapp.com/doctors')
            .then(res => res.json())
            .then(data => {
                setDoctors(data)
            })
    }, [])
    return (
        <div className='container'>
            <div className='text-center' style={{ marginTop: '100px' }}>
                <h2>all doctor list</h2>
            </div>
            <div className="row mb-4">
                {
                    doctors.map(doctor => <AllDoctorListDisplay doctor={doctor} />)
                }
            </div>
        </div>
    );
};

export default AllDoctorList;