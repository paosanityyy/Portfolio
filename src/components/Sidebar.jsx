import { Image, Card, Button } from "react-bootstrap";
import myImg from "../img/paosanity.jpg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelopeOpen, faFile, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faGithub, faInstagram, faLinkedin, faXTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import resumeFile from "../assets/Paolo Casison Official Resume.pdf";
import '../styles/Sidebar.css';

function Sidebar() {
    return (
        <Card className="sidebar">
            <Card.Header className="card-header-center">
            <Image src={myImg} className="dp"/>
            </Card.Header>
            
            <Card.Body className="card-body">
            <Card.Title className="name">Paolo Casison</Card.Title>
            <Card.Text className="title">Front End Web Developer</Card.Text>
            <a href={resumeFile}>
                <Button className="resume"><FontAwesomeIcon icon={faFile} /> Resume</Button>
            </a>
            <a href="https://www.linkedin.com/in/paolo-casison-5387511bb/" target="_blank" rel="noopener noreferrer">
                <Button className="linkedIn">
                    <FontAwesomeIcon icon={faLinkedin} /> LinkedIn
                </Button>
            </a>
            <Card.Text className="location"><FontAwesomeIcon icon={faLocationDot} /> Toronto, ON, Canada</Card.Text>
            <div className="email">
            <Card.Link><FontAwesomeIcon icon={faEnvelopeOpen} /> paolocasison@gmail.com</Card.Link>
            </div>
            <div className="github">
            <a href="https://github.com/paosanityyy" target="_blank" rel="noopener noreferrer" style={{textDecoration: "none"}} > 
                <Card.Link><FontAwesomeIcon icon={faGithub} /> github.com/paosanity</Card.Link>
            </a>

                
            </div>
            </Card.Body>

            <Card.Footer className="card-footer">
            <hr />
            <Card.Title className="socials">Socials</Card.Title>
            <div className="social-buttons-container">
            <a href="https://www.facebook.com/paosanityyy">
                <Button className="social-button facebook"><FontAwesomeIcon icon={faFacebook} /></Button>
            </a>
            <a href="https://twitter.com/paosanity_">
                <Button className="social-button twitter"><FontAwesomeIcon icon={faXTwitter} /></Button>
            </a>
            <a href="https://www.instagram.com/paosanity_/">
                <Button className="social-button instagram"><FontAwesomeIcon icon={faInstagram} /></Button>
            </a>
            <a href="https://www.youtube.com/channel/UCuRvn7BKZqD1BC9_yMpEk1g">
                <Button className="social-button youtube"><FontAwesomeIcon icon={faYoutube} /></Button>
            </a>
            
            </div>
            </Card.Footer>
        

            
        </Card>
        
        
    )
}

export default Sidebar;