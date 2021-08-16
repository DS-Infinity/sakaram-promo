import React from 'react'
import image from '../car.png'

export const Aerodynamics = () => {
    return (
        <div className='aero'>
        <div className='aero__intro'>
            <h1>Aerodynamic Design</h1>
            </div>
            <div className="aero__flex">
                <div className="aero__image">
                    <img src={image} alt="" />
                </div>
                <div className="aero__text">
                    An aerodynamic design means less air friction which increases mileage and helps your car attain faster speeds
                </div>
            </div>
            </div>
    )
}
