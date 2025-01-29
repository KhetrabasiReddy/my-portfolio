import React from 'react'
import { ReactTyped } from "react-typed"
import profilePhoto from './../assets/images/profile-photo.jpg'

import useInView from '../hooks/useInView'

export default function Home() {
  const [ref, isInView] = useInView({ threshold: 0.1 });
  return (
    <>
      <div className='container-fluid' id='hero-page' style={{ padding: '80px' }}>
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
              Hi, I'm Khetrabasi Reddy, a software developer skilled in Java, Spring Boot, Hibernate, MySQL, React, and JavaScript. I enjoy building clean, efficient, and scalable applications. Currently, I'm looking for my first developer role where I can contribute and grow.
            </p>
          </div>
        </div>
      </div>
    </>

  )
}
