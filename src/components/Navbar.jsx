import { House, Search } from 'lucide-react'
import { HiOutlineUserGroup } from "react-icons/hi";
import { LuHouse, LuMessageCircleMore } from "react-icons/lu";
import { RiNotification3Line } from "react-icons/ri";   
import Image from 'next/image'
import React from 'react'

export default function Navbar() {
  return (
    <div>
      <div className="">
        <div className="">
            <Image src="https://i.ibb.co.com/Zps2TDDy/logo.jpg" alt="Logo"
             width={32} 
             height={32} />
        </div>
        <div className="flex items-center gap-2 border-2 px-0.5 py-0.5 w-70 rounded-full text-xs ">
            <Search/>
            <input type="text" placeholder="Input Search Text..." />
        </div>
        <div className="">
            <ul>
                <li><LuHouse /></li>
                <li><HiOutlineUserGroup /></li>
                <li><RiNotification3Line /></li>
                <li><LuMessageCircleMore /></li>
                <li><div className="">
                    <Image src="https://i.ibb.co.com/Zps2TDDy/logo.jpg" alt="Profile Picture"
                     width={32} 
                     height={32}                     
                     className="rounded-full" />
                     
                    </div></li>
            </ul>
        </div>
      </div>
    </div>
  )
}
