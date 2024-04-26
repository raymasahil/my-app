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
                    <p className='absolute bottom-20 text-white px-8 py-2 text-6xl'>Preconception Counselling</p>
                    
                </div>
            </div>
            <div className='container max-w-[1280px] mx-auto mt-20 mb-24'>
                <p className=" text-center text-[#009090] px-8 py-2 text-base mb-6">
                    <Link href="/">Home</Link> &gt; <Link href="/Treatments">Treatments</Link>&gt; <Link href="/Treatments">Preconception Counselling</Link>
                </p>
                <p className='text-base text-justify text-[#5C5C5C]'>
                Embark on your journey to parenthood with confidence through our Preconception Counseling service at Spandan Maternity Home. Our 
                experienced team of healthcare professionals is dedicated to providing comprehensive guidance and support as you prepare for 
                pregnancy. From assessing your health and addressing any potential risks to offering personalized advice on nutrition, lifestyle, and 
                fertility optimization, we are here to empower you with the knowledge and tools needed to enhance your chances of a healthy 
                conception and pregnancy. Trust Spandan to partner with you in realizing your dreams of starting a family, ensuring a smooth and 
                fulfilling transition into parenthood.
                </p>
                <div className='flex'>
                <div className='w-1/2 mt-12'>
                    <h1 className='text-base mb-3 font-bold'>Services under Preconception Counselling</h1>
                    <ul className="list-disc text-base pl-6 text-[#5C5C5C]">
                    <li>Health assessment</li>
                    <li>Genetic counseling</li>
                    <li>Nutritional guidance</li>
                    <li>Lifestyle modifications</li>
                    <li>Immunizations</li>
                    <li>Medication review</li>
                    <li>Folic acid supplementation</li>
                    <li>Screening for infections</li>
                    <li>Reproductive health education</li>
                    <li>Referrals</li>
                    </ul>
                    </div>

                    <div className='w-1/2 mt-12 container max-w-[500px] max-h-[500px]'>   
                        <Image
                        src="/images/treat2.jpg"
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