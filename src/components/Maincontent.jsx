import React from 'react'
import Navbar2 from './Navbar2'
import Projects from './Projects'


const maincontent = () => {
  
  
    return (
        <div className=' bg-gray-800'>
         
               <section id="about">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center ">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            Hi, I'm Rasmus.
            <br className=" hidden lg:inline-block" /><br className='md:hidden sm:inline-block' /> I love to build amazing
            apps.
          </h1>
          <p className="mb-8 text-xl leading-relaxed text-gray-200">
          
          I'm a creative front end developer from Stockholm Sweden. <br />
          
          
          
          </p>
          <div className=" flex justify-center">
            <a
              href="#contact"
              className=" inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 hover:animate-bounce rounded text-lg">
              Work With Me
            </a>
            <a
              href="#projects"
              className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
              See My Past Work
            </a>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            id='header-image'
            className="object-cover object-center rounded"
            alt="hero"
            src="https://media-exp1.licdn.com/dms/image/C4D03AQGqYKLXiyN4Ew/profile-displayphoto-shrink_800_800/0/1568044409648?e=1647475200&v=beta&t=4-yJAYbUgjm799HUpSpyDC1OdAVRSapFqnfuiVUQl-A"
          />
        </div>
      </div>
    </section>
        </div>
    )
}

export default maincontent

