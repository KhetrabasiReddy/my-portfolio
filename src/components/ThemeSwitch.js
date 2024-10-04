import React, { useEffect, useState } from 'react'

import lightMode from 'bootstrap-icons/icons/brightness-high.svg'
import darkMode from 'bootstrap-icons/icons/moon.svg'

export default function ThemeSwitch(props) {
    const { theme, setTheme } = props;
    function handleChange(e) {
        const newTheme = e.target.checked ? 'dark' : 'light';
        // const newTheme = theme === 'dark' ? 'light' : 'dark';
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
        <div className="form-check form-switch text-center">
            <input
                id="theme-switch-btn"
                className="d-none"
                type="checkbox"
                onChange={handleChange}
                checked={theme === 'dark'} // Set checkbox based on the theme state
            />
            <label id='theme-label' aria-hidden={true} htmlFor='theme-switch-btn' tooltip='switch theme'>  <img className='border bg-light rounded-circle p-3' src={theme === 'light' ? darkMode : lightMode} /></label>
        </div>
    )
}

