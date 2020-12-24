
import React, { useContext } from 'react';
import { Container, Dropdown, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../../App';
import { googleSignOut } from '../../../Authentication/AuthManager';
import '../../../Style/Navigation.css';
import logo from '../../../../images/Logo.png';

const Navigation = () => {
    const links = ['Home','Order Editing','Event','Contact'];
    const [loginUser,setLoginUser] = useContext(UserContext);
   
   
    const linkStyle ={
         textDecoration: 'none',
         fontSize:'16px',
         fontWeight:'600'    
    };


    const handleSignOut = () =>{
        googleSignOut();
        setLoginUser({});
    }

    return (
        <header>
        <Navbar bg="light" variant="light" expand="lg" collapseOnSelect>
          <Container>
            <Link to="/">
              <Navbar.Brand>
                <img src={logo} alt="" className='img-fluid'/>
              </Navbar.Brand>
            </Link>
  
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ml-auto">
                <Link to="/">
                  <Nav.Link>Home</Nav.Link>
                </Link>
                <Link to="/about">
                  <Nav.Link>About</Nav.Link>
                </Link>
                <Link to="/services">
                  <Nav.Link>Services</Nav.Link>
                </Link>
                <Link to="/concerns">
                  <Nav.Link>Concerns</Nav.Link>
                </Link>
                <Link to="/event">
                  <Nav.Link>Event</Nav.Link>
                </Link>
                <Link to="/contact">
                  <Nav.Link>Contact</Nav.Link>
                </Link>
                {loginUser.email? (
                  <>
                    <Dropdown>
                      <Dropdown.Toggle className="bg-transparent text-dark">
                        {loginUser.email}
                        <span className="profile-pic">
                          <img src={loginUser.photoURL} alt="login-user-pic" />
                        </span>
                      </Dropdown.Toggle>
  
                      <Dropdown.Menu>
                        <Link to="/dashboard">
                          <Dropdown.Item>Dashboard</Dropdown.Item>
                        </Link>
                        <Dropdown.Item onClick={handleSignOut}>
                          Sign Out
                        </Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </>
                ) : (
                  <Link to="/login">
                    <Nav.Link className="login-button bg-primary text-white rounded-sm">
                      Login
                    </Nav.Link>
                  </Link>
                )}
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>
    );
};

export default Navigation;


/*
<header>  
        <Navbar bg="light" variant="light" expand="lg" collapseOnSelect>
           <Container>
             <Link to='/'>
               <Navbar.Brand style={{width:'130px'}}>Business Man</Navbar.Brand>
             </Link>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    {
                        links.map((link,index) =>{
                              return (
                               <Link className="mr-5" to={`${link.toLocaleLowerCase().split(' ').join('-')}`} style={linkStyle} key={index}>
                                   {link}
                               </Link>
                              )
                        })
                    }
                    {loginUser.email? (
                    <>
                    <Dropdown>
                      <Dropdown.Toggle className="bg-transparent text-dark drop">
                        {loginUser.name}
                       <span className="profile-pic">
                         <img src={loginUser.photoURL} alt="login-user-pic" className="img-fluid" />
                      </span>
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                       <Link to="/dashboard">
                         <Dropdown.Item>Dashboard</Dropdown.Item>
                      </Link>
                      <Dropdown.Item onClick={handleSignOut}>
                        Sign Out
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                 </>)
                 : (
                     <Link style={linkStyle} to="/sign-in" className="login-button bg-primary text-white rounded-sm"> Login</Link>
                  )    
                 }  
                </Nav>
            </Navbar.Collapse>
           </Container>
        </Navbar>
   </header>

*/