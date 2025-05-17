import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
    const links = <>
          <NavLink> 
              <li><a>About</a></li>
          </NavLink>
          <NavLink to={'/stories'}> 
          <li><a>Stories</a></li>
          </NavLink>
          <NavLink to={'/service'}> 
          <li><a>Service</a></li>
          </NavLink>
    </>
  return (
    <div>
      <div className="navbar md:px-6 text-white bg-gradient-to-r from-green-700 to-green-800">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content  rounded-box z-[1] mt-3 w-52 p-2 shadow font-semibold text-black bg-yellow-300"
            >
                {links}
            </ul>
          </div>
          <a className="btn btn-ghost p-0 font-bold text-lg md:text-3xl">Digital It</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 font-semibold">
  
           {/* Mobile view */}
            {links}
          </ul>
        </div>
        <div className="navbar-end">
          <ul className="flex gap-0.5 md:gap-1 justify-center items-center">
          <li className="bg-yellow-300 py-1 px-3 rounded-xl text-black text-sm font-semibold"><a>Volenter</a></li>
          <li className="border text-yellow-400 border-yellow-300 py-1 px-3 rounded-xl  text-sm font-semibold"><a>Donate</a></li>
          <li className="border border-yellow-300 text-yellow-400 py-1 px-3 rounded-xl  text-sm font-semibold"><a>Connect</a></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
