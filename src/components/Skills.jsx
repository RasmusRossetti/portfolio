import React, {useEffect} from 'react'
import { BadgeCheckIcon, ChipIcon } from "@heroicons/react/solid";
import { skills } from "./data";
import Aos from 'aos';
import 'aos/dist/aos.css';


const Skills = () => {
  useEffect(() => {
    Aos.init({duration: 2000 });
    }, []);
    return (
        <div>
            <section className='bg-gray-800' id="skills">
      <div data-aos='fade-up' className="container px-5 py-10 mx-auto">
        <div className="text-center mb-20">
          <ChipIcon className="text-white w-10 inline-block mb-4" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-4">
            Skills &amp; Technologies
          </h1>
          <p className="text-base text-gray-300 leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
           Skills i've worked with and allways learning more about, These are the most common during my creations
           and im not afraid to tackle something new. <br />
           
          </p>
        </div>
        <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
          {skills.map((skills) => (
            <div data-aos= 'flip-down' key={skills.skill} className="p-2 sm:w-1/2 w-full">
              <div className="bg-gray-900 rounded flex p-4 h-full items-center">
                <BadgeCheckIcon className="text-green-400 w-6 h-6 flex-shrink-0 mr-4" />
                <span className="title-font font-medium text-white">
                  {skills.skill}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
        </div>
    )
}

export default Skills
