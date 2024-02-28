import Image from 'next/image'
import Link from 'next/link'
export default function About() {
    return (
     
        <div className="main-content" >
            <div className='md mx-auto relative'>
                <Image
                    src="/images/downloadbanner.jpg"
                    width={500}
                    height={200}
                    alt="Picture of the author"
                    className="w-full h-auto"
                />
                <h1 className="absolute bottom-20 left-0 text-white px-8 py-2 text-6xl">About Us</h1>
                <p className="absolute bottom-10 left-0 text-white px-8 py-2">
                    <Link href="/">Home</Link> &gt; <Link href="/About">About us</Link>
                </p>
            </div>
            <div className='container max-w-[1280px] mx-auto mt-14 mb-24'>
                <div className="box-border h-auto w-full p-4 flex">
                    <div>
                        <img width={540} height={300} src="images/Surabhi-Bg.png" alt="Dr. Surabhi Vegad"/>
                    </div>
                    <div className="ml-24 mt-4">
                        <h1 className="text-4xl text-left ml-4 font-bold text-green-500" style={{ color: 'rgb(1, 146, 144)'}}>Dr. Surabhi Vegad</h1>
                            <div className="box-border h-auto p-4">
                                <div className="flex items-start mt-5 leading-loose text-lg">
                                    <p className="box-border w-20 font-bold  mr-4" style={{ color: 'rgb(1, 146, 144)'}}>Speciality</p>
                                    <ul className="flex-grow  ml-3">
                                        <li>High Risk Pregnancy Care</li>
                                        <li>Advanced Gynological Laparoscopy</li>
                                        <li>Hysteroscopy Procedures</li>
                                        <li>In-vitro fertilization(IVF)</li>
                                        <li>Intrauterine Insemination(IUI)</li>
                                        <li>Comprehensive Infertility Solutions</li>
                                    </ul>
                                </div>
                                <div className="flex items-start mt-2 leading-loose text-lg">
                                    <p className=" box-border w-20 font-bold mr-4" style={{ color: 'rgb(1, 146, 144)'}}>Education</p>
                                    <ul className="flex-grow  ml-3">
                                        <li>Dip in Cosmetic Gynecology Training, Florida, USA October 2004</li>
                                        <li>Dip in Laparoscopic Gynecology, Kiel, Germany October 2004</li>
                                        <li>Dip in Laparoscopic Gynecology, Kiel, Germany October 2004</li>
                                    </ul>
                                </div>
                                <div className="flex items-start mt-2 leading-loose text-lg">
                                    <p className=" box-border w-20 font-bold mr-4" style={{ color: 'rgb(1, 146, 144)'}}>Experience</p>
                                    <p className="w-20flex-grow  ml-3">20 years</p>
                                </div>
                                <div className="flex items-start mt-2 leading-loose text-lg">
                                    <p className="box-border w-20   font-bold mr-4" style={{ color: 'rgb(1, 146, 144)'}}>Available</p>
                                    <p className="flex-grow  ml-3" >Monday-Saturday</p>
                                </div>
                            </div>
                        </div>
                    </div>
            </div>
        </div>
     
    );
}