import React from "react";
import { Card, Button } from "react-bootstrap";
import '../styles/Projects.css'; // Import your CSS file for styling
import project1Image from '../img/weather.png';
import project2Image from '../img/emp.png';
import project3Image from '../img/tictactoe.png';
import project4Image from '../img/expense.png';
import project5Image from '../img/heat.png';
import capstone from '../img/central.png';

function Project({ name, description, techStack, image }) {
    return (
        <Card className="project-card">
            <div className="image-container">
                <img src={image} alt={name} className="project-image" />
                <div className="overlay">
                    <div className="project-info">
                        <h5 className="project-name">{name}</h5>
                        <p className="project-description">{description}</p>
                        <p className="project-tech-stack">Tech Stack: {techStack}</p>
                        <Button href="#" className='project-btn' >View Project</Button>
                    </div>
                </div>
            </div>
        </Card>
    );
}

const Projects = () => {
    const projects = [
        {
            name: "Central Studios Application",
            description: "Our team developed a barber shop application that allows users to book appointments, leave reviews and live barber consultation feature",
            techStack: "MongoDB, Express.js, React Native, Node.js",
            image: capstone
        },
        {
            name: "Weather App",
            description: "Weather web application with the help of OpenWeather API.",
            techStack: "HTML, CSS, JavaScript, React.js, Bootstrap, OpenWeather API.",
            image: project1Image
        },
        {
            name: "Employee Management System",
            description: "Employee management system that allows users to add, edit, and delete employees.",
            techStack: "MERN Stack (MongoDB, Express.js, React.js, Node.js), Bootstrap.",
            image: project2Image
        },
        {
            name: "Tic Tac Toe Java Application",
            description: "A Tic Tac Toe game developed using Java to implement what we have learned for our data structures and algorithms class",
            techStack: "Java",
            image: project3Image
        },
        {
            name: "Expense Tracker",
            description: "An expense tracker python program that allows users to track their monthly expenses.",
            techStack: "Python, SQLite3",
            image: project4Image
        },
        {
            name: "Heat Cheque",
            description: "A simple landing page for a sneaker shop",
            techStack: "HTML, CSS",
            image: project5Image
        }
    ];

    return (
        <div className="projects-container">
            {projects.map((project, index) => (
                <Project
                    key={index}
                    name={project.name}
                    description={project.description}
                    techStack={project.techStack}
                    image={project.image}
                />
            ))}
        </div>
    );
};

export default Projects;
