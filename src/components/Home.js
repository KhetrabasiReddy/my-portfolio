import React from 'react'
import { ReactTyped } from "react-typed"
import profilePhoto from './../assets/images/profile-photo.jpg'

import useInView from '../hooks/useInView'

import Contact from './Contact'
// import javaImg from './../assets/images/java-img.png'
// import reactImg from './../assets/images/react-img.png'
// import bootstrapImg from './../assets/images/bootstrap-img.png'
export default function Home() {
  const [ref, isInView] = useInView({ threshold: 0.1 });
  return (
    <>
      <div className='container-fluid' id='hero-page' style={{padding:'80px'}}>
        <div className=' d-flex flex-column flex-lg-row justify-content-around align-items-center text-center'>
          <div ref={ref} className={` hero p-3 fade-in-section ${isInView ? "is-visible" : ""}`}>
            <img className='h-100 w-100 rounded-circle object-fit-cover hero-img ' src={profilePhoto} />
          </div>
          <div className=''>
            <h1 className=' fw-bold greet'>Hi, I'm  </h1>
            <h1 className=' hero-name text-center'>
              {" "}
              <ReactTyped strings={["Khetrabasi", "A Developer"]} typeSpeed={80} backSpeed={30} loop />
            </h1>
            <p className='p-1 text-center my-2 fw-normal'>
              I am a dedicated front-end developer with strong expertise in <strong>HTML</strong>, <strong>CSS</strong>, <strong>JavaScript</strong>, <strong>Bootstrap</strong>, and <strong>React</strong>, specializing in building responsive and dynamic user interfaces. As I expand my knowledge into <strong>full-stack development</strong>, I am consistently enhancing my skills in <strong>Java</strong> and backend technologies. I am highly adaptable, a skilled problem-solver, and committed to delivering efficient, scalable applications while staying current with emerging technologies and best practices.
            </p>
          </div>
        </div>
      </div>
    </>

  )
}
