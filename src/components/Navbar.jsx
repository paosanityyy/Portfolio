import React from 'react';
import Nav from 'react-bootstrap/Nav';
import { NavLink, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faContactCard, faEye, faFolderClosed, faTerminal } from '@fortawesome/free-solid-svg-icons';
import logo from '../img/logo.PNG';
import '../styles/Navbar.css';

function NavTabs() {
    const location = useLocation();
    
    const getNavLinkClass = (path) => {
        return location.pathname === path ? 'active-nav-link' : '';
    };

    return (
        <Nav className='navigation' variant="tabs" defaultActiveKey="/overview">
            <div className="navbar-logo">
                <img src={logo} alt="Logo" />
            </div>  
            <Nav.Item>
                <NavLink to="/overview" className={`nav-link ${getNavLinkClass('/overview')}`}>
                    <FontAwesomeIcon icon={faEye} /> Overview
                </NavLink>
            </Nav.Item>
            <Nav.Item>
                <NavLink to="/projects" className={`nav-link ${getNavLinkClass('/projects')}`}>
                    <FontAwesomeIcon icon={faFolderClosed} /> Projects
                </NavLink>
            </Nav.Item>
            <Nav.Item>
                <NavLink to="/about" className={`nav-link ${getNavLinkClass('/about')}`}>
                    <FontAwesomeIcon icon={faTerminal} /> About Me
                </NavLink>
            </Nav.Item>
            <Nav.Item>
                <NavLink to="/contact" className={`nav-link ${getNavLinkClass('/contact')}`}>
                    <FontAwesomeIcon icon={faContactCard} /> Contact
                </NavLink>
            </Nav.Item>
        </Nav>
    );
}

export default NavTabs;
