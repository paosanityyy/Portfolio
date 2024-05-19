import info from '../info';
import '../styles/About.css';
import 'animate.css';

const About = () => {
    return(
        <section id="hero" className="mt-16 flex flex-col-reverse justify-between sm:flex-col-reverse md:flex-row items-center widescreen:section-min-height tallscreen:section-min-height">
        <article className="p-10 sm:w-2/3 mx-auto flex flex-col items-center justify-center flex-grow">
                <h1 className="text-6xl font-bold text-center">Hi! I'm <span className="bg-clip-text text-transparent" style={{backgroundImage: info.gradient}}>{info.firstName} </span> 
                    <span className='wave-hand'>
                        👋
                    </span>
                </h1>
                <p className="max-w-xl text-2xl mt-4 mx-auto text-justify text-slate-400">
                    {info.about}
                </p>
                <div>
                    <ul id="social-links" className="flex flex-wrap justify-center items-center gap-3 mx-3 my-5">
                        {info.socials.map((social, index)=> (
                            index < info.socials.length - 2 && (
                                <li className="w-12 h-12 bg-gradient-to-r from-amber-600 to-amber-300 text-white rounded-full flex items-center justify-center sm:w-16 sm:h-16 md:w-14 md:h-14">
                                    <span className="w-10 h-10 hover:bg-gradient-to-r hover:text-neutral-100 from-amber-600 to-amber-300 bg-neutral-700 text-2xl sm:text-3xl rounded-full flex items-center justify-center sm:w-14 sm:h-14 md:w-12 md:h-12">
                                        {social.icon}    
                                    </span>

                                </li>
                            )   
                        ))}
                    </ul>
                    
                    
                </div>
                
            </article>
            <img className='rounded-full w-1/2 sm:w-1/2 md:w-1/3 hover:shadow-2xl hover:shadow-amber-500' src={info.image} alt="paosanity" />
        </section> 
    )
}

export default About;