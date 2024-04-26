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
                    <p className='absolute bottom-20 text-white px-8 py-2 text-6xl'>Cancer Screening, Diagnosis & Preventive Vaccination</p>
                    
                </div>
            </div>
            <div className='container max-w-[1280px] mx-auto mt-20 mb-24'>
                <p className=" text-center text-[#009090] px-8 py-2 text-base mb-6">
                    <Link href="/">Home</Link> &gt; <Link href="/Treatments">Treatments</Link>&gt; <Link href="/Treatments">Cancer Screening, Diagnosis & Preventive Vaccination</Link>
                </p>
                <p className='text-base text-justify text-[#5C5C5C]'>
                Discover complete Cancer Screening, Diagnosis, & Preventive Vaccination services at Spandan Maternity Home. Our committed 
                healthcare team emphasizes early detection and prevention, providing customized screening tests and advanced diagnostics. From 
                regular screenings to personalized preventive vaccination programs, we offer proactive care to protect your well-being. Rely on 
                Spandan to support you in achieving lasting health and vitality.
                </p>
                <div className='flex'>
                <div className='w-1/2 mt-12'>
                    <h1 className='text-base mb-3 font-bold'>Services under Cancer Screening, Diagnosis & <br></br> Preventive Vaccination</h1>
                    <ul className="list-disc text-base pl-6 text-[#5C5C5C]">
                    <li>Regular screenings</li>
                    <li>Diagnostic imaging</li>
                    <li>Pathology tests</li>
                    <li>Genetic testing</li>
                    <li>Multidisciplinary consultation</li>
                    <li>HPV vaccine</li>
                    <li>Hepatitis B vaccine</li>
                    <li>Hepatitis C screening</li>
                    <li>Tobacco cessation counseling</li>
                    <li>Sun protection education</li>
                    <li>Lifestyle counseling</li>
                    </ul>
                    </div>

                    <div className='w-1/2 mt-12 container max-w-[500px] max-h-[500px]'>  
                        <Image
                        src="/images/treat3.jpg"
                        width={500}
                        height={500}
                        alt="Picture of the author"
                        className='rounded-2xl'
                        />
                    </div>
                </div>
            </div>
        </div>
    )}