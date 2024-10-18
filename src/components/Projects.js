import React, { useState } from 'react'
import { projects } from '../data/projects'
import Project from './Project'
import { ReactTyped } from "react-typed"



export default function Projects() {
  const [projectType, setProjectType] = useState("all");
  const filteredProjects = projects.filter(project => projectType === 'all' ||  project.type === projectType);
  return (
    <section id='projects'>
      <h1 className='text-center mb-5'>My creative Portfolio Section:</h1>

      <div className='project-filter nav nav-tabs mx-5 justify-content-around mb-5'>
        <button className='nav-link' onClick={() => { setProjectType('all') }}>All</button>
        <button className='nav-link' onClick={() => { setProjectType('front-end') }}>Front-End</button>
        <button className='nav-link' onClick={() => { setProjectType('back-end') }}>Back-End</button>
        <button className='nav-link' onClick={() => { setProjectType('full-stack') }}>Full-Stack</button>
        <button className='nav-link' onClick={() => { setProjectType('others') }}>Others</button>
      </div>

      <div className='d-flex justify-content-center align-items-center flex-wrap gap-5'>
        {
          filteredProjects.length > 0 ? filteredProjects.map((project) => <Project key={project.id} {...project} />) : 
         <h1>Coming Soon<ReactTyped strings={["..."]} typeSpeed={150} backSpeed={80} loop cursorChar='' /></h1>
          
        }
      </div>
    </section>
  )
}
