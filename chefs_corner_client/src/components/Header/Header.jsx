import React from 'react';
import { Button, Container, Nav, NavDropdown, Navbar } from 'react-bootstrap';
import { Form } from 'react-router-dom';

const Header = () => {
    return (

        <div>
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand href="#home">Chefs-Corner</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#blog">Blog</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>

                    <button className='btn btn-primary'>Login</button>
                </Container>
            </Navbar>
        </div>

    );
};

export default Header;