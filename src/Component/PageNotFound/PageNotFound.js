import React from 'react';
import img1 from './image/notfound.png'
import img2 from './image/notfound1.png'
import './PageNotFound.css'
const PageNotFound = () => {
    return (
        <div className="container me-3">
            <div className="row">
                <div className="col-md-6">
                    <img className='notfound' src={img1} alt="" />
                </div>
                <div className="col-md-6">
                    <img className='notfound' src={img2} alt="" />
                </div>
            </div>
        </div>

    );
};

export default PageNotFound;