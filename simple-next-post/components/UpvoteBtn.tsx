'use client'
import React from 'react'

const UpvoteBtn = () => {
    const [upvote,setUpvote]=React.useState(0)
  return (
    <button onClick={()=>setUpvote(prev=>prev+1)} className='mt-8 text-lg px-4 py-2 rounded-full text-white bg-blue-600 hover:bg-blue-800 transition-all duration-100'>Uprove {upvote}</button>
  )
}

export default UpvoteBtn
