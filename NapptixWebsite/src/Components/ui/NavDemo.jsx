import React, { useState } from "react";
import logo from "../../assets/icons/logo.png";

const Navdemo = () => {
  const [activeDropdown, setActiveDropdown] = useState(null); // Track active dropdown

  // Toggle specific dropdown
  const toggleDropdown = (index) => {
    setActiveDropdown(activeDropdown === index ? null : index);
  };

  const navLinks = [
    {
      label: "Products",
      options: [
        { label: "Wizora", href: "#" },
        { label: "Quest", href: "#" },
        { label: "PerfNXT", href: "#" }
      ],
    },
    {
      label: "Advertisers",
      options: [
        { label: "Adv 1", href: "#option1" },
        { label: "Adv 2", href: "#option2" },
        { label: "Adv 3", href: "#option3" },
      ],
    },
    {
      label: "Publishers",
      options: [
        { label: "Pub 1", href: "#optionA" },
        { label: "Pub 2", href: "#optionB" },
        { label: "Pub 3", href: "#optionC" }
      ],
    },
    {
      label: "About Us",
      options: [
        { label: "Option X", href: "#optionX" },
        { label: "Option Y", href: "#optionY" },
        { label: "Option Z", href: "#optionZ" },
      ],
    },
  ];

  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Logo Section */}
        <div className="flex items-center">
          <img
            src={logo}
            alt="Logo"
            className="h-20 w-20 ml-6" // Adjust size and add spacing
          />
        </div>

        {/* Navigation Links */}
        <ul className="flex space-x-14">
          {navLinks.map((link, index) => (
            <li key={index} className="relative cursor-pointer">
              <button
                onClick={() => toggleDropdown(index)}
                className="flex items-center space-x-1 text-gray-600 hover:text-gray-800 font-medium transition focus:outline-none"
              >
                <span>{link.label}</span>
                <span className="text-sm">▼</span>
              </button>

              {/* Dropdown Menu */}
              {activeDropdown === index && (
                <div className="absolute top-full mt-2 w-40 bg-white border rounded-md shadow-lg z-10">
                  {link.options.map((option, i) => (
                    <a
                      key={i}
                      href={option.href}
                      className="block px-4 py-2 text-gray-600 hover:bg-[#17A600] hover:text-white"
                    >
                      {option.label}
                    </a>
                  ))}
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navdemo;
