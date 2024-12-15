import React from 'react'
import NavLink from './NavLink'

const MenuOverlay = ({NavLinks}) => {
  return (
   <ul className='flex flex-col py-4 items-center'>
         {NavLinks.map((link, index) => (
            <li key={index}>
                  <NavLink href={link.path} title={link.title}/>
            </li>
         ))}
   </ul>
  )
}

export default MenuOverlay