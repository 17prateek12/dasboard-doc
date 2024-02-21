import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import './Navbar.css'
import { HiOutlineHome } from "react-icons/hi";
import { IoDocumentTextOutline } from "react-icons/io5";
import { RiPieChart2Line } from "react-icons/ri";
import { FaRegCommentDots } from "react-icons/fa6";
import { IoSettingsOutline } from "react-icons/io5";
import { AiOutlineLogout } from "react-icons/ai";


const Navbar = () => {
  return (
    <div className='parent2'>
        <img src='Frame.png' alt="..."  className='logo'/>
        <div className='icon'>
            <HiOutlineHome className='iconn'/>
            <IoDocumentTextOutline className='iconn' />
            <RiPieChart2Line className='iconn' />
            <FaRegCommentDots className='iconn'/>
            <IoSettingsOutline className='iconn'/>
        </div>
        <div className='profile'>
        <Avatar alt="Aliam Colter" src="profile.png" className='image'/>
        <AiOutlineLogout  className='iconn'/>
        </div>
    </div>
  )
}

export default Navbar