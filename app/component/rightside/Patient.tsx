import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';
import './Patient.css';

const Patient = () => {
  return (
    <div className='box'>
        <p style={{fontSize:24, color:'white'}}>Active Patients</p>
        <AvatarGroup total={11}>
      <Avatar alt="..." src="profile4.png" style={{backgroundColor:'#EFABAB'}}/>
      <Avatar alt="..." src="profile3.png" style={{backgroundColor:'#E8F8BB'}}/>
      <Avatar alt="..." src="profile2.png" style={{backgroundColor:'#BBF4F8'}}/>
    </AvatarGroup>
    </div>
  )
}

export default Patient