import React, { useState} from "react";
import Hamburger from "hamburger-react";
import Link from "next/link";

function NavBar() {
  const [isOpen, setOpen] = useState(false);
  const toggleMenu = () => {
    setOpen(!isOpen);
  };

  return (
    <>
    <div className="px-4 py-2 md:flex md:justify-between md:items-center bg-slate-200">
        <div className="text-orange-600 text-3xl first-letter:text-5xl   flex items-center font-sixtyfour ">
          <span >Portfolio</span>
          <div className="md:hidden ml-auto">
            <Hamburger
              toggled={isOpen}
              toggle={toggleMenu}
            />
          </div>
        </div>
        <div
          className={`${
            isOpen ? "block" : "hidden"
          } md:flex md:text-center md:items-center md:space-x-5`}
        >
          <a className="text-center block hover:text-orange-600" href="#home">
            Home
          </a>
          <a className="text-center block hover:text-orange-600" href="#about" >
            About Me
          </a>
          <a
            className="text-center block hover:text-orange-600"
            href="#skills"
          >
            Skills
          </a>
          <a
            className="text-center block hover:text-orange-600"
            href="#projects"
          >
            Projects
          </a>
        </div>
        <div
          className={`${
            isOpen ? "block" : "hidden"
          } text-center md:flex md:text-center md:items-center mt-3`}
        >
          <a
            className="bg-orange-600 text-white px-4 py-2 hover:text-orange-600 hover:bg-white shadow-lg rounded-lg w-fit"
            href="/Vadlamani_Havish Aditya.pdf"
            download
          >
            Download Resume
          </a>
        </div>
      </div>
      
    </>

  );
}

export default NavBar;
