import React, { useState, useEffect, useRef } from 'react';
import './Meters.css'
import './Meters-responsive.css'
import HomeMeter from './HomeMeter.png'
import UserImg from './User.png'
import IdeeImg from './Idee.png'
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)



export default function Meters() {

    const [chronoOne, setChronoOne] = useState('+0');
    const [isVisible, setIsVisible] = useState(false);
    const [time, setTime] = useState(0);
    const [timeTwo, setTimeTwo] = useState(0)
    const [timeThree, setTimeThree] = useState(0)
    const ref = useRef(null)
    const ref2 = useRef(null)
    const ref3 = useRef(null)

    useEffect(() => {
        if (isVisible) {
            const tl = gsap.timeline({ paused: true, onUpdate: updateTime });
            tl.to({ time: 500 }, { time: 0, duration: 500, ease: "none" });
            tl.timeScale(125);

            const t2 = gsap.timeline({ paused: true, onUpdate: updateTime });
            t2.to({ time: 800 }, { time: 0, duration: 800, ease: "none" });
            t2.timeScale(200);
            
            const t3 = gsap.timeline({ paused: true, onUpdate: updateTime });
            t3.to({ time: 300 }, { time: 0, duration: 300, ease: "none" });
            t3.timeScale(75);

            function updateTime() {
                setTime(Math.floor(tl.time()));
                setTimeTwo(Math.floor(t2.time()))
                setTimeThree(Math.floor(t3.time()))
            }

            const observer = new IntersectionObserver(
                ([entry]) => {
                    if (entry.isIntersecting) {
                        tl.play();
                        t2.play();
                        t3.play();
                        observer.unobserve(entry.target);
                    }
                },
                { rootMargin: "50px", threshold: 0.5 }
            );

            observer.observe(ref.current, ref2.current, ref3.current);

            return () => {
                observer.disconnect();
            };
        }
    }, [isVisible]);

    useEffect(() => {
        const handleScroll = () => {
            if (ref.current, ref2.current, ref3.current) {
                const rect = ref.current.getBoundingClientRect();
                const rect2 = ref2.current.getBoundingClientRect();
                const rect3 = ref3.current.getBoundingClientRect();
                setIsVisible(
                    rect.top < window.innerHeight && rect.bottom >= 0
                    || rect2.top < window.innerHeight && rect2.bottom >= 0
                    || rect3.top < window.innerHeight && rect3.bottom >= 0);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div className='Meters'>
            <div className="content-meters">
                <div className="meter">
                    <img src={HomeMeter} alt="" />
                    <h1 ref={ref} id='chrono1'>+{time}</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing
                        elit. Dolor alias numquam
                        labore earum obcaecati autem.</p>
                </div>
                <div className="meter">
                    <img src={UserImg} alt="" />
                    <h1 ref={ref2}>{timeTwo}</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing
                        elit. Dolor alias numquam
                        labore earum obcaecati autem.</p>
                </div>
                <div className="meter">
                    <img src={IdeeImg} alt="" />
                    <h1 ref={ref3}>+{timeThree}</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing
                        elit. Dolor alias numquam
                        labore earum obcaecati autem.</p>
                </div>
                <div className="meter"></div>
            </div>
        </div>
    )
}
