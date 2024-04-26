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
                    <p className='absolute bottom-20 text-white px-8 py-2 text-6xl'>Laparoscopic & Hysteroscopic Surgeries</p>
                    
                </div>
            </div>
            <div className='container max-w-[1280px] mx-auto mt-20 mb-24'>
                <p className=" text-center text-[#009090] px-8 py-2 text-base mb-6">
                    <Link href="/">Home</Link> &gt; <Link href="/Treatments">Treatments</Link>&gt; <Link href="/Treatments">Laparoscopic & Hysteroscopic Surgeries</Link>
                </p>
                <p className='text-base text-justify text-[#5C5C5C]'>
                Benefit from advanced surgical precision and minimal invasiveness with Laparoscopic & Hysteroscopic Surgeries at Spandan Maternity 
                Home. Our skilled surgical team utilizes cutting-edge techniques to perform a variety of procedures, resulting in faster recovery and 
                reduced post-operative discomfort. Whether you need diagnostic or therapeutic interventions for gynecological conditions like fibroids, 
                endometriosis, or infertility-related issues, our personalized care ensures your specific needs are addressed. Trust Spandan for expert 
                surgical care, providing optimal outcomes and reassurance during your path to improved health.
                </p>
                <div className='flex'>
                <div className='w-1/2 mt-12'>
                    <h1 className='text-base mb-3 font-bold'>Services under Laparoscopic & Hysteroscopic Surgeries</h1>
                    <ul className="list-disc text-base pl-6 text-[#5C5C5C]">
                    <li>Preoperative evaluation</li>
                    <li>Surgical consultation</li>
                    <li>Laparoscopic procedures (e.g., tubal ligation, ovarian cystectomy)</li>
                    <li>Hysteroscopic procedures (e.g., endometrial ablation, polypectomy)</li>
                    <li>Anesthesia administration</li>
                    <li>Postoperative care and monitoring</li>
                    <li>Pain management</li>
                    <li>Complication management</li>
                    <li>Follow-up appointments</li>
                    <li>Referrals to specialists if needed</li>
                    </ul>
                    </div>

                    <div className='w-1/2 mt-12 container max-w-[500px] max-h-[500px]'> 
                        <Image
                        src="/images/treat5.jpg"
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