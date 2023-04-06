import React from 'react';
import './Chair.css';
import './Chair-responsive.css';
import Chaises from "./Chaises.jpeg";
import Homesvg from '../../src/homeimg.svg';
import ChairPicture from './Chair-picture.png';


export default function Chair() {
    return (
        <div className='Chair'>
            <div className="chair-picture">
            </div>
            <div className="whatwedo-chair">
                <div className="whatwedo-chair-txt">
                    <img src={Homesvg} alt="Home" />
                    <h2>What We Do</h2>
                    <p>We blend our diversity of expertise with empirical and
                        ethnographic research, immersing ourselves
                        in our clients’ worlds to understand their needs in their context.</p>
                    <button className='chair-button'>MORE</button>
                    <img src={ChairPicture} alt="Photo Chaise en bois polie." />
                </div>
            </div>
        </div>
    )
}
