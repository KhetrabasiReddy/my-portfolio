import { Link,Route,Routes } from 'react-router-dom';
import './../styles/App.css'
import Home from './Home';
import Projects from './Projects';
import Skills from './Skills';
import Contact from './Contact';
import ThemeSwitch from './ThemeSwitch';
function NavBar() {
  return (
    <>
     <nav>
        <ul className='navigation-bar nav align-items-center'>
         <li className='nav-item'><Link to='/' className='nav-link'>Home</Link></li>
         <li className='nav-item'><Link to='/projects-page' className='nav-link'>Projects</Link></li>
         <li className='nav-item'><Link to='/skills-page' className='nav-link'>Skills</Link></li>
         <li className='nav-item'><Link to='/contact-page' className='nav-link'>Contact</Link></li>
         <li className='theme-switch d-flex gap-1'>Dark Mode<ThemeSwitch /> </li>
        </ul>
      </nav>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/projects-page' element={<Projects />} />
        <Route path='/skills-page' element={<Skills />} />
        <Route path='/contact-page' element={<Contact />} />
      </Routes>
    
    </>
  );
}

export default NavBar;
