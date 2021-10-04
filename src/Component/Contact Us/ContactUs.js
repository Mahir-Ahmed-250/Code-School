import React from 'react';
import { FloatingLabel, Form, Button } from 'react-bootstrap';
// Images
import img from './image/contact1.png'
// Css
import './ContactUs.css'

const ContactUs = () => {
    return (
        <div className="container mt-5">

            <div className='row'>

                <div className='col-md-12 col-lg-8'>
                    <h3>Contact With Us</h3>
                    <FloatingLabel
                        controlId="floatingInput"
                        label="Name@Email.com"
                        className="mb-3"
                    >
                        <Form.Control type="email" placeholder="name@example.com" />
                    </FloatingLabel>

                    <FloatingLabel controlId="floatingTextarea2" label="Share Your Thoughts!">
                        <Form.Control
                            as="textarea"
                            placeholder="Leave a comment here"
                            style={{ height: '200px' }}
                        />
                    </FloatingLabel>
                    <Button className='submit-btn' variant="primary">Submit</Button>
                </div>
                <div className='col-4'>
                    <img src={img} alt="" />
                </div>
            </div>
        </div>
    );
};

export default ContactUs;