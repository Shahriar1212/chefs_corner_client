import React, { useContext } from 'react';
import { Button, Container, Nav, NavDropdown, Navbar } from 'react-bootstrap';
import { Form, Link, NavLink } from 'react-router-dom';
import './Header.css'
import { AuthContext } from '../../Providers/AuthProviders';

const Header = () => {

    const { user, logOut } = useContext(AuthContext);
    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .then(error => {
                console.error(error);
            })
    }


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

                    {
                        user ?
                            <Navbar.Collapse id="basic-navbar-nav">
                                <Nav className="me-auto">
                                    <div className="d-flex justify-content-center align-items-center me-2">
                                        <img src={user.photoURL} placeholder='user image' title={user.displayName}
                                            className="rounded-circle shadow-1-strong" width="40" height="40" />
                                    </div>
                                </Nav>
                            </Navbar.Collapse>
                            :
                            <div></div>
                    }
                    {
                        user ?

                            <div>
                                <span className='user-email'>{user && user.email}</span>
                                <button className="btn btn-primary" onClick={handleLogOut}>Sigh Out</button>
                            </div>


                            :
                            <><button className='btn btn-primary'><Link className='text-white text-decoration-none' to="/login">Login</Link></button></>
                    }

                </Container>
            </Navbar>
        </div>

    );
};

export default Header;