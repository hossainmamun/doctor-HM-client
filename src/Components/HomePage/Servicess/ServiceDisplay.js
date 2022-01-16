import React from 'react';

const ServiceDisplay = (props) => {
    const {icon, title, note} = props.service
    return (
        <div className='col-md-4 text-center'>
            <div>
                <img src={icon} className="img-fluid mb-3" style={{width: '70px', height: 'auto'}} alt="" />
                <h4>{title}</h4>
                <p>{note}</p>
            </div>
        </div>
    );
};

export default ServiceDisplay;