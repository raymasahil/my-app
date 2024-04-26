import Image from 'next/image'
import Link from 'next/link'
import '@/style/global.css';
export default function About() {
    return(
            <div className="main-content">
             <div className="relative w-full">
                <div className="bg-[url('/Images/main-banner.jpg')] bg-cover bg-center min-h-96"></div>
                <div className="absolute bottom-0 left-0 right-0" style={{ zIndex: '1', backgroundImage: 'linear-gradient(to bottom, rgba(0,0,0,0.1), #007bff 500%)', height: '100%' }}></div>



                <div className='container max-w-[1280px] mx-auto relative z-10'>
                    <p className='absolute bottom-20 text-white px-8 py-2 text-6xl'>Treatments</p>
                    <p className="absolute bottom-10 text-white px-8 py-2">
                        <Link href="/">Home</Link> &gt; <Link href="/Treatments">Treatments</Link>
                    </p>
                </div>
            </div>
            <div className='container max-w-[1280px] mx-auto mt-20 mb-24'>
                <div>
                    <p className='pl-8 pr-8 text-center text-gray-500 text-xl font-bold'>
                    Clinical laboratory services are tests provided by a medical lab that aid in diagnosis and treatment of patients. There are many types of clinical laboratory services, including:
                    </p>
                </div>
                {/* first section */}
                <div className="flex gap-10 mt-8">
                    <div className="w-1/3 bg-white-700 flex flex-col justify-center items-center shadow-xl">
                        <div className="flex flex-col items-left pb-8">
                        <a href="/Treatments/Antenatal-Care">
                            <Image
                                src="/images/Rectangle1.png"
                                width={500}
                                height={200}
                                alt="Picture of the author"
                                
                            />
                            <p className="text-2xl mt-4 text-black pl-6 font-bold">Antenatal Care & Postnatal Care</p></a>
                            <div className="w-28 ml-6 border-b-4 border-teal-500 mt-4"></div>
                            <p className="text-lg mt-4 text-gray-700 px-6">Antenatal care provides crucial support and medical attention to expectant mothers throughout their pregnancy, ensuring both maternal and fetal health :</p>
                        </div>
                    </div>
                    <div className="w-1/3 bg-white-700 flex flex-col justify-center items-center shadow-xl">
                        <div className="flex flex-col items-left pb-8">
                        <a href="/Treatments/Preconception-Counselling">
                            <Image
                               src="/images/Rectangle2.png"
                                width={500}
                                height={200}
                                alt="Picture of the author"
                               
                            />
                            <p className="text-2xl mt-4 text-black pl-6 font-bold">Preconception Counselling</p></a>
                            <div className="w-28 ml-6 border-b-4 border-teal-500 mt-4"></div>
                            <p className="text-lg mt-4 text-gray-700 px-6">Preconception counseling offers valuable guidance and support to individuals or couples planning to conceive, addressing factors such as health:</p>
                           
                        </div>
                    </div>
                    <div className="w-1/3 bg-white-700 flex flex-col justify-center items-center shadow-xl">
                        <div className="flex flex-col items-left pb-8">
                        <a href="/Treatments/Cancer-Screening">
                            <Image
                                 src="/images/Rectangle4.png"
                                width={500}
                                height={200}
                                alt="Picture of the author"
                              
                            />
                            <p className="text-2xl mt-4 text-black pl-6 font-bold"> Cancer Screening, Preventive Vaccination</p></a>
                            <div className="w-28 ml-6 border-b-4 border-teal-500 mt-4"></div>
                            <p className="text-lg mt-4 text-gray-700 px-6">Cancer screening aims to detect signs of cancer early, often through tests like mammograms.:</p>

                        </div>
                    </div>
                    
            </div>
             {/* second section */}
            <div className="flex gap-10 mt-8">
                    <div className="w-1/3 bg-white-700 flex flex-col justify-center items-center shadow-xl">
                        <div className="flex flex-col items-left pb-8">
                        <a href="/Treatments/Sexually-Transmitted-Disease">
                            <Image
                                 src="/images/Rectangle6.png"
                                width={500}
                                height={200}
                                alt="Picture of the author"
                      
                            />
                            <p className="text-2xl mt-4 text-black pl-6 font-bold">Sexually Transmitted Disease</p></a>
                            <div className="w-28 ml-6 border-b-4 border-teal-500 mt-4"></div>
                            <p className="text-lg mt-4 text-gray-700 px-6"> Sexually transmitted diseases (STDs) are infections spread through sexual contact. They can be caused by bacteria and may present with symptoms like genital sores. Some STDs.:</p>
                           
                        </div>
                    </div>
                    <div className="w-1/3 bg-white-700 flex flex-col justify-center items-center shadow-xl">
                        <div className="flex flex-col items-left pb-8">
                        <a href="/Treatments/Laparoscopic">
                            <Image
                               src="/images/Rectangle5.png"
                                width={500}
                                height={200}
                                alt="Picture of the author"
                                
                            />
                            <p className="text-2xl mt-4 text-black pl-6 font-bold">Laparoscopic & Hysteroscopic Surgeries</p></a>
                            <div className="w-28 ml-6 border-b-4 border-teal-500 mt-4"></div>
                            <p className="text-lg mt-4 text-gray-700 px-6">Laparoscopic and hysteroscopic surgeries are minimally invasive procedures commonly used to diagnose and treat various gynecological conditions.:</p>
                           
                        </div>
                    </div>
                    <div className="w-1/3 bg-white-700 flex flex-col justify-center items-center shadow-xl">
                        <div className="flex flex-col items-left pb-8">
                        <a href="/Treatments/Adolescent-Health">
                            <Image
                                src="/images/Rectangle7.png"
                                width={500}
                                height={200}
                                alt="Picture of the author"
                               
                            />
                            <p className="text-2xl mt-4 text-black pl-6 font-bold">Adolescent Health Counselling</p></a>
                            <div className="w-28 ml-6 border-b-4 border-teal-500 mt-4"></div>
                            <p className="text-lg mt-6 text-gray-700 px-4">
                            Adolescent health counseling plays a pivotal and proactive role in promoting the physical, emotional, and social well-being of young individuals during a critical phase of development.:</p>
                            
                        </div>
                    </div>
                </div>
                {/* third section */}
                <div className="flex gap-10 mt-8">
                    <div className="w-1/3 bg-white-700 flex flex-col justify-center items-center shadow-xl">
                        <div className="flex flex-col items-left pb-8">
                        <a href="/Treatments/IVF-Speciality">
                            <Image
                                 src="/images/Rectangle9.png"
                                width={500}
                                height={200}
                                alt="Picture of the author"
                      
                            />
                            <p className="text-2xl mt-4 text-black pl-6 font-bold">IVF Speciality</p></a>
                            <div className="w-28 ml-6 border-b-4 border-teal-500 mt-4"></div>
                            <p className="text-lg mt-4 text-gray-700 px-6">IVF (In Vitro Fertilization) is a specialized area within reproductive medicine that focuses on assisting individuals or couples who are experiencing infertility or difficulties conceiving a child.:</p>
                            
                        </div>
                    </div>
                    <div className="w-1/3 bg-white-700 flex flex-col justify-center items-center shadow-xl">
                        <div className="flex flex-col items-left pb-8">
                        <a href="/Treatments/Menstrual-Issues">
                            <Image
                                 src="/images/Rectangle10.png"
                                width={500}
                                height={200}
                                alt="Picture of the author"
                                
                            />
                            <p className="text-2xl mt-4 text-black pl-6 font-bold">Menstrual Issues</p></a>
                            <div className="w-28 ml-6 border-b-4 border-teal-500 mt-4"></div>
                            <p className="text-lg mt-4 text-gray-700 px-6">Menstrual issues encompass a wide range of abnormalities or disturbances in the menstrual cycle, which can affect women's reproductive health and overall well-being. These issues irregular periods.:</p>
                           
                        </div>
                    </div>
                    <div className="w-1/3 bg-white-700 flex flex-col justify-center items-center shadow-xl">
                        <div className="flex flex-col items-left pb-8">
                        <a href="/Treatments/Infertility-Work-up">
                            <Image
                               src="/images/Rectangle11.png"
                                width={500}
                                height={200}
                                alt="Picture of the author"
                               
                            />
                            <p className="text-2xl mt-4 text-black pl-6 font-bold">Infertility Work-up</p></a>
                            <div className="w-28 ml-6 border-b-4 border-teal-500 mt-4"></div>
                            <p className="text-lg mt-6 text-gray-700 px-4">The goal of the infertility work-up is to identify any factors contributing to infertility and develop a personalized treatment plan to address them within a reasonable timeframe.:</p>
                            
                        </div>
                    </div>
                    
                </div>
                {/* forth section */}

                <div className="flex gap-10 mt-8">
                    <div className="w-1/3 flex justify-center items-center">
                        <div className="bg-white-700 flex flex-col justify-center items-center shadow-xl">
                            <div className="flex flex-col items-left pb-8">
                            <a href="/Treatments/Uro">
                                <Image
                                    src="/images/Rectangle3.png"
                                    width={500}
                                    height={200}
                                    alt="Picture of the author"
                                />
                                <p className="text-2xl mt-4 text-black pl-6 font-bold">Uro - Gynecological Problems</p></a>
                                <div className="w-28 ml-6 border-b-4 border-teal-500 mt-4"></div>
                                <p className="text-lg mt-4 text-gray-700 px-6">Uro-gynecological problems may include pelvic organ prolapse, urinary incontinence, recurrent urinary tract infections, and other related issues requiring specialized medical attention.:</p>
                            </div>
                        </div>
                    </div>
                    <div className="w-1/3 flex justify-center items-center">
                        <div className="bg-white-700 flex flex-col justify-center items-center shadow-xl">
                            <div className="flex flex-col items-left pb-8">
                            <a href="/Treatments/Menopausal-Problems">
                                <Image
                                    src="/images/Rectangle8.png"
                                    width={500}
                                    height={200}
                                    alt="Picture of the author"
                                />
                                <p className="text-2xl mt-4 text-black pl-6 font-bold">Menopausal Problems</p></a>
                                <div className="w-28 ml-6 border-b-4 border-teal-500 mt-4"></div>
                                <p className="text-lg mt-4 text-gray-700 px-6">Menopausal problems refer to the various physical and psychological symptoms experienced by women as they transition from their reproductive years to menopause.:</p>
                            </div>
                        </div>
                    </div>
                    <div className="w-1/3 flex justify-center items-center">
                        <div className="bg-white-700 flex flex-col justify-center items-center shadow-xl">
                            <div className="flex flex-col items-left pb-8">
                            <a href="/Treatments/Family-Planning">
                                <Image
                                    src="/images/Rectangle12.png"
                                    width={500}
                                    height={200}
                                    alt="Picture of the author"
                                />
                                <p className="text-2xl mt-4 text-black pl-6 font-bold">Family Planning</p></a>
                                <div className="w-28 ml-6 border-b-4 border-teal-500 mt-4"></div>
                                <p className="text-lg mt-4 text-gray-700 px-6">Family planning encompasses a range of services and strategies aimed at helping individuals and couples achieve their desired family size while promoting reproductive health and autonomy.:</p>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    </div>
    )
}