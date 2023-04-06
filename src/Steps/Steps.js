import React from 'react'
import './Steps.css'
import WhatWeDoImg from '../../src/homeimg.svg';
import './Steps-responsive.css'

export default function Steps() {
    return (
        <div className='Steps'>
            <div className="steps-blocks">
                <div className=" step step1">
                    <h2 className='number'>
                        1
                    </h2>
                    <h2>Architecture</h2>
                    <p className=" step-txt">
                        We address requirements and constraints 
                        with the right mix of analytical thinking,
                        creativity and artistry — designing buildings
                        that make a statement,
                        conserve natural resources and enrich our experience.
                    </p>
                    <div className="barre"></div>
                </div>
                <div className="step step2">
                    <h2 className='number'>
                        2
                    </h2>
                    <h2>Interior Design</h2>
                    <p className="step-txt">
                    Across every market we serve, our team designs 
                    thoughtful interior environments by engaging key 
                    stakeholders
                     through proprietary and proven processes to 
                     enhance culture and achieve goals.
                    </p>
                    <div className="barre"></div>
                </div>
                <div className="step step3">
                    <h2 className='number'>
                        3
                    </h2>
                    <h2>Art Planning</h2>
                    <p className="step-txt">
                    Our master plans provide a comprehensive look at
                     where an organization is today and what it’s goin
                     g to take to make its ideal future a reality.
                     Our process is intensely collaborative, involving experts.
                    </p>
                    <div className="barre"></div>
                </div>

            </div>
            <div className="step-content2">
                <div className="step-img">

                </div>
                <div className="whatwedo">
                    <img src={WhatWeDoImg} alt="" />
                    <h2>What We Do</h2>
                    <p className='whatwedo-txt'>
                    We blend our diversity of expertise with 
                    empirical and ethnographic research,
                     immersing ourselves in our clients’ worlds 
                     to understand their needs in their context.
                    </p>
                    <button className='whatwedo-button'>
                        More
                    </button>
                </div>
            </div>
        </div>
    )
}
