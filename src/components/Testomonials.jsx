import React, {useEffect} from 'react'
import { TerminalIcon, UsersIcon } from "@heroicons/react/solid";
import { testimonial } from "./data";
import Aos from 'aos';
import 'aos/dist/aos.css';

const Testomonials = () => {
  useEffect(() => {
    Aos.init({duration: 2000 });
    }, []);
    return (
        <div >
            <section className='bg-gray-900' id="testimonials">
      <div className="container px-5 py-10 mx-auto text-center">
        <UsersIcon data-aos= 'fade-up' className=" text-white w-10 inline-block mb-4" />
        <h1 data-aos= 'fade-up'   className="sm:text-4xl text-3xl font-medium title-font text-white mb-12">
          Testimonials
        </h1>
        <div   className="flex flex-wrap m-4">
          {testimonial.map((testimonial) => (
            <div data-aos= 'fade-up'  className="p-4 md:w-1/2 w-full ">
              <div className="h-full bg-gray-800 bg-opacity-40 p-8 rounded">
                <TerminalIcon className="block w-8 text-gray-500 mb-4" />
                <p className=" leading-relaxed mb-6 text-white">{testimonial.quote}</p>
                <div className=" inline-flex
                items-center ">
                  <img
                    alt="testimonial"
                    src={testimonial.image}
                    className="w-12 rounded-full flex-shrink-0 object-cover object-center"
                  />
                  <span className=" flex-grow flex flex-col pl-4">
                    <span className="title-font font-medium text-white">
                      {testimonial.name}
                    </span>
                    <span className="text-gray-500 text-sm uppercase">
                      {testimonial.company}
                    </span>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
        </div>
    )
}

export default Testomonials
