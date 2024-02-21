import React from 'react';
import { IoIosSearch } from "react-icons/io";
import './Phase1.css'

const Phase1 = () => {
  return (
    <div className='phase1'>
        <div className='doc'>
            <p style={{fontSize:32,color:'white'}}>Hello,</p>
            <p style={{fontSize:32,color:'white', marginTop:-20}}>Dr. Colter! <img src="Vector.png" alt="..."/></p>
        </div>
        <div className='search2'>
            <IoIosSearch className='icon-search'/>
        <input className='search-bar'/>
        </div>
        <div className='box3'>
            <div className='dot'></div>
            <img src="icon.png" alt="..." className='bell'/>
        </div>
    </div>
  )
}

export default Phase1