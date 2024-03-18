import React from 'react';
import '../styles/About.css';
import CoverLetter from '../assets/Cover Letter.pdf';
import { Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFile } from '@fortawesome/free-solid-svg-icons';

const About = () => {
    return (
        <div className='about-container'>
            <h1 className='aboutHeader'>Who is Pao?</h1>
            <p className='aboutTxt'>
                I am a Computer Programming and Analysis student from George Brown College with a passion for creating websites. I am a passionate Frontend Web developer with a strong foundation in HTML, CSS, JavaScript, and React.js. I am also familiar with back-end technologies such as Node.js, Express.js, and MongoDB. I am currently seeking a full-time position as a front-end web developer to further develop my skills and contribute to a team.
            </p>
            <h2 className='philosophy'>"Approach problems as bugs, not failures"</h2>
            {/* button for cover letter */}
            <Button href={CoverLetter} className='coverLetter'><FontAwesomeIcon icon={faFile} /> Cover Letter</Button>
        </div>
    );
};

export default About;