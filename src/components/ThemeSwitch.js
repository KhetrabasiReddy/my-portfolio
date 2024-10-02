import React, { useEffect, useState } from 'react'

export default function ThemeSwitch() {
    const [theme, setTheme] = useState('light');
    function handleChange(e){
        if(e.target.checked){
            setTheme('dark');
        }else{
            setTheme('light');
        }
    }
    useEffect(()=>{
        document.documentElement.setAttribute('data-bs-theme',theme);
    },[theme]);

  return (
    <div className="form-check form-switch">
    <input className="form-check-input" type="checkbox" onChange={handleChange}/>
  </div>
  )
}

