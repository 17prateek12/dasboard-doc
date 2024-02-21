import React from 'react';
import './MainPage.css';
import Profile from '../component/rightside/Profile';
import Patient from '../component/rightside/Patient';
import ChatWindow from '../component/rightside/ChatWindow';
import Phase1 from '../component/leftside/Phase1';
import Phase2 from '../component/leftside/Phase2';
import Phase3 from '../component/leftside/Phase3';

const MainPage = () => {
  return (
    <div className='parent'>
        <div className='subleft'>
          <Phase1 />
          <Phase2 />
          <Phase3 />
        </div>
        <div className='subright'>
            <Profile />
            <Patient />
            <ChatWindow />
        </div>
    </div>
  )
}

export default MainPage