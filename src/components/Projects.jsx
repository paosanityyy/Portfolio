import React, { useEffect } from 'react';
import info from '../info';
import '../styles/Projects.css';

const Projects = () => {
  return (
    <section id="projects" className="p-6 scroll-mt-20 widescreen:section-min-height tallscreen:section-min-height">
        <ul className="w-full grid grid-cols-1 md:grid-cols-2 gap-5 justify-center items-center m-auto"> 
            {info.projects.map((project, index) => (
                <li key={index} className="card-wrapper flex flex-col items-center justify-center relative rounded-xl shadow-lg">
                    <img src={project.screenshot} alt={project.name} className="card-img w-full m-auto transition-all duration-500" />
                    <div className="card-desc-wrapper flex flex-col items-center justify-center absolute w-full h-full transition-all duration-500 bg-transparent">
                      <h1 className="text-xl font-bold mb-3">
                        {project.name}
                      </h1>
                      <p className="text-md text-center mx-10 mb-3">
                          {project.description}
                      </p>
                      Tech Stack: 
                      <ul className="mt-1 flex flex-row flex-rows-3 items-center gap-1 justify-center ">
                        {project.techStack.map((tech, index) => (
                          <li key={index} className=" border border-transparent bg-slate-500 p-1 text-xs hover:bg-slate-700 rounded-md ">
                            {tech}
                          </li>
                        ))}
                      </ul>
                      <div className='flex flex-row items-center gap-2 justify-center mt-4'>
                        <a href={project.url} className="bg-amber-600 text-white px-3 py-1 rounded-lg mt-3 hover:bg-amber-700 hover:text-white">
                            View Project
                        </a>
                        {project.youtube ? (
                          <a href={project.youtube} className="bg-amber-600 text-white px-3 py-1 rounded-lg mt-3 hover:bg-amber-700 hover:text-white">
                            Watch Video
                          </a>
                        ) : null}
                      </div>
                      
                    </div>
                    
                    
                </li>
            ))}
        </ul>
    </section>
  );
}

export default Projects;
