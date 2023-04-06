import React from 'react';
import { useState } from 'react';
import LeftArrow from './left-arrow.svg'
import RightArrow from './right-arrow.svg'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import './Slider.css'
import './Slider-responsive.css'



export default function Slider() {


    return (
        <Carousel autoPlay interval={6000} infiniteLoop className='Slider'>
            <div className="slide slide1">
                <div className="slides slide1-1">
                    <div className=" slideimg slide1-1-img">
                    </div>
                    <div className="slide-txt">
                        <h3>Origami Residence</h3>
                        <p>Orci varius natoque penatibus et magnis</p>
                    </div>
                </div>
                <div className="slides slide1-2">
                    <div className=" slideimg slide1-2-img">

                    </div>
                    <div className="slide-txt">
                        <h3>Surry Hills Apartment</h3>
                        <p>Orci varius natoque penatibus et magnis</p>
                    </div>
                </div>
                <div className="slides slide1-3">
                    <div className=" slideimg slide1-3-img">

                    </div>
                    <div className="slide-txt">
                        <h3>Luxury House</h3>
                        <p>Orci varius natoque penatibus et magnis</p>
                    </div>
                </div>
            </div>
            <div className="slide slide2 active">
                <div className="slides slide2-1">
                    <div className=" slideimg slide2-1-img">
                    </div>
                    <div className="slide-txt">
                        <h3>Origami Residence</h3>
                        <p>Orci varius natoque penatibus et magnis</p>
                    </div>
                </div>
                <div className="slides slide2-2">
                    <div className=" slideimg slide2-2-img">
                    </div>
                    <div className="slide-txt">
                        <h3>Origami Residence</h3>
                        <p>Orci varius natoque penatibus et magnis</p>
                    </div>
                </div>
                <div className="slides slide2-3">
                    <div className=" slideimg slide2-3-img">
                    </div>
                    <div className="slide-txt">
                        <h3>Origami Residence</h3>
                        <p>Orci varius natoque penatibus et magnis</p>
                    </div>
                </div>

            </div>
        </Carousel>
    )
}
