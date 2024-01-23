import { Image, Card, Button } from "react-bootstrap";
import myImg from "../img/paosanity.jpg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelopeOpen, faFile, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faGithub, faInstagram, faLinkedin, faXTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
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
            <Button className="resume"><FontAwesomeIcon icon={faFile} /> Resume</Button>
            <Button className="linkedIn"><FontAwesomeIcon icon={faLinkedin} /> LinkedIn</Button>
            <Card.Text className="location"><FontAwesomeIcon icon={faLocationDot} /> Toronto, ON, Canada</Card.Text>
            <div className="email">
            <Card.Link><FontAwesomeIcon icon={faEnvelopeOpen} /> paolocasison@gmail.com</Card.Link>
            </div>
            <div className="github">
            <Card.Link><FontAwesomeIcon icon={faGithub} /> github.com/paosanity</Card.Link>    
            </div>
            </Card.Body>

            <Card.Footer className="card-footer">
            <hr />
            <Card.Title className="socials">Socials</Card.Title>
            <div className="social-buttons-container">
            <Button className="social-button facebook"><FontAwesomeIcon icon={faFacebook} /></Button>
            <Button className="social-button twitter"><FontAwesomeIcon icon={faXTwitter} /></Button>
            <Button className="social-button instagram"><FontAwesomeIcon icon={faInstagram} /></Button>
            <Button className="social-button youtube"><FontAwesomeIcon icon={faYoutube} /></Button>
            </div>
            </Card.Footer>
        

            
        </Card>
        
        
    )
}

export default Sidebar;