'use client';
import Image from 'next/image'
import Link from 'next/link'
import {Accordion, AccordionItem} from "@nextui-org/react";
export default function About() {
    const defaultContent =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";
    return(
        <div className="main-content">
           <div className="relative w-full">
                <div className="bg-[url('/Images/hospitalbanner2.jpg')] bg-cover bg-center min-h-96"></div>
                <div className="absolute bottom-0 left-0 right-0" style={{ zIndex: '1', backgroundImage: 'linear-gradient(to bottom, rgba(0,0,0,0.1), #241B19 200%)', height: '100%' }}></div>



                <div className='container max-w-[1280px] mx-auto relative z-10'>
                    <p className='absolute bottom-20 text-white px-8 py-2 text-6xl'>The Best IVF Center in Bhuj</p>
                    <p className="absolute bottom-10 text-white px-8 py-2">
                        <Link href="/">Home</Link> &gt; <Link href="/Treatments">IVF Center</Link>
                    </p>
                </div>
            </div>
            <div className='container max-w-[1280px] mx-auto mt-20'>
                <div className='flex flex-wrap'>
                    <div className='w-full lg:w-1/2 mb-8 gap-4'>
                        <div className='text-[#009290] text-xl p-4 text-justify mt-12'>
                            <p>Located in Bhuj, Kutch, Spandan Maternity Home in collaboration with most reputed Bavishi fertility Institute & IVF Centre stands as a beacon of comprehensive women's healthcare. Under the esteemed leadership of Dr Surbhi Vegad, a top-rated gynaecologist in Bhuj Kutch, our centre offers a diverse range of services, from routine deliveries to complex gynaecological surgeries.
</p>
                        </div>
                        <div className='mt-4 pl-4 pr-8 text-justify'>
                            <p className='text-gray-500 text-lg'>Specializing in advanced infertility solutions, our IVF centre in Bhuj excels in treatments like IVF, ICSI, and Donor Oocyte programs. Notably, male infertility treatments such as TESE, TESA, PESA, and Micro TESE are also routinely administered, showcasing our expertise in holistic reproductive care.
</p>
                        </div>
                       
                    </div>
                    <div className='w-full lg:w-1/2'>
                        {/* Replace the image with your actual image */}
                        <img src="/images/ivfimg.jpeg" alt="Image" className="w-full h-[500px] rounded-2xl" />
                    </div>
                </div>
           </div>
           <div className="flex justify-center bg-white p-16 mt-8 mb-8 bg-[url('/Images/parallax-lab-image.jpg')] bg-fixed">
                    <div className="p-4 text-center  w-[75%] rounded-2xl">
                        <p className="text-gray-600 text-xl">
                            A qualified, expert and experienced team is working relentlessly to help each and every couple inhering the same philosophy policies and culture. The mother centre also provides all out and all-around support, may it be clinical management of the patients, IVF lab and related services, counselling or grievance redressal.
                        </p> 
                    </div>
                </div>
           <div className="flex">
                <div className="w-[40%]">
                    <Image
                        src="/images/ivfcenter.jpg"
                        width={500}
                        height={200}
                        alt="Picture of the author"
                        className="object-cover w-full h-full rounded-br-2xl rounded-tr-2xl"
                    />
                </div>
                <div className="w-[60%] p-8 bg-white flex flex-col justify-center">
                    <p className='text-[rgb(236,72,153)] text-3xl'>Highlights of Our IVF Centre in Bhuj</p>
                    <p className='text-gray-500 mt-8'><span className='text-slate-800 font-bold'>1. Expertise :</span>Our seasoned team comprises board-certified fertility specialists, embryologists, and reproductive endocrinologists, ensuring unparalleled care for male and female infertility, recurrent miscarriages, and genetic issues.</p>
                    <p className='text-gray-500 mt-4'><span className='text-slate-800 font-bold'>2. Cutting-Edge Facilities : </span>Equipped with state-of-the-art laboratories and surgical suites, we harness the latest in assisted reproductive technologies, including preimplantation genetic testing (PGT) and cryopreservation.</p>
                    <p className='text-gray-500 mt-4'><span className='text-slate-800 font-bold'>3. Holistic Services : </span>From fertility assessments and ovulation induction to IUI and minimally invasive surgeries, we offer a wide array of services tailored to individual needs.</p>
                    <p className='text-gray-500 mt-4'><span className='text-slate-800 font-bold'>4. Personalized Approach : </span>Recognizing the uniqueness of each patient, Dr. Surabhi and her team emphasize bespoke treatment plans aligned with your medical history and reproductive aspirations.</p>
                    <p className='text-gray-500 mt-4'><span className='text-slate-800 font-bold'>5. Emotional Support : </span>Infertility can be emotionally taxing. Hence, we prioritize a supportive environment, offering counselling and compassionate care throughout your fertility journey.</p>
                    <p className='text-gray-500 mt-4'><span className='text-slate-800 font-bold'>6. Impressive Success Rates : </span> While outcomes can vary, our track record in aiding couples towards successful pregnancies remains commendable, underlining our commitment to excellence in IVF in Kutch.</p>
                    <p className='text-gray-500 mt-4'><span className='text-slate-800 font-bold'>7. Confidentiality Assured : </span>Upholding the highest standards of privacy, we ensure that all patient information remains strictly confidential.</p>
                </div>
            </div>
            <div className='container max-w-[1280px] mx-auto mt-14'>
                <p className='text-[rgb(236,72,153)] text-2xl text-center'>Why Choose Bavishi Fertility Institute as Your IVF Center in Bhuj?</p>
                <p className='text-gray-500 mt-8 text-center'>We believe that every woman is unique, therefore every fertility treatment shall be too. Looking for proven track record cutting edge technology, honest opinions, value for money, highest success chance – All under one roof? Look no further. Your search is over. That is BFI!</p>
            </div>
            <div className='mt-8  bg-[rgb(253,239,226)] pb-4'>
                <div className='container max-w-[1280px] mx-auto mt-14 mb-14'>
                    <p className='text-[rgb(236,72,153)] text-3xl text-center pt-8'>Our specialisations</p>
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
                            <div className="mt-1 text-gray-500">
                                <p className="text-center text-s">Male Infertility</p>
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
                            <div className="mt-1 text-gray-500 ">
                                <p className="text-center ">Female Infertility</p>
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
                            <div className="mt-1 text-gray-500 ">
                                <p className="text-center ">Advance technique</p>
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
                            <div className="mt-1 text-gray-500" >
                                <p className="text-center ">Preimplantation Genetic Testing</p>
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
                            <div className="mt-1 text-gray-500" >
                                <p className="text-center ">Intra Uterine Insemination - IUI</p>
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
                            <div className="mt-1 text-gray-500" >
                                <p className="text-center ">IVF</p>
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
                            <div className="mt-1 text-gray-500" >
                                <p className="text-center ">Fertility Preservation</p>
                            </div>
                        </div>
                        <div className="rounded-lg h-auto w-screen/7 p-4 flex flex-col justify-center items-center">
                            <div>
                                <Image
                                    src="/images/ivf8.png"
                                    width={100}
                                    height={100}
                                    alt="Picture of the author"
                                />
                            </div>
                            <div className="mt-1 text-gray-500" >
                                <p className="text-center ">Semen donation</p>
                            </div>
                        </div>
                        <div className="rounded-lg h-auto w-screen/7 p-4 flex flex-col justify-center items-center">
                            <div>
                                <Image
                                    src="/images/ivf9.png"
                                    width={100}
                                    height={100}
                                    alt="Picture of the author"
                                />
                            </div>
                            <div className="mt-1 text-gray-500" >
                                <p className="text-center ">Egg donation Surrogacy</p>
                            </div>
                        </div>
                        <div className="rounded-lg h-auto w-screen/7 p-4 flex flex-col justify-center items-center">
                            <div>
                                <Image
                                    src="/images/ivf10.png"
                                    width={100}
                                    height={100}
                                    alt="Picture of the author"
                                />
                            </div>
                            <div className="mt-1 text-gray-500" >
                                <p className="text-center ">Embryo Donation / Embryo freezing</p>
                            </div>
                        </div>
                        <div className="rounded-lg h-auto w-screen/7 p-4 flex flex-col justify-center items-center">
                            <div>
                                <Image
                                    src="/images/ivf11.png"
                                    width={100}
                                    height={100}
                                    alt="Picture of the author"
                                />
                            </div>
                            <div className="mt-1 text-gray-500" >
                                <p className="text-center ">Fibroids - Endometriosis</p>
                            </div>
                        </div>
                        <div className="rounded-lg h-auto w-screen/7 p-4 flex flex-col justify-center items-center">
                            <div>
                                <Image
                                    src="/images/ivf12.png"
                                    width={100}
                                    height={100}
                                    alt="Picture of the author"
                                />
                            </div>
                            <div className="mt-1 text-gray-500" >
                                <p className="text-center ">Ovary rejuvenation – PRP Stem cell</p>
                            </div>
                        </div>
                        <div className="rounded-lg h-auto w-screen/7 p-4 flex flex-col justify-center items-center">
                            <div>
                                <Image
                                    src="/images/ivf13.png"
                                    width={100}
                                    height={100}
                                    alt="Picture of the author"
                                />
                            </div>
                            <div className="mt-1 text-gray-500" >
                                <p className="text-center ">High-Risk Obstetrics</p>
                            </div>
                        </div>
                        <div className="rounded-lg h-auto w-screen/7 p-4 flex flex-col justify-center items-center">
                            <div>
                                <Image
                                    src="/images/ivf14.png"
                                    width={100}
                                    height={100}
                                    alt="Picture of the author"
                                />
                            </div>
                            <div className="mt-1 text-gray-500" >
                                <p className="text-center ">Maternity Services</p>
                            </div>
                        </div>
                        </div>
                        
                    </div>  
                </div>
                <div className='bg-[#F4F6F7]'>
                   <div className='container max-w-[1280px] mx-auto p-8'>
                        {/* <p className='text-[rgb(236,72,153)] text-xl text-center pt-8'>Our IVF Specialists in Bhuj</p> */}
                        <div className="flex">
                        <div className="flex justify-center border-2 rounded-full overflow-hidden ml-12 border-0">
                            <Image
                                src="/images/Dr. surbhi vegad.png"
                                width={500}
                                height={100}
                                alt="Picture of the author"
                            />
                        </div>
                        <div className="mt-6">
                            <div className="text-left ">
                                <p className='ml-8 mt-4 text-[rgb(1,146,144)] text-3xl'>Dr. Surabhi Vegad – The Best Fertility & IVF Doctor</p>
                                <p className='text-lg ml-8 text-[rgb(1,146,144)]'>Leading Gynecologist in Bhuj, Kutch</p>

                                <p className='text-base p-8 leading-8 text-[#9F7198]'>Dr. Surabhi Vegad stands as a premier Obstetrician and Gynecologist in Bhuj, Kutch, specializing in state-of-the-art treatments for a wide range of gynaecological issues. With extensive experience spanning over 20 years, Dr. Vegad is a trailblazer in women's healthcare, consistently advancing research and patient care.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='bg-white'>
                    <div className='container max-w-[1280px] mx-auto mb-14 '>
                        <p className='text-[rgb(236,72,153)] text-3xl text-center pt-12'>FAQ</p>
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
            </div>
                </div>
                        

            </div>

    )
}