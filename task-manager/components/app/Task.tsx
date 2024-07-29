import Link from 'next/link'
import React from 'react'
import { MdDelete } from 'react-icons/md'
import { RxUpdate } from 'react-icons/rx'

interface Props{
  id:string,
  title:string,
  desc:string,
  completed:boolean,
  important:boolean,
  date:string
}

const Task = ({ title, desc, completed, important, date }:Props) => {
  return (
    <div className='flex flex-col justify-between h-56 w-72 border-2 border-slate-300 rounded-lg p-4 shadow-xl shadow-slate-800/50'>
      <div>
        <h1 className='text-xl font-semibold'>{title}</h1>
        <p className='text-[16px] mt-2'>{desc.length > 100 ?
          <>
            {desc?.substring(0, 100) + "..."}
            <button className='text-blue-500 hover:text-blue-700 transition-all duration-100'><small>read more</small></button>
          </> : desc ?? ""}</p>
      </div>
      <div>
        <small>{date}</small>
        <div className="flex justify-between items-center">
          <button>{completed?"Completed":"Incompleted"}</button>
          <div className="flex items-center gap-2">
            <button className='text-2xl'>
              <MdDelete className='w-full h-full text-slate-700' />
            </button>
            <button className='text-2xl'>
              <RxUpdate className='w-full h-full text-slate-700' />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Task
