import React from 'react'
import './Navbar.css';
import MenuSvg from './Menu.svg'
import facebookIcon from "./Facebook.svg"
import TwitterSvg from './Twitter.svg'
import InstagramSvg from './Instagram.svg'
export default function Navbar() {



    return (
        <div className='Navbar'>
            <div className="nav">
                <img className='menusvg' src={MenuSvg} alt="Menu Svg" />
            </div>
            <div className="reseaux-sociaux">
                <img src={facebookIcon} alt="facebook" />
                
                <img src={TwitterSvg} alt="twitter"/>
                
                <img src={InstagramSvg} alt="insta" />
                
            </div>
        </div>
    )
}
