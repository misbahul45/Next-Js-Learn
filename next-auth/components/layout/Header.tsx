import { auth } from '@/auth'
import React from 'react'
import { Button } from '../ui/button'
import { signOutActions } from '@/actions/auth-action'

const Header = async() => {
    const session=await auth()
    console.log(session)
  return (
    <header className='w-full sticky top-0 left-0 flex justify-between items-center'>
      <h1>Misbahul&#39;s Code</h1>
      <h2>{session?.user?.name}</h2>
      <form action={signOutActions}>
        <Button variant={'destructive'} >Log out</Button>
      </form>
    </header>
  )
}

export default Header
