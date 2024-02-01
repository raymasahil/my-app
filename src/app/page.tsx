'use client';
import Image from 'next/image'
import Header from '@/app/(Components)/Header';
import MySwiper from '@/app/(Components)/MySwiper';
import Servies from '@/app/(Components)/Services';

import '@/style/global.css';

//import React from "react";
import {Tabs, Tab, Card, CardBody} from "@nextui-org/react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLeaf, faStethoscope, faAmbulance, faQuoteLeft, faQuoteRight } from "@fortawesome/free-solid-svg-icons";

import React, { useRef, useState } from 'react';


// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


// import required modules
import { Pagination } from 'swiper/modules';
import Link from 'next/link';


export default function Home() {
  return (
          
          <div className="full mx-auto pl-4 pr-4 lg:pl-0 lg:pr-0">

            {/* Swiper Section */}
            <section className='justify-center fx- mx-auto pb-4 !z-[99999]'>
              <MySwiper />
            </section>

            {/* About Section */}

            <div className='text-center pt-11 pb-6 w-full'>
              {/* <p className='text-sm mb-2 text-pink-500'>About Us</p> */}

              
                <h1 className='text-4xl  font-bold'>Dr. Surbhi Vegad</h1> 
                <p className='mb-8 text-sm text-pink-500'>Gynecologist And Obstetrician</p>
                <div className='flex justify-center heading-title'>
                  <span>
                    <Image className='mx-auto' src="/Images/Group-98.png" alt="" width={40} height={40} />
                  </span>
                </div>

            </div>

            <div className='flex container max-w-[1280px] mx-auto pt-8 pb-8 gap-20'>

              <div className='w-2/5 flex justify-center'>
                <Image
                  src="/Images/Surabhi-Bg.png"
                  width={640}
                  height={400}
                  alt="Meet the Team"
                  className='rounded'
                />
              </div>
              
              <div className='w-3/5 flex justify-center items-center'>
                <div className=''>

                   
                  <p className='font-medium pb-3'>We are dedicated to providing comprehensive healthcare services tailored specifically to address the unique needs of women. </p> 

                  <p className='font-medium pb-3'>Our clinics are committed to promoting and safeguarding women’s health at every stage of life. Our team of experienced healthcare professionals specializes in a wide range of women’s health issues, from routine check-ups and preventive care to specialized treatments and interventions.</p> 

                  <p>We understand that women’s health encompasses not only physical well-being but also emotional and mental health. That’s why we offer a holistic approach to healthcare that emphasizes education, prevention, and personalized care.</p>
                  
                  <button className="border border-pink-500 text-pink-500 hover:bg-pink-500 hover:text-white ransition-all duration-300 mt-4 pt-2 pb-2 rounded-3xl pl-4 pr-4 shadow-lg flex items-center">
                      Read More <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 ml-1">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                      </svg>

                  </button>

                  {/* <div className='flex items-center gap-4 mt-12'>
                      <div>
                        <Image src="/Images/Safety.png" width={140} height={140} alt="Safety" />
                      </div>
                      <div className='w-96'>
                        <p>National Accreditation Board for Hospitals & Healthcare Providers (NABH)</p>
                      </div>
                  </div> */}
                  
                </div>

              </div>
            </div>

            {/* Services Section */}
            <div className='container max-w-[1280px] mx-auto mt-2 mb-24'>

              {/* <div className='flex flex-col items-center pt-11 pb-11'>
                <p className='w-3/4 text-center pb-3 text-2xl'>“Our mission is to empower women to take control of their health, making informed decisions that lead to happier, healthier lives.”</p>
                <p className='font-semibold text-purple-900 '>Dr Surbhi Vegad, MD</p>

              </div> */}

              {/* Add a vertical line */}
              {/* <div className='flex justify-center'>
                <div className="border-l border-yellow-700 h-36 mx-4"></div>
              </div> */}

              <div className='bg-purple-50 pl-10 mb-6 rounded flex justify-between items-end'>

                <div className='pb-10'>
                  <h1 className='text-5xl font-bold text-purple-900 mb-2'>Things to Know</h1> 
                  <p className='font-medium text-pink-500'>Tailored care for every stage of life</p> 
                </div>

                <div className='mask-image'>
                  <div className='mask'>
                    <Image src="/Images/hero-img1.jpg" width={450} height={450} alt="" />
                  </div>
                </div>

              </div>

              <div className='grid grid-rows-2 grid-flow-col gap-6 items-center'>

                <div className='bg-purple-50 rounded flex flex-col hover:shadow-md transition-all duration-300 p-6 '>
                  <Image className='pb-2' src="./SVG/pregnant-icon.svg" alt="Gynaecology" width={70} height={70} />
                  <h3 className='text-purple-900 font-semibold mb-2'>Gynaecology</h3>
                  <p className='text-purple-900 text-sm'>Gynecologists diagnose and manage various</p>
                  <Link href="/"> 
                    <button className="border border-pink-500 text-pink-500 hover:bg-pink-500 hover:text-white text-sm ransition-all duration-300 mt-2 pt-1 pb-1 rounded-3xl pl-4 pr-4 shadow-lg flex items-center">
                        Know More <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 ml-1">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                        </svg>

                    </button>
                  </Link>
                </div>

                <div className='bg-purple-50 rounded flex flex-col hover:shadow-md transition-all duration-300 p-6 '>
                  <Image className='pb-2' src="./SVG/laparoscopy-icon.svg" alt="Laparoscopy Surgery" width={70} height={70} />
                  <h3 className='text-purple-900 font-semibold mb-2'>Laparoscopy Surgery</h3>
                  <p className='text-purple-900 text-sm'>Gynecologists diagnose and manage various</p>
                  
                  <Link href="/"> 
                    <button className="border border-pink-500 text-pink-500 hover:bg-pink-500 hover:text-white text-sm ransition-all duration-300 mt-2 pt-1 pb-1 rounded-3xl pl-4 pr-4 shadow-lg flex items-center">
                        Know More <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 ml-1">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                        </svg>

                    </button>
                  </Link>
                </div>

                <div className='bg-purple-50 rounded flex flex-col hover:shadow-md transition-all duration-300 p-6 '>
                  <Image className='pb-2' src="./SVG/Male-Infertility-icon.svg" alt="Laparoscopy Surgery" width={70} height={70} />
                  <h3 className='text-purple-900 font-semibold mb-2'>Male Infertility</h3>
                  <p className='text-purple-900 text-sm'>Gynecologists diagnose and manage various</p>
                  
                  <Link href="/"> 
                    <button className="border border-pink-500 text-pink-500 hover:bg-pink-500 hover:text-white text-sm ransition-all duration-300 mt-2 pt-1 pb-1 rounded-3xl pl-4 pr-4 shadow-lg flex items-center">
                        Know More <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 ml-1">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                        </svg>

                    </button>
                  </Link>
                </div>

                <div className='bg-purple-50 rounded flex flex-col hover:shadow-md transition-all duration-300 p-6 '>
                  <Image className='pb-2' src="./SVG/infertility-icon.svg" alt="Women Infertility" width={70} height={70} />
                  <h3 className='text-purple-900 font-semibold mb-2'>Women Infertility</h3>
                  <p className='text-purple-900 text-sm'>Gynecologists diagnose and manage various</p>
                  
                  <Link href="/"> 
                    <button className="border border-pink-500 text-pink-500 hover:bg-pink-500 hover:text-white text-sm ransition-all duration-300 mt-2 pt-1 pb-1 rounded-3xl pl-4 pr-4 shadow-lg flex items-center">
                        Know More <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 ml-1">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                        </svg>

                    </button>
                  </Link>
                </div>

                <div className='bg-purple-50 rounded flex flex-col hover:shadow-md transition-all duration-300 p-6 '>
                  <Image className='pb-2' src="./SVG/Maternity-baby-icon.svg" alt="Maternity" width={70} height={70} />
                  <h3 className='text-purple-900 font-semibold mb-2'>Maternity</h3>
                  <p className='text-purple-900 text-sm'>Gynecologists diagnose and manage various</p>
                  
                  <Link href="/"> 
                    <button className="border border-pink-500 text-pink-500 hover:bg-pink-500 hover:text-white text-sm ransition-all duration-300 mt-2 pt-1 pb-1 rounded-3xl pl-4 pr-4 shadow-lg flex items-center">
                        Know More <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 ml-1">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                        </svg>

                    </button>
                  </Link>
                </div>


                <div className='bg-purple-50 rounded flex flex-col hover:shadow-md transition-all duration-300 p-6 '>
                  <Image className='pb-2' src="./SVG/pregnant-icon.svg" alt="Gynaecology" width={70} height={70} />
                  <h3 className='text-purple-900 font-semibold mb-2'>Gynaecology</h3>
                  <p className='text-purple-900 text-sm'>Gynecologists diagnose and manage various</p>
                  <Link href="/"> 
                    <button className="border border-pink-500 text-pink-500 hover:bg-pink-500 hover:text-white text-sm ransition-all duration-300 mt-2 pt-1 pb-1 rounded-3xl pl-4 pr-4 shadow-lg flex items-center">
                        Know More <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 ml-1">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                        </svg>

                    </button>
                  </Link>
                </div>

                <div className='bg-purple-50 rounded flex flex-col hover:shadow-md transition-all duration-300 p-6 '>
                  <Image className='pb-2' src="./SVG/laparoscopy-icon.svg" alt="Laparoscopy Surgery" width={70} height={70} />
                  <h3 className='text-purple-900 font-semibold mb-2'>Laparoscopy Surgery</h3>
                  <p className='text-purple-900 text-sm'>Gynecologists diagnose and manage various</p>
                  
                  <Link href="/"> 
                    <button className="border border-pink-500 text-pink-500 hover:bg-pink-500 hover:text-white text-sm ransition-all duration-300 mt-2 pt-1 pb-1 rounded-3xl pl-4 pr-4 shadow-lg flex items-center">
                        Know More <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 ml-1">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                        </svg>

                    </button>
                  </Link>
                </div>

                <div className='bg-purple-50 rounded flex flex-col hover:shadow-md transition-all duration-300 p-6 '>
                  <Image className='pb-2' src="./SVG/Male-Infertility-icon.svg" alt="Laparoscopy Surgery" width={70} height={70} />
                  <h3 className='text-purple-900 font-semibold mb-2'>Male Infertility</h3>
                  <p className='text-purple-900 text-sm'>Gynecologists diagnose and manage various</p>
                  
                  <Link href="/"> 
                    <button className="border border-pink-500 text-pink-500 hover:bg-pink-500 hover:text-white text-sm ransition-all duration-300 mt-2 pt-1 pb-1 rounded-3xl pl-4 pr-4 shadow-lg flex items-center">
                        Know More <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 ml-1">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                        </svg>

                    </button>
                  </Link>
                </div>

                <div className='bg-purple-50 rounded flex flex-col hover:shadow-md transition-all duration-300 p-6 '>
                  <Image className='pb-2' src="./SVG/infertility-icon.svg" alt="Women Infertility" width={70} height={70} />
                  <h3 className='text-purple-900 font-semibold mb-2'>Women Infertility</h3>
                  <p className='text-purple-900 text-sm'>Gynecologists diagnose and manage various</p>
                  
                  <Link href="/"> 
                    <button className="border border-pink-500 text-pink-500 hover:bg-pink-500 hover:text-white text-sm ransition-all duration-300 mt-2 pt-1 pb-1 rounded-3xl pl-4 pr-4 shadow-lg flex items-center">
                        Know More <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 ml-1">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                        </svg>

                    </button>
                  </Link>
                </div>

                <div className='bg-purple-50 rounded flex flex-col hover:shadow-md transition-all duration-300 p-6 '>
                  <Image className='pb-2' src="./SVG/Maternity-baby-icon.svg" alt="Maternity" width={70} height={70} />
                  <h3 className='text-purple-900 font-semibold mb-2'>Maternity</h3>
                  <p className='text-purple-900 text-sm'>Gynecologists diagnose and manage various</p>
                  
                  <Link href="/"> 
                    <button className="border border-pink-500 text-pink-500 hover:bg-pink-500 hover:text-white text-sm ransition-all duration-300 mt-2 pt-1 pb-1 rounded-3xl pl-4 pr-4 shadow-lg flex items-center">
                        Know More <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 ml-1">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                        </svg>

                    </button>
                  </Link>
                </div>


                

              </div>
            </div>

            {/* Services Section: Option - 2 */}
            
            {/* <div className="max-w-[1280px] mx-auto flex w-full flex-col pt-14 pb-14">
              <Tabs aria-label="Options">
                <Tab key="gynaecology" title="Gynaecology">
                  <Card>
                    <CardBody>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </CardBody>
                  </Card>  
                </Tab>
                <Tab key="laparoscopy-surgery" title="Laparoscopy Surgery">
                  <Card>
                    <CardBody>
                      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                    </CardBody>
                  </Card>  
                </Tab>
                <Tab key="male-infertility" title="Male Infertility">
                  <Card>
                    <CardBody>
                      Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </CardBody>
                  </Card>  
                </Tab>
                <Tab key="women-infertility" title="Women Infertility">
                  <Card>
                    <CardBody>
                      Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </CardBody>
                  </Card>  
                </Tab>
                <Tab key="maternity" title="Maternity">
                  <Card>
                    <CardBody>
                      Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </CardBody>
                  </Card>  
                </Tab>
              </Tabs>
            </div>  */}


                       
            {/* <div className='container max-w-[1280px] mx-auto pt-8 pb-8'>
              <Servies />
            </div> */}

            {/* Parallex Section */}
            <section className="bg-[url('/Images/parallax-lab-image.jpg')] min-h-96 bg-fixed" >
              <div className="container max-w-[1280px] gap-10  mx-auto flex items-center min-h-96">
                <div className="w-1/2 flex">
                  <Image src="/Images/doctor-1.png" width={570} height={616} alt="" />
                 </div>
                <div className="w-1/2">
                  <h3 className='mb-10 flex items-center text-[#27115f] w-[500px] font-bold text-2xl'>
                    {/* <FontAwesomeIcon icon={faQuoteLeft} className="mr-12 h-10 text-[#27115f]"></FontAwesomeIcon> */}
                    Introducing Bavishi Fertility Institute (BFI) - An IVF Center in Bhuj
                  </h3>

                  <div>
                    
                    {/* <div className='space-y-8'>

                      <div className='flex gap-6'>
                        <div><FontAwesomeIcon icon={faLeaf} className="p-5 border-2 border-[#27115f] text-[#27115f] rounded-full w-5 h-5"></FontAwesomeIcon></div>
                        <div className='space-y-3'>
                          <h4 className='text-[#27115f] font-semibold'>Award Winning Service</h4>
                          <p>Duas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia</p>
                        </div>
                      </div>
                      <div className='flex gap-6'>
                        <div><FontAwesomeIcon icon={faStethoscope} className="p-5 border-2 border-[#27115f] text-[#27115f] rounded-full w-5 h-5"></FontAwesomeIcon></div>
                        <div className='space-y-3'>
                          <h4 className='text-[#27115f] font-semibold'>Best Doctors</h4>
                          <p>Duas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia</p>
                        </div>
                      </div>
                      <div className='flex gap-6'>
                        <div><FontAwesomeIcon icon={faAmbulance} className="p-5 border-2 border-[#27115f] text-[#27115f] rounded-full w-5 h-5"></FontAwesomeIcon></div>
                        <div className='space-y-3'>
                          <h4 className='text-[#27115f] font-semibold'>Dedicated Emergency Care</h4>
                          <p>Duas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia</p>
                        </div>
                      </div>

                    </div> */}

                    <div className='space-y-8'>

                      <div className='flex gap-6'>
                        <div className='space-y-3'>
                          <p>We work with the principles of confidentiality, responsibility and professionalism. We are building families with technology and trust.</p>
                        </div>
                      </div>

                      <div className='flex gap-6'>
                        <div className='space-y-3'>
                          <p>Our state-of-the-art reproductive medicine facilities / Fertility clinics – provide highly individualized, customized, personalized treatment with a holistic and minimalistic approach, since 1986.</p>
                        </div>
                      </div>
                      
                      <div className='flex gap-6'>
                        <div className='space-y-3'>
                          <p>As a leading IVF clinic in Bhuj, founded and led by the well-known experts of <span className='text-pink-500 font-bold'>Bavishi family</span> / Dr Himanshu Bavishi & Dr Falguni Bavishi, all BFI clinics offer meticulous attention of the highest order in a pleasant and avant-garde environment to make your treatment Simple, Safe, Smart and Successful.</p>
                        </div>
                      </div>
                      

                    </div>

                  </div>

                </div>
              </div>
            </section>



            {/* Testimonials Section */}
            <div className='container max-w-[1280px] gap-7 flex mx-auto pt-12 pb-8 my-28 items-center'>

              <div className='w-2/5'>
                <div className='text-left'>
                    <h1 className='text-4xl w-96 pb-6 font-bold'>See what our patients are saying</h1> 
                    <p className='font-medium'>Tailored care for every stage of life</p> 
                    <p className='font-medium pb-6'> <span className='font-bold'>4.86 rating</span> based on 300+ reviews</p> 
                    
                    <button className="border border-pink-500 text-pink-500 hover:bg-pink-500 hover:text-white ransition-all duration-300 mt-4 pt-2 pb-2 rounded-3xl pl-4 pr-4 shadow-lg flex items-center">
                        More Testimonials <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 ml-1">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                        </svg>

                    </button>

                    <div className='flex justify-end'>
                      <Image className='pb-2' src="/Images/hand-drawn-arrow1.png" alt="Gynaecology" width={200} height={64} />
                    </div>

                </div>
              </div>
              <div className='w-3/5'>
                <Swiper
                  spaceBetween={30}
                  pagination={{
                    clickable: true,
                  }}
                  modules={[Pagination]}
                  className="Testimonals"
                >
                  <SwiperSlide className='bg-purple-50 p-11 rounded'>
                    <div className=''>
                        <div className='mb-5 flex items-center'>

                          <div className='bg-[#d9d6fe] rounded-full w-14 h-14 mr-4 flex items-center justify-center'>
                            <FontAwesomeIcon icon={faQuoteRight} className="absolute w-5 h-5 text-pink-500"></FontAwesomeIcon>
                          </div>

                          <div>

                            <h3 className='text-lg font-semibold pb-1'>Mahendra Karwa</h3>
                            <div className='flex'>
                              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#FAC515" className="w-4 h-4">
                              <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clipRule="evenodd" />
                              </svg>
                              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#FAC515" className="w-4 h-4">
                              <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clipRule="evenodd" />
                              </svg>
                              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#FAC515" className="w-4 h-4">
                              <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clipRule="evenodd" />
                              </svg>
                              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#FAC515" className="w-4 h-4">
                              <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clipRule="evenodd" />
                              </svg>
                              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#FAC515" className="w-4 h-4">
                              <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clipRule="evenodd" />
                              </svg>
                            </div>

                          </div>
                          
                        </div>

                        <div className='text-left'>
                            <p>It was never felt as hospital. So much care, help,guidance received from the staff of spandan team. From starting of pregnancy of my wife, we got very good guidance from Dr. Vinkal dhanani. Thanks to every individual of Spandan team.</p>
                        </div>
                        
                        <div className='mt-5'>
                            <div>
                              <p className="text-sm font-medium">Posted on Google</p>
                              <p className='text-xs font-semibold text-pink-500'>January 1, 2024</p>
                            </div>
                        </div>


                    </div>
                  </SwiperSlide>


                  <SwiperSlide className='bg-purple-50 p-11 rounded'>
                    <div className=''>
                        <div className='mb-5 flex items-center'>

                          <div className='bg-[#d9d6fe] rounded-full w-14 h-14 mr-4 flex items-center justify-center'>
                            <FontAwesomeIcon icon={faQuoteRight} className="absolute w-5 h-5 text-pink-500"></FontAwesomeIcon>
                          </div>

                          <div>

                            <h3 className='text-lg font-semibold pb-1'>Mahendra Karwa</h3>
                            <div className='flex'>
                              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#FAC515" className="w-4 h-4">
                              <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clipRule="evenodd" />
                              </svg>
                              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#FAC515" className="w-4 h-4">
                              <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clipRule="evenodd" />
                              </svg>
                              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#FAC515" className="w-4 h-4">
                              <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clipRule="evenodd" />
                              </svg>
                              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#FAC515" className="w-4 h-4">
                              <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clipRule="evenodd" />
                              </svg>
                              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#FAC515" className="w-4 h-4">
                              <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clipRule="evenodd" />
                              </svg>
                            </div>

                          </div>
                          
                        </div>

                        <div className='text-left'>
                            <p>It was never felt as hospital. So much care, help,guidance received from the staff of spandan team. From starting of pregnancy of my wife, we got very good guidance from Dr. Vinkal dhanani. Thanks to every individual of Spandan team.</p>
                        </div>
                        
                        <div className='mt-5'>
                            <div>
                              <p className="text-sm font-medium">Posted on Google</p>
                              <p className='text-xs font-semibold text-pink-500'>January 1, 2024</p>
                            </div>
                        </div>


                    </div>
                  </SwiperSlide>


                  <SwiperSlide className='bg-purple-50 p-11 rounded'>
                    <div className=''>
                        <div className='mb-5 flex items-center'>

                          <div className='bg-[#d9d6fe] rounded-full w-14 h-14 mr-4 flex items-center justify-center'>
                            <FontAwesomeIcon icon={faQuoteRight} className="absolute w-5 h-5 text-pink-500"></FontAwesomeIcon>
                          </div>

                          <div>

                            <h3 className='text-lg font-semibold pb-1'>Mahendra Karwa</h3>
                            <div className='flex'>
                              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#FAC515" className="w-4 h-4">
                              <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clipRule="evenodd" />
                              </svg>
                              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#FAC515" className="w-4 h-4">
                              <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clipRule="evenodd" />
                              </svg>
                              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#FAC515" className="w-4 h-4">
                              <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clipRule="evenodd" />
                              </svg>
                              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#FAC515" className="w-4 h-4">
                              <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clipRule="evenodd" />
                              </svg>
                              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#FAC515" className="w-4 h-4">
                              <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clipRule="evenodd" />
                              </svg>
                            </div>

                          </div>
                          
                        </div>

                        <div className='text-left'>
                            <p>It was never felt as hospital. So much care, help,guidance received from the staff of spandan team. From starting of pregnancy of my wife, we got very good guidance from Dr. Vinkal dhanani. Thanks to every individual of Spandan team.</p>
                        </div>
                        
                        <div className='mt-5'>
                            <div>
                              <p className="text-sm font-medium">Posted on Google</p>
                              <p className='text-xs font-semibold text-pink-500'>January 1, 2024</p>
                            </div>
                        </div>


                    </div>
                  </SwiperSlide>
                  
                </Swiper>

              </div>


            </div>

            <section className='bg-purple-50 pt-20 pb-20'>
              <div className="max-w-[1280px] mx-auto">

                  <div className='text-center mb-3'>
                    <h1 className='text-2xl mb-2 font-bold'>Insurance Approved Consultant</h1> 
                    <p className='text-xs pb-6'>* All product names, logos, brands, trademarks and registered trademarks are property of their respective owners.</p>
                  </div>

                  <div className='grid grid-rows-1 grid-flow-col items-center gap-4'>
                    
                    <div className='flex justify-center'>
                      <Image src="/Images/client-img3.png" width={100} height={100} alt="cigna" />
                    </div>
                    <div className='flex justify-center'>
                      <Image src="/Images/client-img3.png" width={100} height={100} alt="cigna" />
                    </div>
                    <div className='flex justify-center'>
                      <Image src="/Images/client-img3.png" width={100} height={100} alt="cigna" />
                    </div>
                    <div className='flex justify-center'>
                      <Image src="/Images/client-img3.png" width={100} height={100} alt="cigna" />
                    </div>
                    <div className='flex justify-center'>
                      <Image src="/Images/client-img3.png" width={100} height={100} alt="cigna" />
                    </div>

                  </div>

              </div>
            </section>
             


          </div>


  )
}
