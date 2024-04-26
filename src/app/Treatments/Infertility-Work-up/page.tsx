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
                    <p className='absolute bottom-20 text-white px-8 py-2 text-6xl'>Infertility Work-up</p>
                    
                </div>
            </div>
            <div className='container max-w-[1280px] mx-auto mt-20 mb-24'>
                <p className=" text-center text-[#009090] px-8 py-2 text-base mb-6">
                    <Link href="/">Home</Link> &gt; <Link href="/Treatments">Treatments</Link>&gt; <Link href="/Treatments">Infertility Work-up</Link>
                </p>
                <p className='text-base text-justify text-[#5C5C5C]'>
                Embark on your journey towards parenthood with confidence through the Infertility Work-up services at Spandan Maternity Home. We 
                understand the emotional challenges of infertility and offer comprehensive evaluations and diagnostic tests tailored to your unique 
                circumstances. Our experienced healthcare professionals guide you through every step of the process with compassion and expertise, 
                identifying underlying causes and developing personalized treatment plans. Trust Spandan to provide the support and understanding 
                you need as you pursue your dream of starting a family.
                </p>
                <div className='flex'>
                <div className='w-1/2 mt-12'>
                    <h1 className='text-base mb-3 font-bold'>Services under Infertility Work-up</h1>
                    <ul className="list-disc text-base pl-6 text-[#5C5C5C]">
                    <li>Medical history assessment</li>
                    <li>Physical examination</li>
                    <li>Hormonal testing</li>
                    <li>Semen analysis (for male partners)</li>
                    <li>Ovulation tracking</li>
                    <li>Tubal patency testing (for female partners)</li>
                    <li>Imaging studies (ultrasound, hysterosalpingogram)</li>
                    <li>Genetic testing</li>
                    <li>Lifestyle counseling</li>
                    <li>Medication management</li>
                    <li>Assisted reproductive technology (ART) consultation</li>
                    <li>Referrals to fertility specialists or support services</li>
                    </ul>
                    </div>

                    <div className='w-1/2 mt-12 container max-w-[500px] max-h-[500px]'>  
                        <Image
                        src="/images/treat11.jpg"
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