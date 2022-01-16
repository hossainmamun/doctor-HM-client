import React, { useEffect, useState } from 'react';
import AllPatients from './Allpatients.js';

const AddPatient = () => {
    const [appointments, setAppointments] = useState([]);
    useEffect(() => {
        loadAllPatients()
    }, [])

    const loadAllPatients = () => {
        fetch("https://lit-coast-50910.herokuapp.com/allAppointments")
            .then(res => res.json())
            .then(data => {
                setAppointments(data)
            })
    }
    return (
        <div>
            <div>
                <h2>All Patients List</h2>
                <strong>{ }</strong>
            </div>
            <AllPatients appointment={appointments} loadAllPatients={loadAllPatients} />
        </div>
    );
};

export default AddPatient;