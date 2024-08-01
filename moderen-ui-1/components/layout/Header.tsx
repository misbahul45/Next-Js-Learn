import Link from "next/link"

import Image from "next/image"
import { NAV_LINKS } from "@/constants"
import Button from "../Button"
const Header = () => {
  return (
    <header className="sticky top-0 left-0 flex z-50 h-16 py-2 bg-white/30 backdrop-blur-xl">
       <nav className="flex items-center justify-between w-full max-w-[80%] mx-auto">
            <Link href={'/'} className="text-2xl relative bg-clip-text text-transparent font-extrabold bg-gradient-to-r from-slate-800 to-cyan-500">
                Hi<span>link.</span>
            </Link>
            <ul className="hidden lg:flex items-center gap-6">
                {NAV_LINKS.map((link)=>(
                    <li key={link.key}>
                        <Link href={link.href} className="text-md text-gray-700 flexCenter hover:font-bold">{link.label}</Link>
                    </li>
                ))}
            </ul>
            <Button title="Login" variant="lg:flex hidden bg-slate-700 hover:bg-slate-900 text-slate-100" icon="/user.svg" type="button" />

            <Image src={'/menu.svg'} alt="menu" width={20} height={20} className="lg:hidden flex" />
       </nav>
    </header>
  )
}

export default Header
