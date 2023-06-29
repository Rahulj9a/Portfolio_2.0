import Link from 'next/link'
import React from 'react'
 
 
import { FiGithub, FiHome, FiLinkedin, FiTwitter } from 'react-icons/fi'
const Header = () => {
  return (
    <header className='bg-custom2 text-custom4 border-b-2 border-custom4 w-full   h-10 bg-opacity-90 z-20   fixed flex items-center justify-around'>
          <div className='flex gap-2 justify-center items-center flex-1'>
            <Link href="./" >
              <FiHome className='  text-xl hover:text-custom1 hover:mb-1'/>
              </Link>
          </div>
           
          <Link href="./about" className='flex-1 cursor-pointer flex items-center justify-center'>
                Portfolio
          </Link>
          
          <div className='flex gap-2 justify-center items-center flex-1'>
            <Link href='https://twitter.com/rahulj9a' target='_blank'>
          <FiTwitter className='  hover:text-sky-500 text-xl hover:mb-1'/>
          </Link>
          <span>|</span>
          <Link href='https://github.com/rahulj9a' target='_blank'>
          <FiGithub className='  hover:text-black text-xl hover:mb-1'/>
          </Link>
          <span>|</span>
          <Link href="https://linkedin/in/rahulj9a" target="_blank">
          <FiLinkedin className='hover:text-sky-700 text-xl  hover:mb-1'/>
          </Link>
          </div>
    </header>
  )
}

export default  Header