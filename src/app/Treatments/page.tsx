import Image from 'next/image'
import Link from 'next/link'
export default function About() {
    return(
        <div className="main-content">
            <div className='lg mx-auto relative'>
                <Image
                    src="/images/downloadbanner.jpg"
                    width={500}
                    height={200}
                    alt="Picture of the author"
                    className="w-full h-auto"
                />
                <div className='container max-w-[1280px] mx-auto mt-14 mb-24'>
                    <p className='absolute bottom-20  text-white px-8 py-2 text-6xl'>Treatments</p>
                    <p className="absolute bottom-10 text-white px-8 py-2">
                        <Link href="/">Home</Link> &gt; <Link href="/Treatments">Treatments</Link>
                    </p>
                </div>
            </div>
            <div className='container max-w-[1280px] mx-auto mt-14 mb-24'>
                <div>
                    <p className='pl-8 pr-8 text-center mt-8 text-gray-500 text-xl font-bold'>
                    Clinical laboratory services are tests provided by a medical lab that aid in diagnosis and treatment of patients. There are many types of clinical laboratory services, including:
                    </p>
                </div>
                <div className="flex gap-10 mt-8">
                    <div className="w-1/3 bg-white-700 flex flex-col justify-center items-center shadow-xl">
                        <div className="flex flex-col items-left pb-8">
                            <Image
                                src="/images/t1.jpg"
                                width={500}
                                height={200}
                                alt="Picture of the author"
                                className="hover:rounded-full transition-all duration-1000"
                            />
                            <p className="text-2xl mt-4 text-black pl-6 font-bold">Molecular Testing & Oncology</p>
                            <div className="w-28 ml-6 border-b-4 border-teal-500 mt-4"></div>
                            <p className="text-lg mt-4 text-gray-700 px-6">Laboratory Services provides an expanding menu of molecular-based testing. Our services include:</p>
                            <ul className="text-gray-500 pl-14 list-disc mt-4 leading-9">
                                <li>Viral and Bacterial Pathogen Detection</li>
                                <li>Mutation Analysis</li>
                                <li>Translocation Analysis</li>
                                <li>Microsatellite Analysis</li>
                                <li>Epigenetics (Methylation)</li>
                            </ul>
                        </div>
                    </div>
                    <div className="w-1/3 bg-white-700 flex flex-col justify-center items-center shadow-xl">
                        <div className="flex flex-col items-left pb-8">
                            <Image
                                src="/images/t2.jpg"
                                width={500}
                                height={200}
                                alt="Picture of the author"
                                className="hover:rounded-full transition-all duration-1000"
                            />
                            <p className="text-2xl mt-4 text-black pl-6 font-bold">Molecular Testing & Oncology</p>
                            <div className="w-28 ml-6 border-b-4 border-teal-500 mt-4"></div>
                            <p className="text-lg mt-4 text-gray-700 px-6">Laboratory Services provides an expanding menu of molecular-based testing. Our services include:</p>
                            <ul className="text-gray-500 pl-14 list-disc mt-4 leading-9">
                                <li>Viral and Bacterial Pathogen Detection</li>
                                <li>Mutation Analysis</li>
                                <li>Translocation Analysis</li>
                                <li>Microsatellite Analysis</li>
                                <li>Epigenetics (Methylation)</li>
                            </ul>
                        </div>
                    </div>
                    <div className="w-1/3 bg-white-700 flex flex-col justify-center items-center shadow-xl">
                        <div className="flex flex-col items-left pb-8">
                            <Image
                                src="/images/t3.jpg"
                                width={500}
                                height={200}
                                alt="Picture of the author"
                                className="hover:rounded-full transition-all duration-1000"
                            />
                            <p className="text-2xl mt-4 text-black pl-6 font-bold">Molecular Testing & Oncology</p>
                            <div className="w-28 ml-6 border-b-4 border-teal-500 mt-4"></div>
                            <p className="text-lg mt-4 text-gray-700 px-6">Laboratory Services provides an expanding menu of molecular-based testing. Our services include:</p>
                            <ul className="text-gray-500 pl-14 list-disc mt-4 leading-9">
                                <li>Viral and Bacterial Pathogen Detection</li>
                                <li>Mutation Analysis</li>
                                <li>Translocation Analysis</li>
                                <li>Microsatellite Analysis</li>
                                <li>Epigenetics (Methylation)</li>
                            </ul>
                        </div>
                    </div>
            </div>

            <div className="flex gap-10 mt-8">
                    <div className="w-1/3 bg-white-700 flex flex-col justify-center items-center shadow-xl">
                        <div className="flex flex-col items-left pb-8">
                            <Image
                                src="/images/t4.jpg"
                                width={500}
                                height={200}
                                alt="Picture of the author"
                                className="hover:rounded-full transition-all duration-1000"
                            />
                            <p className="text-2xl mt-4 text-black pl-6 font-bold">Molecular Testing & Oncology</p>
                            <div className="w-28 ml-6 border-b-4 border-teal-500 mt-4"></div>
                            <p className="text-lg mt-4 text-gray-700 px-6">Laboratory Services provides an expanding menu of molecular-based testing. Our services include:</p>
                            <ul className="text-gray-500 pl-14 list-disc mt-4 leading-9">
                                <li>Viral and Bacterial Pathogen Detection</li>
                                <li>Mutation Analysis</li>
                                <li>Translocation Analysis</li>
                                <li>Microsatellite Analysis</li>
                                <li>Epigenetics (Methylation)</li>
                            </ul>
                        </div>
                    </div>
                    <div className="w-1/3 bg-white-700 flex flex-col justify-center items-center shadow-xl">
                        <div className="flex flex-col items-left pb-8">
                            <Image
                                src="/images/t5.jpg"
                                width={500}
                                height={200}
                                alt="Picture of the author"
                                className="hover:rounded-full transition-all duration-1000"
                            />
                            <p className="text-2xl mt-4 text-black pl-6 font-bold">Molecular Testing & Oncology</p>
                            <div className="w-28 ml-6 border-b-4 border-teal-500 mt-4"></div>
                            <p className="text-lg mt-4 text-gray-700 px-6">Laboratory Services provides an expanding menu of molecular-based testing. Our services include:</p>
                            <ul className="text-gray-500 pl-14 list-disc mt-4 leading-9">
                                <li>Viral and Bacterial Pathogen Detection</li>
                                <li>Mutation Analysis</li>
                                <li>Translocation Analysis</li>
                                <li>Microsatellite Analysis</li>
                                <li>Epigenetics (Methylation)</li>
                            </ul>
                        </div>
                    </div>
                    <div className="w-1/3 bg-white-700 flex flex-col justify-center items-center shadow-xl">
                        <div className="flex flex-col items-left pb-8">
                            <Image
                                src="/images/t7.jpg"
                                width={500}
                                height={200}
                                alt="Picture of the author"
                                className="hover:rounded-full transition-all duration-1000"
                            />
                            <p className="text-2xl mt-4 text-black pl-6 font-bold">Molecular Testing & Oncology</p>
                            <div className="w-28 ml-6 border-b-4 border-teal-500 mt-4"></div>
                            <p className="text-lg mt-6 text-gray-700 px-4">Laboratory Services provides an expanding menu of molecular-based testing. Our services include:</p>
                            <ul className="text-gray-500 pl-14 list-disc mt-4 leading-9">
                                <li>Viral and Bacterial Pathogen Detection</li>
                                <li>Mutation Analysis</li>
                                <li>Translocation Analysis</li>
                                <li>Microsatellite Analysis</li>
                                <li>Epigenetics (Methylation)</li>
                            </ul>
                        </div>
                    </div>
            </div>
        </div>
    </div>
    )
}