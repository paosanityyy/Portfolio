import React, { useState } from 'react';
import Logo from '../img/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faCode, faUser, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import '../styles/input.css';

const links = [
    { href: 'about', text: 'About Me', icon: faUser },
    { href: 'overview', text: 'Overview', icon: faEye },
    { href: 'projects', text: 'Projects', icon: faCode },
    { href: 'contact', text: 'Contact', icon: faEnvelope },
];

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <header className="bg-amber-700 text-white sticky top-0 z-10">
            <section className="max-w-7xl mx-auto px-8 py-5 flex justify-between items-center">
                <a href='/'>
                    <img src={Logo} alt="logo" className='w-16' />
                </a>
                <div>
                    <button 
                        id="hamburger-button" 
                        className={`text-4xl md:hidden cursor-pointer relative w-8 h-8 ${menuOpen ? 'toggle-btn' : ''}`} 
                        onClick={toggleMenu}>
                        <div className="bg-white w-8 h-1 rounded absolute top-4 -mt-0.5 transition-all duration-500 before:content-[''] before:bg-white before:w-8 before:h-1 before:rounded before:absolute before:-translate-y-3 before:-translate-x-4 before:transition-all before:duration-500
                        after:content-[''] after:bg-white after:w-8 after:h-1 after:rounded 
                        after:absolute after:translate-y-3 
                        after:-translate-x-4 after:transition-all after:duration-500"></div>
                    </button>
                    <nav className="hidden md:block space-x-8 text-xl" aria-label="main">
                        {links.map((link, index) => (
                            <a key={index} href={link.href} className='hover:border-b-2 hover:border-white px-2 py-1'>
                                <FontAwesomeIcon icon={link.icon} /> {link.text}
                            </a>
                        ))}
                    </nav>
                </div>
            </section>
            <section id="mobile-menu" className={`absolute top-68 bg-black bg-opacity-90 w-full text-4xl flex-col justify-center origin-top ${menuOpen ? 'flex animate-open-menu' : 'hidden'}`}>
                {/* <button className="text-6xl self-end px-6" onClick={toggleMenu}>
                    &times;
                </button> */}
                <nav className="flex flex-col min-h-screen items-center mt-10" aria-label='mobile'>
                    {links.map((link, index) => (
                        <a key={index} href={link.href} className='w-full text-center mb-16 hover:text-amber-600'>
                            <FontAwesomeIcon icon={link.icon} /> {link.text}
                        </a>
                    ))}
                </nav>
            </section>
        </header>
    );
}

export default Navbar;
