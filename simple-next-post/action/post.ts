'use server'

import prisma from "@/prisma/prisma"
import { revalidatePath } from "next/cache"

export async function createPost(formData:FormData){
    const title = formData.get('title') as string
    const desc=formData.get('desc') as string
    await prisma.post.create({
        data:{
            title,
            desc
        }
    })
    revalidatePath('/posts')
}
