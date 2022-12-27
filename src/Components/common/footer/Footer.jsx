import React from 'react'
import { blog } from '../../../dummydata'
import './footer.css'

const Footer = () => {
    return (
        <>
            <section className="newsletter">
                <div className="container flexSB">
                    <div className="left row">
                        <h1>Newsletter -stay tuned and get the latest update</h1>
                        <span>far far away, behind the world mountains</span>
                    </div>
                    <div className="right row">
                        <input type="text" placeholder='Enter email address' />
                        <i className='fa fa-paper-plane'></i>
                    </div>
                </div>
            </section>

            <footer>
                <div className="container padding">
                    <div className="box logo">
                        <h1>ACADMIA</h1>
                        <span>online education & learning</span>
                        <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
                        <i className='fab fa-facebook-f icon'></i>
                        <i className='fab fa-instagram icon'></i>
                        <i className='fab fa-twitter icon'></i>
                    </div>

                    <div className="box link">
                        <h3>Explore</h3>
                        <ul>
                            <li>About Us</li>
                            <li>Services</li>
                            <li>Courses</li>
                            <li>Blog</li>
                            <li>Contact us</li>
                        </ul>
                    </div>
                    <div className="box link">
                        <h3>Quick links</h3>
                        <ul>
                            <li>Contact Us</li>
                            <li>Pricing</li>
                            <li>Terms & Conditions</li>
                            <li>Privacy</li>
                            <li>Feedbacks</li>
                        </ul>
                    </div>

                    <div className="box">
                        <h3>Recent Post</h3>
                        {blog.slice(0, 3).map((val) => {
                            return (
                                <div className="items flexSB">
                                    <div className="img">
                                        <img src={val.cover} alt="" />
                                    </div>
                                    <div className="text">
                                        <span>
                                            <i className='fa fa-user'></i>
                                            <label htmlFor="">{val.type}</label>
                                        </span>
                                        <span>
                                            <i className='fa fa-calendar-alt'></i>
                                            <label htmlFor="">{val.date}</label>
                                        </span>
                                        <h4>{val.title}</h4>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                    <div className="box last">
                        <h3>Have a Question?</h3>
                        <ul>
                            <li>
                                <i className='fa fa-map'></i>
                                York Street, New York, New York, United States
                            </li>
                            <li>
                                <i className='fa fa-phone-alt'></i>
                                +123 456 789
                            </li>
                            <li>
                                <i className='fa fa-paper-plane'></i>
                                example@gmail.com
                            </li>
                        </ul>
                    </div>
                </div>
            </footer>

            <div className="legal">
                <p>Copyright @2022 All rights reserved | This template is made with <i className='fa fa-heart'></i> by Ruchir Bajaj</p>
            </div>
        </>
    )
}

export default Footer