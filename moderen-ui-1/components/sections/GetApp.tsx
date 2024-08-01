import React from 'react'
import Button from '../Button'
import Image from 'next/image'

const GetApp = () => {
  return (
    <section className='w-full max-w-[90%] pt-4 pb-0 bg-zinc-800 rounded-2xl mx-auto shadow-xl shadow-slate-800/50'>
      <div className="w-full max-w-xl mx-auto">
        <h1 className='mt-4 text-2xl font-extrabold text-slate-100'>Get For Free Now!</h1>
        <p className='text-slate-300 text-lg'>Download the app now and enjoy it. It's free for everyone.</p>
        <p className='text-slate-300 text-sm mt-4'>Available on Android and iOS. Download now!</p>
        <div className='w-full mt-8 flex md:flex-row flex-col items-center justify-center gap-4'>
          <Button icon='/android.svg' type='button' title='Download App' variant='w-full flex-1 text-slate-100 flex justify-center items-center bg-green-600 hover:bg-green-700 transition-all duration-100' />
          <Button icon='/apple.svg' type='button' title='Download App variant' variant='w-full flex-1 text-green-500 bg-slate-100 flex justify-center items-center hover:bg-slate-200 transition-all duration-100' />
        </div>
        <div className='mt-4 flex justify-center items-center'>
          <Image src={'/phones.png'} alt="phone" width={400} height={600} className='h-auto w-auto rotate-[15deg]' />
        </div>
      </div>
    </section>
  )
}

export default GetApp
