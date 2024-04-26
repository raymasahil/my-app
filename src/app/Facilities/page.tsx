'use client';
import Image from 'next/image'
import Link from 'next/link'
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLeaf, faStethoscope, faAmbulance, faQuoteLeft, faQuoteRight, faPhoneVolume, faAlignRight, faArrowRightArrowLeft } from "@fortawesome/free-solid-svg-icons";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
export default function Facilities() {
    return (
        <div className="main-content">
            <div className="relative w-full">
                <div className="bg-[url('/Images/hospitalbanner2.jpg')] bg-cover bg-center min-h-96"></div>
                <div className="absolute bottom-0 left-0 right-0" style={{ zIndex: '1', backgroundImage: 'linear-gradient(to bottom, rgba(0,0,0,0.1), #241B19 200%)', height: '100%' }}></div>

                <div className='container max-w-[1280px] mx-auto relative z-10'>
                    <p className='absolute bottom-20 text-white px-8 py-2 text-6xl'>Facilities</p>
                    <p className="absolute bottom-10 text-white px-8 py-2">
                        <Link href="/">Home</Link> &gt; <Link href="/Facilities">Facilities</Link>
                    </p>
                </div>
            </div>
            <div className='container max-w-[1280px] mx-auto relative z-10 pt-14 pb-14'>
                <div className='flex justify-center'>
                    <p className='text-6xl text-[#581C87]'>Our Facilities</p>
                </div>
            </div>
            <div className='pb-20 relative'>
                    <div style={{
                        position: 'relative',
                        width: '1010px',
                        height: '450px',
                        zIndex: '1',
                        display: 'block',
                        overflow: 'hidden' 
                    }}>
                        <div style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            width: '100%',
                            height: '100%',
                            // backgroundImage: 'linear-gradient(to bottom, rgba(0, 0, 0, 0.8), #F5F5F5 200%)',
                            zIndex: '1',
                        }} />
                        <Image
                            src="/images/facilities7.jpg"
                            width={1010}
                            height={550}
                            alt="Main Image"
                          
                            style={{
                                position: 'absolute',
                                left: 0,
                                top: 0,
                                width: '100%',
                                height: '100%',
                                objectFit: 'cover',
                                zIndex: '0',
                                overflow: 'hidden' 
                            }}
                        />
                    </div>
                    <div className='container max-w-[1280px] mx-auto relative z-10'>
                    <div style={{ position: 'absolute', right: '0', bottom: '20%', transform: 'translateY(-320%)', marginRight: '10px' }}>
                        <p className="text-black text-sm text-center text-[#581C87]">
                            If You Need Urgent Care,<br></br> Simply Contact Our 24 Hour Emergency Hotline.<br></br>
                            <span className='text-xl text-[#EC4899]'>Your Health is Our Priority.</span>
                        </p>
                    </div>
                </div>
                    
                <div style={{ marginTop: '80px', marginLeft: '120px', position: 'relative' }}>
                <div className="navigation-buttons p-20 " style={{ position: 'absolute', top: '10%', left: '15%', transform: 'translate(-50%, -50%)', zIndex: 999 }}>
                    <div className="swiper-button-prev">
                        <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M25 5L5 25L25 45" stroke="#581C87" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </div>
                    <p className='text-5xl text-[#581C87]' style={{ display: 'inline-block', margin: '0 20px' }}> View facilities </p>
                    <div className="swiper-button-next">
                        <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M25 45L45 25L25 5" stroke="#581C87" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </div>
            </div>
            <div className='pb-36 relative' style={{ marginTop: '100px' }}>
                <div style={{ position: 'absolute', overflow: 'hidden', width: '60%', bottom:0, right: 0 }}>
                    <Swiper
                        autoplay={true}
                        loop={true}
                        modules={[Autoplay, Navigation]}
                        slidesPerView={3}
                        spaceBetween={25}
                        navigation={{ prevEl: '.swiper-button-prev', nextEl: '.swiper-button-next' }}
                    >
                        <SwiperSlide style={{ width: '350px', height: '350px' }}>
                            <Image
                                src="/images/facilities2.jpg"
                                layout="fill" 
                                objectFit="cover" 
                                alt="First Image"
                                className='rounded-2xl'
                            />
                               </SwiperSlide>
                            <SwiperSlide style={{ width: '350px', height: '350px' }}>
                            <Image
                                src="/images/facilities3.jpg"
                                layout="fill" 
                                objectFit="cover" 
                                alt="First Image"
                                className='rounded-2xl'
                            />
                        </SwiperSlide>
                        <SwiperSlide style={{ width: '350px', height: '350px' }}>
                            <Image
                                src="/images/facilities5.jpg"
                                layout="fill" 
                                objectFit="cover" 
                                alt="First Image"
                                className='rounded-2xl'
                            />
                        </SwiperSlide>
                        <SwiperSlide style={{ width: '350px', height: '350px' }}>
                            <Image
                                src="/images/facilities6.jpg"
                                layout="fill" 
                                objectFit="cover" 
                                alt="First Image"
                                className='rounded-2xl'
                            />
                        </SwiperSlide>
                        <SwiperSlide style={{ width: '350px', height: '350px' }}>
                            <Image
                                src="/images/facilities8.jpg"
                                layout="fill" 
                                objectFit="cover" 
                                alt="First Image"
                                className='rounded-2xl'
                            />
                        </SwiperSlide>
                        <SwiperSlide style={{ width: '350px', height: '350px' }}>
                            <Image
                                src="/images/fac1.jpg"
                                layout="fill" 
                                objectFit="cover" 
                                alt="First Image"
                                className='rounded-2xl'
                            />
                        </SwiperSlide>
                        <SwiperSlide style={{ width: '350px', height: '350px' }}>
                            <Image
                                src="/images/facilities9.jpg"
                                layout="fill" 
                                objectFit="cover" 
                                alt="First Image"
                                className='rounded-2xl'
                            />
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </div>

                    {/* Second faciliti */}
                    
                    <div className='mt-28'>
                        <div style={{
                            position: 'relative',
                            width: '1010px',
                            height: '450px',
                            zIndex: '1',
                            display: 'block',
                            overflow: 'hidden' 
                        }}>
                        <div style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            width: '100%',
                            height: '100%',
                          
                            zIndex: '1',
                        }} />
                        <Image
                            src="/images/facilities4.jpg"
                            width={1010}
                            height={550}
                            alt="Main Image"
                            style={{
                                position: 'absolute',
                                left: 0,
                                top: 0,
                                width: '100%',
                                height: '100%',
                                objectFit: 'cover',
                                zIndex: '0',
                                overflow: 'hidden' 
                            }}
                        />
                    </div>
                    <div className='container max-w-[1280px] mx-auto relative z-10'>
                    <div style={{ position: 'absolute', right: '0', bottom: '20%', transform: 'translateY(-320%)', marginRight: '10px' }}>
                        <p className="text-black text-sm text-center text-[#581C87]">
                             Specializing in advanced infertility solutions, <br></br>
                            <span className='text-xl text-[#EC4899]'>our IVF centre in Bhuj.</span>
                        </p>
                    </div>
                    </div>
                    <div className='container max-w-[1280px] mx-auto relative z-10 pt-14'>
                        <div className='flex justify-center'>
                            <p className='text-6xl text-[#581C87]'>IVF Center</p>
                        </div>
                        <div className="grid grid-cols-4 gap-4 mt-16">
                            <div className=" h-auto rounded-2xl  w-screen/4 flex flex-col">
                                <div>
                                    <Image
                                    src="/images/ivfcenter1.jpg"
                                        width={450} 
                                        height={200} 
                                        alt="Picture of the author"
                                        className='rounded-2xl'
                                    />
                                </div>
                                <div>
                                    <p className='text-center mt-4 text-xl text-[#895FAA]'>IVF CENTER</p>
                                </div>
                            </div>
                        
                            <div className="text-xl h-auto w-screen/4 flex flex-col justify-center ">
                                <div>
                                    <Image
                                        src="/images/ivfcenter6.jpg"
                                        width={450} 
                                        height={200} 
                                        alt="Picture of the author"
                                        className='rounded-2xl'
                                    />
                                </div>
                                <div>
                                <p className='text-center mt-4 text-xl text-[#895FAA]'>IVF CENTER</p>
                                </div>
                                
                            </div>
                            <div className=" h-auto w-screen/4 flex flex-col justify-center">
                                <div>
                                    <Image
                                    src="/images/ivfcenter3.jpg"
                                        width={450} 
                                        height={200} 
                                        alt="Picture of the author"
                                        className='rounded-2xl'
                                    />
                                </div>
                                <div>
                                <p className='text-center mt-4 text-xl text-[#895FAA]'>IVF CENTER</p>
                                </div>
                                
                            </div>
                            <div className="h-auto w-screen/4 flex flex-col justify-center">
                                <div>
                                    <Image
                                    src="/images/ivfcenter5.jpg"
                                        width={450} 
                                        height={200} 
                                        alt="Picture of the author"
                                        className='rounded-2xl'
                                    />
                                </div>
                                <div>
                                <p className='text-center mt-4 text-xl text-[#895FAA]'>IVF CENTER</p>
                                </div>
                                
                            </div>
                    </div>
                    </div>
                    </div>

                </div>


           
        </div>
    );
}