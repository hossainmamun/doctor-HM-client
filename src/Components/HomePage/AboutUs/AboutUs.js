import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import about_img from '../../../image/about-us.jpg'
import '../../../StyleSheet/About.scss'

const AboutUs = () => {
    return (
        <div id='about' className='div-spacing'>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-md-6">
                        <img src={about_img} className='img-fluid' alt="img" />
                    </div>
                    <div className="col-md-6">
                        <div>
                            <h2>about us</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi dolorum est, expedita cum similique provident neque quibusdam! Nisi perspiciatis magnam ut officiis ab minima asperiores dolorum doloremque sapiente incidunt. Eaque, enim quis debitis, sapiente totam quod ratione quaerat quam delectus natus fuga accusamus corrupti amet consectetur. Non labore perspiciatis, magni quidem illum repellendus natus quia. Atque magni sequi temporibus nesciunt aliquam sapiente earum libero nihil nostrum optio. Nobis hic, rerum perspiciatis, odit quia quasi non error, impedit deleniti nihil quisquam laudantium porro ex at velit? Maiores pariatur quod quis impedit doloremque consectetur autem assumenda ut qui quo. Earum, non aspernatur.</p>
                            <div className='progress-list'>
                                <label htmlFor="">Experience Dentist</label>
                                <div class="progress mb-3">
                                    <div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style={{width: '80%'}}>80%</div>
                                </div>

                                <label htmlFor="">Modern Equipment</label>
                                <div class="progress">
                                    <div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style={{width: '80%'}}>80%</div>
                                </div>

                                <label htmlFor="">Friendly Staff</label>
                                <div class="progress">
                                    <div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style={{width: '95%'}}>95%</div>
                                </div>
                            </div>
                            <div className='mt-5'>
                                <Link to="/getAppointment">
                                    <button className='btn btn-outline-success px-3 py-2 me-2'>Appointment</button>
                                </Link>
                                <Link to="/home#contact">
                                    <button className='btn btn-outline-success px-3 py-2 ms-2'>Contact</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;