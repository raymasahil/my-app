import Image from 'next/image'
import Link from 'next/link'
import '@/style/global.css';
export default function About() {
    return(
        <div className="main-content">
            <div className="relative w-full">
                <div className="bg-[url('/Images/hospitalbanner2.jpg')] bg-cover bg-center min-h-96"></div>
                <div className="absolute bottom-0 left-0 right-0" style={{ zIndex: '1', backgroundImage: 'linear-gradient(to bottom, rgba(0,0,0,0.1), #241B19 200%)', height: '100%' }}></div>



                <div className='container max-w-[1280px] mx-auto relative z-10'>
                    <p className='absolute bottom-20 text-white px-8 py-2 text-6xl'>Menstrual Issues</p>
                    
                </div>
            </div>
            <div className='container max-w-[1280px] mx-auto mt-20 mb-24'>
                <p className=" text-center text-[#009090] px-8 py-2 text-base mb-6">
                    <Link href="/">Home</Link> &gt; <Link href="/Treatments">Treatments</Link>&gt; <Link href="/Treatments">Menstrual Issues</Link>
                </p>
                <p className='text-base text-justify text-[#5C5C5C]'>
                Address menstrual issues with confidence at Spandan Maternity Home. Our compassionate healthcare team understands the 
                importance of menstrual health and is dedicated to providing personalized care and support. Whether you're experiencing irregular 
                periods, painful cramps, heavy bleeding, or any other menstrual concerns, we offer comprehensive evaluations and tailored treatment 
                plans to help you find relief and regain control over your menstrual health. With state-of-the-art facilities and a patient-centered 
                approach, we strive to empower women to live their lives fully, free from the limitations of menstrual issues. Trust Spandan to partner 
                with you in achieving optimal menstrual wellness.
                </p>
                <div className='flex'>
                <div className='w-1/2 mt-12'>
                    <h1 className='text-base mb-3 font-bold'>Services under Menstrual Issues</h1>
                    <ul className="list-disc text-base pl-6 text-[#5C5C5C]">
                        <li>Contraceptive counseling</li>
                        <li>Birth control options education</li>
                        <li>Prescription and provision of contraceptives</li>
                        <li>Long-acting reversible contraception (LARC) insertion (such as IUDs or implants)</li>
                        <li>Barrier methods distribution (condoms, diaphragms)</li>
                        <li>Natural family planning education</li>
                        <li>Preconception counseling</li>
                        <li>Fertility awareness methods training</li>
                        <li>Counseling on emergency contraception</li>
                        <li>Sterilization counseling and procedures (if desired)</li>
                    </ul>
                    </div>

                    <div className='w-1/2 mt-12 container max-w-[500px] max-h-[500px]'> 
                        <Image
                        src="/images/treat110.jpg"
                        width={500}
                        height={500} // Adjusted height
                        alt="Picture of the author"
                        className='rounded-2xl'
                        />
                    </div>
                </div>
            </div>
        </div>
    )}