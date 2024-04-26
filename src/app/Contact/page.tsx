'use client';
import Image from 'next/image'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";






import { faEnvelope,faMapMarkerAlt ,faPhone } from '../../../node_modules/@fortawesome/free-solid-svg-icons/index'
export default function Contact() {
    return(
        <div className="main-content" >
                <div className="relative w-full">
                <div className="bg-[url('/Images/hospitalbanner2.jpg')] bg-cover bg-center min-h-96"></div>
                <div className="absolute bottom-0 left-0 right-0" style={{ zIndex: '1', backgroundImage: 'linear-gradient(to bottom, rgba(0,0,0,0.1), #241B19 200%)', height: '100%' }}></div>

                <div className='container max-w-[1280px] mx-auto relative z-10'>
                    <p className='absolute bottom-20 text-white px-8 py-2 text-6xl'>Contact Us</p>
                    <p className="absolute bottom-10 text-white px-8 py-2">
                        <Link href="/">Home</Link> &gt; <Link href="/Contact">Contact Us</Link>
                    </p>
                </div>
            </div>
            <div className='container max-w-[1280px] mx-auto mt-10 mb-24'>
                <div className="box-border h-auto w-full  flex mt-20 border-2 rounded-2xl">
                    <img className="rounded-l-2xl" width={600}  src="images/doctor-appoint.webp" alt="Dr. Surabhi Vegad"/>
                        <div className='w-30 h-10 p-20'>
                            <p className="text-base text-left  font-bold text-green-500" style={{ color: 'rgb(1, 146, 144)'}}>Contact us</p>
                            <p className="text-4xl text-left  font-bold text-green-500 mt-5" style={{ color: 'rgb(1, 146, 144)'}}>
                                Make an appointment apply for treatments</p>
                                <div>
                                <p className='text-2xl mt-6 text-[rgb(236,80,167)] mb-2'>Contact No</p>
                                <p className='text-slate-500'>072288 62236</p>
                                <p className='text-slate-500'>072288 62236</p>
                                </div>

                                <div>
                                <p className='text-2xl mt-6 text-[rgb(236,80,167)] mb-2'>Address</p>
                                <p className='text-slate-500'>Shivam Nagar, Near Uma Nagar, Highway, Near Kutch Orthopadic Hospital, Mirjapar, Bhuj, Gujarat 370040</p>
                                </div>

                                <div>
                                <p className='text-2xl mt-6 text-[rgb(236,80,167)] mb-2'>Email</p>
                                <p className='text-slate-500'>spandanhospital@gmail.com</p>
                                </div>
                               
                               
                        </div>         
                </div>
                <Swiper
                 
                    pagination={{ clickable: true }}
                    autoplay={true}
                    loop={true}
                    modules={[Autoplay, Pagination]}
                    slidesPerView={4}
                    className='mt-8 gap-8'
                    // style={{ marginTop: '50px'}}
                
                >
                                <SwiperSlide>  <Image
                                    src="/images/insurance1.jpg"
                                    width={200}
                                    height={200}
                                    alt="Picture of the author"
                                    className='mb-16 ml-10'
                               
                                /></SwiperSlide>
                                <SwiperSlide>  <Image
                                    src="/images/insurance2.png"
                                    width={200}
                                    height={200}
                                    alt="Picture of the author"
                                    className='ml-10'
                          
                                /></SwiperSlide>
                                <SwiperSlide>  <Image
                                    src="/images/insurance3.png"
                                    width={150}
                                    height={150}
                                    alt="Picture of the author"
                                    className='mt-8 ml-10'
                              
                                /></SwiperSlide>
                                <SwiperSlide>  <Image
                                    src="/images/insurance4.png"
                                    width={200}
                                    height={200}
                                    alt="Picture of the author"
                                    className='mt-8 ml-10'
                                
                                /></SwiperSlide>
                                <SwiperSlide>  <Image
                                    src="/images/insurance5.png"
                                    width={200}
                                    height={200}
                                    alt="Picture of the author"
                                    className='mt-8 ml-10'
                            
                                /></SwiperSlide>
                                <SwiperSlide>  <Image
                                    src="/images/insurance6.png"
                                    width={200}
                                    height={200}
                                    alt="Picture of the author"
                                    className='ml-10'
                                    
                             
                                /></SwiperSlide>
                                <SwiperSlide>  <Image
                                    src="/images/insurance7.jpeg"
                                    width={200}
                                    height={200}
                                    alt="Picture of the author"
                                    className='mt-14 ml-10'
                                  
                                /></SwiperSlide>
    </Swiper>

        
                                                    
            </div>
        </div>
    )
}