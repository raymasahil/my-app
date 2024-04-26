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
                    <p className='absolute bottom-20 text-white px-8 py-2 text-6xl'>Menopausal Problems</p>
                    
                </div>
            </div>
            <div className='container max-w-[1280px] mx-auto mt-20 mb-24'>
                <p className=" text-center text-[#009090] px-8 py-2 text-base mb-6">
                    <Link href="/">Home</Link> &gt; <Link href="/Treatments">Treatments</Link>&gt; <Link href="/Treatments">Menopausal Problems</Link>
                </p>
                <p className='text-base text-justify text-[#5C5C5C]'>
                Navigate the changes and challenges of menopause with confidence through the specialized care offered at Spandan Maternity Home. 
                Our experienced healthcare professionals understand the unique needs of women during this life transition and provide comprehensive 
                support and treatment for menopausal symptoms. Whether you're experiencing hot flashes, mood swings, or other issues, we offer 
                personalized solutions tailored to your individual needs. With compassionate expertise and state-of-the-art resources, we empower you 
                to embrace this new phase of life with vitality and comfort. Spandan provides the guidance and care you need to navigate menopause 
                with grace and confidence
                </p>
                <div className='flex'>
                <div className='w-1/2 mt-12'>
                    <h1 className='text-base mb-3 font-bold'>Services under Menopausal Problems</h1>
                    <ul className="list-disc text-base pl-6 text-[#5C5C5C]">
                    <li>Symptom assessment</li>
                    <li>Hormonal testing</li>
                    <li>Bone density screening</li>
                    <li>Counseling on menopause management options</li>
                    <li>Hormone replacement therapy (HRT) consultation and management</li>
                    <li>Non-hormonal treatment options (e.g., lifestyle changes, herbal remedies)</li>
                    <li>Management of menopausal symptoms (hot flashes, vaginal dryness, etc.)</li>
                    <li>Screening and management of related health concerns (osteoporosis, cardiovascular risk)</li>
                    <li>Emotional support and counseling</li>
                    <li>Referrals to specialists if needed</li>
                    </ul>
                    </div>

                    <div className='w-1/2 mt-12 container max-w-[500px] max-h-[500px]'> 
                        <Image
                        src="/images/treat8.jpg"
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