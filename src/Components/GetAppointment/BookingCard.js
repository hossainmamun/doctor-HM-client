import React, { useState } from 'react';
import AppointmentForm from './AppointmentForm.js';

const BookingCard = (props) => {
  const { title, startTime, endTime, serial } = props.bookingCard
  const date = props.date
  const [modalIsOpen, setIsOpen] = useState(false);
const today = new Date()
  function openModal(id) {
    // setIsOpen(true);
    if(id === today){
      setIsOpen(false);
    }
    else{
      setIsOpen(true);
    }
    console.log(id)
  }

  function closeModal() {
    setIsOpen(false);
  }
  return (
    <div className='col-md-4 mb-4'>
      <div className="card shadow border-0 px-3 py-4">
        <div className="card-body text-center">
          <h4>{title}</h4>
          <strong>{startTime} - {endTime}</strong>
          <p className='font-weight-bold mb-0'>only {serial} seats Available</p>
        </div>
        <div className='text-center'>
          <button className='btn btn-primary' onClick={()=>openModal(date)}>Book Appointment</button>
        </div>
        <div>
          <AppointmentForm modalIsOpen={modalIsOpen} closeModal={closeModal} title={title} date={date} />
        </div>
      </div>
    </div>
  );
};

export default BookingCard;