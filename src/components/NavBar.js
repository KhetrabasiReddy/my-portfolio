import myResume from './../data/Khetrabasi_Reddy.pdf'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import ThemeSwitch from './ThemeSwitch'
function NavBar(props) {

    return (
        <>
           <Navbar expand="lg" className="">
                <Container>
                    <Navbar.Brand>
                            <a href={myResume} className='nav-link' target="_blank" rel="noreferrer" >
                                View Resume
                            </a>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mx-auto gap-2 ">
                            <Nav.Link href="#hero-page">Home</Nav.Link>
                            <Nav.Link href="#projects">Projects</Nav.Link>
                            <Nav.Link href="#skills">Skills</Nav.Link>
                            <Nav.Link href="#about">About</Nav.Link>
                        </Nav>
                        <div className='theme-switch text-center'><ThemeSwitch  {...props} /></div>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
}

export default NavBar;
