import { Poppins } from 'next/font/google'
import Image from 'next/image'
import React from 'react'
import Button from '../Button'

const popins=Poppins({ weight:['300','400','500','700'],subsets: ['latin'] })

const Hero = () => {
  return (
    <section className={`md:pb-12 lg:h-[450px] pb-4 w-full lg:max-w-[80%] sm:max-w-[90%] max-w-[95%] mx-auto pt-8 ${popins.className}`}>
        <div className="relative flex md:flex-row flex-col justify-between items-center h-full">
            <Image src={'/hero-bg.svg'} alt="hero" fill={true} className='sm:rotate-0 rotate-[150deg] absolute left-0 bottom-0 -z-10 scale-150' />
            <div className='flex-1 flex flex-col items-center justify-center'>
                <div className="relative">
                    <Image src={'/camp.svg'} alt="hero" width={50} height={50} className='absolute -top-12 -left-5' />
                    <h1 className='lg:text-4xl font-bold text-slate-700 text-center'>Putuk Truno Camp Area</h1>
                </div>
                <p className="mt-2 lg:text-lg text-justify text-slate-600 max-w-lg">
                    We want to be on each of your journeys seeking the satisfaction of seeing the incorruptible beauty of nature. We can help you on an adventure around the world in just one app
                </p>
                <div className="mt-4 flex gap-4">
                    <div className="flex gap-2">
                        {[1,2,3,4,5].map((_,i)=>(
                            <Image src={'/star.svg'} alt="star" width={20} height={20} key={i} />
                        ))}
                    </div>
                    <p className='text-slate-700'><b>198k</b> Excellent reviews</p>
                </div>
                <div className="flex lg:flex-row flex-col mt-8 gap-4 justify-center">
                    <button className='bg-green-600 text-slate-100 px-6 py-2 rounded-full'>Download App</button>
                    <Button icon='/play.svg' type='button' title='How it works?' />
                </div>
            </div>
            <div className="flex-1 h-full relative">
                <div className="w-full h-full">
                    <div className='ml-8 2xl:w-64 lg:w-56 sm:w-48 sm:h-36 w-44 h-32 lg:h-40 flex flex-col justify-between p-5 bg-slate-900 text-slate-100 rounded-lg shadow-xl shadow-slate-800/50'>
                        <div>
                            <div className="flex justify-between">
                                <p className="text-xs text-gray-200">Location</p>
                                <span className='font-extrabold text-red-500'>X</span>
                            </div>
                            <p className="font-semibold text-sm text-slate-300">Aguas Calientes</p>
                        </div>
                        <div className='flex justify-between'>
                            <div className="flex flex-col">
                                <p className="text-xs text-gray-200">Distance</p>
                                <p className="font-semibold text-sm text-slate-300">173.28 mi</p>
                            </div>
                            <div className="flex flex-col">
                                <p className="text-xs text-gray-200">Elevation</p>
                                <p className="font-semibold text-sm text-slate-300">2.040 km</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      
    </section>
  )
}

export default Hero
