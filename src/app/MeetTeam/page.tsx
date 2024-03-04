import Image from 'next/image'
import Link from 'next/link'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPhone} from '@fortawesome/free-solid-svg-icons'
import { faPaintBrush } from '../../../node_modules/@fortawesome/free-solid-svg-icons/index'
export default function Contact() {
    return(
        <div className="main-content">
           <div className='md mx-auto relative'>
                <Image
                    src="/images/downloadbanner.jpg"
                    width={500}
                    height={500}
                    alt="Picture of the author"
                    className="w-full h-auto"
                />
                <div className='container max-w-[1280px] mx-auto mt-14 mb-24'>
                    <p className='absolute bottom-20  text-white px-8 py-2 text-6xl'>Meet Team</p>
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
                        />
                        <h1 className="title text-2xl flex justify-center mt-5" >Dr. Surabjhi Vegad</h1>
                        <h2 className="title flex justify-center mt-3" style={{color:'rgb(120,120,120)'}} >Laparoscopic Surgeon</h2>
                        <h2 className="title text-center mt-5 ml-2 mr-2 leading-loose" style={{color:'rgb(120,120,120)'}} > Dr. Surabhi Vegad has been in practice for almost 20 years graduating BDS from the University of Manchester, UK in 1997</h2>
                      
                        <div className="flex justify-center ">
                            <FontAwesomeIcon icon={faPhone} className="relative w-3 h-3 500 mt-6"style={{color:'rgb(51,104,198)'}} />
                            <span className="ml-2 text-xl mt-3">+91-9989693645</span>
                       
                        </div>
                        
                    </div>
                    <div>
                        <Image
                            src="/images/surabhi-Bg.png"
                            width={400}
                            height={300}
                            alt="Picture of the author"
                        />
                         <h1 className="title text-2xl flex justify-center mt-5" >Dr. Surabjhi Vegad</h1>
                        <h2 className="title flex justify-center mt-3" style={{color:'rgb(120,120,120)'}} >Laparoscopic Surgeon</h2>
                        <h2 className="title text-center mt-5 ml-2 mr-2 leading-loose" style={{color:'rgb(120,120,120)'}} > Dr. Surabhi Vegad has been in practice for almost 20 years graduating BDS from the University of Manchester, UK in 1997</h2>
                      
                        <div className="flex justify-center ">
                            <FontAwesomeIcon icon={faPhone} className="relative w-3 h-3 500 mt-6"style={{color:'rgb(51,104,198)'}} />
                            <span className="ml-2 text-xl mt-3">+91-9989693645</span>
                       
                        </div>
                    </div>
                    <div className='mr-0'>
                        <Image
                            src="/images/surabhi-Bg.png"
                            width={400}
                            height={300}
                            alt="Picture of the author"
                        />
                         <h1 className="title text-2xl flex justify-center mt-5" >Dr. Surabjhi Vegad</h1>
                        <h2 className="title flex justify-center mt-3" style={{color:'rgb(120,120,120)'}} >Laparoscopic Surgeon</h2>
                        <h2 className="title text-center mt-5 ml-2 mr-2 leading-loose" style={{color:'rgb(120,120,120)'}} > Dr. Surabhi Vegad has been in practice for almost 20 years graduating BDS from the University of Manchester, UK in 1997</h2>
                      
                        <div className="flex justify-center ">
                            <FontAwesomeIcon icon={faPhone} className="relative w-3 h-3 500 mt-6"style={{color:'rgb(51,104,198)'}} />
                            <span className="ml-2 text-xl mt-3">+91-9989693645</span>
                       
                        </div>
                    </div></div>
                </div>
            </div> 
        </div>
    )
}