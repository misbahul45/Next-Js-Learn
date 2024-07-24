import ListPost from '@/components/ListPost'
import LoadingSkeleton from '@/components/LoadingSkeleton'
import React, { Suspense } from 'react'


const page = async() => {
  return (
    <div className='flex-1 flex flex-col justify-center items-center'>
      <h1 className='text-4xl font-extrabold'>All Posts</h1>
        <Suspense fallback={<LoadingSkeleton />}>
          <ListPost />
        </Suspense>
    </div>
  )
}

export default page
