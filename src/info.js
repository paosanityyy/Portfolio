import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faUser, faFile } from "@fortawesome/free-regular-svg-icons";

import resume from './pdf/IT Resume 2.pdf';
import coverLetter from './pdf/Cover Letter.pdf';

import Paosanity from './img/paosanity.png';
import employeeMS from './img/emp.png';
import weather from './img/weather.png';
import tictactoe from './img/tictactoe.png';
import expense from './img/expense.png';
import central from './img/central.png';
import spring from './img/socmed.png';
import chat from './img/chat.png';
import spacex from './img/spacex.png';
import airbnb from './img/airbnb.png';


const info = {
    firstName: 'Pao',
    lastName: 'Casison',
    image: Paosanity,
    skills: ['Front-end Developer', 'Back-end Developer', 'Full Stack Developer'],
    position: 'Full Stack Developer',
    // Amber to Orange
    gradient: 'linear-gradient(135deg, #FF6A11 0%, #FFD700 100%)',
    contact: {
        email: 'paolocasison@gmail.com',
    },
    socials: [
        {
            url:'mailto:paolocasison@gmail.com',
            icon: <FontAwesomeIcon icon={faEnvelope} />,
        },
        {
            url:'https://www.linkedin.com/in/paolocasison/',
            icon: <FontAwesomeIcon icon={faLinkedin} />,
            name: 'LinkedIn'
        },
        {
            url:'https://www.github.com/paosanityyy',
            icon: <FontAwesomeIcon icon={faGithub} />,
            name: 'GitHub'
        },
        {
            url: resume,
            icon: <FontAwesomeIcon icon={faUser} />,
            name: 'Resume'
        },
        {
            url: coverLetter,
            icon: <FontAwesomeIcon icon={faFile} />,
            name: 'Cover Letter'
        }
    ],
    about:
        'I am a Full Stack Developer with a passion for creating and developing web applications. I have experience in both front-end and back-end development, and I am always eager to learn new technologies. I am a team player and I am always willing to help and share my knowledge with others. I am also a fast learner and I am always looking for ways to improve my skills and knowledge.',

    intro: 
        'Hello there! I am a recent honours graduate of George Brown College with an advanced diploma in Computer Programmer and Analysis. I am an aspiring Full Stack Developer residing in Toronto, Ontario, Canada, where in my opinion the opportunities are endless. I am a self-taught developer with a passion for creating and developing web applications. I have experience in both front-end and back-end development, and I am always eager to improve my craft and continue learning where the gift of technology takes us. I am a team player and I am always willing to help and collaborate my knowledge with others. I am also a fast learner and I am always looking for ways to improve my skills and knowledge.',

    techStack: [
        {
            name: 'HTML',
            icon: 'https://img.icons8.com/color/100/000000/html-5.png'
        },
        {
            name: 'CSS',
            icon: 'https://img.icons8.com/color/100/000000/css3.png'
        },
        {
            name: 'JavaScript',
            icon: 'https://img.icons8.com/color/100/000000/javascript.png'
        },
        {
            name: 'React',
            icon: 'https://img.icons8.com/color/100/000000/react-native.png'
        },
        {
            name: 'NodeJS',
            icon: 'https://img.icons8.com/fluency/100/node-js.png'
        },
        {
            name: 'ExpressJS',
            icon: 'https://img.icons8.com/100/f7f7f7/express-js.png'
        },
        {
            name: 'MongoDB',
            icon: 'https://img.icons8.com/color/100/000000/mongodb.png'
        },
        {
            name: 'SpringBoot',
            icon: 'https://img.icons8.com/color/100/000000/spring-logo.png'
        },
        {
            name: 'GraphQL',
            icon: 'https://img.icons8.com/color/100/000000/graphql.png'
        },
        {
            name: 'Tailwind CSS',
            icon: 'https://img.icons8.com/color/100/000000/tailwindcss.png'
        },
        {
            name: 'Python',
            icon: 'https://img.icons8.com/color/100/000000/python.png'
        },
        {
            name: 'Java',
            icon: 'https://img.icons8.com/color/100/000000/java-coffee-cup-logo.png'
        },
        {
            name: 'C#',
            icon: 'https://img.icons8.com/color/100/000000/c-sharp-logo.png'
        },
        {
            name: '.NET',
            icon: 'https://img.icons8.com/external-tal-revivo-bold-tal-revivo/100/f7f7f7/external-net-or-dot-net-a-software-framework-developed-by-microsoft-logo-bold-tal-revivo.png'
        },
        {
            name: 'Git',
            icon: 'https://img.icons8.com/color/100/000000/git.png'
        },
        {
            name: 'GitHub',
            icon: 'https://img.icons8.com/ios-filled/100/f7f7f7/github.png'
        },
        {
            name:'npm',
            icon: 'https://img.icons8.com/color/100/000000/npm.png'
        },     
    ],
    projects: [
        {
            name: 'Airbnb Clone',
            description: 'A web application that allows users to book accommodations and owners to add their places.',
            url: 'https://github.com/paosanityyy/airbnb-clone.git',
            techStack: ['MongoDB', 'ExpressJS', 'React', 'NodeJS'],
            screenshot: airbnb,
        },
        {
            name: 'Central Studios Mobile Application',
            description: "Our team developed a barber shop application that allows users to book appointments, leave reviews and live barber consultation feature",
            url: "https://github.com/paosanityyy/BarberApp.git",
            techStack: ['MongoDB', 'ExpressJS', 'React Native', 'NodeJS'],
            screenshot: central,
            youtube: 'https://youtu.be/nLOtsFYO4dA'
        },
        {
            name: "Spring Social Backend",
            description: "A social media backend application developed using Spring Boot",
            url: "https://github.com/paosanityyy/GBC_SpringSocial22.git",
            techStack: ['Spring Boot', 'Java'],
            screenshot: spring
        },
        {
            name: 'SpaceX Mission Tracker',
            description: 'A web application that allows users to track SpaceX missions. The application uses the SpaceX API to fetch the data of the missions.',
            url: 'https://github.com/paosanityyy/101384585-lab-test2-comp3133.git',
            techStack: ['Angular.JS', 'SpaceX API'],
            screenshot: spacex
        },
        {
            name: 'Chat Application',
            description: 'A chat application that allows users to chat with other users. The application uses Socket.IO to enable real-time, bidirectional and event-based communication.',
            url: 'https://github.com/paosanityyy/101384585_lab_test1_chat_app.git',
            techStack: ['HTML', 'CSS', 'JavaScript', 'React', 'Socket.IO'],
            screenshot: chat
        },
        {
            name: 'Employee Management System',
            description: 'A full stack web application that allows users to create, read, update, and delete employees. The front-end was built using React and the back-end was built using NodeJS, ExpressJS, and MongoDB.',
            url: 'https://github.com/paosanityyy/101384585_comp3123_assignment2.git',
            techStack: ['MongoDB','ExpressJS', 'React', 'NodeJS',],
            screenshot: employeeMS
        },
        {
            name: 'Weather App',
            description: 'A weather application that allows users to search for the weather of a specific city. The application uses the OpenWeatherMap API to fetch the weather data of the city.',
            url: "https://github.com/paosanityyy/101384585_comp3123_labtest2.git",
            techStack: ['HTML', 'CSS', 'JavaScript', 'React', 'Bootstrap'],
            screenshot: weather
        },
        {
            name: "Tic Tac Toe Java Application",
            description: "A Tic Tac Toe game developed using Java to implement what we have learned for our data structures and algorithms class",
            url: "https://github.com/paosanityyy/tic-tac-toe.git",
            techStack: ['Java'],
            screenshot: tictactoe
        },
        {
            name: "Expense Tracker",
            description: "An expense tracker python program that allows users to track their monthly expenses.",
            url: "https://github.com/paosanityyy/expense_tracker.git",
            techStack: ['Python', 'SQLite'],
            screenshot: expense
        }
    ],
}

export default info;
