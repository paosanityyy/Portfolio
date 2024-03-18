import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import '../styles/Overview.css';
import htmlImg from "../img/html.png";
import cssImg from "../img/css.png";
import jsImg from "../img/js.png";
import reactImg from "../img/react.png";
import nodeImg from "../img/node.png";
import javaImg from "../img/java.png";
import csharpImg from "../img/csharp.png";
import phpImg from "../img/php.png";
import springImg from "../img/spring.png";
import netImg from "../img/net.png";
import androidImg from "../img/android.png";
import swiftImg from "../img/swift.png";
import pyImg from "../img/python.png";
import ghubImg from "../img/github.png";
import gitImg from "../img/git.png";
import Typewriter from 'typewriter-effect';

const Overview = () => {
    return (
        <Container className="overview">
            <style>
            @import url('https://fonts.googleapis.com/css2?family=Creepster&family=Poppins:wght@200&family=Roboto:wght@300;700&display=swap');
            </style>
            <Row className="align-items-center">
                <Col md={6}>
                    <h1 className='typewriter'>
                        <Typewriter
                            options={{
                                strings: ['I love to code!', 'Frontend', 'Backend', 'Full-stack'],
                                autoStart: true,
                                loop: true,
                                delay: 50,
                            }}
                        />
                    </h1>
                </Col>
                <Col md={6}>
                    <h2 className='langTools'>Languages and Tools</h2>
                    <div className='grid-container'>
                        <ul>
                            <li><Image src={htmlImg} /><span>HTML</span></li>
                            <li><Image src={cssImg} /><span>CSS</span></li>
                            <li><Image src={jsImg} /><span>Javascript</span></li>
                            <li><Image src={reactImg} /><span>React</span></li>
                            <li><Image src={nodeImg} /><span>Node.js</span></li>
                            <li><Image src={javaImg} style={{width:'30px', height:'auto'}}/><span>Java</span></li>
                            <li><Image src={csharpImg} /><span>C#</span></li>
                            <li><Image src={phpImg} style={{width:'80px', height:'auto', marginBottom:'20px'}}/><span>PHP</span></li>
                            <li><Image src={springImg} /><span>Springboot</span></li>
                            <li><Image src={netImg} /><span>.NET</span></li>
                            <li><Image src={androidImg} /><span>Android Studio</span></li>
                            <li><Image src={swiftImg} /><span>Swift</span></li>
                            <li><Image src={pyImg} /><span>Python</span></li>
                            <li><Image src={ghubImg} style={{filter: 'invert(1)'}} /><span>Github</span></li>
                            <li><Image src={gitImg} /><span>Git</span></li>
                        </ul>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default Overview;
