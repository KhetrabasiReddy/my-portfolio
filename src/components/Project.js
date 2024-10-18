import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import './../styles/project.css'
import useInView from '../hooks/useInView';


export default function Project(props) {
    const {id, name, technologies, description, challenges, image, githubLink, siteLink } = props;

    const [lgShow, setLgShow] = useState(false);
    const handleClose = () => setLgShow(false);
    const handleShow = () => setLgShow(true);

    const [ref, isInView] = useInView({ threshold: 0.1 });

    return (
        <>
            <div ref={ref} className={`project-thumbnail border border-secondary rounded ${id%2===0?'appear-left-section':'appear-right-section'} ${isInView ? "is-visible" : ""}`} onClick={handleShow} style={{ cursor: 'pointer' }}>
                <img src={image} className='w-100 h-100 object-fit-cover rounded' loading='lazy' />
                <p className='text-center'>{name}</p>
            </div>

            <Modal size="lg"
                show={lgShow}
                onHide={() => setLgShow(false)}
            >
                <Modal.Header closeButton>
                    <Modal.Title>{name}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <picture className='project-image d-block'>
                        <img src={image} className='w-100 h-100 rounded object-fit-cover' loading='lazy' />
                    </picture>
                    <p className='my-1'>Technologies Used:
                        {
                            technologies.map((tech,index) => <span key={tech} className='btn mx-1 text-dark fw-bold' style={{backgroundColor:`var(--${tech.toLowerCase()}-color)`}} >{tech}</span>)
                        }

                    </p>
                    <p>Challenge: <span className='btn btn-secondary '>{challenges}</span></p>
                    <ul>
                        {description.map((desc) => <li key={desc}>{desc}</li>)}
                    </ul>
                </Modal.Body>
                <Modal.Footer>
                    <a className='btn btn-info' href={githubLink} target='_blank'>source code</a>
                    <a className='btn btn-primary' href={siteLink} target='_blank' >visit site</a>
                    <Button variant="danger" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}