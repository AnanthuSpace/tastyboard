import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <nav className="relative flex items-center justify-between p-4 text-white shadow-lg">
        <div className="absolute left-1/2 -translate-x-1/2 md:relative md:left-0 md:translate-x-0 flex items-center space-x-3">
          <img
            src="/images/Logo.svg"
            alt="Logo"
            className="h-20 w-20 md:h-10 md:w-10"
          />

          <span className="hidden md:block text-3xl font-bold">
            <span className="text-primary">DEEP</span> NET <br />
            <span className="text-secondary-icon"> SOFT</span>
          </span>
        </div>

        <button
          className="md:hidden absolute right-4 p-2 text-white"
          onClick={() => setIsOpen(true)}
        >
          <Menu size={32} />
        </button>

        <ul className="hidden md:flex space-x-6 font-bold">
          <li>
            <Link
              to="/"
              className="hover:text-[#0796EF] transition-colors duration-200"
            >
              HOME
            </Link>
          </li>
          <li>
            <Link
              to="/create-menu"
              className="hover:text-[#0796EF] transition-colors duration-200"
            >
              MENU
            </Link>
          </li>
          <li>
            <Link
              to="/"
              className="hover:text-[#0796EF] transition-colors duration-200"
            >
              MAKE A RESERVATION
            </Link>
          </li>
          <li>
            <Link
              to="/"
              className="hover:text-[#0796EF] transition-colors duration-200"
            >
              CONTACT US
            </Link>
          </li>
        </ul>

        {isOpen && (
          <div className="fixed inset-0 flex flex-col items-center justify-center bg-gray-900 text-white z-50">
            <button
              className="absolute top-6 right-6 text-white"
              onClick={() => setIsOpen(false)}
            >
              <X size={32} />
            </button>

            <ul className="flex flex-col space-y-6 text-2xl font-bold">
              <li>
                <a
                  href="#home"
                  className="hover:text-[#0796EF] transition-colors duration-200"
                  onClick={() => setIsOpen(false)}
                >
                  HOME
                </a>
              </li>
              <li>
                <a
                  href="#menu"
                  className="hover:text-[#0796EF] transition-colors duration-200"
                  onClick={() => setIsOpen(false)}
                >
                  MENU
                </a>
              </li>
              <li>
                <a
                  href="#reservation"
                  className="hover:text-[#0796EF] transition-colors duration-200"
                  onClick={() => setIsOpen(false)}
                >
                  MAKE A RESERVATION
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="hover:text-[#0796EF] transition-colors duration-200"
                  onClick={() => setIsOpen(false)}
                >
                  CONTACT US
                </a>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
