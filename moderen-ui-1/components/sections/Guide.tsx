import Image from 'next/image'
import React from 'react'

const Guide = () => {
  return (
    <section className="w-full pb-8 lg:max-w-[80%] sm:max-w-[90%] max-w-[95%] mx-auto">
     <Image src={'/camp.svg'} alt="hero" width={50} height={50} />
      <p className='lg:text-xl font-bold text-blue-600'>We Are Here For You</p>
      <h3 className='flex-1 lg:text-4xl text-3xl font-bold text-slate-700'>Guide You to Easy Path</h3>
      <p className='max-w-3xl mt-4 flex-1 lg:text-xl text-slate-600'>
        Only with the hilink application you will no longer get lost and get lost again, because we already support offline maps when there is no internet connection in the field. Invite your friends, relatives and friends to have fun in the wilderness through the valley and reach the top of the mountain
      </p>
      <div className="w-full h-96 relative mt-8 shadow-xl shadow-slate-800/50 bg-boat bg-cover bg-no-repeat rounded-xl p-8">
        <div className='h-32 w-48 bg-white shadow-xl shadow-white/10 rounded-lg flex gap-4 p-2 '>
          <div className='relative h-full flex flex-col w-2'>
            <span className='absolute top-0 -translate-x-1/2 left-1/2 size-3 rounded-full bg-slate-800/50'></span>
            <span className="h-full border border-slate-700 rounded-full"></span>
            <span className='absolute bottom-0 -translate-x-1/2 left-1/2 size-3 rounded-full bg-slate-800'></span>
          </div>
          <div className='flex flex-col justify-between'>
            <div className='flex'>
              <div>
                <p className='text-slate-400 text-xs'>Destination</p>
                <p className='text-sm'><b>Aguas Calientes</b></p>
              </div>
              <span className='text-blue-500 text-xs'>48 min</span>
            </div>
            <div className='flex'>
              <div>
                <p className='text-slate-400 text-xs'>Start Track</p>
                <p className='text-sm'><b>wonorejo Pasuruan</b></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Guide
