import React from 'react'
import Logo from "../assets/cinemateLogo.webp";
import { NavLink } from 'react-router-dom';
function Footer() {
  return (
    <div id="footer" className="text-white w-full mb-0 pt-20 z-10 ">
      <div id="footer-icon" className="flex justify-center ">
        <div className="flex items-center">
          <NavLink to="/">
            <img src={Logo} alt="..." className="w-8 h-8" />
          </NavLink>
          <NavLink to="/">
            <span className="font-bold text-xl">&nbsp;Cinemate</span>
          </NavLink>
        </div>
      </div>
      <div className="flex  justify-center border-1  border-red-200 ">
        <div className="grid  md:gap-x-20 gap-x-8 grid-cols-3 sm:w-100 mt-8 text-[10px] md:text-[16px]  text-gray-200">
          <div>
            <div className="footerContent">
              <NavLink to="/">Home</NavLink>
            </div>
            <div className="footerContent">
              <NavLink to="/">Contact Us</NavLink>
            </div>
            <div className="footerContent">
              <NavLink to="/">Term Of Services</NavLink>
            </div>
            <div className="footerContent">
              <NavLink to="/">About Us</NavLink>
            </div>
          </div>
          <div>
            <div className="footerContent">
              <NavLink to="/">Live</NavLink>
            </div>
            <div className="footerContent">
              <NavLink to="/">FAQ</NavLink>
            </div>
            <div className="footerContent">
              <NavLink to="/">Premium</NavLink>
            </div>
            <div className="footerContent">
              <NavLink to="/">Privacy Policy</NavLink>
            </div>
          </div>
          <div>
            <div className="footerContent">
              <NavLink to="/">You Must Watch</NavLink>
            </div>
            <div className="footerContent">
              <NavLink to="/">Recent Release</NavLink>
            </div>
            <div className="footerContent">
              <NavLink to="/">Top IMDB</NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
