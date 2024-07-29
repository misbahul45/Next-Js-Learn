import React from 'react'
import AddForm from './AddForm'
import Task from './Task';

export const sleep = (ms: number = 1500) => new Promise((resolve) => setTimeout(resolve, ms));

interface Props{
  tasks:Task[]
}

const DisplayAllPost =({tasks}:Props) => {

  return (
    <div className='w-full h-full flex gap-4 flex-wrap'>
      {tasks.map((task)=>(
        <Task key={task.id} id={task.id} title={task.title} desc={task.desc || ""} important={task.important} completed={task.completed} date={new Date(task.date).toISOString().split('T')[0]} />
      ))}
      <AddForm />
    </div>
  )
}

export default DisplayAllPost
