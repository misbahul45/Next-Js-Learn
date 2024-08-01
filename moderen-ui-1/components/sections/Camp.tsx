import { PEOPLE_URL } from '@/constants'
import { Roboto } from 'next/font/google'
import Image from 'next/image'
import React from 'react'
interface CampSiteProps{
  backround?:string
  title?:string,
  subtitle?:string
  peopleJoined?:string
}

const CampSite=({backround,title,subtitle,peopleJoined}:CampSiteProps)=>{
  return(
    <div className={`flex flex-col justify-between h-full md:min-w-[70%] min-w-full rounded-lg shadow-xl shadow-slate-950/50 ${backround} bg-cover bg-no-repeat px-5 py-4`}>
      <div className="flex gap-4">
        <div className="rounded-full size-10 bg-green-500 p-1.5">
          <div className="h-full w-full relative">
            <Image src={'/folded-map.svg'} alt='map' fill property='fill' className='w-auto h-auto' />
          </div>
        </div>
        <div>
          <h1 className='text-xl font-bold text-white/95'>{title}</h1>
          <p className='text-sm text-white/90 '>{subtitle}</p>
        </div>
      </div>
      <div className='flex items-center gap-4'>
        <div className='flex -space-x-4 overflow-hidden'>
          {PEOPLE_URL.map(url=>(
            <Image 
              key={url}
              src={url}
              alt='profile'
              width={30}
              height={30}
              className='rounded-full inline-block h-auto w-auto'
            />
          ))}
        </div>
        <p className='text-sm text-white/90 font-extrabold'>{peopleJoined}</p>
      </div>
    </div>
  )
}

const roboto=Roboto({ weight:['300','400','500','700'],subsets: ['latin'] })
const Camp = () => {
  return (
    <section className={`relative w-full lg:pt-4 pb-8 ${roboto.className} lg:max-w-[80%] sm:max-w-[90%] max-w-[95%] mx-auto`}>
      <div className=" 2xl:h-[30rem] h-96 flex gap-8 no-scrollbar overflow-auto">
        <CampSite backround='bg-img-1' title="Putuk Truno Camp" subtitle='Prigen, Pasuruan' peopleJoined='50+ Joined' />
        <CampSite backround='bg-img-2' title='Mountaion View Camp' subtitle='Somewhere in the wilderness' peopleJoined='100+ Joined' />
      </div>
      <div className='flex flex-col justify-between sm:absolute sm:bottom-5 sm:left-1/2 md:-translate-x-1/2 sm:-translate-x-12 sm:mx-0 sm:mt-0 mx-auto mt-8 sm:w-80 h-56 rounded-xl bg-green-600 text-slate-100 px-6 py-4 shadow-xl shadow-slate-800/45'>
        <h2 className='md:text-[28px] text-3xl'><b>Feeling Lost</b> And Not Knowing The way?</h2>
        <p className="text-xs">
            Starting from the anxiety of the climbers when visiting a new climbing location, the possibility of getting lost is very large. That's why we are here for those of you who want to start an adventure
        </p>
      </div>
    </section>
  )
}

export default Camp
