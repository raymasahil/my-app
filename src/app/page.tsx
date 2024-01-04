
import Image from 'next/image'
import Header from '@/app/(Components)/Header';
import MySwiper from '@/app/(Components)/MySwiper';

export default function Home() {
  return (
          
          <div className="full mx-auto pl-4 pr-4 lg:pl-0 lg:pr-0">

            {/* Swiper Section */}
            <section className='justify-center fx- mx-auto pb-4 !z-[99999]'>
              <MySwiper />
            </section>

            {/* About Section */}
            <div className='flex container max-w-[1280px] mx-auto pt-8 pb-8'>
              <div className='w-1/2 flex justify-center'>
                <Image
                  src="/Images/img-3.jpg"
                  width={640}
                  height={400}
                  alt="Meet the Team"
                  className='rounded'
                />
              </div>
              
              <div className='w-1/2 flex justify-center items-center'>
                <div className='max-w-md'>
                  
                  <h1 className='text-4xl font-bold pb-4 '>We're committed to your health and well-being</h1> 
                    
                    <p className='font-medium pb-3'>We are dedicated to providing comprehensive healthcare services tailored specifically to address the unique needs of women. Our clinics are committed to promoting and safeguarding women’s health at every stage of life. Our team of experienced healthcare professionals specializes in a wide range of women’s health issues, from routine check-ups and preventive care to specialized treatments and interventions.</p> 

                    <p>We understand that women’s health encompasses not only physical well-being but also emotional and mental health. That’s why we offer a holistic approach to healthcare that emphasizes education, prevention, and personalized care.</p>
                    
                    <button className="border border-pink-500 text-pink-500 hover:bg-pink-500 hover:text-white ransition-all duration-300 mt-4 pt-2 pb-2 rounded-3xl pl-4 pr-4 shadow-lg flex items-center">
                        Read More <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 ml-1">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                        </svg>

                    </button>

                  
                  </div>

              </div>
            </div>

            {/* Services Section */}
            <div className='container max-w-[1280px] mx-auto pt-8 pb-8'>

              <div className='text-center'>
                  <h1 className='text-4xl font-bold pb-4 '>We're committed to your health and well-being</h1> 
              </div>

              <div className='grid grid-rows-1 grid-flow-col gap-4 items-center'>

                <div className='bg-purple-100 rounded flex flex-col items-center hover:shadow-md transition-all duration-300 pt-6 pb-6 '>
                  <Image className='pb-2' src="/SVG/pregnant-icon.svg" alt="Gynaecology" width={64} height={64} />
                  <h3 className='text-purple-900 font-semibold'>Gynaecology</h3>
                </div>

                <div className='bg-purple-100 rounded flex flex-col items-center hover:shadow-md transition-all duration-300 pt-6 pb-6 '>
                  <Image className='pb-2' src="/SVG/pregnant-icon.svg" alt="Gynaecology" width={64} height={64} />
                  <h3 className='text-purple-900 font-semibold'>Gynaecology</h3>
                </div>

                <div className='bg-purple-100 rounded flex flex-col items-center hover:shadow-md transition-all duration-300 pt-6 pb-6 '>
                  <Image className='pb-2' src="/SVG/pregnant-icon.svg" alt="Gynaecology" width={64} height={64} />
                  <h3 className='text-purple-900 font-semibold'>Gynaecology</h3>
                </div>

                <div className='bg-purple-100 rounded flex flex-col items-center hover:shadow-md transition-all duration-300 pt-6 pb-6 '>
                  <Image className='pb-2' src="/SVG/pregnant-icon.svg" alt="Gynaecology" width={64} height={64} />
                  <h3 className='text-purple-900 font-semibold'>Gynaecology</h3>
                </div>

                <div className='bg-purple-100 rounded flex flex-col items-center hover:shadow-md transition-all duration-300 pt-6 pb-6 '>
                  <Image className='pb-2' src="/SVG/pregnant-icon.svg" alt="Gynaecology" width={64} height={64} />
                  <h3 className='text-purple-900 font-semibold'>Gynaecology</h3>
                </div>

              </div>
            </div>

            
           

          </div>
          

  )
}
