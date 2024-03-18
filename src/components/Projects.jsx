import React from "react";
import { Card, Button } from "react-bootstrap";
import '../styles/Projects.css'; // Import your CSS file for styling
import project1Image from '../img/weather.png';
import project2Image from '../img/emp.png';
import project3Image from '../img/tictactoe.png';
import project4Image from '../img/expense.png';
import project5Image from '../img/heat.png';
import capstone from '../img/central.png';
import { Link } from "react-router-dom";

function Project({ name, description, techStack, image, hasRepo, hasDocu, repoLink }) {
    return (
        <Card className="project-card">
            <div className="image-container">
                <img src={image} alt={name} className="project-image" />
                <div className="overlay">
                    <div className="project-info">
                        <h5 className="project-name">{name}</h5>
                        <p className="project-description">{description}</p>
                        <p className="project-tech-stack">Tech Stack: {techStack}</p>
                        {hasRepo && <Button href={repoLink} className='project-btn'>View Project</Button>}
                        <br />
                        <br />
                        {hasDocu && (
                            <Link to="/documentation" className="project-btn">
                                View Documentation
                            </Link>)}
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
            image: capstone,
            hasRepo: true,
            hasDocu: true,
            repoLink: "https://github.com/paosanityyy/BarberApp.git"
        },
        {
            name: "Weather App",
            description: "Weather web application with the help of OpenWeather API.",
            techStack: "HTML, CSS, JavaScript, React.js, Bootstrap, OpenWeather API.",
            image: project1Image,
            hasRepo: true,
            hasDocu: false,
            repoLink: "https://github.com/paosanityyy/101384585_comp3123_labtest2.git"

        },
        {
            name: "Employee Management System",
            description: "Employee management system that allows users to add, edit, and delete employees.",
            techStack: "MERN Stack (MongoDB, Express.js, React.js, Node.js), Bootstrap.",
            image: project2Image,
            hasRepo: true,
            hasDocu: false,
            repoLink: "https://github.com/paosanityyy/101384585_comp3123_assignment2.git"
        },
        {
            name: "Tic Tac Toe Java Application",
            description: "A Tic Tac Toe game developed using Java to implement what we have learned for our data structures and algorithms class",
            techStack: "Java",
            image: project3Image,
            hasRepo: true,
            hasDocu: false,
            repoLink: "https://github.com/paosanityyy/tic-tac-toe.git"
        },
        {
            name: "Expense Tracker",
            description: "An expense tracker python program that allows users to track their monthly expenses.",
            techStack: "Python, SQLite3",
            image: project4Image,
            hasRepo: true,
            hasDocu: false,
            repoLink: "https://github.com/paosanityyy/expense_tracker.git"
        },
        {
            name: "Heat Cheque",
            description: "A simple landing page for a sneaker shop",
            techStack: "HTML, CSS",
            image: project5Image,
            hasRepo: false,
            hasDocu: false,
            repoLink: ""
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
                    hasRepo={project.hasRepo}
                    hasDocu={project.hasDocu}
                    repoLink={project.repoLink}
                />
            ))}
        </div>
    );
};

export default Projects;
