'use client';

import Link from "next/link";
import Image from "next/image";

import { Fragment, useState } from 'react';
import { Popover, Transition } from "@headlessui/react";
import { ChevronDownIcon } from '@heroicons/react/20/solid';

const TreatmentDropdown: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const closeMenu = () => {
    setIsHovered(false);
    // Add any additional close logic if needed
  };

  return (
    <Popover>
      {({ open }) => (
        <>
          <Popover.Button
            className="focus:outline-none cursor-pointer flex items-center"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <span>Treatments</span>
            <ChevronDownIcon className="w-5 h-5 ml-1" />
          </Popover.Button>

          <Transition
            show={open || isHovered}
            as={Fragment}
            enter="transition ease-out duration-200"
            enterFrom="opacity-0 translate-y-1"
            enterTo="opacity-100 translate-y-0"
            leave="transition ease-in duration-150"
            leaveFrom="opacity-100 translate-y-0"
            leaveTo="opacity-0 translate-y-1"
          >
            <Popover.Panel static
              className="absolute mt-2 space-y-2"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                {/* Popover Content */}
                <div className="p-4 bg-white text-black">
                  <ul className="space-y-4 text-sm">
                    <li className="hover:text-pink-600">
                      <Link href="/Gynecology" onClick={closeMenu}>
                        Gynecology
                      </Link>
                    </li>
                    <li className="hover:text-pink-600">
                      <Link href="/MaleInfertility" onClick={closeMenu}>
                        Male Infertility
                      </Link>
                    </li>
                    <li className="hover:text-pink-600">
                      <Link href="/LaparoscopySurgery" onClick={closeMenu}>
                        Laparoscopy Surgery
                      </Link>
                    </li>
                    <li className="hover:text-pink-600">
                      <Link href="/Maternity" onClick={closeMenu}>
                        Maternity
                      </Link>
                    </li>
                    <li className="hover:text-pink-600">
                      <Link href="/WomenInfertility" onClick={closeMenu}>
                        Women Infertility
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </Popover.Panel>
          </Transition>
        </>
      )}
    </Popover>
  );
};


const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="relative !z-[99] py-5">
      {/* <div className="absolute inset-0 z-2 h-170 bg-gradient-to-b from-[#00000080] to-transparent"></div> */}
      <nav className="p-0">
        <div className="container mx-auto">
          <div className="flex justify-between items-center">
            <div className="text-pink-500 !z-[999]">
              <Link href="/">
                <Image src="./SVG/Spandan-Logo-Text-Side.svg" alt="Spandan Maternity" width={200} height={64} />
              </Link>
            </div>
            <div className="flex text-black !z-[999]">
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
              <ul className={`sm:flex p-4 space-x-10 items-center ${isMenuOpen ? "block fixed top-0 pt-4 z-10 right-0 w-full h-full bg-black" : "hidden"}`}>
                <li className="sm:hidden absolute top-4 right-4">
                  <div className="text-pink-500 cursor-pointer" onClick={closeMenu}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
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
                  <Link href="/" onClick={closeMenu}>
                    Insurance
                  </Link>
                </li>
                <li>
                  <Link href="/" onClick={closeMenu}>
                    Facilities
                  </Link>
                </li>
                <li>
                  <TreatmentDropdown />
                </li>
                <li>
                  <Link href="/About" onClick={closeMenu}>
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="/Contact" onClick={closeMenu}>
                    IVF Center
                  </Link>
                </li>
                <li>
                  <Link href="/Contact" onClick={closeMenu}>
                    <button className="mt-0 pt-2 pb-2 pl-4 pr-4 rounded-3xl text-white bg-pink-500 flex items-center">
                      Contact Us
                    </button>
                  </Link>
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
