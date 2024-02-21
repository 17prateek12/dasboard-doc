import React from 'react';
import Avatar from '@mui/material/Avatar';
import './Profile.css';

const Profile = () => {
  return (
    <div className='body'>
        <div className='spinner'>
        <Avatar alt="Aliam Colter" src="profile.png"  className='profile2'/>
        </div>
        <p className='txt1'>Aliam Colter</p>
        <p className='txt2'>Physician</p>
    </div>
  )
}

export default Profile