import React from 'react'
import Back from '../common/back/Back'
import './contact.css'

const Contact = () => {
    const map = "https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d429097.66240517254!2d76.98565374448333!3d28.64072764900216!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1672073098668!5m2!1sen!2sin"

    return (
        <>
            <Back title="Contact Us" />
            <section className="contact padding">
                <div className="container shadow flexSB">
                    <div className="left row">
                        <iframe src={map}></iframe>
                    </div>
                    <div className="right row">
                        <h1>Contact Us</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>

                        <div className="item grid2">
                            <div className="box">
                                <h4>ADDRESS:</h4>
                                <p>York Street, New York, New York, United States</p>
                            </div>
                            <div className="box">
                                <h4>Email:</h4>
                                <p>info@gmail.com</p>
                            </div>
                            <div className="box">
                                <h4>PHONE:</h4>
                                <p>+123 456 789</p>
                            </div>
                        </div>

                        <form action="">
                            <div className="flexSB">
                                <input type="text" placeholder='Name' />
                                <input type="email" placeholder='Email' />
                            </div>
                            <input type="email" placeholder='Subject' />
                            <textarea cols="30" rows="10">
                                Create a message here...
                            </textarea>
                            <button className="primary-btn">SEND MESSAGE</button>
                        </form>

                        <h3>Follow Us Here</h3>
                        <span>FACEBOOK TWITTER INSTAGRAM DRIBBLE</span>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Contact