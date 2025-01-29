import React from 'react'

const Skill = (props) => {

    const { skillName, imgSrc } = props;

    return (
        <div className='d-flex flex-column justify-content-center align-items-center m-5 p-4  skill-container-animation'
            style={
                {
                    width: '8rem',
                    height:'8rem',
                }
            }
        >
            <div className='skill-img' >
                <img className='img img-fluid' src={imgSrc} alt={skillName} />
            </div>
            <div>
                {skillName}
            </div>
        </div>
    )
}

export default Skill