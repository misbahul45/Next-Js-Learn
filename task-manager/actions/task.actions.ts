'use server'

import db from "@/util/prisma"
import { revalidatePath } from "next/cache"

export const createTaskActions=async(task:CreateTask)=>{
   try {
    await db.todo.create({
        data:{
            ...task
        }
    })
    revalidatePath('/app')
    if(task.completed){
      revalidatePath('/app/completed')
    }else if(task.important){
      revalidatePath('/app/important')
    }
    return true
   } catch (error) {
    console.log(error)
    return null
   }
}


export const getAllTasksActions = async ({ completed, important, date }: { completed?: boolean, important?: boolean, date?: string }) => {
    try {
        let dateFilter: string | undefined;
        if (date) {
            const parsedDate = new Date(date);
            if (!isNaN(parsedDate.getTime())) {
                dateFilter = parsedDate.toISOString();
            } else {
                throw new RangeError('Invalid date format');
            }
        }
        
        const tasks = await db.todo.findMany({
            where: {
                completed,
                important,
                date: dateFilter
            }
        });
        return tasks;
    } catch (error) {
        console.log(error);
        return error;
    }
};
