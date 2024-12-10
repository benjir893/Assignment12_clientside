import React from 'react';

const Subtitle = ({title, subtitle}) => {

    return (
        <div className='my-14'>
            <h1 className='text-xl text-center  font-semibold font-Arima uppercase lg:text-2xl'>{title}</h1>
            <h2 className=' text-center font-semibold font-Arima'>{subtitle}</h2>
        </div>
    );
};

export default Subtitle;