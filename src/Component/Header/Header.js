import Button from 'react-bootstrap/Button';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
// Css
import './Header.css'

const Header = () => {
    return (
        <Navbar bg="light" expand="lg">
            <Container fluid>
                <Link className="company-name" to='/'>CodeSchool</Link>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    {/* Nav Link */}
                    <Nav
                        className="mx-auto my-2 my-lg-0 "
                        style={{ maxHeight: '300px' }}
                        navbarScroll
                    > <NavLink className="nav"
                        to="/home" activeStyle={{
                            fontWeight: "bold",
                            color: "blue"
                        }}>Home</NavLink>
                        <NavLink className="nav"
                            to="/about"
                            activeStyle={{
                                fontWeight: "bold",
                                color: "blue"
                            }}>About Us</NavLink>
                        <NavLink className="nav"
                            to="/courses"
                            activeStyle={{
                                fontWeight: "bold",
                                color: "blue"
                            }}>Our Courses</NavLink>
                        <NavLink className="nav"
                            to="/contact"
                            activeStyle={{
                                fontWeight: "bold",
                                color: "blue"
                            }}>Contact Us</NavLink>
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