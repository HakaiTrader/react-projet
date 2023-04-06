import React from 'react';
import './Home.css';
import Navbar from '../Navbar/Navbar';
import PictureHome from './PictureHome.jpeg'
import './Home-responsive.css'


export default function Home() {
  return (
    <div className='Home'>
        <div className="picture-home">
            <div className="title-home">
                <h1>Architecture and Design</h1>
            </div>
            <div className="txt-home">
                <p>We combine expertise across disciplines, locations, 
                    and sectors. The practice is an active thought
                     leader in social practice, developing
                    award-winning architectural projects and urban
                     strategies at a variety of scales.</p>
            </div>
            <div className="button-home">
                <button>READ MORE</button>
            </div>
            
        </div>

    </div>
  )
}
