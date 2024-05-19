import { useState } from 'react';
import Logo from '../img/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faCode, faUser, faEnvelope } from '@fortawesome/free-solid-svg-icons';
const links = [
    { href: 'about', text: 'About Me', icon: faUser },
    { href: 'overview', text: 'Overview', icon: faEye },
    { href: 'projects', text: 'Projects', icon: faCode },
    { href: 'contact', text: 'Contact', icon: faEnvelope },
];

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return(
        <header className="bg-amber-700 text-white sticky top-0 z-10">
            <section className="max-w-7xl mx-auto p-4 flex justify-between items-center">
                <a href='/'>
                    <img src={Logo} alt="logo" className='w-16' />
                </a>
               <div>
                <button id="mobile-open-button" className="text-3xl md:hidden focus:outline-none focus:shadow-outline" onClick={toggleMobileMenu}>
                    &#9776;
                </button>
                <nav className="hidden md:block space-x-8 text-xl" aria-label="main">
                    {links.map((link, index) => (
                        <a key={index} href={link.href} className='hover:border-b-2 hover:border-white
                        px-2 py-1
                        '><FontAwesomeIcon icon={link.icon} /> {link.text}</a>
                    ))}
                </nav>
               </div>
            </section>
            {isMobileMenuOpen && (
                <div className="md:hidden fixed inset-0 bg-black bg-opacity-85 z-20 flex items-center justify-center animate__animated animate__slideInRight">
                    <nav className="bg-transparent p-6 space-y-4 text-center">
                        {/* close button on top right */}
                        <button
                            id="mobile-close-button"
                            className="text-5xl focus:outline-none focus:shadow-outline top-0 right-0 absolute p-4"
                            onClick={toggleMobileMenu}
                        >
                            &times;
                        </button>
                        {links.map((link, index) => (
                            <a
                                key={index}
                                href={link.href}
                                className='block text-white text-4xl p-3 hover:text-amber-300'
                                onClick={toggleMobileMenu}
                            >
                                <FontAwesomeIcon icon={link.icon} /> {link.text}
                            </a>
                        ))}
                    </nav>
                </div>
            )}
        </header>
    )
}

export default Navbar;