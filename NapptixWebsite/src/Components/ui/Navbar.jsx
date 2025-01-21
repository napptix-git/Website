import React, { useState } from "react";
import logo from "../../assets/icons/logo.png"

const Navbar = () => {

    const [isDropdownOpen, SetIsDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        SetIsDropdownOpen(!isDropdownOpen);
    };

    const toggleDropdownAdv = () => {
        SetIsDropdownOpen(!isDropdownOpen);
    };

    return(
        <nav className="bg-white shadow-md">
            <div className="container mx-auto flex justify-between items-center p-4">
                {/* logo */}
                <div className="flex items-center">
                    <img 
                        src={logo}
                        alt="Logo" 
                        className="h-20 w-20 ml-8"
                    />
                </div>

                {/* Navigation Links */}
                <ul className="flex space-x-12">
                    {/* Regular Link */}
                    <li>
                        <button
                            onClick={toggleDropdown}
                            className="text-gray-600 hover:text-gray-800 font-medium transition focus:outline-none"
                        >
                            Products
                        </button>
                    </li>

                    {/* Dropdown links */}

                    <div
                        className={`absolute z-10 flex flex-col bg-white py-2 rounded-md gap-2 ${
                        isDropdownOpen ? "flex" : "hidden"
                        }`}
                    >
                        <a
                        href="#"
                        className="hover:text-white hover:bg-[#17A600] px-2 py-2"
                        >
                         Wizora
                        </a>
                        <a
                        href="#"
                        className="hover:text-white hover:bg-[#17A600] px-2 py-2"
                        >
                         Quest
                        </a>
                        <a
                        href="#"
                        className="hover:text-white hover:bg-[#17A600] px-2 py-2"
                        >
                         PerfNXT
                        </a>
                    </div>    
                    
                    {/* Regular Link */}
                    <li>
                        <button
                            onClick={toggleDropdownAdv}
                            className="text-gray-600 hover:text-gray-800 font-medium transition focus:outline-none"
                        >
                            Advertisers
                        </button>
                    </li>

                    {/* Dropdown links */}
                    <div
                        className={`absolute z-10 flex flex-col bg-white py-2 rounded-md gap-2 ${
                        isDropdownOpen ? "flex" : "hidden"
                        }`}
                    >
                        <a
                        href="#"
                        className="hover:text-white hover:bg-[#17A600] px-2 py-2"
                        >
                         Adv 1
                        </a>
                        <a
                        href="#"
                        className="hover:text-white hover:bg-[#17A600] px-2 py-2"
                        >
                         Adv 2
                        </a>
                        <a
                        href="#"
                        className="hover:text-white hover:bg-[#17A600] px-2 py-2"
                        >
                         Adv 3
                        </a>
                    </div> 

                    {/* Regular Link */}
                    <li>
                        <button
                            onClick={toggleDropdown}
                            className="text-gray-600 hover:text-gray-800 font-medium transition focus:outline-none"
                        >
                            Publishers
                        </button>
                    </li>

                    {/* Dropdown links */}
                    <div
                        className={`absolute z-10 flex flex-col bg-white py-2 rounded-md gap-2 ${
                        isDropdownOpen ? "flex" : "hidden"
                        }`}
                    >
                        <a
                        href="#"
                        className="hover:text-white hover:bg-[#17A600] px-2 py-2"
                        >
                         Pub 1
                        </a>
                        <a
                        href="#"
                        className="hover:text-white hover:bg-[#17A600] px-2 py-2"
                        >
                         Pub 2
                        </a>
                        <a
                        href="#"
                        className="hover:text-white hover:bg-[#17A600] px-2 py-2"
                        >
                         Pub 3
                        </a>
                    </div> 

                    {/* Regular Link */}
                    <li>
                        <button
                            onClick={toggleDropdown}
                            className="text-gray-600 hover:text-gray-800 font-medium transition focus:outline-none"
                        >
                            About Us
                        </button>
                    </li>

                    {/* Dropdown links */}
                    <div
                        className={`absolute z-10 flex flex-col bg-white py-2 rounded-md gap-2 ${
                        isDropdownOpen ? "flex" : "hidden"
                        }`}
                    >
                        <a
                        href="#"
                        className="hover:text-white hover:bg-[#17A600] px-2 py-2"
                        >
                         About 1
                        </a>
                        <a
                        href="#"
                        className="hover:text-white hover:bg-[#17A600] px-2 py-2"
                        >
                         About 2
                        </a>
                        <a
                        href="#"
                        className="hover:text-white hover:bg-[#17A600] px-2 py-2"
                        >
                         About 3
                        </a>
                    </div> 

                </ul>
            </div>
        </nav>
    )
}

export default Navbar;