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
                    <p className='absolute bottom-20 text-white px-8 py-2 text-6xl'>Antenatal Care & Postnatal Care</p>
                    
                </div>
            </div>
            <div className='container max-w-[1280px] mx-auto mt-20 mb-24'>
                <p className=" text-center text-[#009090] px-8 py-2 text-base mb-6">
                    <Link href="/">Home</Link> &gt; <Link href="/Treatments">Treatments</Link>&gt; <Link href="/Treatments">Antenatal Care & Postnatal Care</Link>
                </p>
                <p className='text-base text-justify text-[#5C5C5C]'>
                Experience comprehensive antenatal and postnatal care at Spandan Maternity Home, where we prioritize the health and well-being of 
                both mother and child. From the early stages of pregnancy to the joyful arrival of your newborn and beyond, our dedicated team of 
                healthcare professionals is committed to providing personalized support and guidance every step of the way. With state-of-the-art 
                facilities and compassionate expertise, we ensure that you receive the highest standard of care, empowering you to embrace the 
                journey of parenthood with confidence and peace of mind. Trust Spandan to nurture your family's future with the care it deserves.
                </p>
                <div className='flex'>
                <div className='w-1/2 mt-12'>
                    <h1 className='text-base mb-3 font-bold'>Services under Antenatal Care & Postnatal Care</h1>
                    <ul className="list-disc text-base pl-6 text-[#5C5C5C]">
                        <li>Confidential medical history review</li>
                        <li>Physical examination</li>
                        <li>Growth and development assessment</li>
                        <li>Immunization review and administration</li>
                        <li>Sexual health education and counseling</li>
                        <li>Substance use screening and counseling</li>
                        <li>Mental health assessment and support</li>
                        <li>Nutrition and exercise counseling</li>
                        <li>Injury prevention education</li>
                        <li>Reproductive health counseling (contraception, STI prevention)</li>
                        <li>Healthy relationship education</li>
                        <li>Academic and career counseling</li>
                        <li>Referrals to specialists or support services as needed</li>
                    </ul>
                    </div>

                    <div className='w-1/2 mt-12 container max-w-[500px] max-h-[500px]'>   
                        <Image
                        src="/images/treat1.jpg"
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