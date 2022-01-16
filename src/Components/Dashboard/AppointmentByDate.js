import React from 'react';

const AppointmentByDate = ({ appointmentByDate, date }) => {
    return (
        <div>
            <div>
                <h2>Appointments</h2>
                <div className='d-flex justify-content-between'>
                    <h4>Total Appointments: {appointmentByDate.length}</h4>
                    <strong>{new Date(date).toDateString("dd/MM/yyyy")}</strong>
                </div>
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
                                <th>Date</th>
                                <th>Time</th>
                            </tr>
                        </thead>

                        <tbody>
                            {
                                appointmentByDate.map((appointments, index) =>
                                    <tr className='text-capitalize'>
                                        <td>{index + 1}</td>
                                        <td>{appointments.patientName}</td>
                                        <td>+88 {appointments.phone}</td>
                                        <td>{appointments.subject}</td>
                                        <td>{appointments.age}</td>
                                        <td>{appointments.gender}</td>
                                        <td>{new Date(appointments.date).toDateString('dd/MM/yyyy')}</td>
                                        <td>{appointments.time}</td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div> 
        </div>
    );
};

export default AppointmentByDate;