import Image from 'next/image'
import Link from 'next/link'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPhone} from '@fortawesome/free-solid-svg-icons'
import { faPaintBrush } from '../../../node_modules/@fortawesome/free-solid-svg-icons/index'
export default function Contact() {
    return(
        <div className="main-content">
           <div className="relative w-full">
                <div className="bg-[url('/Images/hospitalbanner2.jpg')] bg-cover bg-center min-h-96"></div>
                <div className="absolute bottom-0 left-0 right-0" style={{ zIndex: '1', backgroundImage: 'linear-gradient(to bottom, rgba(0,0,0,0.1), #241B19 200%)', height: '100%' }}></div>
                <div className='container max-w-[1280px] mx-auto relative z-10'>
                    <p className='absolute bottom-20 text-white px-8 py-2 text-6xl'>Meet Team</p>
                    <p className="absolute bottom-10 text-white px-8 py-2">
                        <Link href="/">Home</Link> &gt; <Link href="/MeetTeam">Meet Team</Link>
                    </p>
                </div>
            </div>
            <div className='container max-w-[1280px] mx-auto mt-14 mb-24'>
            <div className="flex justify-center">
                <div className="grid grid-cols-3 mx-0 mt-6 gap-4" >
                    <div >
                        <Image
                            src="/images/surabhi-Bg.png"
                            width={400}
                            height={300}
                            alt="Picture of the author"
                            className='rounded-2xl'
                        />
                        <h1 className="title text-2xl flex justify-center mt-5 text-purple-900" >Dr. Surabjhi Vegad</h1>
                        <h2 className="title flex justify-center mt-3 text-pink-500">Laparoscopic Surgeon</h2>
                        <h2 className="title text-center mt-5 ml-2 mr-2 leading-loose" style={{color:'rgb(120,120,120)'}} > Dr. Surabhi Vegad has been in practice for almost 20 years graduating BDS from the University of Manchester, UK in 1997</h2>
                      
                        <div className="flex justify-center ">
                            <FontAwesomeIcon icon={faPhone} className="relative w-3 h-3 500 mt-6"style={{color:'rgb(51,104,198)'}} />
                            <span className="ml-2 text-xl mt-3 text-[#009290]">+91-9989693645</span>
                       
                        </div>
                        
                    </div>
                    <div>
                        <Image
                            src="/images/surabhi-Bg.png"
                            width={400}
                            height={300}
                            alt="Picture of the author"
                            className='rounded-2xl'
                        />
                         <h1 className="title text-2xl flex justify-center mt-5 text-purple-900" >Dr. Surabjhi Vegad</h1>
                        <h2 className="title flex justify-center mt-3 text-pink-500" >Laparoscopic Surgeon</h2>
                        <h2 className="title text-center mt-5 ml-2 mr-2 leading-loose" style={{color:'rgb(120,120,120)'}} > Dr. Surabhi Vegad has been in practice for almost 20 years graduating BDS from the University of Manchester, UK in 1997</h2>
                      
                        <div className="flex justify-center ">
                            <FontAwesomeIcon icon={faPhone} className="relative w-3 h-3 500 mt-6"style={{color:'rgb(51,104,198)'}} />
                            <span className="ml-2 text-xl mt-3 text-[#009290]">+91-9989693645</span>
                       
                        </div>
                    </div>
                    <div className='mr-0'>
                        <Image
                            src="/images/surabhi-Bg.png"
                            width={400}
                            height={300}
                            alt="Picture of the author"
                            className='rounded-2xl'
                        />
                         <h1 className="title text-2xl flex justify-center mt-5 text-purple-900" >Dr. Surabjhi Vegad</h1>
                        <h2 className="title flex justify-center mt-3 text-pink-500">Laparoscopic Surgeon</h2>
                        <h2 className="title text-center mt-5 ml-2 mr-2 leading-loose" style={{color:'rgb(120,120,120)'}} > Dr. Surabhi Vegad has been in practice for almost 20 years graduating BDS from the University of Manchester, UK in 1997</h2>
                      
                        <div className="flex justify-center ">
                            <FontAwesomeIcon icon={faPhone} className="relative w-3 h-3 500 mt-6"style={{color:'rgb(51,104,198)'}} />
                            <span className="ml-2 text-xl mt-3 text-[#009290]">+91-9989693645</span>
                       
                        </div>
                    </div></div>
                </div>
            </div> 
        </div>
    )
}