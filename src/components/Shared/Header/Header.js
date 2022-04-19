import React from 'react';
import { signOut } from 'firebase/auth';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../../images/logo2.png'
import { FaCartPlus } from 'react-icons/fa';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
const Header = () => {

    const [user, loading, error] = useAuthState(auth);
    return (
        <Navbar sticky="top" collapseOnSelect expand="lg" bg="light" variant="light">
            <Container>
                <Navbar.Brand href="/">
                    <img style={{ width: "150px" }} src={logo} alt="red-onion" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#features">Features</Nav.Link>
                        <Nav.Link href="#pricing">Pricing</Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link className='text-dark' as={Link} to='/cart'><FaCartPlus /></Nav.Link>
                        {user ? <span onClick={() => signOut(auth)} className='border-0' ><span style={{ backgroundColor: "#F92C54" }} className='rounded-pill py-1 px-3 btn  text-white'>Log Out</span></span> :
                            <>

                                <Nav.Link className='text-dark' as={Link} to='/login'>Login</Nav.Link>
                                <Nav.Link as={Link} to='signup'>
                                    <span style={{ backgroundColor: "#F92C54" }} className='  rounded-pill py-1 px-3 text-white'>Sign Up </span>
                                </Nav.Link>
                            </>}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;