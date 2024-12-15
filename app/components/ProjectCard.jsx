import React from 'react'
import { CodeBracketIcon, EyeIcon } from '@heroicons/react/24/solid';
import Link from 'next/link';
const ProjectCard = ({imgUrl, title, description, gitUrl, previewUrl}) => {
  return (
    <div>
        <div className='h-52 md:72 rounded-t-xl relative group'  
         style={{background: `url(${imgUrl})`, backgroundSize:"cover"}}>
         <div className='overlay items-center justify-center absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0
       hidden group-hover:bg-opacity-80 group-hover:flex transition-all duration-500'>
           <Link href={gitUrl} className='h-14 w-14 border-2 rounded-full relative border-[#ADB7BE] hover:border-white'>
           <CodeBracketIcon className='h-10 w-10 text-[#ADB7BE] m-2 cursor-pointer hover:text-white'/>
           </Link> 
           <Link href={previewUrl} className='h-14 w-14 border-2 rounded-full relative border-[#ADB7BE] hover:border-white'>
           <EyeIcon className='h-10 w-10 text-[#ADB7BE] m-2 cursor-pointer hover:text-white'/>
           </Link>
           
        </div>
   
           </div>
     <div className='text-white rounded-b-xl bg-[#181818] py-6 px-4'>
           <h5 className='text-xl font-semibold mb-2'>{title}</h5>
           <p className='text-[ADB7BE]'>{description}</p>
        </div>
    </div>
   
  )
}

export default ProjectCard;