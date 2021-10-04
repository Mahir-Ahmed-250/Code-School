import React from 'react';
import { Accordion } from 'react-bootstrap';
import img from './images/faq.png'
const FAQ = () => {
    return (
        <div>



            <div className="row">
                <div className='col-md-6 mt-5'>
                    <h3>Frequently Asked Questions</h3>
                    <Accordion>
                        <Accordion.Item eventKey="0">
                            <Accordion.Header>What do CodeSchool courses include?</Accordion.Header>
                            <Accordion.Body>
                                Each CodeSchool course is created, owned and managed by the instructor(s). The foundation of each CodeSchool course are its lectures, which can include videos, slides, and text. In addition, instructors can add resources and various types of practice activities, as a way to enhance the learning experience of students.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1">
                            <Accordion.Header>Do I have to start my CodeSchool course at a certain time? And how long do I have to complete it?</Accordion.Header>
                            <Accordion.Body>
                                As noted above, there are no deadlines to begin or complete the course. Even after you complete the course you will continue to have access to it, provided that your account’s in good standing, and CodeSchool continues to have a license to the course.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="2">
                            <Accordion.Header>Is CodeSchool an accredited institution? Do I receive anything after I complete a course?</Accordion.Header>
                            <Accordion.Body>
                                While CodeSchool is not an accredited institution, we offer skills-based courses taught by real-world experts in their field. Every approved, paid course features a certificate of completion to document your accomplishment.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="3">
                            <Accordion.Header>How can I pay for a course?
                            </Accordion.Header>
                            <Accordion.Body>
                                CodeSchool supports several different payment methods, depending on your account country and location.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="4">
                            <Accordion.Header>What if I don’t like a course I purchased?
                            </Accordion.Header>
                            <Accordion.Body>
                                We want you to be satisfied, so all eligible courses purchased on CodeSchool can be refunded within 30 days. If you are unhappy with a course, you can request a refund, provided the request meets the guidelines in our refund policy.
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion></div>
                <div className='col-md-6'>
                    <img src={img} alt="" />
                </div>

            </div>
        </div>
    );
};

export default FAQ;