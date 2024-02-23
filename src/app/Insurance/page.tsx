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
                <h1 className="absolute bottom-20 left-0 text-white px-8 py-2 text-6xl">Insurance</h1>
                <p className="absolute bottom-10 left-0 text-white px-8 py-2">
                    <Link href="/">Home</Link> &gt; <Link href="/insurance">Insurance</Link>
                </p>
            </div>
           
    <div className="grid grid-cols-2 gap-4"></div>
            <div className='container max-w-[1280px] mx-auto mt-14 mb-24'>
                <div className="grid grid-rows-2 grid-flow-col gap-4">
                    <div className="box-border h-40 w-60 p-4 border-4 flex justify-center items-center">
                        <Image
                            src="/images/aetna.png"
                            width={400}
                            height={400}
                            alt="Picture of the author"
                        />
                    </div>
                    <div className="box-border h-40 w-60 p-4 border-4 flex justify-center items-center">
                        <Image
                            src="/images/aetna.png"
                            width={400}
                            height={400}
                            alt="Picture of the author"
                        />
                    </div>
                    <div className="box-border h-40 w-60 p-4 border-4 flex justify-center items-center">
                        <Image
                            src="/images/aetna.png"
                            width={400}
                            height={400}
                            alt="Picture of the author"
                        />
                    </div>
                    <div className="box-border h-40 w-60 p-4 border-4 flex justify-center items-center">
                        <Image
                            src="/images/aetna.png"
                            width={400}
                            height={400}
                            alt="Picture of the author"
                        />
                    </div>
                    <div className="box-border h-40 w-60 p-4 border-4 flex justify-center items-center">
                        <Image
                            src="/images/aetna.png"
                            width={400}
                            height={400}
                            alt="Picture of the author"
                        />
                    </div>
                    <div className="box-border h-40 w-60 p-4 border-4 flex justify-center items-center">
                        <Image
                            src="/images/aetna.png"
                            width={400}
                            height={400}
                            alt="Picture of the author"
                        />
                    </div>
                    <div className="box-border h-40 w-60 p-4 border-4 flex justify-center items-center">
                        <Image
                            src="/images/aetna.png"
                            width={400}
                            height={400}
                            alt="Picture of the author"
                        />
                    </div>
                    <div className="box-border h-40 w-60 p-4 border-4 flex justify-center items-center">
                        <Image
                            src="/images/aetna.png"
                            width={400}
                            height={400}
                            alt="Picture of the author"
                        />
                    </div>
                    <div className="box-border h-40 w-60 p-4 border-4 flex justify-center items-center">
                        <Image
                            src="/images/aetna.png"
                            width={400}
                            height={400}
                            alt="Picture of the author"
                        />
                    </div>
                    <div className="box-border h-40 w-60 p-4 border-4 flex justify-center items-center">
                        <Image
                            src="/images/aetna.png"
                            width={400}
                            height={400}
                            alt="Picture of the author"
                        />
                    </div>
                </div>
                <div className="grid grid-cols-3 gap-4">
                    <div className="box-border h-40 w-80 p-4 border-4 flex justify-center items-center">
                        <Image
                            src="/images/aetna.png"
                            width={300} 
                            height={300} 
                            alt="Picture of the author"
                        />
                    </div>
                    <div className="box-border h-40 w-80 p-4 border-4 flex justify-center items-center">
                        <Image
                            src="/images/aetna.png"
                            width={300}  
                            height={300}
                            alt="Picture of the author"
                        />
                    </div>
                    <div className="box-border h-40 w-80 p-4 border-4 flex justify-center items-center">
                        <Image
                            src="/images/aetna.png"
                            width={300}  
                            height={300} 
                            alt="Picture of the author"
                        />
                    </div>
                </div>

            </div>
        </div>
    )
}