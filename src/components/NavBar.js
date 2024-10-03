// import { NavLink, Link, Route, Routes } from 'react-router-dom';
// import { Navbar, Nav, Container } from 'react-bootstrap';

import { Navbar, Nav, Container } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './../styles/App.css'
import Home from './Home';
import Projects from './Projects';
import Skills from './Skills';
import Contact from './Contact';
import ThemeSwitch from './ThemeSwitch';

function NavBar() {
    return (
        <>
            <Router>
                <Navbar expand="md sticky-top">
                    <Container >

                        <Navbar.Brand> <a href="./../data/KhetrabasiReddy_Software_Developer.pdf" download="Resume" className="nav-link" target='_blank'>
                            Resume
                        </a></Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="mx-auto gap-2 ">
                                <LinkContainer to="/">
                                    <Nav.Link>Home</Nav.Link>
                                </LinkContainer>
                                <LinkContainer to="/projects">
                                    <Nav.Link>Projects</Nav.Link>
                                </LinkContainer>
                                <LinkContainer to="/skills">
                                    <Nav.Link>Skills</Nav.Link>
                                </LinkContainer>
                                <LinkContainer to="/contact">
                                    <Nav.Link>Contact</Nav.Link>
                                </LinkContainer>
                                
                            </Nav>
                            <div className='theme-switch d-flex gap-1'><ThemeSwitch /></div>
                        </Navbar.Collapse>
                        
                    </Container>
                </Navbar>


                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/projects' element={<Projects />} />
                    <Route path='/skills' element={<Skills />} />
                    <Route path='/contact' element={<Contact />} />
                </Routes>

            </Router>
        </>
    );
}

export default NavBar;