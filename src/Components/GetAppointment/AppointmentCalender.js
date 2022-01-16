import React from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import chair from '../../image/chair.png'

const AppointmentCalender = (props) => {
    const handleDateChange = props.handleDateChange
    return (
        <div className='container d-flex justify-content-between align-items-center'>
            <div>
                <Calendar
                onChange={handleDateChange}
                value={new Date()}
                />
            </div>
            <div>
                <img src={chair} className='img-fluid' alt="" style={{width: '650px'}} />
            </div>
        </div>
    );
};

export default AppointmentCalender;