import Image from 'next/image'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faEnvelope,faMapMarkerAlt ,faPhone } from '../../../node_modules/@fortawesome/free-solid-svg-icons/index'
export default function Contact() {
    return(
        <div className="main-content" >
            <div className='md mx-auto relative'>
                    <Image
                        src="/images/downloadbanner.jpg"
                        width={500}
                        height={200}
                        alt="Picture of the author"
                        className="w-full h-auto"
                    />
                <div className='container max-w-[1280px] mx-auto mt-14 mb-24'>
                        <p className='absolute bottom-20  text-white px-8 py-2 text-6xl'>Contact Us</p>
                        <p className="absolute bottom-10 text-white px-8 py-2">
                            <Link href="/">Home</Link> &gt; <Link href="/Contact">Contact Us</Link>
                        </p>
                </div>
            </div>
            <div className='container max-w-[1280px] mx-auto mt-10 mb-24'>
                <div className="flex justify-center ">
                    <div className="grid grid-cols-3 mx-0 mt-6 gap-5 " >
                        <div className='rounded-xl border-2 p-8  '>
                            <div className="flex justify-left ">
                                <FontAwesomeIcon icon={faEnvelope} className="relative w-3 h-3 500" style={{ width: '30px', height: '30px' }}/>
                            </div>

                            <div className="relative w-full mt-5">
                                <div className="absolute left-0 w-full h-0.5 bg-gray-300"></div>
                                <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-3 h-3 rounded-full bg-gray-300"></div>
                            </div>

                            <div className='text-3xl mt-10'>  Call us 24/7</div>
                         

                            <div className='text-base mt-20'>  
                            spandanhospital@gmail.com
                            spandanmaternity@gmail.com</div>
                          
                        </div>
                        <div className='rounded-xl border-2 p-8'>
                            <div className="flex justify-left ">
                                <FontAwesomeIcon icon={faPhone} className="relative w-3 h-3 500" style={{ width: '30px', height: '30px' }}/>
                            </div>

                            <div className="relative w-full mt-5">
                                <div className="absolute left-0 w-full h-0.5 bg-gray-300"></div>
                                <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-3 h-3 rounded-full bg-gray-300"></div>
                            </div>

                            <div className='text-3xl mt-10'>Call Us 24/7 </div>
                         

                            <div className='text-base mt-20'>  
                            072288 62236<br></br>
                            072288 62236</div>
                          
                        </div>
                        <div className='rounded-xl border-2 p-8'>
                            <div className="flex justify-left ">
                                <FontAwesomeIcon icon={faMapMarkerAlt} className="relative w-3 h-3 500" style={{ width: '30px', height: '30px' }}/>
                            </div>

                            <div className="relative w-full mt-5">
                                <div className="absolute left-0 w-full h-0.5 bg-gray-300"></div>
                                <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-3 h-3 rounded-full bg-gray-300"></div>
                            </div>

                            <div className='text-3xl mt-10'>  Our Locations</div>
                         

                            <div className='text-base mt-20'>  
                            Shivam Nagar, Near Uma Nagar, Mirzapar Highway, Near Kutch Orthopadic Hospital, Bhuj, India, Gujarat</div>
                          
                        </div>
                    </div>
                </div>
                <div className="box-border h-auto w-full  flex mt-20 border-2 rounded-3xl">
                   
                        <img className="rounded-l-3xl" width={600}  src="images/doctor-appoint.webp" alt="Dr. Surabhi Vegad"/>

                            <div className='w-30 h-10 p-20'>
                                <p className="text-base text-left  font-bold text-green-500" style={{ color: 'rgb(1, 146, 144)'}}>Contact us</p>
                                <p className="text-4xl text-left  font-bold text-green-500 mt-5" style={{ color: 'rgb(1, 146, 144)'}}>
                                    Make an appointment apply for treatments</p>
                                <form>
                                    <div className='mt-20' >
                                        <div className='flex justify-between mt-10'>
                                            <input type="text" name="name" id="name" placeholder='Your Name*' size="25"
                                            style={{
                                                border: 'none',
                                                borderBottom: '1px solid black',
                                                outline: 'none',}}></input>

                                            <input className="ml-10" type="text" name="email" id="email" placeholder='Your Email*' size="25"
                                            style={{
                                                border: 'none',
                                                borderBottom: '1px solid black',
                                                outline: 'none',}}></input>
                                            
                                           
                                        </div>
                                        <div className='flex justify-between mt-10'>
                                            <input type="text" name="phone" id="phone" placeholder='Your Phone*' size="25"
                                                style={{
                                                border: 'none',
                                                borderBottom: '1px solid black',
                                                outline: 'none',}}></input>
                                       
                                            
                                            <input  type="text" name="subject" id="subject" placeholder='subject' size="25"
                                            style={{
                                                border: 'none',
                                                borderBottom: '1px solid black',
                                                outline: 'none',}}></input>
                                        </div>

                                        <div className='mt-10'>
                                            <input type="text" name="message" id="message" placeholder='message' size="65"
                                            style={{
                                                border: 'none',
                                                borderBottom: '1px solid black',
                                                outline: 'none',}}></input>
                                        </div>
                                        
                                        <div className="mt-10 rounded-3xl border text-white p-5 w-[25%]" style={{ backgroundColor: 'rgb(1, 146, 144)'}}>
                                            <button type="submit">Submit Now</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        

                           
                </div>
            </div>
        </div>
    )
}