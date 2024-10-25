import NavBar from './components/NavBar';
import { useEffect, useState } from 'react';
import Loader from './components/Loader';
import MouseTracker from './components/MouseTracker';

// style imports
import './App.css'
import './styles/viewportAnimations.css'
import './styles/fontSize.css'
import Home from './components/Home';
import Projects from './components/Projects';
import Skills from './components/Skills';
import About from './components/About';
import { ReactTyped } from "react-typed"


function App() {
  const [loading, setLoading] = useState(true);
  const [theme, setTheme] = useState('light');


  useEffect(() => {
    setTimeout(() => setLoading(false), 1500);
  }, []);

  return (
    <>
      {theme === 'dark' ? <MouseTracker /> : null}
      {loading ? <Loader /> : <>
        <NavBar theme={theme} setTheme={setTheme} />
        <Home />
        <Projects />
        <Skills />
        <About />
       <h1 class="display-1 px-5 my-5"> <span class="text-danger fw-bold">NOTE:</span>This portfolio is currently a work in progress. New sections and content will be added soon<ReactTyped strings={["..."]} typeSpeed={80} backSpeed={30} loop /></h1>

      </>}

    </>
  );
}

export default App;
