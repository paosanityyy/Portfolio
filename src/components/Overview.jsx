import React, { useEffect } from 'react';
import '../styles/Overview.css'; // Ensure you import the CSS
import info from '../info';
import 'animate.css';

const Overview = () => {
  const dataText = ["Front-end Developer", "Back-end Developer", "Full Stack Developer"];

  useEffect(() => {
    function typeWriter(text, i, fnCallback) {
      if (i < (text.length)) {
        document.querySelector("h2").innerHTML = text.substring(0, i + 1) + '<span aria-hidden="true"></span>';
        setTimeout(() => {
          typeWriter(text, i + 1, fnCallback);
        }, 100);
      } else if (typeof fnCallback === 'function') {
        setTimeout(fnCallback, 700);
      }
    }

    function startTextAnimation(i) {
      if (typeof dataText[i] === 'undefined') {
        setTimeout(() => {
          startTextAnimation(0);
        }, 20000);
      }
      if (i < dataText.length) {
        typeWriter(dataText[i], 0, () => {
          startTextAnimation(i + 1);
        });
      }
    }

    startTextAnimation(0);
  }, []);

  return (
    <section id="overview" className="mt-3 widescreen:section-min-height tallscreen:section-min-height">
        <h1 className="text-5xl text-center my-5">I'm a</h1>
        <h2 className='text-3xl sm:text-4xl font-bold text-center my-10'>Full Stack Developer</h2>
        <h3 className="text-3xl text-center my-10 font-bold">Tech Stack</h3>
        <ul className="w-full p-6 flex flex-wrap justify-center items-center gap-3"> 
            {info.techStack.map((tech, index) => (
                <li key={index} className="w-28 h-28 flex flex-col items-center justify-center border border-gray-400 hover:bg-neutral-700 hover:bg-opacity-70 hover:text-neutral-200 rounded-xl shadow-lg animate__animated animate__zoomIn animate__faster">
                    <img src={tech.icon} alt={tech.name} className="w-12 mb-2" />
                    <p className="text-md">{tech.name}</p>
                </li>
            ))}
        </ul>
    </section>
  );
}

export default Overview;
