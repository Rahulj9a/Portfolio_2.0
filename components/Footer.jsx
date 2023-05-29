import Link from 'next/link'
import React from 'react'
 
 
import { FiGithub, FiHome, FiLinkedin, FiTwitter } from 'react-icons/fi'
const Footer = () => {
  return (
    <footer className='bg-black text-white w-full static flex items-center justify-around'>
          <div className='flex gap-2 justify-center items-center flex-1'>
            <Link href="./" >
              <FiHome className='hover:fill-white hover:text-black'/>
              </Link>
          </div>
           
          <div className='flex-1 flex items-center justify-center'>
                Portfolio
          </div>
          
          <div className='flex gap-2 justify-center items-center flex-1'>
            <Link href='https://twitter.com/rahulj9a' target='_blank'>
          <FiTwitter className='hover:fill-sky-500 hover:text-sky-500'/>
          </Link>
          <span>|</span>
          <Link href='https://github.com/rahulj9a' target='_blank'>
          <FiGithub className='  hover:fill-white'/>
          </Link>
          <span>|</span>
          <Link href="https://linkedin/in/rahulj9a" target="_blank">
          <FiLinkedin className='hover:fill-sky-700 hover:text-sky-700'/>
          </Link>
          </div>
    </footer>
  )
}

export default Footer