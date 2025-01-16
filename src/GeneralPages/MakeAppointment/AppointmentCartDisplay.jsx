import React from 'react';

const AppointmentCartDisplay = ({item}) => {
    const{name, specialty,contact, next_visit, assigned_status} =item;
    return (
        <div className='my-2'>
            <h1>{name}</h1>
            <h1>{specialty}</h1>
        </div>
    );
};

export default AppointmentCartDisplay;