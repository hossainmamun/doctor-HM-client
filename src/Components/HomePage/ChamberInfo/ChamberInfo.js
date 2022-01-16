import React from 'react';
import { faClock, faPhoneAlt, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'
import InfoCard from './InforCard/InfoCard.js';

const ChamberSchedule = () => {
    const chamberInformation = [
        {
            icon: faClock,
            title: 'opening hour',
            time: '09 AM - 10PM',
            schedule: 'Sunday - Thursday',
            background: 'primary'
        },
        {
            icon: faMapMarkerAlt,
            title: 'Contact Us Now',
            contact: '+88 0123654789',
            background: 'secondary'
        },
        {
            icon: faPhoneAlt,
            title: 'Visit Our Location',
            location: 'New-walls, westion city, usa',
            background: 'primary'
        },
    ]
    return (
        <div className="container div-spacing mt-5">
            <div className="row">
                {
                    chamberInformation.map(information => <InfoCard information={information} />)
                }
            </div>
        </div>
    );
};

export default ChamberSchedule;