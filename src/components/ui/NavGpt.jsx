import React, { useState } from "react";
import logo from "../../assets/logo.png"; 
import gsap from "gsap";

const Navbar = () => {
  // const [isOpen, setIsOpen] = useState(false);
  const [hoveredItem, setHoveredItem] = useState(null);

  // var tl = gsap.timeline;

  // tl.from("logo",{
  //   y:-30,
  //   opacity:0.3,
  //   duration: 1,
  //   delay:1,

  // }

  // )

  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-6 flex items-center justify-between">

        {/* Logo Section */}
        <div className="logo flex items-center">
          <img
            src={logo}
            alt="Logo"
            className="h-20 w-20 ml-6" // Adjust size and add spacing
          />
        </div>

        <div className="flex items-center space-x-8">
          {/* Navbar Links */}
          {/* products */}
          <div className="relative group"
            onMouseEnter={() => setHoveredItem("products")} // dropdown renders
            onMouseLeave={() => setHoveredItem(null)} // dropdown closed
            >
            <button
              className="text-gray-800 font-medium hover:text-green-600"
            >
              PRODUCTS
            </button>
            
            {hoveredItem === "products" && (
              <div
                className="absolute top-full mt-3 left-0 w-56 bg-white shadow-lg rounded-lg p-4 z-10"
                // onMouseEnter={() => setIsOpen(true)}
                // onMouseLeave={() => setIsOpen(false)}
              >
                <p className="text-gray-500 text-sm font-semibold mb-2">
                  Our Products
                </p>
                <div className="space-y-3">
                  {/* Dropdown Items */}
                  <a
                    href="/blog"
                    className="flex items-center space-x-4 px-3 py-2 rounded-lg transition duration-200 transform hover:scale-105 hover:shadow-md hover:bg-gray-100"
                  >
                    <div className="bg-blue-100 p-2 rounded-full">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-blue-500"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M12 20h9M3 8l7 4 7-4m-7 4v12"
                        />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-800">
                        Wizora
                      </p>
                      <p className="text-xs text-gray-500">
                        Explore the GameTech universe with napptix.
                      </p>
                    </div>
                  </a>
                  <a
                    href="/case-studies"
                    className="flex items-center space-x-4 px-3 py-2 rounded-lg transition duration-200 transform hover:scale-105 hover:shadow-md hover:bg-gray-100"
                  >
                    <div className="bg-blue-100 p-2 rounded-full">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-blue-500"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M8 16l-4-4 4-4m8 8l4-4-4-4M4 12h16"
                        />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-800">
                        Quest
                      </p>
                      <p className="text-xs text-gray-500">
                        Deep-dive into napptix’s curated solutions for industry
                        leaders.
                      </p>
                      
                    </div>
                  </a>
                  <a
                    href="/case-studies"
                    className="flex items-center space-x-4 px-3 py-2 rounded-lg transition duration-200 transform hover:scale-105 hover:shadow-md hover:bg-gray-100"
                  >
                    <div className="bg-blue-100 p-2 rounded-full">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-blue-500"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M8 16l-4-4 4-4m8 8l4-4-4-4M4 12h16"
                        />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-800">
                        PerfNXT
                      </p>
                      <p className="text-xs text-gray-500">
                        Deep-dive into napptix’s curated solutions for industry
                        leaders.
                      </p>
                      
                    </div>
                  </a>
                </div>
              </div>
            )}
          </div>

            {/* ADVERTISERS */}
          <div className="relative group"
            onMouseEnter={() => setHoveredItem("advertisers")} // dropdown renders
            onMouseLeave={() => setHoveredItem(null)} // dropdown closed
            >
            <button
             
              className="text-gray-800 font-medium hover:text-green-600"
            >
              ADVERTISERS
            </button>
            {hoveredItem === "advertisers" && (
              <div
                className="absolute top-full mt-3 left-0 w-56 bg-white shadow-lg rounded-lg p-4 z-10"
              >
                <p className="text-gray-500 text-sm font-semibold mb-2">
                  Our Advertisers
                </p>
                <div className="space-y-3">
                  {/* Dropdown Items */}
                  <a
                    href="/blog"
                    className="flex items-center space-x-4 px-3 py-2 rounded-lg transition duration-200 transform hover:scale-105 hover:shadow-md hover:bg-gray-100"
                  >
                    <div className="bg-blue-100 p-2 rounded-full">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-blue-500"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M12 20h9M3 8l7 4 7-4m-7 4v12"
                        />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-800">
                        Adv 1
                      </p>
                      <p className="text-xs text-gray-500">
                        Explore the GameTech universe with napptix.
                      </p>
                    </div>
                  </a>
                  <a
                    href="/case-studies"
                    className="flex items-center space-x-4 px-3 py-2 rounded-lg transition duration-200 transform hover:scale-105 hover:shadow-md hover:bg-gray-100"
                  >
                    <div className="bg-blue-100 p-2 rounded-full">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-blue-500"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M8 16l-4-4 4-4m8 8l4-4-4-4M4 12h16"
                        />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-800">
                        Adv 2
                      </p>
                      <p className="text-xs text-gray-500">
                        Deep-dive into napptix’s curated solutions for industry
                        leaders.
                      </p>
                    </div>
                  </a>
                </div>
              </div>
            )}
          </div>

          {/* PUBLISHERS */}
          <div className="relative group"
            onMouseEnter={() => setHoveredItem("publishers")} // dropdown renders
            onMouseLeave={() => setHoveredItem(null)} // dropdown closed
            >
            <button
              className="text-gray-800 font-medium hover:text-green-600"
            >
              PUBLISHERS
            </button>
            {hoveredItem === "publishers" && (
              <div
                className="absolute top-full mt-3 left-0 w-56 bg-white shadow-lg rounded-lg p-4 z-10"
                // onMouseEnter={() => setIsOpen(true)}
                // onMouseLeave={() => setIsOpen(false)}
              >
                <p className="text-gray-500 text-sm font-semibold mb-2">
                  Our Publishers
                </p>
                <div className="space-y-3">
                  {/* Dropdown Items */}
                  <a
                    href="/blog"
                    className="flex items-center space-x-4 px-3 py-2 rounded-lg transition duration-200 transform hover:scale-105 hover:shadow-md hover:bg-gray-100"
                  >
                    <div className="bg-blue-100 p-2 rounded-full">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-blue-500"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M12 20h9M3 8l7 4 7-4m-7 4v12"
                        />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-800">
                        Pub 1
                      </p>
                      <p className="text-xs text-gray-500">
                        Explore the GameTech universe with napptix.
                      </p>
                    </div>
                  </a>
                  <a
                    href="/case-studies"
                    className="flex items-center space-x-4 px-3 py-2 rounded-lg transition duration-200 transform hover:scale-105 hover:shadow-md hover:bg-gray-100"
                  >
                    <div className="bg-blue-100 p-2 rounded-full">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-blue-500"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M8 16l-4-4 4-4m8 8l4-4-4-4M4 12h16"
                        />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-800">
                        Pub 2
                      </p>
                      <p className="text-xs text-gray-500">
                        Deep-dive into napptix’s curated solutions for industry
                        leaders.
                      </p>
                    </div>
                  </a>
                </div>
              </div>
            )}
          </div>

            {/* ABOUT US */}
          <div className="relative group pr-"
            onMouseEnter={() => setHoveredItem("aboutUs")} // dropdown renders
            onMouseLeave={() => setHoveredItem(null)} // dropdown closed
            >
            <button
              className="text-gray-800 font-medium hover:text-green-600"
            >
              ABOUT US
            </button>
            {hoveredItem === "aboutUs" && (
              <div
                className="absolute top-full mt-3 right-0 w-56 bg-white shadow-lg rounded-lg p-4 z-10"
                // onMouseEnter={() => setIsOpen(true)}
                // onMouseLeave={() => setIsOpen(false)}
              >
                <p className="text-gray-500 text-sm font-semibold mb-2">
                  About
                </p>
                <div className="space-y-3">
                  {/* Dropdown Items */}
                  <a
                    href="/blog"
                    className="flex items-center space-x-4 px-3 py-2 rounded-lg transition duration-200 transform hover:scale-105 hover:shadow-md hover:bg-gray-100"
                  >
                    <div className="bg-blue-100 p-2 rounded-full">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-blue-500"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M12 20h9M3 8l7 4 7-4m-7 4v12"
                        />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-800">
                        About 1
                      </p>
                      <p className="text-xs text-gray-500">
                        Explore the GameTech universe with napptix.
                      </p>
                    </div>
                  </a>
                  <a
                    href="/case-studies"
                    className="flex items-center space-x-4 px-3 py-2 rounded-lg transition duration-200 transform hover:scale-105 hover:shadow-md hover:bg-gray-100"
                  >
                    <div className="bg-blue-100 p-2 rounded-full">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-blue-500"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M8 16l-4-4 4-4m8 8l4-4-4-4M4 12h16"
                        />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-800">
                        About 2
                      </p>
                      <p className="text-xs text-gray-500">
                        Deep-dive into napptix’s curated solutions for industry
                        leaders.
                      </p>
                    </div>
                  </a>
                </div>
              </div>
            )}
          </div>


          
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
