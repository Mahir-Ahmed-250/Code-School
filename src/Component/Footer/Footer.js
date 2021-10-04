import React from 'react';
import './Footer.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebook, faYoutube, faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons"

const facebook = <FontAwesomeIcon icon={faFacebook} />
const youtube = <FontAwesomeIcon icon={faYoutube} />
const linkedln = <FontAwesomeIcon icon={faLinkedin} />
const github = <FontAwesomeIcon icon={faGithub} />



const Footer = () => {

    return (
        <div className="bg-light">
            <div className='container'>

                <div className='d-flex justify-content-center icon'>
                    <h1 className="icon">{facebook}</h1>
                    <h1 className="icon">{youtube}</h1>
                    <h1 className="icon">{linkedln}</h1>
                    <h1 className="icon">{github}</h1>
                </div>
            </div>
            <p className="copyright">Copyright © 2022 CodeSchool</p>
        </div>

    );
};

export default Footer;