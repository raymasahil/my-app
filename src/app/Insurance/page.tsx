'use client';
import Image from 'next/image'
import Link from 'next/link'
import { Accordion, AccordionItem } from "@nextui-org/react";

export default function Insurance() {
    const defaultContent =
    "This is a surprisingly common question. The treatment of pain requires a dedication to the patient that surpasses that in many medical fields, that is because often patients do not get better with one injection or a single medication. At Kansas Pain management we are committed to sticking with you throughout your treatment with us. We believe a balanced approach is the only way to treat pain, and will do our best to help you regardless of the origin of your pain.";

    return(
        <div className="main-content">
            <div className="relative w-full">
                <div className="bg-[url('/Images/hospitalbanner2.jpg')] bg-cover bg-center min-h-96"></div>
                <div className="absolute bottom-0 left-0 right-0" style={{ zIndex: '1', backgroundImage: 'linear-gradient(to bottom, rgba(0,0,0,0.1), #241B19 200%)', height: '100%' }}></div>

                <div className='container max-w-[1280px] mx-auto relative z-10'>
                    <p className='absolute bottom-20 text-white px-8 py-2 text-6xl'>Insurance</p>
                    <p className="absolute bottom-10 text-white px-8 py-2">
                        <Link href="/">Home</Link> &gt; <Link href="/Insurance">Insurance</Link>
                    </p>
                </div>
            </div>
            {/* main grid content */}
            <div className='container max-w-[1280px] mx-auto mt-20 mb-24'>
               
                
                <div className="grid grid-cols-4 mt-5 gap-10">
                <div className="box-border rounded-2xl h-auto w-screen/4 p-4 border-2 flex flex-col justify-center items-center hover:shadow-md transition-all duration-300 relative">
                    <div>
                        <Image
                            src="/images/insurance1.png"
                            width={200} 
                            height={200} 
                            alt="Picture of the author"
                        />
                    </div>
                </div>
                
                    <div className="text-xl rounded-2xl box-border h-auto w-screen/4 p-4 border-2 flex flex-col justify-center items-center hover:shadow-md transition-all duration-300 relative">
                        <div>
                            <Image
                                src="/images/insurance2.png"
                                width={200} 
                                height={200} 
                                alt="Picture of the author"
                            />
                        </div>
                        
                    </div>
                    <div className="box-border rounded-2xl h-auto w-screen/4 p-4 border-2 flex flex-col justify-center items-center hover:shadow-md transition-all duration-300 relative">
                        <div>
                            <Image
                                src="/images/insurance3.png"
                                width={200} 
                                height={200} 
                                alt="Picture of the author"
                            />
                        </div>
                        
                    </div>
                    <div className="box-border rounded-2xl h-auto w-screen/4 p-4 border-2 flex flex-col justify-center items-center hover:shadow-md transition-all duration-300 relative">
                    <div>
                        <Image
                            src="/images/insurance4.png"
                            width={200} 
                            height={200} 
                            alt="Picture of the author"
                        />
                    </div>
                </div>
                </div>
                <div className="grid grid-cols-3 mt-10 gap-10">
                    <div className="box-border rounded-2xl h-auto p-4 border-2 flex flex-col justify-center items-center hover:shadow-md transition-all duration-300">
                        <div>
                            <Image
                                src="/images/insurance5.png"
                                width={250} 
                                height={250} 
                                alt="Picture of the author"
                            />
                        </div>
                       
                    </div>
                    <div className="box-border rounded-2xl h-auto p-4 border-2 flex flex-col justify-center items-center hover:shadow-md transition-all duration-300">
                        <div>
                            <Image
                                src="/images/insurance6.png"
                                width={250} 
                                height={250} 
                                alt="Picture of the author"
                            />
                        </div>
                        
                    </div>
                    <div className="box-border rounded-2xl h-auto p-4 border-2 flex flex-col justify-center items-center hover:shadow-md transition-all duration-300">
                        <div>
                            <Image
                                src="/images/insurance7.png"
                                width={250} 
                                height={250} 
                                alt="Picture of the author"
                        
                            />
                        </div>
                        
                    </div>
                </div>
                <div className='container max-w-[1280px] mx-auto relative z-10 flex justify-center items-center h-full'>
                    <p className='text-center mt-20 text-4xl flex justify-center text-white bg-[rgb(245,116,171)] box-border w-[50%] p-4 rounded-2xl'>Frequently asked questions</p>
                </div>

                <div className='flex'>
                <Accordion className="grid grid-cols-1 gap-8 mt-14 border-0">
                    <AccordionItem key="1"  className="p-8 flex flex-col justify-left items-left text-white bg-[rgb(0,110,143)]" title="1. What Insurances Do You Accept?">
                            {defaultContent}
                    </AccordionItem>
                    <AccordionItem key="2" className="p-8  flex flex-col justify-left items-left text-white bg-[rgb(0,110,143)]" aria-label="Accordion 2" title="2. What Insurances Do You Accept?">
                        {defaultContent}
                    </AccordionItem>
                    <AccordionItem key="3" className="p-8 flex flex-col justify-left items-left text-white bg-[rgb(0,110,143)]" aria-label="Accordion 3" title="3. What Insurances Do You Accept?">
                        {defaultContent}
                    </AccordionItem>
                    <AccordionItem key="4" className="p-8 flex flex-col justify-left items-left text-white bg-[rgb(0,110,143)]" aria-label="Accordion 4" title="4. What Insurances Do You Accept?">
                        {defaultContent}
                    </AccordionItem>
                    <AccordionItem key="5" className="p-8 flex flex-col justify-left items-left text-white bg-[rgb(0,110,143)]" aria-label="Accordion 5" title="5. What Insurances Do You Accept?">
                        {defaultContent}
                    </AccordionItem>
                    <AccordionItem key="6" className="p-8 flex flex-col justify-left items-left text-white bg-[rgb(0,110,143)]" aria-label="Accordion 6" title="6. What Insurances Do You Accept?">
                        {defaultContent}
                    </AccordionItem>
                    <AccordionItem key="7" className="p-8 flex flex-col justify-left items-left text-white bg-[rgb(0,110,143)]" aria-label="Accordion 7" title="7. What Insurances Do You Accept?">
                        {defaultContent}
                    </AccordionItem>
                    <AccordionItem key="8" className="p-8 flex flex-col justify-left items-left text-white bg-[rgb(0,110,143)]" aria-label="Accordion 8" title="8. What Insurances Do You Accept?">
                        {defaultContent}
                    </AccordionItem>
                </Accordion>
                <Accordion className="grid grid-cols-1 gap-8 mt-14">
                <AccordionItem key="1"  className="p-8 flex flex-col justify-left items-left text-white bg-[rgb(0,110,143)]" title="1. What Insurances Do You Accept?">
                            {defaultContent}
                    </AccordionItem>
                    <AccordionItem key="10" className="p-8  flex flex-col justify-left items-left border-none text-white bg-[rgb(0,110,143)]" aria-label="Accordion 10" title="2. What Insurances Do You Accept?">
                        {defaultContent}
                    </AccordionItem>
                    <AccordionItem key="11" className="p-8 flex flex-col justify-left items-left border-none text-white bg-[rgb(0,110,143)]" aria-label="Accordion 11" title="3. What Insurances Do You Accept?">
                        {defaultContent}
                    </AccordionItem>
                    <AccordionItem key="12" className="p-8 flex flex-col justify-left items-left text-white bg-[rgb(0,110,143)]" aria-label="Accordion 12" title="4. What Insurances Do You Accept?">
                        {defaultContent}
                    </AccordionItem>
                    <AccordionItem key="13" className="p-8 flex flex-col justify-left items-left text-white bg-[rgb(0,110,143)]" aria-label="Accordion 13" title="5. What Insurances Do You Accept?">
                        {defaultContent}
                    </AccordionItem>
                    <AccordionItem key="14" className="p-8 flex flex-col justify-left items-left text-white bg-[rgb(0,110,143)]" aria-label="Accordion 14" title="6. What Insurances Do You Accept?">
                        {defaultContent}
                    </AccordionItem>
                    <AccordionItem key="15" className="p-8 flex flex-col justify-left items-left text-white bg-[rgb(0,110,143)]" aria-label="Accordion 15" title="7. What Insurances Do You Accept?">
                        {defaultContent}
                    </AccordionItem>
                    <AccordionItem key="16" className="p-8 flex flex-col justify-left items-left text-white bg-[rgb(0,110,143)]" aria-label="Accordion 16" title="8. What Insurances Do You Accept?">
                        {defaultContent}
                    </AccordionItem>
                </Accordion>
                </div>
            </div>
        </div>
    )
}