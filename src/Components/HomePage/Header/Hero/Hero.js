import React from 'react';
import '../../../../StyleSheet/Hero.scss'
import heroImg from '../../../../image/chair.png'
import { HashLink as Link } from 'react-router-hash-link';

const Hero = () => {
    return (
        <div className='hero'>
            <div className='text-left'>
                <h1>your new smile start here</h1>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore officiis <br />
                    numquam, ut eveniet suscipit repudiandae? Alias nobis voluptatum tempore <br />
                    sapiente inventore porro molestiae tempora, vitae 
                    voluptatem officiis, hic placeat quasi?</p>
                <Link to="/getAppointment">
                    <button className='btn btn-primary px-3'>Appointment</button>
                </Link>
                
            </div>
            <div>
                <img src={heroImg} className='img-fluid' style={{ height: '380px' }} alt="img" />
            </div>
        </div>
    );
};

export default Hero;