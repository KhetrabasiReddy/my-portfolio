import React from 'react'
import Contact from './Contact'
import { ReactTyped } from "react-typed"
import profilePhoto from './../assets/images/profile-photo.jpg'
import javaImg from './../assets/images/java-img.png'
import reactImg from './../assets/images/react-img.png'
import bootstrapImg from './../assets/images/bootstrap-img.png'
export default function Home() {
  return (
    <>
      <div className='container-fluid ' id='hero-page'>
        <div className='row h-75'>
          <div className='col-md-12 h-100 col-lg-7 hero d-flex flex-column justify-content-center align-items-center '>
            <h1 className='display-1 fw-bold greet'>Hi, I'm  </h1>
            <h1 className='display-1 hero-name text-center'>
              {" "}
              <ReactTyped strings={["Khetrabasi", "A Software Developer"]} typeSpeed={80} backSpeed={30} loop />
            </h1>
            <p className='p-1 text-center lead my-2 fw-normal'>I am a dedicated front-end developer with strong expertise in <strong>HTML</strong>, <strong>CSS</strong>, <strong>JavaScript</strong>, <strong>Bootstrap</strong>, and <strong>React</strong>, specializing in building responsive and dynamic user interfaces. As I expand my knowledge into <strong>full-stack development</strong>, I am consistently enhancing my skills in Java and backend technologies. I am highly adaptable, a skilled problem-solver, and committed to delivering efficient, scalable applications while staying current with emerging technologies and best practices.</p>
          </div>
          <div className='col-md-12 h-100 col-lg-5  hero d-flex flex-column justify-content-center align-items-center'>
            <img className='rounded-circle object-fit-cover hero-img' src={profilePhoto} />
          </div>
        </div>
      </div>
    </>

  )
}
