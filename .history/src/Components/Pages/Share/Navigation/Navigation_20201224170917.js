import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Navigation = () => {
    return (
    <header>  
        <Navbar bg="light" expand="lg" collapseOnSelect>
           <Container>
             <Link to='/'>
             <Navbar.Brand>Business Man</Navbar.Brand>
             </Link>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                
                </Nav>
            </Navbar.Collapse>
           </Container>
        </Navbar>
   </header>
    );
};

export default Navigation;