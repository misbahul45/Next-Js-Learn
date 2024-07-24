'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const navLinks=[
    {
        href:'/',
        title:'Home'
    },
    {
        href:'/posts',
        title:'Posts'
    },
    {
        href:'/create-post',
        title:'Create Post'
    }
]

const Navbar = () => {
    const pathName=usePathname()
  return (
    <header className='sticky top-0 left-0 h-16 flex justify-between px-8 items-center'>
      <h1 className='text-2xk font-semibold text-slate-800'>Misbahul&apos;s Blog</h1>
      <nav className="flex gap-2">
        {navLinks.map((link)=>(
            <Link key={link.title} href={link.href} className={` font-semibold hover:text-slate-900 hover:scale-105 ${pathName===link.href ? 'text-slate-900':'text-slate-400'}`}>{link.title}</Link>
        ))}
      </nav>
    </header>
  )
}

export default Navbar
