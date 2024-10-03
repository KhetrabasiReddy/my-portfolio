import React, { useEffect, useState } from 'react'

export default function ThemeSwitch(props) {
    const {theme, setTheme} = props;
    function handleChange(e) {
        const newTheme = e.target.checked ? 'dark' : 'light';
        setTheme(newTheme);
        localStorage.setItem('pageTheme', newTheme); 
    }

    useEffect(() => {
        const savedTheme = localStorage.getItem('pageTheme');
        if (savedTheme) {
            setTheme(savedTheme); 
        }
    }, []);

    useEffect(() => {
        document.documentElement.setAttribute('data-bs-theme', theme);
    }, [theme]);



  return (
    <div className="form-check form-switch">
    <input 
        id="theme-switch-btn"
        className="form-check-input"
        type="checkbox"
        onChange={handleChange}
        checked={theme === 'dark'} // Set checkbox based on the theme state
    />
    <label id='theme-label'  htmlFor='theme-switch-btn'>Dark Mode</label>    
  </div>
  )
}

