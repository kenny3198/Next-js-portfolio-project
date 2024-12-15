"use client"
import React, { useState } from 'react'
import Link from 'next/link'
import NavLink from './NavLink'
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid"
import MenuOverlay from './MenuOverlay'
const NavLinks = [
  {
    title: "About",
    path: "#about"
  },
  {
    title: "Project",
    path: "#project"
  },
  {
    title: "Contact",
    path: "#contact"
  }
]

const NavBar = () => {
  const [navBarOpen, setNavBarOpen] = useState(false)
    return (
    <nav className='fixed top-0 left-0 border-[#33353F] right-0 z-10 bg-[#121212] bg-opacity-100'>
        <div className='flex container lg:py-4 flex-wrap items-center justify-between mx-auto px-4 py-2'>
            <Link className='text-2xl md:text-5xl text-white font-semibold' href={'/'}>
            LOGO
            </Link>
            <div className='mobile-menu block md:hidden'>
               {!navBarOpen ? (
               <button onClick={() => setNavBarOpen(true)} className='text-slate-200 flex items-center px-3 py-2 border rounded
                border-slate-200 hover:text-white hover:border-white'>
                <Bars3Icon className='w-5 h-5'/>
                </button> )
                : (
                 <button className='text-slate-200 flex items-center px-3 py-2 border rounded
                 border-slate-200 text-slate-200 hover:text-white hover:border-white'>
                   <XMarkIcon onClick={() => setNavBarOpen(false)} className='w-5 h-5'/>
                   </button>
                )
                   }
            </div>
            <div className='menu hidden md:block md:w-auto' id='navbar'> 
              <ul className='flex p-4 md:flex-row md: space-x-8 mt-0'>
                {NavLinks.map((link, index) => (
                  <li key={index}>
                    <NavLink title={link.title} href={link.path}/>
                  </li>
                       ))}
        
              </ul>
            </div>
        </div>
        { navBarOpen ? <MenuOverlay NavLinks={NavLinks}/> : null }
    </nav>
  )
}

export default NavBar