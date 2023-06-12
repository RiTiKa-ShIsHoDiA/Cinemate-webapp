import React, { useEffect } from "react";
import Logo from "../assets/cinemateLogo.webp";
import { NavLink, json } from "react-router-dom";
import { useState } from "react";
function Header() {
  const [colorChange, setColorchange] = useState(false);
  const [darkMode,setDarkMode] = useState(JSON.parse(localStorage.getItem("darkMode")) || false);
  useEffect(()=>{
    localStorage.setItem("darkMode",JSON.stringify(darkMode));
    if(darkMode){
      document.documentElement.classList.add("dark");
    }
    else{
      document.documentElement.classList.remove("dark");
    }
  },[darkMode]);
  function handleClick(){
      document.getElementById("dropdown-menu").classList.toggle("hidden");
  }
 
  const changeNavbarColor = () =>{
     if(window.scrollY >= 80){
       setColorchange(true);
     }
     else{
       setColorchange(false);
     }
  };
  const handleToggle = (event)=>{
   document.querySelector("#rightNavbar").classList.toggle("hidden");
  };
  window.addEventListener('scroll', changeNavbarColor);
  return (
    <header id="header">
      <div
        className={
          colorChange
            ? "navbar bg-white dark:bg-black dark:bg-opacity-50 dark:blur-2 text-slate-800 dark:text-white flex justify-between  "
            : "navbar text-white  "
        }
      >
        <div className="flex justify-between  w-full">
          <div id="logo" className="flex w-28 md:w-32 items-center">
            <NavLink to="/">
              <img src={Logo} alt="..." />
            </NavLink>
            <NavLink to="/">
              <strong className="px-2 md:text-xl">Cinemate</strong>
            </NavLink>
          </div>
          <div id="navbar " className="items-center  mb-2 hidden md:flex">
            <nav className=" space-x-12  mx-8 text-base font-semibold  ">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "navigate " : "hover:animate-nav"
                }
              >
                Home
              </NavLink>
              <NavLink
                to="/movies"
                className={({ isActive }) =>
                  isActive ? "navigate " : "hover:animate-nav"
                }
              >
                <span>Movies</span>
              </NavLink>
              <NavLink
                to="/Tvseries"
                className={({ isActive }) =>
                  isActive ? "navigate " : "hover:animate-nav"
                }
              >
                <span>TvSeries</span>
              </NavLink>
            </nav>
          </div>
        </div>
        <span className="dropdown-icon p-8 hidden md:block">
          <button className="mt-2 " type="button" onClick={handleClick}>
            {" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6"
            >
              <path
                fillRule=" evenodd"
                d="M2.25 5.25a3 3 0 013-3h13.5a3 3 0 013 3V15a3 3 0 01-3 3h-3v.257c0 .597.237 1.17.659 1.591l.621.622a.75.75 0 01-.53 1.28h-9a.75.75 0 01-.53-1.28l.621-.622a2.25 2.25 0 00.659-1.59V18h-3a3 3 0 01-3-3V5.25zm1.5 0v7.5a1.5 1.5 0 001.5 1.5h13.5a1.5 1.5 0 001.5-1.5v-7.5a1.5 1.5 0 00-1.5-1.5H5.25a1.5 1.5 0 00-1.5 1.5z"
                clipRule="evenodd"
              />
            </svg>
          </button>
          <div
            id="dropdown-menu"
            className="z-10 w-32 hidden absolute right-4  ring-lime-500 hover:ring-lime-500 hover:ring-4  ring-offset-1 text-gray-800 dark:text-white bg-white dark:bg-gray-800 rounded-lg"
          onClick = {handleClick}
          >
            <ul className="py-2 items-center">
              <li onClick={() => setDarkMode(false)} className="cursor-pointer">
                <span className="flex py-2 px-2 hover:dark:bg-gray-700 hover:bg-gray-200">
                  {" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
                    />
                  </svg>
                  &nbsp;Light
                </span>
              </li>
              <li onClick={() => setDarkMode(true)} className="cursor-pointer">
                <span className="flex py-2 px-2 hover:dark:bg-gray-700 hover:bg-gray-200">
                  {" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
                    />
                  </svg>{" "}
                  &nbsp;Dark
                </span>
              </li>
              <li
                onClick={() =>
                  setDarkMode(
                    window.matchMedia(`(prefers-color-scheme: dark)`).matches
                  )
                }
                className="cursor-pointer"
              >
                <span className="flex py-2 px-2 hover:dark:bg-gray-700 hover:bg-gray-200">
                  {" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25"
                    />
                  </svg>
                  &nbsp;System
                </span>
              </li>
            </ul>
          </div>
        </span>
        <div className="md:hidden "  onClick={handleToggle}>
          <navbar className="p-10 block" onClick={handleClick}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              fill="currentColor"
              class="bi bi-list"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
              />
            </svg>
          </navbar>
          <div id = "rightNavbar" className="hidden dark:text-white scroll-none w-60 top-0 h-screen absolute  right-0 w-1/8 dark:bg-white dark:bg-opacity-5 dark:backdrop-blur-md bg-white bg-opacity-40 backdrop-blur-md text-slate-800">
            <div
              id="logo"
              className="flex w-28 md:w-32 items-center mx-auto mt-8"
            >
              <NavLink to="/">
                <img src={Logo} alt="..." />
              </NavLink>
              <NavLink to="/">
                <strong className="px-2 md:text-xl">Cinemate</strong>
              </NavLink>
            </div>
            <div className="mx-8 mt-8 space-y-2">
              <h1 className="font-semibold">Menu</h1>
              <ul className="ml-8 ">
               <NavLink to = "/" >
               <li className="flex space-x-1 my-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    className="bi bi-house-door "
                    viewBox="0 0 16 16"
                  >
                    <path d="M8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4.5a.5.5 0 0 0 .5-.5v-4h2v4a.5.5 0 0 0 .5.5H14a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146ZM2.5 14V7.707l5.5-5.5 5.5 5.5V14H10v-4a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v4H2.5Z" />
                  </svg>
                  <span>Home</span>
                </li></NavLink> 
                <NavLink
                to="/movies" >
                   <li className="flex space-x-1 my-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    class="bi bi-film"
                    viewBox="0 0 16 16"
                  >
                    <path d="M0 1a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V1zm4 0v6h8V1H4zm8 8H4v6h8V9zM1 1v2h2V1H1zm2 3H1v2h2V4zM1 7v2h2V7H1zm2 3H1v2h2v-2zm-2 3v2h2v-2H1zM15 1h-2v2h2V1zm-2 3v2h2V4h-2zm2 3h-2v2h2V7zm-2 3v2h2v-2h-2zm2 3h-2v2h2v-2z" />
                  </svg>
                  <span>Movies</span>
                </li>
                </NavLink>
               <NavLink to = "/Tvseries" >
                <li className="flex space-x-1 my-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    class="bi bi-tv"
                    viewBox="0 0 16 16"
                  >
                    <path d="M2.5 13.5A.5.5 0 0 1 3 13h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zM13.991 3l.024.001a1.46 1.46 0 0 1 .538.143.757.757 0 0 1 .302.254c.067.1.145.277.145.602v5.991l-.001.024a1.464 1.464 0 0 1-.143.538.758.758 0 0 1-.254.302c-.1.067-.277.145-.602.145H2.009l-.024-.001a1.464 1.464 0 0 1-.538-.143.758.758 0 0 1-.302-.254C1.078 10.502 1 10.325 1 10V4.009l.001-.024a1.46 1.46 0 0 1 .143-.538.758.758 0 0 1 .254-.302C1.498 3.078 1.675 3 2 3h11.991zM14 2H2C0 2 0 4 0 4v6c0 2 2 2 2 2h12c2 0 2-2 2-2V4c0-2-2-2-2-2z" />
                  </svg>
                  <span>Tv Series</span>
                </li></NavLink> 
              </ul>
              <h1 className="font-semibold">Theme</h1>
              <ul className="ml-8 space-y-4">
                <li className="flex space-x-1 cursor-pointer" onClick={() => setDarkMode(true)} >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
                    />
                  </svg>
                
                  <span>Dark</span>
                </li>
                <li className="flex space-x-1 cursor-pointer" onClick={() => setDarkMode(false)}>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
                    />
                  </svg>
                  <span>Light</span>
                </li>
                <li className="flex space-x-1 cursor-pointer" onClick={() =>
                  setDarkMode(
                    window.matchMedia(`(prefers-color-scheme: dark)`).matches
                  )
                }>
                <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6"
            >
              <path
                fillRule=" evenodd"
                d="M2.25 5.25a3 3 0 013-3h13.5a3 3 0 013 3V15a3 3 0 01-3 3h-3v.257c0 .597.237 1.17.659 1.591l.621.622a.75.75 0 01-.53 1.28h-9a.75.75 0 01-.53-1.28l.621-.622a2.25 2.25 0 00.659-1.59V18h-3a3 3 0 01-3-3V5.25zm1.5 0v7.5a1.5 1.5 0 001.5 1.5h13.5a1.5 1.5 0 001.5-1.5v-7.5a1.5 1.5 0 00-1.5-1.5H5.25a1.5 1.5 0 00-1.5 1.5z"
                clipRule="evenodd"
              />
            </svg>
                  <span>System</span>
                </li>
              </ul>
                 
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
