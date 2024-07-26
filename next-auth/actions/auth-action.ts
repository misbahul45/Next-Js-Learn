'use server'
import db from "@/prisma/prisma"
import { sleep } from "@/lib/sleep"
import { TypeSignInFields, TypeSignUpFields } from "@/schema/zod.schema"
import { signIn, signOut } from "@/auth"
import { hashPassword } from "@/lib/bcryptPassword"

export const signUpActions=async(values:TypeSignUpFields)=>{
    await sleep()
    try { 
        const hashedPassword=await hashPassword(values.password)
        const newUser=await db.user.create({
            data:{
               name:values.username,
               email:values.email,
               password:hashedPassword
            }
        })
        return { user:newUser, error:false }
    } catch (error) {
        console.log(error)
        return { user:null, error:true }
    }
}

export const googleSignInActions=async()=>{
    await signIn('google')
}

export const githubSignInActions=async()=>{
    await signIn('github')
}

export const signInActions=async(values:TypeSignInFields)=>{
    try {
        await signIn('credentials',values)
        return { user:true, error:false }
    } catch (error) {
        return { user:null, error:false }
    }
}

export const signOutActions=async()=>{
    await signOut()
}