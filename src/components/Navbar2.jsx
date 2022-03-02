import React, { useState } from "react";
import { Transition } from "@headlessui/react";
import { ArrowRightIcon } from "@heroicons/react/solid";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'


function Navbar2() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="navbar sticky top-0 z-10 " >
      <nav className="">
        <div className=" container mx-auto px-4 sm:px-6 lg:px-8">
          <div className=" flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
              <a href="#about" className="pr-4 border-r tracking-widest hover:text-gray-400 items-center title-font  font-medium text-white mb-4 md:mb-0 ml-3 text-2xl">
            ROSSETTI
          </a>
              </div>
              <div className="hidden md:block">
                <div className="pt-1 ml-10 flex items-baseline space-x-4">
                

        <a href="#projects" className="mr-1 hover:text-white text-gray-300">
            Past Work
          </a>

          <a href="#skills" className="mr-5 hover:text-white text-gray-300">
            Skills
          </a>
          <a href="#testimonials" className="mr-5 hover:text-white text-gray-300">
            Testimonials
          </a>
          
                </div>
                
              </div>
              
            </div>
            <div className="hidden md:justify-between md:flex md:absolute md:w-20 md:right-72 md:pt-2 xl:right-96 icons">
            <a target="_blank" className=" m-0" href="https://www.linkedin.com/in/rasmus-rossetti-b91701141/"><FontAwesomeIcon className=" hover:text-white text-2xl text-gray-300" icon={faLinkedin} /></a>
           <a target="_blank" className=" m-0" href="https://github.com/RasmusRossetti"> <FontAwesomeIcon className=" text-2xl  text-gray-300 hover:text-white" icon={faGithub} /></a>
           </div>
            <a
          href="#contact"
          className="transform transition duration-500 hover:scale-125 hidden md:flex text-white font-bold tracking-wide inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0 animate-pulse">
          Hire Me
          <ArrowRightIcon className="pt-1 w-5 h-5 ml-1" />
        </a>
            <div className="-mr-2 flex md:hidden ">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="bg-gray-900 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none "
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {!isOpen ? (
                  <svg
                    className="block h-6 w-6 "
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
              
            </div>
          </div>
        </div>
        

        <Transition 
          show={isOpen}
          enter="transition ease-out duration-100 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-75 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          {(ref) => (
            <div className=" pl-2 md:hidden" id="mobile-menu">
              <div ref={ref} className=" px-2 pt-2 pb-3 space-y-1 sm:px-3">
              

                <a
                  href="#projects"
                  className=" text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Past Work
                </a>

                

                <a
                  href="#skills"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Skills
                </a>

                <a
                  href="#testimonials"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Testimonials
                </a>
                <a
                  href="#contact"
                  className="flex items-center text-white hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium animate-pulse text-bold"
                >
                  Hire Me
                  <ArrowRightIcon className="w-4 h-4 ml-1" />
                </a>
                <div className=" justify-between w-20 flex pl-3  pt-2 icons">
                <a target="_blank" href="https://www.linkedin.com/in/rasmus-rossetti-b91701141/"><FontAwesomeIcon className=" hover:text-white text-2xl text-gray-300" icon={faLinkedin} /></a>
                <a target="_blank" href="https://github.com/RasmusRossetti"> <FontAwesomeIcon className=" text-2xl  text-gray-300 hover:text-white" icon={faGithub} /></a>
           </div>
                
              </div>
            </div>
          )}
        </Transition>
      </nav>

      
    </div>
  );
}

export default Navbar2;
