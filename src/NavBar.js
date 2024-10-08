
import { Navbar, Nav, Container } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './components/Home';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import ThemeSwitch from './components/ThemeSwitch';
import myResume from './data/KhetrabasiReddy_Software_Developer.pdf'
function NavBar(props) {

    return (
        <>
            <Router>
                <Navbar expand="lg ">
                    <Container >
                        <Navbar.Brand>
                            <a href={myResume} className='nav-link' target="_blank" rel="noreferrer" >
                                View Resume
                            </a>

                        </Navbar.Brand>
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
                            <div className='theme-switch text-center'><ThemeSwitch  {...props} /></div>
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
