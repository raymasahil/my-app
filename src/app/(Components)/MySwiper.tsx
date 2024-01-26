'use client';
import React, { useRef, useState } from 'react';
import Image from 'next/image';
import { Button } from '@nextui-org/react';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles

import 'swiper/css';
import 'swiper/css/pagination';


// import required modules
import { Pagination } from 'swiper/modules';

import '@/style/swiper.css';

const MySwiper: React.FC = () => {
    return(

      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        className="mySwiper !h-screen !z-[1]"
        // className="mySwiper !h-screen mt-[-135px] !z-[1]"
        >

          <SwiperSlide className="flex w-full justify-center items-center bg-[url('/Images/bg2-big.jpg')] bg-cover bg-no-repeat"> 
            <div className='max-w-[1280px] mx-auto w-full h-full px-4 flex flex-row items-center'>
                <div className='w-1/2 animate-fade-in'>
                  <h1 className='w-72 text-4xl font-bold pb-4'>Your well-being is our priority</h1> 
                  <p className='font-medium'>Promoting good health together.</p> 
                  <button className="border border-pink-500 text-pink-500 hover:bg-pink-500 hover:text-white ransition-all duration-300 mt-3 pt-2 pb-2 rounded-3xl pl-4 pr-4 shadow-lg flex items-center">
                    Button <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 ml-2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                      </svg>

                  </button>
                </div>
                <div className='w-1/2'></div>
            </div>
          </SwiperSlide>

          <SwiperSlide className="flex w-full justify-center items-center bg-[url('/Images/bg3-big.jpg')] bg-cover bg-no-repeat"> 
            <div className='max-w-[1280px] mx-auto w-full h-full px-4 flex flex-row items-center'>
                <div className='w-1/2 animate-fade-in'>
                  <h1 className='w-[600px] text-4xl font-bold pb-4'>We are committed to your health and well-being</h1> 
                  <p className='font-medium w-96'>We are dedicated to providing comprehensive healthcare services tailored specifically to address the unique needs of women.</p> 
                  <button className="border border-pink-500 text-pink-500 hover:bg-pink-500 hover:text-white ransition-all duration-300 mt-3 pt-2 pb-2 rounded-3xl pl-4 pr-4 shadow-lg flex items-center">
                    Button <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 ml-2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                      </svg>

                  </button>
                </div>
                <div className='w-1/2'></div>
            </div>
          </SwiperSlide>
              
        
      </Swiper>

    )
}

export default MySwiper;