import NavBar from './NavBar';
import './App.css'
import { useEffect, useState } from 'react';
import Loader from './components/Loader';
import MouseTracker from './components/MouseTracker';
function App() {
  const [loading, setLoading] = useState(true);
  const [theme, setTheme] = useState('light');


  useEffect(()=>{
    setTimeout(() => setLoading(false), 1500);
  },[]);

  return (
    <>
     {theme === 'dark'? <MouseTracker/> : null}
    {loading ? <Loader/> : <NavBar theme={theme} setTheme={setTheme}/> }    
    </>
  );
}

export default App;
