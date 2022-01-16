import React from 'react';
import Footer from '../Shared/Footer/Footer.js';
import AboutUs from './AboutUs/AboutUs.js';
import Appointment from './Appointment/Appointment.js';
import Blogs from './Blogs/Blogs.js';
import ChamberInfo from './ChamberInfo/ChamberInfo.js'
import Contact from './Contact/Contact.js';
import Doctors from './Doctors/Doctors.js';
import Header from './Header/Header.js';
import Servicess from './Servicess/Servicess.js';
import UserReview from './UserReview/UserReview.js';

const HomePage = () => {
    document.title = 'Doctor HM'
    return (
        <div id='home'>
            <Header/>
            <ChamberInfo></ChamberInfo>
            <AboutUs/>
            <Servicess/>
            <Appointment/>
            <UserReview/>
            <Doctors/>
            <Blogs/>
            <Contact/>
            <Footer/>
        </div>
    );
};

export default HomePage;