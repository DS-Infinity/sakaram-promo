import React from 'react';
import image from '../dash.png'

export const Dash = () => {
    return (
        <div className='dash'>
            <h1>New User Friendly Dashboard</h1>
            <img src={image} alt="" />
            <h1 className='extra-text'>An aerodynamic design means less air friction which increases mileage and helps your car attain faster speeds</h1>
        </div>
    )
}
