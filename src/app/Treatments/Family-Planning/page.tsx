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
                    <p className='absolute bottom-20 text-white px-8 py-2 text-6xl'>Family Planning</p>
                    
                </div>
            </div>
            <div className='container max-w-[1280px] mx-auto mt-20 mb-24'>
                <p className=" text-center text-[#009090] px-8 py-2 text-base mb-6">
                    <Link href="/">Home</Link> &gt; <Link href="/Treatments">Treatments</Link>&gt; <Link href="/Treatments">Family Planning</Link>
                </p>
                <p className='text-base text-justify text-[#5C5C5C]'>
                Take control of your reproductive health and make informed decisions with the comprehensive Family Planning services offered at 
                Spandan Maternity Home. We understand the importance of planning for the future, whether you're considering expanding your family 
                or seeking contraceptive options. Our experienced healthcare professionals provide personalized guidance and support, offering a 
                range of contraceptive methods tailored to your lifestyle and preferences. Additionally, we offer counseling on fertility awareness and 
                preconception care to help you achieve your family planning goals. With our compassionate approach and commitment to 
                confidentiality, trust Spandan to empower you on your journey towards reproductive well-being.
                </p>
                <div className='flex'>
                <div className='w-1/2 mt-12'>
                    <h1 className='text-base mb-3 font-bold'>Services under Family Planning</h1>
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
                        src="/images/treat12.jpg"
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