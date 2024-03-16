import React from 'react';
import { Container, Card, Button } from 'react-bootstrap';
import '../styles/Projects.css';
// Import images for your projects (if available)
import project1Image from '../img/weather.png';
import project2Image from '../img/emp.png';
// ... other project images

const Projects = () => {
    return (
        <Container className="projects">
            <h1 className='introProj'>Here are some of my projects</h1>
            <div className="project-list">
                <Card className="project-card">
                    <Card.Img className='projectImg' variant="top" src={project1Image} />
                    <Card.Body className='projectBody'>
                        <Card.Title className='projectTitle'>Weather App</Card.Title>
                        <Card.Text className='projectTxt'>
                            Weather web application with the help of OpenWeather API.
                        </Card.Text>
                        <Card.Text className='techStack'>
                            Technologies used: HTML, CSS, JavaScript, React.js, Bootstrap, OpenWeather API.
                        </Card.Text>
                        <Button href="#" className='project-btn' >View Project</Button>
                    </Card.Body>
                </Card>

                <Card className="project-card">
                <Card.Img className='projectImg' variant="top" src={project2Image} />
                    <Card.Body className='projectBody'>
                    <Card.Title className='projectTitle'>Employee Management System</Card.Title>
                        <Card.Text className='projectTxt'>
                            Employee management system that allows users to add, edit, and delete employees.
                        </Card.Text>
                        <Card.Text className='techStack'>
                            Technologies used: MERN Stack (MongoDB, Express.js, React.js, Node.js), Bootstrap.
                        </Card.Text>
                        <Button href="#" className='project-btn' >View Project</Button>
                    </Card.Body>
                </Card>

                {/* Add more project cards here */}

            </div>
        </Container>
    );
};

export default Projects;
