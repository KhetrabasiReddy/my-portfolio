import NavBar from './NavBar';
import { useEffect, useState } from 'react';
import Loader from './components/Loader';
import MouseTracker from './components/MouseTracker';

// style imports
import './App.css'
import './styles/viewportAnimations.css'
import './styles/fontSize.css'

import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';


function App() {
  const [loading, setLoading] = useState(true);
  const [theme, setTheme] = useState('light');


  useEffect(()=>{
    setTimeout(() => setLoading(false), 1500);
  },[]);

  return (
    <>
     {theme === 'dark'? <MouseTracker/> : null}
    {loading ? <Loader/> :<> <NavBar theme={theme} setTheme={setTheme}/></> }    
    </>
  );
}

export default App;
