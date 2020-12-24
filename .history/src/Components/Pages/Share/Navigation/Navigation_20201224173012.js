import { Dropdown } from 'bootstrap';
import React, { useContext } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../../App';

const Navigation = () => {
    const links = ['Home','Order Editing','Event','Contact'];
    const [loginUser,setLoginUser] = useContext(UserContext);
   
   
    const linkStyle ={
         textDecoration: 'none',
         fontSize:'16px',
         fontWeight:'600'    
    };

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
                    {
                        links.map((link,index) =>{
                              return (
                               <Link className="mr-5" to={`${link.toLocaleLowerCase().split(' ').join('-')}`} style={linkStyle}>
                                   {link}
                               </Link>
                              )
                        })
                    }


                    {loginUser.email} ? 
                       (
                        <>
                    <Dropdown>
                      <Dropdown.Toggle className="bg-transparent text-dark">
                        {loginUser.name}
                      <span className="profile-pic">
                        <img src={loginUser.photoURL} alt="login-user-pic" />
                      </span>
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                      <LinkContainer to="/dashboard">
                        <Dropdown.Item>Dashboard</Dropdown.Item>
                      </LinkContainer>
                      <Dropdown.Item onClick={handleSignOut}>
                        Sign Out
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </>
                       )
                     : (

                     )
                </Nav>
            </Navbar.Collapse>
           </Container>
        </Navbar>
   </header>
    );
};

export default Navigation;