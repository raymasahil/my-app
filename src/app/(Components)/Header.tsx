'use client';
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="relative !z-[99] py-5">
       <div className="absolute inset-0 z-2 h-170 bg-gradient-to-b from-[#00000080] to-transparent"></div>
      <nav className="p-0">
        <div className="container mx-auto">
          <div className="flex justify-between items-center">
            <div className="text-pink-500 !z-[999]">
              <Link href="/"> 
                <Image src="./SVG/Spandan-Logo-Text-Side.svg" alt="Spandan Maternity" width={200} height={64} />

              </Link>
            </div>
            <div className="flex text-pink-500 !z-[999]">
              <div className="sm:hidden text-pink-500 cursor-pointer" onClick={toggleMenu}>
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
                    d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M3.75 9h16.5m-16.5 6.75h16.5"}
                  />
                </svg>
              </div>
              <ul
                className={`sm:flex p-4 space-x-7 items-center ${
                  isMenuOpen ? "block fixed top-0 pt-4 z-10 right-0  w-full h-full bg-black" : "hidden"
                }`}
              >
                <li className="sm:hidden absolute top-4 right-4">
                  <div className="text-pink-500 cursor-pointer" onClick={closeMenu}>
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
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </div>
                </li>
                <li>
                  <Link href="/" onClick={closeMenu}>
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/About" onClick={closeMenu}>
                    About
                  </Link>
                </li>
                <li>
                  <Link href="/Contact" onClick={closeMenu}>
                    Services
                  </Link>
                </li>
                <li>

                  <button className="mt-0 pt-2 pb-2 pl-4 pr-4 rounded-3xl text-white bg-pink-500 flex items-center">
                    Contact Us
                  </button>

                </li>
                
              </ul>

              
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;