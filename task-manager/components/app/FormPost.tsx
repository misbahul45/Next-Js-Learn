'use client'
import React from 'react'
import { useContext } from 'react'
import { MyContext } from './LayoutProvider'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { FaPlus } from 'react-icons/fa'
import { createTaskActions } from '@/actions/task.actions'
import { revalidatePath } from 'next/cache'

const CreatePostSchema = z.object({
  title: z.string().trim().min(5, 'Title must be at least 5 characters'),
  desc: z.string().trim().optional(),
  completed: z.boolean(),
  important: z.boolean(),
  date: z.string().refine(val => !isNaN(Date.parse(val)), {
    message: "Invalid date format"
  })
})

interface Props {
  userId?: string
}

const FormPost = ({ userId }: Props) => {
  const { showForm, toggleForm } = useContext(MyContext)
  const { register, handleSubmit, formState: { errors }, reset } = useForm<z.infer<typeof CreatePostSchema>>({
    resolver: zodResolver(CreatePostSchema),
    defaultValues: {
      title: '',
      desc: '',
      completed: false,
      important: false,
      date: new Date().toISOString().split('T')[0],
    },
  })

  const onSubmitAddPost = async(values: z.infer<typeof CreatePostSchema>) => {
    const task={
      ...values,
      desc:values.desc ||"",
      userId:userId || "",
      date: new Date(values.date).toISOString() 
    }
    const res=await createTaskActions(task)
    if(res){
      alert('succesfully created')
      reset({
        title: '',
        desc: '',
        completed: false,
        important: false,
        date: new Date().toISOString().split('T')[0],
      })
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmitAddPost)} className={`flex flex-col gap-3 w-full max-w-md h-[90%] absolute left-1/2 -translate-x-1/2 bg-slate-100 shadow-xl shadow-slate-800/60 z-50 rounded-md ${showForm ? "scale-100 opacity-100 translate-y-0" : "scale-0 opacity-0 -translate-y-full"} transition-all duration-500 px-4 py-6`}>
      <h1 className='text-xl text-slate-700 font-extrabold'>Create Task</h1>
      <div className='flex flex-col gap-1 w-full'>
        <label htmlFor="title" className='font-semibold'>Title</label>
        <input type="text" id='title' {...register('title')} placeholder='e.g Create your task' className='w-full py-1.5 bg-zinc-100 rounded outline-none shadow-lg shadow-slate-900/50 pl-4 focus:ring-2 focus:ring-slate-500' />
        {errors.title && <span className="text-red-500">{errors.title.message}</span>}
      </div>
      <div className="flex-1 flex flex-col gap-1">
        <label htmlFor="desc" className='font-semibold'>Description</label>
        <textarea id="desc" {...register('desc')} className='w-full h-full py-1.5 bg-zinc-100 rounded outline-none shadow-lg shadow-slate-900/50 pl-4 focus:ring-2 focus:ring-slate-500' placeholder='e.g Be the best your self' />
      </div>
      <div className='flex flex-col gap-1'>
        <label htmlFor="date" className='font-semibold'>Date</label>
        <input type="date" id="date" {...register('date')} className='w-full py-1.5 bg-zinc-100 rounded outline-none shadow-lg shadow-slate-900/50 pl-4 ring-2 ring-slate-500 focus:ring-slate-700' />
        {errors.date && <span className="text-red-500">{errors.date.message}</span>}
      </div>
      <div className="flex justify-between">
        <label htmlFor="completed" className='font-semibold'>Toggle Completed!</label>
        <input type="checkbox" id='completed' {...register('completed')} className='size-5 accent-red-600 cursor-pointer' />
      </div>
      <div className="flex justify-between">
        <label htmlFor="important" className='font-semibold'>Toggle Important!</label>
        <input type="checkbox" id='important' {...register('important')} className='size-5 accent-red-600 cursor-pointer' />
      </div>
      <div className="flex gap-2 items-center justify-end">
        <button type='button' onClick={() => { console.log("Cancel clicked"); toggleForm() }} className='w-28 py-2 rounded-md bg-red-600 text-slate-100 shadow-lg shadow-slate-800/50 hover:bg-red-800 transition-all duration-100'>Cancel</button>
        <button type='submit' className='w-48 flex gap-2 justify-center items-center py-2 bg-cyan-600 text-slate-100 rounded-md shadow-lg shadow-slate-800/50 hover:bg-cyan-800 transition-all duration-100'>
          <span>Create Task</span>
          <FaPlus />
        </button>
      </div>
    </form>
  )
}

export default FormPost
