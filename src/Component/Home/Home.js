import React, { useEffect, useState } from 'react';
import { Carousel, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { faArrowAltCircleRight, faGraduationCap } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import HomePreview from '../HomePreview/HomePreview';
import img1 from './banner/banner1.jpg'
import img2 from './banner/banner2.jpg'
import img3 from './banner/banner3.jpg'
import './Home.css'


const Home = () => {
    const arrow = <FontAwesomeIcon icon={faArrowAltCircleRight} />
    const hat = <FontAwesomeIcon icon={faGraduationCap} />
    const [previewCourses, setPreviewCourses] = useState([]);
    useEffect(() => {
        fetch('Data.JSON')
            .then(res => res.json())
            .then(data => setPreviewCourses(data))
    }, [])
    return (
        <>
            <Carousel className="slide container" variant="dark">
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={img1}
                        alt="First slide"
                    />
                    <Carousel.Caption>

                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={img2}
                        alt="Second slide"
                    />
                    <Carousel.Caption>

                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={img3}
                        alt="Third slide"
                    />
                    <Carousel.Caption>

                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            <div className="container mt-5">
                <h3 className="course-heading">{hat}Our <span className='course-heading-span'>Courses</span></h3>
                <div className="row">

                    {
                        previewCourses.slice(0, 4).map(course => <HomePreview key={course.id} course={course}></HomePreview>)
                    }
                </div>
                <br />
                <div className="d-flex justify-content-center">
                    <Link to='./courses'>
                        <Button className="w-100 btn-more
                        ">See More Courses {arrow}</Button>
                    </Link>
                </div>
            </div>

        </>
    );
};

export default Home;