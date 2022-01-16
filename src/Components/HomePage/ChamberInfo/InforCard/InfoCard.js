import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../../../../StyleSheet/InfoCard.scss'

const InfoCard = (props) => {
    const {icon, title, time, schedule, background, contact, location} = props.information
    return (
        <div className="col-lg-4 col-md-12 px-1 text-white">
            <div className={`d-flex justify-content-evenly align-items-center rounded info-card info-${background}`}>
                <div>
                    <FontAwesomeIcon icon={icon} style={{ fontSize: '2.5rem', color: '#fff' }} />
                </div>
                <div>
                    <h4>{title}</h4>
                    <p>{schedule}</p>
                    <p>{location}</p>
                    <p>{contact}</p>
                    <span>{time}</span>
                </div>
            </div>
        </div>
    );
};

export default InfoCard;