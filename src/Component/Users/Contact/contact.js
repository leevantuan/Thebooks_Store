import React from 'react'
import './contact.scss'

export default function Contact() {
    return (
        <div className='contact-container'>
            <div className='contact-content'>
                <div className='contact'>
                    <h2>Contact</h2>
                    <hr />
                    <hr />
                    <h3>THE BOOKS STORE</h3>
                    <div className='info-contact'>
                        <div className='info'>
                            <h3>Address</h3>
                            <p>Biên Hòa - Đồng Nai - Việt Nam</p>
                        </div>
                        <div className='info'>
                            <h3>Email</h3>
                            <p>thebooks@gmail.com</p>
                        </div>
                    </div>
                    <div className='info-contact-number'>
                        <div className='info'>
                            <h3>Hotline</h3>
                            <p>+84 123 456 789</p>
                        </div>
                        <div className='info'>
                            <h3>Feedback</h3>
                            <p>+84 888 888 888</p>
                        </div>
                    </div>
                    <div className='info'>
                        <h3>Working Time</h3>
                        <p>T2-T6: 9:00 - 20:00 </p>
                        <p>T7: 9:00 - 21:00</p>
                        <p>CN: OFF</p>
                    </div>
                </div>
                <div className='message'>
                    <h2>Message</h2>
                    <hr />
                    <hr />
                    <form>
                        <input placeholder={`Enter Your's Full Name`} />
                        <div className='input-contact'>
                            <input placeholder={`Enter Phone Number`} />
                            <input placeholder={`Enter Email`} />
                        </div>
                        <input placeholder={`Enter Title`} />
                        <textarea wrap="hard" placeholder={`Enter Content`} required />
                        <button>Send</button>
                    </form>
                </div>
            </div>
            <div className='map'>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3293.761676114723!2d106.85130893580587!3d10.966027992161763!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3174d952b84aea25%3A0xe04ae6f14b6e1655!2zxJDhu5NuZyBOYWksIFZp4buHdCBOYW0!5e0!3m2!1svi!2s!4v1680540775725!5m2!1svi!2s" width="1100" height="450" style={{ border: 0 }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </div>
    )
}
