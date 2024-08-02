import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <header className="sticky top-0 left-0 bg-slate-700 py-2 z-50">
      <nav className=' mx-auto'>
        <ul className='flex items-center justify-center gap-4'>
            <li>
                <Link className='text-lg text-slate-300 hover:text-slate-100' href={'/'} >Home</Link>
            </li>
            <li>
                <Link className='text-lg text-slate-300 hover:text-slate-100' href={'/server-actions'}>Server Actions</Link>
            </li>
            <li>
                <Link className='text-lg text-slate-300 hover:text-slate-100' href={'/useFormState'}>useFormState</Link>
            </li>
            <li>
                <Link className='text-lg text-slate-300 hover:text-slate-100' href={'/useFormWithClientValidation'}>useFormWithClientValidation</Link>
            </li>
            <li>
                <Link className='text-lg text-slate-300 hover:text-slate-100' href={'/react-hook-form'}>React-hook-form</Link>
            </li>
        </ul>
      </nav>
    </header>
  )
}

export default Navbar
