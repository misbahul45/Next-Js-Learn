import { createPost } from '@/action/post'
import {LogoutLink } from '@kinde-oss/kinde-auth-nextjs/server'
import React from 'react'

const page = async() => {
  return (
    <div className='flex-1 flex flex-col justify-center items-center'>
      <h1 className='text-4xl font-extrabold'>Create Post</h1>
      <form action={createPost} className='h-96 w-full mt-4 max-w-md flex flex-col gap-4'>
        <input type="text" id='title' name='title' placeholder='Title for the post' className='py-2 outline-none pl-2 ring-2 ring-slate-600 focus:ring-slate-800 rounded shadow-md shadow-slate-800' required />
        <textarea name="desc" id="desc" placeholder='Description....' className='flex-1 outline-none pl-2 ring-2 ring-slate-600 focus:ring-slate-800 rounded shadow-md shadow-slate-800' />
        <button className='py-2 px-4 bg-blue-600 text-white rounded hover:bg-blue-700 transition-all duration-100 shadow-md  shadow-slate-700'>Create</button>
      </form>
        <LogoutLink>
            <button className='mt-8 text-lg px-4 py-2 rounded-full text-white bg-red-600 hover:bg-red-800 transition-all duration-100'>Logout</button>
        </LogoutLink>
    </div>
  )
}

export default page
