import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../layouts/Button";
import { AiOutlineMenuUnfold } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";
import { useEffect } from "react";

const Navbar = ({ onServiceLinkClick }) => {
  const [menu, setMenu] = useState(false);
  const [scrolling, setScrolling] = useState(false);

  const handleChange = () => {
    setMenu(!menu);
  };

  const closeMenu = () => {
    setMenu(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setScrolling(scrollTop > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`fixed w-full transition-transform duration-300 ${scrolling ? "-translate-y-full" : "translate-y-0"}`}>
      <div>
        <div className="flex flex-row justify-between p-5 md:px-32 px-5 text-white shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
          <div className="flex flex-row items-center cursor-pointer">
            <h1 className="text-2xl font-bold">Babylon</h1>
          </div>

          <nav className="hidden md:flex flex-row items-center px-[250px] text-lg font-medium gap-8">
            <Link to="/" spy={true} smooth={true} duration={500} className="hover:text-brightColor transition-all cursor-pointer">
              Home
            </Link>

            <div className="relative group">
              <div className="flex items-center gap-1">
                <Link
                  to="/services"
                  spy={true}
                  smooth={true}
                  duration={500}
                  className="hover:text-brightColor transition-all cursor-pointer"
                  onClick={() => onServiceLinkClick("1")} // Pass the service ID here
                >
                  Services
                </Link>
              </div>
            </div>

            <Link to="/about" spy={true} smooth={true} duration={500} className="hover:text-brightColor transition-all cursor-pointer">
              About
            </Link>

            <Link to="/portfolio" spy={true} smooth={true} duration={500} className="hover:text-brightColor transition-all cursor-pointer">
              Portfolio
            </Link>

            <Button title="Contact" />
          </nav>

          <div className="md:hidden flex items-center">
            {menu ? <AiOutlineClose size={25} onClick={handleChange} /> : <AiOutlineMenuUnfold size={25} onClick={handleChange} />}
          </div>
        </div>
        <div
          className={` ${menu ? "translate-x-0" : "-translate-x-full"} lg:hidden flex flex-col absolute bg-black text-white left-0 top-20 font-semibold text-2xl text-center pt-8 pb-4 gap-8 w-full h-fit transition-transform duration-300`}
        >
          <Link
            to="/"
            spy={true}
            smooth={true}
            duration={500}
            className="hover:text-brightColor transition-all cursor-pointer"
            onClick={closeMenu}
          >
            Home
          </Link>
          <Link
            to="/services"
            spy={true}
            smooth={true}
            duration={500}
            className="hover:text-brightColor transition-all cursor-pointer"
            onClick={() => onServiceLinkClick("1")} // Pass the service ID here
          >
            Services
          </Link>
          <Link
            to="about"
            spy={true}
            smooth={true}
            duration={500}
            className="hover:text-brightColor transition-all cursor-pointer"
            onClick={closeMenu}
          >
            About
          </Link>
          <Link
            to="/about"
            spy={true}
            smooth={true}
            duration={500}
            className="hover:text-brightColor transition-all cursor-pointer"
            onClick={closeMenu}
          >
            Portfolio
          </Link>

          <Button title="Contact" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
