'use client';
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react';
import {Accordion, AccordionItem} from "@nextui-org/react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp, faArrowUpRightFromSquare, faCheck, faEnvelope, faRightLong } from '@fortawesome/free-solid-svg-icons';
export default function About() {
    const defaultContent =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";
    const [activeIndex, setActiveIndex] = useState(0); // State to track active index

    const handleItemClick = (index) => {
        setActiveIndex(index); // Set clicked index as active
    };
    return(
        <div className="main-content bg-[rgb(240,247,253)] pb-20">
             <div className='lg mx-auto relative'>
                <Image
                    src="/images/downloadbanner.jpg"
                    width={500}
                    height={200}
                    alt="Picture of the author"
                    className="w-full h-auto"
                />
                <div className='container max-w-[1280px] mx-auto mt-14 mb-24'>
                    <p className='absolute bottom-20  text-white px-8 py-2 text-6xl'>Treatments</p>
                    <p className="absolute bottom-10 text-white px-8 py-2">
                        <Link href="/">Home</Link> &gt; <Link href="/TreatmentInside">Treatments</Link>
                    </p>
                </div>
            </div>
             <div className='container max-w-[1280px] mx-auto mt-14'>
                <div className="flex gap-12">
                    <div className='w-[30%] h-auto'>
                            <div className="bg-white rounded-3xl pb-8">
                                <p className="p-8 text-center text-[rgb(236,72,153)] text-3xl">Our Service</p>
                                <ul className="list-disc pl-10 mb-0">
                                    <li className={`mb-2 text-[rgb(88,28,135)] flex justify-between ${activeIndex === 0 ? 'active' : ''}`} onClick={() => handleItemClick(0)}>
                                        3D Live 4D & Colored sonography 
                                        <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="mr-8 mt-2" style={{ width: '15px', height: '15px' }}/>
                                    </li>
                                    <div className="w-34 mr-10 mb-4 border-b-2 border-gray-200 mt-4"></div>
                                    <li className={`mb-2 text-[rgb(88,28,135)] flex justify-between ${activeIndex === 1 ? 'active' : ''}`} onClick={() => handleItemClick(1)}>
                                        Laparoscopy Center
                                        <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="mr-8 mt-2" style={{ width: '15px', height: '15px' }}/>
                                    </li>
                                    <div className="w-34 mr-10 mb-4 border-b-2 border-gray-200 mt-2"></div>
                                    <li className="mb-2 text-[rgb(88,28,135)] flex justify-between hover:text-[rgb(236,72,153)]">
                                        Adolescent Counselling
                                        <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="mr-8 mt-2" style={{ width: '15px', height: '15px' }}/>
                                    </li>
                                    <div className="w-34 mr-10 mb-4 border-b-2 border-gray-200 mt-2"></div>
                                    <li className="mb-2 text-[rgb(88,28,135)] flex justify-between hover:text-[rgb(236,72,153)]">
                                        Stretcher Lift Facility
                                        <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="mr-8 mt-2" style={{ width: '15px', height: '15px' }}/>
                                    </li>
                                    <div className="w-34 mr-10 mb-4 border-b-2 border-gray-200 mt-2"></div>
                                    <li className="mb-2 text-[rgb(88,28,135)] flex justify-between hover:text-[rgb(236,72,153)]">
                                        Adolescent Counselling
                                        <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="mr-8 mt-2" style={{ width: '15px', height: '15px' }}/>
                                    </li>
                                    <div className="w-34 mr-10 mb-4 border-b-2 border-gray-200 mt-2"></div>
                                    <li className="mb-2 text-[rgb(88,28,135)] flex justify-between hover:text-[rgb(236,72,153)]">
                                        Laparoscopy Center
                                        <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="mr-8 mt-2" style={{ width: '15px', height: '15px' }}/>
                                    </li>
                                    <div className="w-34 mr-10 mb-4 border-b-2 border-gray-200 mt-2"></div>
                                    <li className="mb-2 text-[rgb(88,28,135)] flex justify-between hover:text-[rgb(236,72,153)]">
                                        Stretcher Lift Facility
                                        <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="mr-8 mt-2" style={{ width: '15px', height: '15px' }}/>
                                    </li>
                                    <div className="w-34 mr-10 mb-4 border-b-2 border-gray-200 mt-2"></div>
                                    <li className="mb-2 text-[rgb(88,28,135)] flex justify-between hover:text-[rgb(236,72,153)]">
                                        Laparoscopy Center
                                        <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="mr-8 mt-2" style={{ width: '15px', height: '15px' }}/>
                                    </li>
                                    <div className="w-34 mr-10 mb-4 border-b-2 border-gray-200 mt-2"></div>
                                    <li className="mb-2 text-[rgb(88,28,135)] flex justify-between hover:text-[rgb(236,72,153)]">
                                        Laparoscopy Center
                                        <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="mr-8 mt-2" style={{ width: '15px', height: '15px' }}/>
                                    </li>
                                    <div className="w-34 mr-10 mb-4 border-b-2 border-gray-200 mt-2"></div>
                                    <li className="mb-2 text-[rgb(88,28,135)] flex justify-between hover:text-[rgb(236,72,153)]">
                                        Laparoscopy Center
                                        <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="mr-8 mt-2" style={{ width: '15px', height: '15px' }}/>
                                    </li>
                                    <div className="w-34 mr-10 mb-4 border-b-2 border-gray-200 mt-2"></div>
                                    <li className="mb-2 text-[rgb(88,28,135)] flex justify-between hover:text-[rgb(236,72,153)]">
                                        Laparoscopy Center
                                        <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="mr-8 mt-2" style={{ width: '15px', height: '15px' }}/>
                                    </li>
                                </ul>
                                    <style jsx>{`
                                        /* Style for active state */
                                        .active {
                                           color:blue;
                                        }
                                    `}</style>
                            </div>
                            <div className='h-auto mt-8 rounded-xl p-8 bg-[#27115f]'>
                                <h3 className="text-slate-50 text-2xl font-bold">Our Location</h3>
                                <h2 className="text-xl text-bold mt-4 mb-4 text-slate-100">Bhuj</h2>
                                <p className="leading-6 text-slate-200 text-sm w-96">Shivam Nagar, Near Uma Nagar, Highway, Near Kutch Orthopadic Hospital, Mirjapar, Bhuj, Gujarat 370040</p>
                                <div className="flex mt-6 items-center">
                                    <div>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 mr-1 text-slate-200">
                                        <path fillRule="evenodd" d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                    <div className="text-base text-slate-200 text-slate-200"> <Link href="#"> View Map </Link> </div>
                                </div>
                            </div>
                        </div>

                            <div className='w-[70%] h-[50%]'>
                                    <Image
                                        src="/images/treatmentinside-img.jpg"
                                        width={500}
                                        height={500}
                                        alt="Picture of the author"
                                        className="w-full  rounded-3xl"
                                    />
                                    <div className='text-left text-[rgb(88,28,135)] text-3xl mt-14'>
                                    <p>Delivering world class medical care</p>
                                    </div>
                                    <div className='mt-8'>
                                        <p className='text-[#927fba]'>
                                        <span className='text-3xl text-[rgb(88,28,135)]'>M</span>ain Hospitals or larger hospital systems may provide their own ambulance service as a service to the community, or where ambulance care is unreliable or chargeable. Many hospital-based EMS departments operate solely with their hospital
                                        </p>
                                        <p className='mt-8 text-[#927fba]'>
                                        The physicians will attempt to treat casualties at the scene and will only transport them to hospital if it is deemed necessary. If patients are transported to hospital, they are more likely to go straight to a ward rather than to an emergency department. Countries that use this model include Austria, France, Belgium, Luxembourg, Italy, Spain, Brazil and Chile.
                                        </p>
                                    </div>
                                    <div className='flex justify-between mt-6'>
                                        <div className='grid grid-cols-1 border-0 '>
                                            <div className='flex align-center'>
                                            <FontAwesomeIcon icon={faCheck} className="mr-4 mt-1 size-6 text-[#5a399e]"/>
                                                <p className='text-[#5a399e] leading-loose '>That extremely painful or again is there anyone.</p>
                                            </div>
                                            <div className='flex'>
                                            <FontAwesomeIcon icon={faCheck} className="mr-4 mt-1 size-6 text-[#5a399e]"/>
                                                <p className='text-[#5a399e] leading-loose'>Desires these cases are perfectly simple easy distinguish.</p>
                                            </div>
                                            <div className='flex'>
                                            <FontAwesomeIcon icon={faCheck} className="mr-4 mt-1 size-6 text-[#5a399e]"/>
                                                <p className='text-[#5a399e] leading-loose'>That extremely painful or again is there anyone.</p>
                                            </div>
                                            <div className='flex'>
                                            <FontAwesomeIcon icon={faCheck} className="mr-4 mt-1 size-6 text-[#5a399e]"/>
                                            <p className='text-[#5a399e] leading-loose'>That extremely painful or again is there anyone.</p>
                                            </div>
                                        </div>
                                        <div className='grid grid-cols-1 border-0 '>
                                            <div className='flex'>
                                            <FontAwesomeIcon icon={faCheck} className="mr-4 mt-1 size-6 text-[#5a399e] "/>
                                                <p className='text-[#5a399e] leading-loose'>That extremely painful or again is there anyone.</p>
                                            </div>
                                            <div className='flex'>
                                            <FontAwesomeIcon icon={faCheck} className="mr-4 mt-1 size-6 text-[#5a399e] "/>
                                                <p className='text-[#5a399e] leading-loose'>People are sleeping much less than they did in the past.</p>
                                            </div>
                                            <div className='flex'>
                                            <FontAwesomeIcon icon={faCheck} className="mr-4 mt-1 size-6 text-[#5a399e]"/>
                                                <p className='text-[#5a399e] leading-loose'>That extremely painful or again is there anyone.</p>
                                            </div>
                                            <div className='flex'>
                                            <FontAwesomeIcon icon={faCheck} className="mr-4 mt-1 size-6 text-[#5a399e] "/>
                                                <p className='text-[#5a399e] leading-loose'>Your body is full of trillions of bacteria, viruses and fungi</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='text-left text-[rgb(88,28,135)] text-3xl mt-14'>
                                        <p>Frequently asked questions</p>
                                    </div>
                                    <div className='mt-8'>
                                        <p className='text-[#927fba]'>
                                        Consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud laboris nisi ut aliquip ex ea commodo consequat. fugiat nulla pariatur. Nemo enim ipsam voluptatem quia voluptas voluptatem.
                                        </p>
                                    </div>
                                        <Accordion variant="shadow" className='mt-8 ml-0'>
                                            <AccordionItem key="1" className='text-[#927fba] bg-white rounded-3xl p-4 mb-4' title="01. What all should I carry for my first appointment?" aria-label="Accordion 1">
                                                <div className='text-purple-800'>{defaultContent}</div>
                                            </AccordionItem>
                                            <AccordionItem key="2" className='text-[#927fba] bg-white rounded-3xl p-4 mb-4' aria-label="Accordion 2" title="02. How is the Emergency Department staffed?">
                                                {defaultContent}
                                            </AccordionItem>
                                            <AccordionItem key="3" className='text-[#927fba] bg-white rounded-3xl p-4 mb-4' aria-label="Accordion 3" title="03. What if my patient does not have a matched sibling?">
                                                {defaultContent}
                                            </AccordionItem>
                                        </Accordion>
                                   
                            </div>
                </div>
             </div>
        </div>
    )
}
