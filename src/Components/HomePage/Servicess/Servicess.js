import React from 'react';
import floride from '../../../image/fluoride.png';
import cavity from '../../../image/cavity.png';
import whitining from '../../../image/whitening.png';
import ServiceDisplay from './ServiceDisplay.js';

const Servicess = () => {
    const service = [
        {
            icon: floride,
            title: 'Fluoride Treatment',
            note: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi dolorum est, expedita cum similique provident neque quibusdam! Nisi perspiciatis magnam ut officiis ab minima asperiores dolorum doloremque sapiente incidunt.'
        },
        {
            icon: cavity,
            title: 'Cavity Tilling',
            note: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi dolorum est, expedita cum similique provident neque quibusdam! Nisi perspiciatis magnam ut officiis ab minima asperiores dolorum doloremque sapiente incidunt.'
        },
        {
            icon: whitining,
            title: 'Teeth Whitening',
            note: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi dolorum est, expedita cum similique provident neque quibusdam! Nisi perspiciatis magnam ut officiis ab minima asperiores dolorum doloremque sapiente incidunt.'
        },
    ]
    return (
        <div id='service' className='container div-spacing'>
            <div className='text-center'>
                <h2 style={{marginBottom: '35px'}}>Our Service</h2>
            </div>
            <div className="row">
                {
                    service.map(service => <ServiceDisplay service={service} />)
                }
            </div>
        </div>
    );
};

export default Servicess;