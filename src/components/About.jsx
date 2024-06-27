import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import info from '../info';
import '../styles/About.css';
import 'animate.css';
import { faFile, faEnvelope } from '@fortawesome/free-regular-svg-icons';
import resume from '../pdf/IT Resume 2.pdf';

const About = () => {
    return(
        <section id="hero" className="mt-16 flex flex-col-reverse justify-between sm:flex-col-reverse md:flex-row items-center widescreen:section-min-height tallscreen:section-min-height">
        <article className="w-5/6 md:w-2/3 p-0 md:p-10 flex flex-col items-center justify-center flex-grow">
                <h1 className="text-5xl md:text-6xl font-bold text-center">Hi! I'm <span className="bg-clip-text text-transparent" style={{backgroundImage: info.gradient}}>{info.firstName} </span> 
                    <span className='wave-hand'>
                        👋
                    </span>
                </h1>
                <p className="text-2xl mt-4 text-justify text-slate-400">
                    {info.about}
                </p>
                <div>
                    <ul id="social-links" className="flex flex-wrap justify-center items-center gap-3 mx-3 my-5">
                        {info.socials.map((social, index)=> (
                            index < info.socials.length - 2 && (
                                <a href={social.url} className="w-12 h-12 bg-gradient-to-r from-amber-600 to-amber-300 text-white rounded-full flex items-center justify-center md:w-16 md:h-16">
                                    <span className="w-10 h-10 hover:bg-gradient-to-r hover:text-neutral-100 from-amber-600 to-amber-300 bg-neutral-700 text-2xl sm:text-3xl rounded-full flex items-center justify-center md:w-14 md:h-14">
                                        {social.icon}    
                                    </span>

                                </a>
                            )   
                        ))}
                    </ul>
                    
                    <button class="w-fit relative flex justify-center p-0.5 mx-auto overflow-hidden text-md text-gray-200 rounded-lg group bg-gradient-to-br from-amber-600 via-amber-500 to-amber-300 group-hover:from-orange-400 group-hover:via-orange-500 group-hover:to-yellow-400 focus:ring-5 focus:outline-none focus:ring-red-100 mb-5">
                        <a class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-neutral-700 rounded-md group-hover:bg-opacity-0 font-bold" href={resume}>
                            <FontAwesomeIcon icon={faFile} size={24} className='mx-1'/>Resume
                        </a>
                    </button>
                </div>
                
            </article>
            <img className='rounded-full w-1/2 md:w-1/3 mb-10 md:mb-0 hover:shadow-2xl hover:shadow-amber-500 mx-4' src={info.image} alt="paosanity" />
        </section> 
    )
}

export default About;