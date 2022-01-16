import React, { useEffect, useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import AppointmentByDate from './AppointmentByDate.js';

const Appointments = () => {
    const [selectDate, setSelectDate] = useState(new Date());
    const [appointmentByDate, setAppointmentByDate] = useState([])
    const handleDateChange = (date) => {
        setSelectDate(date)
        console.log(date)
    }

    // load data by useEffect
    useEffect(() => {
        fetch(`https://lit-coast-50910.herokuapp.com/appointmentByDate`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ date: selectDate })
        })
            .then(res => res.json())
            .then(data => {
                setAppointmentByDate(data)
            })
    }, [selectDate])

    return (
        <div className='mt-5'>
            <div className="row justify-content-center">
                <div className="col-md-4">
                    <Calendar
                        onChange={handleDateChange}
                        value={new Date()}
                    />
                </div>
                <div className="col-md-7">
                    {
                        appointmentByDate.length ?
                            <AppointmentByDate appointmentByDate={appointmentByDate} date={selectDate} /> :
                            <div>
                                <h2>Appointments</h2>
                                <h4>no appointment are Available for <strong className='text-danger'>{new Date(selectDate).toDateString("dd/MM/yyyy")}</strong></h4>
                            </div>
                    }
                </div>
            </div>
        </div>
    );
};

export default Appointments;