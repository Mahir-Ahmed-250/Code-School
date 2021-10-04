import React from 'react';
import img from './image/about1.png'
const AboutUs = () => {
    return (
        <div>

            <div className="container mt-5">
                <h3 className='text-center'>About Us</h3>
                <div className='row'>

                    <div className='col-md-12 col-lg-4'>

                        <div className='col-4'> <img src={img} alt="" /></div>
                    </div>

                    <div className='col-md-12 col-lg-8'>
                        <h5
                        >
                            CodeSchool partners with more than 200 leading universities and companies to bring flexible, affordable, job-relevant online learning to individuals and organizations worldwide. We offer a range of learning opportunities—from hands-on projects and courses to job-ready certificates and degree programs.
                            CodeSchool was founded by Daphne Koller and Andrew Ng in 2012 with a vision of providing life-transforming learning experiences to learners around the world. Today,CodeSchool is a global online learning platform that offers anyone, anywhere, access to online courses and degrees from leading universities and companies.CodeSchool received B Corp certification in February 2021, which means that we have a legal duty not only to our shareholders, but to also make a positive impact on society more broadly, as we continue our efforts to reduce barriers to world-class education for all.
                        </h5>
                    </div>
                </div>






            </div>
        </div>
    );
};

export default AboutUs;