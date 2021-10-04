import React, { useEffect, useState } from 'react';
import Course from '../Course/Course';
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// Icon
const hat = <FontAwesomeIcon icon={faGraduationCap} />

const OurCourses = () => {
    const [ourCourses, setOurCourses] = useState([]);
    useEffect(() => {
        fetch('Data.JSON')
            .then(res => res.json())
            .then(data => setOurCourses(data))
    }, [])

    return (
        <div>
            <div className="container mt-3">
                <h3 className="course-heading">{hat}Our <span className='course-heading-span'>Courses</span></h3>
                <div className="row">
                    {
                        ourCourses.map(course => <Course key={course.id} course={course}></Course>)
                    }
                </div>
            </div>
        </div>
    );
};

export default OurCourses;