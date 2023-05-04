import React from 'react';
import { Button, Container, Nav, NavDropdown, Navbar } from 'react-bootstrap';
import { Form, Link, NavLink } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (

        <div>
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand href="#home">Chefs-Corner</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <NavLink className='text-decoration-none me-2' to="/">Home</NavLink>
                            <NavLink className='text-decoration-none' to="/blog">Blog</NavLink>
                        </Nav>
                    </Navbar.Collapse>

                    <button className='btn btn-primary'><Link className='text-white text-decoration-none' to="/login">Login</Link></button>
                </Container>
            </Navbar>
        </div>

    );
};

export default Header;