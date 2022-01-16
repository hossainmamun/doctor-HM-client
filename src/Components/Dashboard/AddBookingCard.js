import React from 'react';
import { useForm } from "react-hook-form";

const AddBookingCard = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        const addBookingCard = {
            title: data.title,
            startTime: data.startTime,
            endTime: data.endTime,
            serial: data.serial,
        }
        fetch('https://lit-coast-50910.herokuapp.com/addBookingCard', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(addBookingCard)
        })
            .then(res => res.json())
            .then(data => {
                if (data) {
                    alert('Booking card added successfully')
                }
                console.log(data)
            })
        reset()
    };
    return (
        <div>
            <h3>Appointment Booking Card</h3>
            <div className="row">
                <div className="col-md-6">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-group mb-3">
                            <input type="text" name="title" className='form-control text-capitalize' placeholder='Appointment' {...register("title")} required />
                        </div>
                        <div className="form-group mb-3">
                            <label htmlFor="">Start Time</label>
                            <input type="time" name="startTime" className='form-control' placeholder='Enter Email' {...register("startTime")} required />
                        </div>
                        <div className="form-group mb-3">
                            <label htmlFor="">End Time</label>
                            <input type="time" name="endTime" className='form-control' placeholder='Enter Email' {...register("endTime")} required />
                        </div>
                        <div className="form-group mb-3">
                            <input type="number" name="serial" className='form-control text-capitalize' placeholder='Available serial' {...register("serial")} required />
                        </div>
                        <input type="submit" className='btn btn-outline-dark px-3' value="Submit" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddBookingCard;