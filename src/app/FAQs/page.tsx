'use client';
import Image from 'next/image'
import Link from 'next/link'
import { Accordion, AccordionItem } from "@nextui-org/react";

export default function About() {
    const defaultContent =
    "This is a surprisingly common question. The treatment of pain requires a dedication to the patient that surpasses that in many medical fields, that is because often patients do not get better with one injection or a single medication. At Kansas Pain management we are committed to sticking with you throughout your treatment with us. We believe a balanced approach is the only way to treat pain, and will do our best to help you regardless of the origin of your pain.";

    return (
        <div className="main-content">
            <div className='lg mx-auto relative'>
                <Image
                    src="/images/downloadbanner.jpg"
                    width={500}
                    height={200}
                    alt="Picture of the author"
                    className="w-full h-auto"
                />
                <h1 className="absolute bottom-20 left-0 text-white px-8 py-2 text-6xl">FAQs</h1>
                <p className="absolute bottom-10 left-0 text-white px-8 py-2">
                    <Link href="/">Home</Link> &gt; <Link href="/FAQs">FAQs</Link>
                </p>
            </div>
            <div className='container max-w-[1280px] mx-auto mt-14 mb-24'>
                <div className='flex justify-center'>
                    <p className='text-center text-white bg-[rgb(245,116,171)] box-border w-48 p-2'>COMMON QUERIES</p>
                </div>
                <p className='text-4xl text-center mt-8' style={{ color: 'rgb(1, 146, 144)'}}>Frequently Asked Questions</p>
              <div className='flex'>
                <Accordion className="grid grid-cols-1 gap-8 mt-8 border-0">
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
                <Accordion className="grid grid-cols-1 gap-8 mt-8">
                <AccordionItem 
                        key="9"  
                        className="p-8 flex flex-col justify-left items-left border-0 text-white bg-[rgb(0,110,143)]" 
                        aria-label="Accordion 9" 
                        title={<div className="border-none">1. What Insurances Do You Accept?</div>}
                    >
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
        {/* <div className="flex flex-row">

                    <Accordion className='flex'>
                        <AccordionItem key="1"  className=" p-8  flex-col justify-left items-left text-white bg-[rgb(0,110,143)]" aria-label="Accordion 1" title="1. What Insurances Do You Accept?">
                            {defaultContent}
                        </AccordionItem>

                        <AccordionItem key="2"  className="p-8  flex-col justify-left items-left text-white bg-[rgb(0,110,143)]" aria-label="Accordion 1" title="1. What Insurances Do You Accept?">
                            {defaultContent}
                        </AccordionItem>

                        <AccordionItem key="3"  className="p-8  flex-col justify-left items-left text-white bg-[rgb(0,110,143)]" aria-label="Accordion 1" title="1. What Insurances Do You Accept?">
                            {defaultContent}
                        </AccordionItem>

                        <AccordionItem key="4"  className="p-8  flex-col justify-left items-left text-white bg-[rgb(0,110,143)]" aria-label="Accordion 1" title="1. What Insurances Do You Accept?">
                            {defaultContent}
                        </AccordionItem>
                        
                    </Accordion>



                </div> */}
        </div>
    )
}
