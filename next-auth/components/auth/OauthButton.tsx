import { githubSignInActions, googleSignInActions } from '@/actions/auth-action'
import React from 'react'
import { FaGithub, FaGoogle } from 'react-icons/fa6'

const OauthButton = () => {
  return (
    <>
        <div className='flex items-center justify-center mt-2 gap-2'>
            <form action={githubSignInActions} className='flex-1'>
                <button className='w-full flex justify-center items-center gap-2 py-2 rounded border-2 border-slate-400 hover:border-slate-800 transition-all duration-100'>
                    <FaGithub />
                    <span>Log in with Github</span>
                </button>
            </form>
            <form action={googleSignInActions} className='flex-1'>
                <button className='w-full flex justify-center items-center gap-2 py-2 rounded border-2 border-slate-400 hover:border-slate-800 transition-all duration-100'>
                    <FaGoogle />
                    <span>Log in with Google</span>
                </button>
            </form>
        </div>
        <div className="flex items-center mt-2 gap-1">
            <span className='flex-1 h-1 bg-slate-400 rounded-full' />
            <span className='font-bold text-lg text-slate-400'>Or</span>
            <span className='flex-1 h-1 bg-slate-400 rounded-full' />
        </div>
    </>
  )
}

export default OauthButton
