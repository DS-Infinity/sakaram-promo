import React from 'react'
import image from '../hello.png'

export const Power = () => {
    return (
        <div className='power-intro-main'>
            <div className="power__intro">
                <h1>More powerful than ever before</h1>
            </div>
            <div className="power__flex">
                <div className="power__text">
                    The Sakarm 2021 features an all new engine, with 696969 Horsepower, enough for your car to reach 0 to 420km/hr in under 10s
                </div>
                <div className="power__image">
                    <img src={image} alt="" />
                </div>
            </div>
        </div>
    )
}
