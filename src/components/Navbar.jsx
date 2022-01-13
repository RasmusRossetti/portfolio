import { ArrowRightIcon } from "@heroicons/react/solid";
import React from 'react'

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <header className="bg-gray-800 md:sticky top-0 z-10">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="title-font font-medium text-white mb-4 md:mb-0">
          <a href="#about" className="ml-3 text-xl">
            Rossetti
          </a>
        </a>
        
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-500	flex flex-wrap items-center text-base justify-center">
          
          <a href="#projects" className=" mr-5 hover:text-white text-gray-300">
            Past Work
          </a>
          <a href="#skills" className="mr-5 hover:text-white text-gray-300">
            Skills
          </a>
          <a href="#testimonials" className="mr-5 hover:text-white text-gray-300">
            Testimonials
          </a>
        </nav>
        <a
          href="#contact"
          className=" text-white font-bold tracking-wide inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0 animate-pulse">
          Hire Me
          <ArrowRightIcon className="w-4 h-4 ml-1" />
        </a>
      </div>
      <button
              className=" text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
             <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
            </button>
    </header>
  )
}

export default Navbar
