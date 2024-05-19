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
    return(
        <header className="bg-amber-700 text-white sticky top-0 z-10">
            <section className="max-w-7xl mx-auto p-4 flex justify-between items-center">
                <a href='/'>
                    <img src={Logo} alt="logo" className='w-16' />
                </a>
               <div>
                <button id="mobile-open-button" className="text-3xl md:hidden focus:outline-none focus:shadow-outline">&#9776;</button>
                <nav className="hidden md:block space-x-8 text-xl" aria-label="main">
                    {links.map((link, index) => (
                        <a key={index} href={link.href} className='hover:border-b-2 hover:border-white
                        px-2 py-1
                        '><FontAwesomeIcon icon={link.icon} /> {link.text}</a>
                    ))}
                </nav>
               </div>
            </section>
        </header>
    )
}

export default Navbar;