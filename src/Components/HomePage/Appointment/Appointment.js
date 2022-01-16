import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import doctor from '../../../image/doctor.png'
import '../../../StyleSheet/Appointment.scss'

const Appointment = () => {
    return (
        <div id='appointment' className='container-fluid div-spacing px-0'>
            <div className="overlay">
                <div className="row justify-content-center align-items-center">
                    <div className="col-md-5">
                        <img src={doctor} className='img-fluid' alt="" />
                    </div>
                    <div className="col-md-6 col-sm-12 appoint-content">
                        <span>Appointment</span>
                        <h2>Make An Appointment Today</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea provident mollitia eligendi, soluta pariatur at quia iste consequuntur nobis aliquam perferendis aut libero, veniam harum. Similique maiores provident dolor numquam dignissimos ad, eveniet quisquam voluptatum?</p>
                        <Link to="/getAppointment">
                            <button className='btn btn-outline-light px-3 py-2 me-2'>Get An Appointment</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Appointment;