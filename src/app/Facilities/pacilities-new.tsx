'use client';
import Image from 'next/image'
import Link from 'next/link'
import MySwiper from '@/app/(Components)/MySwiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLeaf, faStethoscope, faAmbulance, faQuoteLeft, faQuoteRight, faPhoneVolume } from "@fortawesome/free-solid-svg-icons";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
export default function Facilities() {
    return(
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
            {/* main content start */}
                    <div className='container max-w-[1280px] mx-auto mt-20 mb-24'>
                        <div className="flex">
                            <div className="w-[25%] h-auto border-2 rounded-2xl">
                                <p className="p-8 text-center text-[rgb(236,72,153)] text-3xl ">Available Facilities</p>
                                <ul className="list-disc pl-10 mb-0">
                                    <li className="mb-2 text-[rgb(88,28,135)]">Obstetrician</li>
                                    <li className="mb-2 text-[rgb(88,28,135)]">High Risk Pregnancy</li>
                                    <li className="mb-2 text-[rgb(88,28,135)]">Adolescent Counselling</li>
                                    <li className="mb-2 text-[rgb(88,28,135)]">Hysteroscopic Surgeries</li>
                                    <li className="mb-2 text-[rgb(88,28,135)]">Cancer Screening</li>
                                    <li className="mb-2 text-[rgb(88,28,135)]">Pcos</li>
                                    <li className="mb-2 text-[rgb(88,28,135)]">Laparoscopic Surgeon</li>
                                    <li className="mb-2 text-[rgb(88,28,135)]">Maternity</li>
                                    <li className="mb-2 text-[rgb(88,28,135)]">Fibroids</li>
                                    <li className="mb-2 text-[rgb(88,28,135)]">Ovarian Cyst</li>
                                    <li className="mb-2 text-[rgb(88,28,135)]">Infertility</li>
                                </ul>
                            </div>

                            <div className='w-[75%] h-[50%]'>
                            <Swiper
                                spaceBetween={30}
                                pagination={{
                                clickable: true,
                                }}
                                modules={[Pagination]}
                                className="Testimonials"
                            >
                                <SwiperSlide className='ml-4'>
                                    <Image
                                        src="/images/1.jpg"
                                        width={300}
                                        height={300}
                                        alt="Picture of the author"
                                        className="w-full"
                                    />
                                </SwiperSlide>
  


                                <SwiperSlide >
                                    <Image
                                        src="/images/2.jpg"
                                        width={300}
                                        height={300}
                                        alt="Picture of the author"
                                        className="w-full"
                                    />
                                

                                </SwiperSlide>


                                <SwiperSlide>
                                    <Image
                                        src="/images/3.jpg"
                                        width={1200}
                                        height={300}
                                        alt="Picture of the author"
                                    />
                                

                                </SwiperSlide>
                  
                </Swiper>

              </div>
            </div>
                    <div className='w-full mt-14'>
                            <p className="text-left text-2xl" style={{ color: 'rgb(1, 146, 144)'}}>FACILITIES</p>
                            <div className="w-full h-1 bg-gray-300"></div>
                    </div>
                    <div className="grid grid-cols-4 gap-4 mt-8">
                        <div className="col-span-1">
                        <Image
                            src="/images/f1.png"
                            width={305}
                            height={250}
                            alt="Picture of the author"
                            className='rounded-2xl'
                        />
                            <p className='text-center mt-2' style={{ color: 'rgb(1, 146, 144)' }}>RECEPTION</p>
                        </div>
                        <div className="col-span-1">
                            <Image
                                src="/images/f2.png"
                                width={305}
                                height={250}
                                alt="Picture of the author"
                                className='rounded-2xl'
                            />
                            <p className='text-center mt-2' style={{ color: 'rgb(1, 146, 144)'}}>RECEPTION</p>
                        </div>
                        <div className="col-span-1">
                            <Image
                                src="/images/f3.png"
                                width={305}
                                height={250}
                                alt="Picture of the author"
                                className='rounded-2xl'
                            />
                            <p className='text-center mt-2' style={{ color: 'rgb(1, 146, 144)'}}>RECEPTION</p>
                        </div>
                        <div className="col-span-1">
                            <Image
                                src="/images/f5.png"
                                width={310}
                                height={250}
                                alt="Picture of the author"
                                className='rounded-2xl'
                            />
                            <p className='text-center mt-2' style={{ color: 'rgb(1, 146, 144)'}}>RECEPTION</p>
                        </div>
                        <div className="col-span-1">
                            <Image
                                src="/images/f1.png"
                                width={305}
                                height={250}
                                alt="Picture of the author"
                                className='rounded-2xl'
                            />
                            <p className='text-center mt-2' style={{ color: 'rgb(1, 146, 144)'}}>RECEPTION</p>
                        </div>
                        <div className="col-span-1">
                            <Image
                                src="/images/f2.png"
                                width={305}
                                height={250}
                                alt="Picture of the author"
                                className='rounded-2xl'
                            />
                            <p className='text-center mt-2' style={{ color: 'rgb(1, 146, 144)'}}>RECEPTION</p>
                        </div>
                        <div className="col-span-1">
                            <Image
                                src="/images/f3.png"
                                width={305}
                                height={250}
                                alt="Picture of the author"
                                className='rounded-2xl'
                            />
                            <p className='text-center mt-2' style={{ color: 'rgb(1, 146, 144)'}}>RECEPTION</p>
                        </div>
                        <div className="col-span-1">
                            <Image
                                src="/images/f5.png"
                                width={310}
                                height={250}
                                alt="Picture of the author"
                                className='rounded-2xl'
                            />
                            <p className='text-center mt-2' style={{ color: 'rgb(1, 146, 144)'}}>RECEPTION</p>
                        </div>
                        <div className="col-span-1">
                            <Image
                                src="/images/f1.png"
                                width={305}
                                height={250}
                                alt="Picture of the author"
                                className='rounded-2xl'
                            />
                            <p className='text-center mt-2' style={{ color: 'rgb(1, 146, 144)'}}>RECEPTION</p>
                        </div>
                        <div className="col-span-1">
                            <Image
                                src="/images/f2.png"
                                width={305}
                                height={250}
                                alt="Picture of the author"
                                className='rounded-2xl'
                            />
                            <p className='text-center mt-2' style={{ color: 'rgb(1, 146, 144)'}}>RECEPTION</p>
                        </div>
                        <div className="col-span-1">
                            <Image
                                src="/images/f3.png"
                                width={305}
                                height={250}
                                alt="Picture of the author"
                                className='rounded-2xl'
                            />
                            <p className='text-center mt-2' style={{ color: 'rgb(1, 146, 144)'}}>RECEPTION</p>
                        </div>
                        <div className="col-span-1">
                            <Image
                                src="/images/f5.png"
                                width={310}
                                height={250}
                                alt="Picture of the author"
                                className='rounded-2xl'
                            />
                            <p className='text-center mt-2' style={{ color: 'rgb(1, 146, 144)'}}>RECEPTION</p>
                        </div>
                        
                    </div>
                     
                    {/* <div className="box-border h-auto w-full p-4 border-2 flex">
                        <div>
                            <img width={540} height={300} src="images/Surabhi-Bg.png" alt="Dr. Surabhi Vegad"/>
                        </div>
                        <div className="ml-4">
                            <h1 className="text-xl text-center font-bold text-green-500" style={{ color: 'rgb(1, 146, 144)'}}>Dr. Surabhi Vegad</h1>
                            <div className="box-border h-auto p-4">
                                <div className="flex items-start mt-5">
                                    <p className="box-border w-20 font-bold mr-4" style={{ color: 'rgb(1, 146, 144)'}}>Speciality:</p>
                                    <p className="flex-grow">IVF expert, Laparoscopic Surgeon, High Risk Pregnancy Care, Advanced</p>
                                </div>
                                <div className="flex items-start mt-2">
                                    <p className=" box-border w-20 font-bold mr-4" style={{ color: 'rgb(1, 146, 144)'}}>Education:</p>
                                    <ul className="flex-grow">
                                        <li>Dip in Cosmetic Gynecology Training, Florida, USA October 2016</li>
                                        <li>Dip in Laparoscopic Gynecology, Kiel, Germany October 2016</li>
                                        <li>Dip in Laparoscopic Gynecology, Kiel, Germany October 2016</li>
                                    </ul>
                                </div>
                                <div className="flex items-start mt-2">
                                    <p className=" box-border w-20 font-bold mr-4" style={{ color: 'rgb(1, 146, 144)'}}>Experience:</p>
                                    <p className="w-20flex-grow">20 years</p>
                                </div>
                                <div className="flex items-start mt-2">
                                    <p className="box-border w-20   font-bold mr-4" style={{ color: 'rgb(1, 146, 144)'}}>Available:</p>
                                    <p className="flex-grow">Monday-Saturday</p>
                                </div>
                            </div>

                        </div>
                    </div> */}





                        
                    </div>
                </div>
    )
}