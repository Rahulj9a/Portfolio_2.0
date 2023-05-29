import LeftSideBar from '@/components/LeftSideBar'
import React from 'react'
import {AiOutlineHome} from "react-icons/ai"
import {SiAboutdotme} from 'react-icons/si'
import {FaLaptopCode} from 'react-icons/fa'
import {MdOutlineContactPhone} from 'react-icons/md'
import {BsBag} from "react-icons/bs"

const page = () => {
const links=[{title:"Home", logo:<AiOutlineHome size='30px'/>},{title:"About Me", href:"./about", logo:<SiAboutdotme size="30px"/>}, {title:"Projects", href:"/projects", logo:<FaLaptopCode size="30px"/>},{title:'Contents', logo:<BsBag size='30px'/> },{title:'Contact Me',logo:<MdOutlineContactPhone size="30px"/>}]
     
  return (
    <div className='flex relative'>
    <LeftSideBar links={links} className="absolute"/> 
    <div className="flex-1 m-auto md:left-20   absolute">
                  <div className="border-2 border-blue-500 ">About me</div>
                   
            </div></div>);
  
}

export default page