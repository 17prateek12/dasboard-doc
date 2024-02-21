import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import './ChatWindow.css';
import { MdCall } from "react-icons/md";
import { IoMicOutline } from "react-icons/io5";
import { LuSend } from "react-icons/lu";


const ChatWindow = () => {
  return (
    <div className='box2'>
        <div className='sender'>
        <Avatar alt="..." src="profile3.png" className='profilepic'/>
        <div className='username'> 
            <p style={{color:'white', fontSize:20}}>Alexa Max</p>
            <p style={{color:'white', marginTop:-10, fontSize:14}}>Active 5 min Ago</p>
        </div> 
        <Avatar className='call'>
            <MdCall />
        </Avatar>
        </div>
        <hr className='line'/>
        <div className='doctormes'>
        <Avatar alt="..." src="profile3.png" className='profilepic2'/>
        <div className='message1'>
            <p className='messsagebox' style={{backgroundColor:'white'}}>Hi, Doctor</p>
            <p className='messsagebox' style={{backgroundColor:'white'}}>I got knee jerk. What should i do right now?</p>
            <p style={{color:'white', fontSize:14, marginTop:-2, marginLeft:20}}>tue 02:32pm</p>
        </div>
        </div>
        <div className='pateintmess'>
        <div className='message2'>
            <p className='messsagebox' style={{backgroundColor:'lightblue'}}>Hi, Alexa</p>
            <p className='messsagebox' style={{backgroundColor:'lightblue'}}>This help maintain balance and posture. dont worry.</p>
            <p style={{color:'white', fontSize:14, marginTop:-2, marginRight:20}}>tue 02:32pm</p>
        </div>
        <Avatar alt="..." src="profile.png" className='profilepic3'/>
        </div>
        <div className='search'>
        <IoMicOutline className='mic' />
        <input type='text' placeholder='Type your text......' className='searchbar' />
        <div className='container'>
                <LuSend className='sent' />
        </div>
        </div>
    </div>
  )
}

export default ChatWindow