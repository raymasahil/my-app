'use client';
import Image from 'next/image'
import Link from 'next/link'
import {Accordion, AccordionItem} from "@nextui-org/react";
export default function About() {
    const defaultContent =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";
    return(
        <div className="main-content bg-slate-200">
           <div className='lg mx-auto relative'>
                <Image
                    src="/images/downloadbanner.jpg"
                    width={500}
                    height={200}
                    alt="Picture of the author"
                    className="w-full h-auto"
                />
                <div className='container max-w-[1280px] mx-auto mt-14 mb-24'>
                    <p className='absolute bottom-20  text-white px-8 py-2 text-6xl'>IVF Center</p>
                    <p className="absolute bottom-10 text-white px-8 py-2">
                        <Link href="/">Home</Link> &gt; <Link href="/Treatments">IVF Center</Link>
                    </p>
                </div>
            </div>
            <div className='container max-w-[1280px] mx-auto mt-14 mb-24 '>
            <div className='relative'>
            <Image
                    src="/images/ivfbanner.jpg"
                    width={500}
                    height={500}
                    alt="Picture of the author"
                    className="w-full h-auto"
                />
            </div>
            <div className='text-center mt-8'>
                <p className='text-5xl' style={{ color: 'rgb(1, 146, 144)'}}>The Best IVF Center in Bhuj</p>
                <div className="mx-auto w-80 border-b-4 border-teal-500 mt-4"></div>
            </div>
            <div className='mt-8 text-[rgb(88,28,135)]'>
                <p>Bavishi Fertility Institute has evolved as THE BEST FERTILITY AND IVF CLINIC CHAIN of India with over 20,000+ successful pregnancies and counting! Today BFI has 7 states of the art, fertility institutes in 7 major cities of India.</p>
            </div>
            <div className='mt-4'>
                <p className='text-gray-500'>Bavishi Fertility Institute spread its wings to the city of Bhuj in 2020. BFI Bhuj became a full-fledged fertility clinic of Bavishi Fertility Institute chain, the best fertility clinic chain in India.</p>
            </div>
            <div className='mt-4'>
                <p className='text-gray-500'>BFI Bhuj had a huge number of successful couples in and around Bhuj. It helped in giving a flying start to our Bhuj fertility clinic. In spite of the Covid19 pandemic, BFI Bhuj has successfully treated a large number of patients not only from Bhuj and surroundings but international patients also.</p>
            </div>
            <div className='mt-4'>
                <p className='text-gray-500'>The excellent success rate at Bhuj has boosted the confidence of patients and the clinic is touching new heights of success every day. In a very short span, BFI, IVF hospital in Bhuj has treated the most advanced and most difficult cases successfully like, TESA, PESA very poor sperm or egg count, severe endometriosis, fibroids etc.</p>
            </div>
            <div className='mt-6 p-12 text-center bg-[rgb(236,72,153)]'>
                <p className='text-slate-100 text-xl'>A qualified, expert and experienced team is working relentlessly to help each and every couple inhering the same philosophy policies and culture. The mother centre also provides all out and all-around support, may it be clinical management of the patients, IVF lab and related services, counselling or grievance redressal.</p> 
            </div>
            <div className='mt-4'>
                <p  className='text-gray-500'>BFI Bhuj is located at the most prime, peaceful, well connected medical hub of Bhuj where BFI provides avant-garde comfort and privacy. A scientifically designed and meticulously crafted facility matches the international standards of technology and care. Every attention is paid to the smallest things and finer details to deliver the best success to every couple.</p>
            </div>
            <div className='mt-4'>
                <p  className='text-gray-500'>BFI Bhuj will truly live up to your expectation and promises to make your treatment Simple, Safe, Smart and Successful.</p>
            </div>
            <div className='mt-4'>
                <p  className='text-gray-500'>Bhuj BFI is working with full Covid19 protection protocols. Come, discover the joy of parenthood waiting at your doorsteps.</p>
            </div>
           </div>
           <div className="flex">
                <div className="w-[50%]">
                    <Image
                        src="/images/ivfcenter.jpg"
                        width={500}
                        height={200}
                        alt="Picture of the author"
                        className="object-cover w-full h-full"
                    />
                </div>
                <div className="w-[50%] p-16 bg-white flex flex-col justify-center">
                    <p className='text-[rgb(236,72,153)] text-4xl'>Introducing Bavishi Fertility Institute (BFI) - An IVF Center in Bhuj</p>
                    <p className='text-gray-500 mt-8'>We work with the principles of confidentiality, responsibility and professionalism. We are building families with technology and trust. Our state-of-the-art reproductive medicine facilities / Fertility clinics – provide highly individualized, customized, personalized treatment with a holistic and minimalistic approach, since 1986.</p>
                    <p className='text-gray-500 mt-8'>As a leading IVF clinic in Bhuj, founded and led by the well-known experts of Bavishi family / Dr Himanshu Bavishi & Dr Falguni Bavishi, all BFI clinics offer meticulous attention of the highest order in a pleasant and avant-garde environment to make your treatment Simple, Safe, Smart and Successful.</p>
                    <button className='pt-4 pb-4 pl-8 pr-8 w-[30%] border-2 rounded-2xl border-[rgb(236,72,153)] text-[rgb(236,72,153)] mt-8'>Read More</button>
                </div>
            </div>

            <div className='container max-w-[1280px] mx-auto mt-14'>
                <p className='text-[rgb(236,72,153)] text-2xl text-center'>Why Choose Bavishi Fertility Institute as Your IVF Center in Bhuj?</p>
                <p className='text-gray-500 mt-8 text-center'>We believe that every woman is unique, therefore every fertility treatment shall be too. Looking for proven track record cutting edge technology, honest opinions, value for money, highest success chance – All under one roof? Look no further. Your search is over. That is BFI!</p>
                </div>
                <div className='mt-8  bg-[rgb(253,239,226)] pb-4'>
                <div className='container max-w-[1280px] mx-auto mt-14 mb-14'>
                    <p className='text-[rgb(236,72,153)] text-2xl text-center pt-8'>Our specialisations</p>
                    <p className='text-gray-500 mt-4 text-center'>Any problem – the best solution – Under one roof = BFI! Focused, targeted and tailored treatment for every couple.</p>
                    <div className="grid grid-rows-2 grid-flow-col gap-4">
                        <div className="rounded-lg h-auto w-screen/7 p-4 flex flex-col justify-center items-center">
                            <div>
                                <Image
                                    src="/images/ivf1.png"
                                    width={100}
                                    height={100}
                                    alt="Picture of the author"
                                />
                            </div>
                            <div className="mt-1 " style={{ color: 'rgb(1, 146, 144)'}}>
                                <p className="text-center font-bold">Aetna</p>
                            </div>
                        </div>
                        <div className="rounded-lg h-auto w-screen/7 p-4 flex flex-col justify-center items-center">
                            <div>
                                <Image
                                    src="/images/ivf2.png"
                                    width={100}
                                    height={100}
                                    alt="Picture of the author"
                                />
                            </div>
                            <div className="mt-1 " style={{ color: 'rgb(1, 146, 144)'}}>
                                <p className="text-center font-bold">Aetna</p>
                            </div>
                        </div>
                        <div className="rounded-lg h-auto w-screen/7 p-4 flex flex-col justify-center items-center">
                            <div>
                                <Image
                                    src="/images/ivf3.png"
                                    width={100}
                                    height={100}
                                    alt="Picture of the author"
                                />
                            </div>
                            <div className="mt-1 " style={{ color: 'rgb(1, 146, 144)'}}>
                                <p className="text-center font-bold">Aetna</p>
                            </div>
                        </div>
                        <div className="rounded-lg h-auto w-screen/7 p-4 flex flex-col justify-center items-center">
                            <div>
                                <Image
                                    src="/images/ivf4.png"
                                    width={100}
                                    height={100}
                                    alt="Picture of the author"
                                />
                            </div>
                            <div className="mt-1 " style={{ color: 'rgb(1, 146, 144)'}}>
                                <p className="text-center font-bold">Aetna</p>
                            </div>
                        </div>
                        <div className="rounded-lg h-auto w-screen/7 p-4 flex flex-col justify-center items-center">
                            <div>
                                <Image
                                    src="/images/ivf5.png"
                                    width={100}
                                    height={100}
                                    alt="Picture of the author"
                                />
                            </div>
                            <div className="mt-1 " style={{ color: 'rgb(1, 146, 144)'}}>
                                <p className="text-center font-bold">Aetna</p>
                            </div>
                        </div>
                        <div className="rounded-lg h-auto w-screen/7 p-4 flex flex-col justify-center items-center">
                            <div>
                                <Image
                                    src="/images/ivf6.png"
                                    width={100}
                                    height={100}
                                    alt="Picture of the author"
                                />
                            </div>
                            <div className="mt-1 " style={{ color: 'rgb(1, 146, 144)'}}>
                                <p className="text-center font-bold">Aetna</p>
                            </div>
                        </div>
                        <div className="rounded-lg h-auto w-screen/7 p-4 flex flex-col justify-center items-center">
                            <div>
                                <Image
                                    src="/images/ivf7.png"
                                    width={100}
                                    height={100}
                                    alt="Picture of the author"
                                />
                            </div>
                            <div className="mt-1 " style={{ color: 'rgb(1, 146, 144)'}}>
                                <p className="text-center font-bold">Aetna</p>
                            </div>
                        </div>
                        <div className="rounded-lg h-auto w-screen/7 p-4 flex flex-col justify-center items-center">
                            <div>
                                <Image
                                    src="/images/ivf1.png"
                                    width={100}
                                    height={100}
                                    alt="Picture of the author"
                                />
                            </div>
                            <div className="mt-1 " style={{ color: 'rgb(1, 146, 144)'}}>
                                <p className="text-center font-bold">Aetna</p>
                            </div>
                        </div>
                        <div className="rounded-lg h-auto w-screen/7 p-4 flex flex-col justify-center items-center">
                            <div>
                                <Image
                                    src="/images/ivf2.png"
                                    width={100}
                                    height={100}
                                    alt="Picture of the author"
                                />
                            </div>
                            <div className="mt-1 " style={{ color: 'rgb(1, 146, 144)'}}>
                                <p className="text-center font-bold">Aetna</p>
                            </div>
                        </div>
                        <div className="rounded-lg h-auto w-screen/7 p-4 flex flex-col justify-center items-center">
                            <div>
                                <Image
                                    src="/images/ivf3.png"
                                    width={100}
                                    height={100}
                                    alt="Picture of the author"
                                />
                            </div>
                            <div className="mt-1 " style={{ color: 'rgb(1, 146, 144)'}}>
                                <p className="text-center font-bold">Aetna</p>
                            </div>
                        </div>
                        <div className="rounded-lg h-auto w-screen/7 p-4 flex flex-col justify-center items-center">
                            <div>
                                <Image
                                    src="/images/ivf4.png"
                                    width={100}
                                    height={100}
                                    alt="Picture of the author"
                                />
                            </div>
                            <div className="mt-1 " style={{ color: 'rgb(1, 146, 144)'}}>
                                <p className="text-center font-bold">Aetna</p>
                            </div>
                        </div>
                        <div className=" rounded-lg h-auto w-screen/7 p-4 flex flex-col justify-center items-center">
                            <div>
                                <Image
                                    src="/images/ivf5.png"
                                    width={100}
                                    height={100}
                                    alt="Picture of the author"
                                />
                            </div>
                            <div className="mt-1 " style={{ color: 'rgb(1, 146, 144)'}}>
                                <p className="text-center font-bold">Aetna</p>
                            </div>
                        </div>
                        <div className="rounded-lg h-auto w-screen/7 p-4 flex flex-col justify-center items-center0">
                            <div>
                                <Image
                                    src="/images/ivf6.png"
                                    width={100}
                                    height={100}
                                    alt="Picture of the author"
                                />
                            </div>
                            <div className="mt-1 " style={{ color: 'rgb(1, 146, 144)'}}>
                                <p className="text-center font-bold">Aetna</p>
                            </div>
                        </div>
                        <div className="rounded-lg h-auto w-screen/7 p-4 flex flex-col justify-center items-center">
                            <div>
                                <Image
                                    src="/images/ivf7.png"
                                    width={100}
                                    height={100}
                                    alt="Picture of the author"
                                />
                            </div>
                            <div className="mt-1 " style={{ color: 'rgb(1, 146, 144)'}}>
                                <p className="text-center font-bold">Aetna</p>
                            </div>
                        </div>
                        </div>
                        <div className='flex justify-center'>
                        <button className='flex justify-center pt-4 pb-4 pl-6 pr-6 w-[20%] text-xl border-2 rounded-2xl border-[rgb(236,72,153)] text-[rgb(236,72,153)] mt-8 bg-white hover:bg-[rgb(236,72,153)] hover:text-white duration-300'>View More</button>

                        </div>
                    </div>  
                </div>
                <div className='bg-white'>
                   <div className='container max-w-[1280px] mx-auto mb-14'>
                        <p className='text-[rgb(236,72,153)] text-2xl text-center pt-8'>Our IVF Specialists in Bhuj</p>
                        <div className='flex justify-center'>
                            <Image
                                src="/images/surabhivegad.jpg"
                                width={300}
                                height={300}
                                alt="Picture of the author"   
                            />
                        </div>
                        <div className='flex justify-center text-xl mt-4 font-bold text-[rgb(1,146,144)]'>
                            <p className='text-center'>Dr. Surbhi Vegad <br />MD Bhuj</p>
                        </div>

                        <p className='text-[rgb(236,72,153)] text-2xl text-center pt-12'>Our Staff at Bhuj centre</p>
                        <div className="grid grid-rows-1 grid-flow-col gap-4 mt-8">
                        <div className="rounded-lg border-2 pb-0 h-auto w-screen/5 p-4 flex flex-col justify-center items-center">
                            <div>
                                <Image
                                    src="/images/staff1.jpg"
                                    width={200}
                                    height={200}
                                    alt="Picture of the author"
                                />
                            </div>
                        </div>
                        <div className="rounded-lg border-2 pb-0 h-auto w-screen/5 p-4 flex flex-col justify-center items-center">
                            <div>
                                <Image
                                    src="/images/staff2.jpg"
                                    width={200}
                                    height={200}
                                    alt="Picture of the author"
                                />
                            </div>
                        </div>
                        <div className="rounded-lg border-2 pb-0 h-auto w-screen/5 p-4 flex flex-col justify-center items-center">
                            <div>
                                <Image
                                    src="/images/staff3.jpg"
                                    width={200}
                                    height={200}
                                    alt="Picture of the author"
                                />
                            </div>
                        </div>
                        <div className="rounded-lg border-2 pb-0 h-auto w-screen/5 p-4 flex flex-col justify-center items-center">
                            <div>
                                <Image
                                    src="/images/staff4.jpg"
                                    width={200}
                                    height={200}
                                    alt="Picture of the author"
                                />
                            </div>
                        </div>
                        <div className="rounded-lg border-2 pb-0 h-auto w-screen/5 p-4 flex flex-col justify-center items-center">
                            <div>
                                <Image
                                    src="/images/staff5.jpg"
                                    width={200}
                                    height={200}
                                    alt="Picture of the author"
                                />
                            </div>
                        </div>
                        </div>
                        <p className='text-[rgb(236,72,153)] text-3xl text-center pt-12'>FAQ</p>
                        <Accordion variant="shadow" className='mt-8 ml-0'>
                            <AccordionItem key="1" className='text-[#927fba] bg-white rounded-3xl p-4 mb-4 border-2' title="01. What all should I carry for my first appointment?">
                                {defaultContent}
                            </AccordionItem>
                            <AccordionItem key="2" className='text-[#927fba] bg-white rounded-3xl p-4 mb-4 border-2' aria-label="Accordion 2" title="02. How is the Emergency Department staffed?">
                                {defaultContent}
                            </AccordionItem>
                            <AccordionItem key="3" className='text-[#927fba] bg-white rounded-3xl p-4 mb-4 border-2' aria-label="Accordion 3" title="03. What if my patient does not have a matched sibling?">
                                {defaultContent}
                            </AccordionItem>
                            <AccordionItem key="4" className='text-[#927fba] bg-white rounded-3xl p-4 mb-4 border-2' title="04. What all should I carry for my first appointment?" aria-label="Accordion 1">
                                {defaultContent}
                            </AccordionItem>
                            <AccordionItem key="5" className='text-[#927fba] bg-white rounded-3xl p-4 mb-4 border-2' aria-label="Accordion 2" title="05. How is the Emergency Department staffed?">
                                {defaultContent}
                            </AccordionItem>
                            <AccordionItem key="6" className='text-[#927fba] bg-white rounded-3xl p-4 mb-4 border-2' aria-label="Accordion 3" title="06. What if my patient does not have a matched sibling?">
                                {defaultContent}
                            </AccordionItem>
                            <AccordionItem key="7" className='text-[#927fba] bg-white rounded-3xl p-4 mb-4 border-2' title="07. What all should I carry for my first appointment?" aria-label="Accordion 1">
                                {defaultContent}
                            </AccordionItem>
                            <AccordionItem key="8" className='text-[#927fba] bg-white rounded-3xl p-4 mb-4 border-2' aria-label="Accordion 2" title="08. How is the Emergency Department staffed?">
                                {defaultContent}
                            </AccordionItem>
                            <AccordionItem key="9" className='text-[#927fba] bg-white rounded-3xl p-4 mb-4 border-2' aria-label="Accordion 3" title="09. What if my patient does not have a matched sibling?">
                                {defaultContent}
                            </AccordionItem>
                            <AccordionItem key="10" className='text-[#927fba] bg-white rounded-3xl p-4 mb-4 border-2' title="10. What all should I carry for my first appointment?" aria-label="Accordion 1">
                                {defaultContent}
                            </AccordionItem>
                            <AccordionItem key="11" className='text-[#927fba] bg-white rounded-3xl p-4 mb-4 border-2' aria-label="Accordion 2" title="11. How is the Emergency Department staffed?">
                                {defaultContent}
                            </AccordionItem>
                            <AccordionItem key="12" className='text-[#927fba] bg-white rounded-3xl p-4 mb-4 ' aria-label="Accordion 3" title="12. What if my patient does not have a matched sibling?">
                                {defaultContent}
                            </AccordionItem>
                        </Accordion>  
                    </div>
                    
                </div>
                        

            </div>

    )
}