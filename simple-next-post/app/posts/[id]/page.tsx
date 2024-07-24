import UpvoteBtn from '@/components/UpvoteBtn'
import prisma from '@/prisma/prisma'
import React from 'react'

interface Props {
    params: {
        id: string
    }
}

const page = async({params: {id}}:Props) => {
    const post:Post | null=await prisma.post.findUnique({
      where:{
        id
      }
    })
  return (
    <div className='flex-1 flex flex-col items-center justify-center'>
      <h1 className='text-4xl font-extrabold mb-4'>{post?.title}</h1>
      <p className='w-full max-w-2xl text-center'>{post?.desc}</p>
      <UpvoteBtn />
    </div>
  )
}

export default page
