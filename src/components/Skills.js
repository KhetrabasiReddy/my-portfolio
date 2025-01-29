import React from 'react'
import { skills } from './../data/skills'
import Skill from './Skill'
import './../styles/skills.css'
export default function Skills() {
  return (
    <div id='all-skills'>
      <h1 className='text-center mb-5'>Skills & Technologies</h1>
      <div className='skills-set d-flex flex-wrap gap-5 justify-content-center align-items-center'>
          {
           skills.map(
            (skill, index) => {
              return <Skill key={skill.skillName} {...skill}/>
            }
           )
          }
          
      </div>
    </div>
  )
}
