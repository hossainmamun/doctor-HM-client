import React, { useEffect, useState } from 'react';
import Footer from '../Shared/Footer/Footer.js';
import AppointmentCalender from './AppointmentCalender.js';
import BookingCard from './BookingCard.js';

const GetAppointment = () => {
    const [selectDate, setSelectDate] = useState(new Date());
    const handleDateChange = (date) => {
        setSelectDate(date)
    }

    //! booking card load form server
    const [booking, setBooking] = useState([])
    useEffect(() => {
        fetch('https://lit-coast-50910.herokuapp.com/bookingCard')
            .then(res => res.json())
            .then(data => {
                setBooking(data)
            })
    }, [])
    return (
        <div className='mt-5' style={{ paddingTop: "100px" }}>
            <div className='div-spacing'>
                <AppointmentCalender handleDateChange={handleDateChange} />
            </div>
            <div className='container div-spacing'>
                <div className='text-center my-4'>
                    <h2>Available Appointment On: {selectDate.toDateString()}</h2>
                </div>
                <div className="row">
                    {
                        booking.map(bookingCard => <BookingCard bookingCard={bookingCard} key={bookingCard._id} date={selectDate} />)
                    }
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default GetAppointment;