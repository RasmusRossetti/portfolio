import React, { useEffect }  from 'react'
import { CodeIcon } from "@heroicons/react/solid";
import { projects } from "./data";
import Aos from 'aos';
import 'aos/dist/aos.css';


const Projects = () => {
  useEffect(() => {
    Aos.init({duration: 2000 });
    }, []);
    return (
        <div >
            <section id="projects" className="text-gray-400 bg-gray-900 body-font">
      <div className="container px-5 py-10 mx-auto text-center lg:px-40">
        <div data-aos= 'fade-up'  className="flex flex-col w-full mb-20">
          <CodeIcon  className="mx-auto inline-block w-10 mb-4" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
            Apps I've Built
          </h1>
          <p className="lg:w-2/3 text-xl mx-auto leading-relaxed text-base">
            I love variety in my work progress and
            here are some previous projects i've done with different technologies such as react and more.
          </p>
        </div>
        <div   className="flex flex-wrap -m-4">
          {projects.map((project) => (
            <a target="_blank" data-aos= 'fade-right' 
              href={project.link}
              key={project.image}
              className=" sm:w-1/2 w-100 p-4">
              <div className="h-56 flex relative">
                <img 
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src={project.image}
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-green-400 mb-1">
                    {project.subtitle}
                  </h2>
                  <h1 className="title-font text-lg font-medium text-white mb-3">
                    {project.title}
                  </h1>
                  <p className="leading-relaxed">{project.description}</p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
        </div>
    )
}

export default Projects
