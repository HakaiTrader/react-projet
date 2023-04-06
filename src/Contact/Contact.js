import React from 'react'
import './Contact.css'
import './Contact-responsive.css'


export default function Contact() {



    const preventDefaultSubmit = (e) => {
        e.preventDefault()
    }

    return (
        <div className='Contact'>
            <div className="contact">
                <div className="input-contact">
                    <form action="#" method='post'>
                        <input type="text" placeholder='Enter Your Name' />
                        <input type="mail" placeholder='Enter a valid email address' />
                        <textarea name="" id="" cols="30" rows="8" placeholder='Enter Your Message'></textarea>
                        <button className='submit' onClick={preventDefaultSubmit}>SUBMIT</button>
                    </form>
                </div>
                <div className='contactus-reseaux'>
                    <div className="contact-us">
                        <p>JOIN OUR NEWSLETTER</p>
                        <h1>Contact us</h1>
                        <p className='p-contact'>
                            3045 10 Sunrize Avenue, 123-456-7890 <br />
                            Mon – Fri: 9:00 am – 8:00 pm, <br />
                            Sat – Sun: 9:00 am – 10 pm <br />
                            <span className='mail'>contacts@email.com</span></p>
                    </div>
                    <div className="reseaux">
                        <h1>Follow us</h1>
                        <div className="icon-reseau">
                            <i class="fa-brands fa-facebook"></i>
                            <i class="fa-brands fa-square-twitter"></i>
                            <i class="fa-brands fa-square-instagram"></i>
                        </div>
                        <p>©2021 Privacy policy</p>
                    </div>
                </div>
            </div>
            <div className="block-blue"></div>
            <div className="block-cyan"></div>
        </div>
    )
}
