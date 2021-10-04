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
                    <a href="www.facebook.com"><h1 className="icon facebook">{facebook}</h1></a>
                    <a href="https://www.youtube.com/"> <h1 className="icon youtube">{youtube}</h1></a>
                    <a href="https://www.linkedin.com/"> <h1 className="icon linkedln">{linkedln}</h1></a>
                    <a href="https://github.com/"> <h1 className="icon git">{github}</h1></a>
                </div>
            </div>
            <p className="copyright">Copyright © 2022 CodeSchool</p>
        </div>

    );
};

export default Footer;