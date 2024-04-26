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
                    <p className='absolute bottom-20 text-white px-8 py-2 text-6xl'>Sexually Transmitted Disease</p>
                    
                </div>
            </div>
            <div className='container max-w-[1280px] mx-auto mt-20 mb-24'>
                <p className=" text-center text-[#009090] px-8 py-2 text-base mb-6">
                    <Link href="/">Home</Link> &gt; <Link href="/Treatments">Treatments</Link>&gt; <Link href="/Treatments">Sexually Transmitted Disease</Link>
                </p>
                <p className='text-base text-justify text-[#5C5C5C]'>
                At Spandan Maternity Home, we recognize the integral role sexual health plays in your overall well-being. That's why we offer 
                comprehensive services for Sexually Transmitted Diseases (STDs), providing confidential testing, diagnosis, and treatment by 
                experienced healthcare professionals. Our compassionate approach ensures personalized care and support throughout the process, 
                empowering you to take control of your sexual health confidently. Spandan provides effective and confidential care for STDs, promoting 
                your overall health and wellness.
                </p>
                <div className='flex'>
                <div className='w-1/2 mt-12'>
                    <h1 className='text-base mb-3 font-bold'>Services under Sexually Transmitted Disease</h1>
                    <ul className="list-disc text-base pl-6 text-[#5C5C5C]">
                    <li>Screening tests</li>
                    <li>Diagnostic tests</li>
                    <li>Counseling and education</li>
                    <li>Treatment options</li>
                    <li>Partner notification and counseling</li>
                    <li>Vaccination (for certain STDs like HPV and hepatitis B)</li>
                    <li>Prevention education (safe sex practices)</li>
                    <li>Follow-up care and monitoring</li>
                    <li>Referrals to specialists or support services</li>
                    </ul>
                    </div>
                  
                    <div className='w-1/2 mt-12 container max-w-[500px] max-h-[500px]'> 
                        <Image
                        src="/images/treat4.png"
                        width={500}
                        height={500}
                        objectFit="cover" // This will make the image cover the container
                        objectPosition="center"
                        alt="Picture of the author"
                        className='rounded-2xl'
                        />
                    </div>
                  
                </div>
            </div>
        </div>
    )}