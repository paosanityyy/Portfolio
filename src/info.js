import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub, faInstagram, faFacebook, faXTwitter, faYoutube,  } from "@fortawesome/free-brands-svg-icons";
import { faUser, faFile } from "@fortawesome/free-regular-svg-icons";

import resume from './pdf/Paolo Casison Official Resume.pdf';
import coverLetter from './pdf/Cover Letter.pdf';

import Paosanity from './img/paosanity.png';
import employeeMS from './img/emp.png';
import weather from './img/weather.png';
import tictactoe from './img/tictactoe.png';
import expense from './img/expense.png';
import central from './img/central.png';


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
            url:'https://www.linkedin.com/in/paolo-casison-5387511bb/',
            icon: <FontAwesomeIcon icon={faLinkedin} />,
            name: 'LinkedIn'
        },
        {
            url:'https://www.github.com/paosanityyy',
            icon: <FontAwesomeIcon icon={faGithub} />,
            name: 'GitHub'
        },
        {
            url:'https://www.facebook.com/paosanityyy',
            icon: <FontAwesomeIcon icon={faFacebook} />,
            name: 'Facebook'
        },
        {
            url:'https://www.instagram.com/paosanity_/',
            icon: <FontAwesomeIcon icon={faInstagram} />,
            name: 'Instagram'
        },
        {
            url:'https://www.twitter.com/paosanity_/',
            icon: <FontAwesomeIcon icon={faXTwitter} />,
            name: 'X'
        },
        {
            url:'https://www.youtube.com/channel/UCuRvn7BKZqD1BC9_yMpEk1g',
            icon: <FontAwesomeIcon icon={faYoutube} />,
            name: 'YouTube'
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
        'Hello there! I am a recent graduate of George Brown College with an advanced diploma in Computer Programmer and Analysis. I am an aspiring Full Stack Developer residing in Toronto, Ontario, Canada, where in my opinion the opportunities are endless. I am a self-taught developer with a passion for creating and developing web applications. I have experience in both front-end and back-end development, and I am always eager to improve my craft and continue learning where the gift of technology takes us. I am a team player and I am always willing to help and collaborate my knowledge with others. I am also a fast learner and I am always looking for ways to improve my skills and knowledge.',

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
            name: 'Central Studios Mobile Application',
            description: "Our team developed a barber shop application that allows users to book appointments, leave reviews and live barber consultation feature",
            url: "https://github.com/paosanityyy/BarberApp.git",
            techStack: ['MongoDB', 'ExpressJS', 'React Native', 'NodeJS'],
            screenshot: central,
            youtube: 'https://youtu.be/nLOtsFYO4dA'
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
            techStack: ['HTML', 'CSS', 'JavaScript', 'React', 'Bootstrap', 'OpenWeatherMap API'],
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
        },
    ],
}

export default info;
