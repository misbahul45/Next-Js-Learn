import prisma from '@/prisma/prisma';
import Link from 'next/link'
import React from 'react'

interface Data{
    posts:Post[]
}

const sleep = (ms: number = 1000) => new Promise((resolve) => setTimeout(resolve, ms));

const ListPost = async() => {
    await sleep()
    const posts:Post[]=await prisma.post.findMany({})
  return (
    <ul className='mt-8 w-full max-w-2xl text-center'>
        {posts?.map((post)=>(
            <ol key={post.id} className='hover:font-semibold transition-all duration-100'>
                <Link  href={`/posts/${post.id}`}>{post.title}</Link>
            </ol>
        ))}
    </ul>
  )
}

export default ListPost
