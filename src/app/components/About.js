import React from 'react'
import { FaInstagram } from "react-icons/fa6";
import { BiLogoGmail } from "react-icons/bi";
import { FaGithub } from "react-icons/fa";
import { textarea } from '@material-tailwind/react';
import './About.css'
function About() {
  return (
    <>
    <div className=" px-4 py-2">
  <div className="flex items-center justify-center text-3xl font-thin text-orange-600 underline font-ubuntu">
    About Me
  </div>
  <div>
    <p className="mt-2 text">
    I pursued my Bachelor's degree in Electronic and Communication Engineering (ECE) from Vasireddy Venkatadri Institute of Technology, Guntur, from August 2019 to June 2023, achieving a commendable CGPA of 8.78. Prior to that, I completed my Intermediate education at Narayana Junior College, Tenali, from May 2017 to May 2019.
    </p>
  </div>
  <div className="flex justify-center space-x-3 mt-4">
      <div className="icon-container" title="Follow me on Instagram">
        <a
          href="https://www.instagram.com/havish.vadlamani"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram size={40}  />
        </a>
      </div>
      <div className="icon-container" title="Send me an email">
        <a
          href="mailto:adityahvadlamani@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <BiLogoGmail size={40} />
         
        </a>
      </div>
      <div className="icon-container" title="Check out my GitHub">
        <a
          href="https://github.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub size={40} />
          
        </a>
      </div>
    </div>
  
</div>
    </>
  )
}

export default About