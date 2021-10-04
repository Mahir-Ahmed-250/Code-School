import Button from 'react-bootstrap/Button';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './Header.css'
const Header = () => {
    return (
        <Navbar bg="light" expand="lg">
            <Container fluid>
                <Navbar.Brand className="company-name" href="/">CodeSchool</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="mx-auto my-2 my-lg-0 "
                        style={{ maxHeight: '300px' }}
                        navbarScroll
                    > <NavLink className="nav"
                        to="/home">Home</NavLink>
                        <NavLink className="nav"
                            to="/about">About Us</NavLink>
                        <NavLink className="nav"
                            to="/courses">Our Courses</NavLink>
                        <NavLink className="nav"
                            to="/contact">Contact Us</NavLink>

                    </Nav>
                    <Button className='login-btn' variant="outline-dark">
                        Login</Button>
                    <Button variant="outline-dark">
                        Sign Up</Button>

                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;