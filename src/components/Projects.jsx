import React from 'react';
import { Container, Card, Button } from 'react-bootstrap';
import '../styles/Projects.css';
// Import images for your projects (if available)
import project1Image from '../img/weather.png';
//import project2Image from '../img/project2.png';
// ... other project images

const Projects = () => {
    return (
        <Container className="projects">
            <h1>Here are some of my projects</h1>
            <div className="project-list">
                <Card className="project-card">
                    <Card.Img className='projectImg' variant="top" src={project1Image} />
                    <Card.Body>
                        <Card.Title>Project 1 Title</Card.Title>
                        <Card.Text>
                            Brief description of Project 1. Technologies used: HTML, CSS, JavaScript, React.
                        </Card.Text>
                        <Button href="#" variant="primary">View Project</Button>
                    </Card.Body>
                </Card>

                <Card className="project-card">
                    <Card.Img variant="top" />
                    <Card.Body>
                        <Card.Title>Project 2 Title</Card.Title>
                        <Card.Text>
                            Brief description of Project 2. Technologies used: Node.js, Express, MongoDB.
                        </Card.Text>
                        <Button href="#" variant="primary">View Project</Button>
                    </Card.Body>
                </Card>

                {/* Add more project cards here */}

            </div>
        </Container>
    );
};

export default Projects;
