import { FEATURESData } from '@/constants'
import Image from 'next/image'
import React from 'react'


interface FeatureItemsProps{
  title: string;
  icon: string;
  variant: string;
  description: string;
}

const FeatureItems=({ title, icon, variant, description }:FeatureItemsProps)=>{
  return (
    <li className=' rounded-xl shadow-xl shadow-slate-800/50 p-4'>
      <div className='size-12 bg-green-500 p-2.5 rounded-full'>
        <Image src={icon} alt={title} className='w-full h-full' width={20} height={20} />
      </div>
      <h1 className='mt-2 text-xl font-semibold'>{title}</h1>
      <p className='text-[15px]'>{description}</p>
    </li>
  )
}

const Features = () => {
  return (
    <section className='flex justify-center items-center w-full gap-8 py-8 px-4 lg:max-w-[80%] sm:max-w-[90%] max-w-[95%] mx-auto'>
      <div className="rotate-[15deg] ml-8 md:block hidden">
        <Image src={'/phone.png'} width={280} height={500} alt='phone' />
      </div>
      <div className="flex-1 max-w-4xl">
        <Image src={'/camp.svg'} alt="hero" width={50} height={50} className='block mx-auto' />
        <h1 className='lg:text-3xl font-extrabold text-center'>Our Features</h1>
        <ul className="grid grid-cols-custom gap-4 mt-4">
          {FEATURESData.map((feature)=>(
            <FeatureItems title={feature.title} icon={feature.icon} variant={feature.variant} description={feature.description} key={feature.title} />
          ))}
        </ul>
      </div>
    </section>
  )
}

export default Features
