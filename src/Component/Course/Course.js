import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { faDollarSign, faPlusCircle, faStar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Course.css'
const Course = (props) => {
    const add = <FontAwesomeIcon icon={faPlusCircle} />
    const dollar = <FontAwesomeIcon icon={faDollarSign} />
    const star = <FontAwesomeIcon icon={faStar} />
    const { name, price, description, img, instructor, rating } = props.course
    return (
        <div className="col-md-6 col-lg-4">

            <div>
                <Card>
                    <Card.Img variant="top" src={img} />
                    <Card.Body>
                        <h5 className='course-name'> {name}</h5>
                        <h6 className='course-description'> {description}</h6>
                        <p className='course-rating'>  {star}<span className='course-rating-number'> {rating}</span></p>
                        <p className='course-instructor'>   {instructor}</p>
                        <p className="course-price">Price: {dollar}{price}</p>
                        <Button variant="dark">{add} Enroll Now</Button>
                    </Card.Body>
                </Card>
            </div>

        </div>

    );
};

export default Course;