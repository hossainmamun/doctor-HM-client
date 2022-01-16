import React from 'react';

const AllPatients = ({ appointment, loadAllPatients }) => {

    const handleDelete = (id) => {
        fetch(`https://lit-coast-50910.herokuapp.com/deleteAppointment/${id}`, {
            method: 'DELETE',
        })
            .then(res => res.json())
            .then(data => {
                if (data) {
                    window.alert('Appointment delete successfully')
                }
                else {
                    window.alert('No Appointment found')
                }
                loadAllPatients()
            })
    }
    return (
        <div className='table-responsive'>
            <table className="table table-borderless table-striped">
                <thead className='bg-info'>
                    <tr>
                        <th scope="col">Sr No</th>
                        <th>Patient Name</th>
                        <th>Phone</th>
                        <th>Subject</th>
                        <th>Age</th>
                        <th>Gender</th>
                        <th>Time</th>
                        <th>Date</th>
                        <th>Action</th>
                    </tr>
                </thead>

                {
                    appointment.length === 0 &&
                    <div className='text-center'>
                        <div class="spinner-border" role="status">
                            <span class="visually-hidden">Loading...</span>
                        </div>
                    </div>
                }
                <tbody>

                    {
                        appointment.map((appointments, index) =>
                            <tr className='text-capitalize'>
                                <td>{index + 1}</td>
                                <td>{appointments.patientName}</td>
                                <td>+88 {appointments.phone}</td>
                                <td>{appointments.subject}</td>
                                <td>{appointments.age}</td>
                                <td>{appointments.gender}</td>
                                <td>{appointments.time}</td>
                                <td>{new Date(appointments.date).toDateString('dd/MM/yyyy')}</td>
                                <td>
                                    <button className='btn btn-danger btn-block' onClick={() => handleDelete(appointments._id)}>Delete</button>
                                </td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    );
};

export default AllPatients;