import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';
import "./Phase3.css";
import { LuAlarmClock } from "react-icons/lu";
import { FaBell } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";


const Phase3 = () => {
  return (
    <div className='phases3'>
        <div className='colone'>
            <p style={{fontSize:24, color:'white'}}>Active Patients</p>
            <div className='mainbox'>
                <div className='div1'>
                    <p style={{color:'white'}}>08:00 am</p>
                    <div className='pro1' style={{backgroundColor:'#F5E5E5', marginLeft:30}}>
                        <Avatar src="mark.png" alt='...' style={{backgroundColor:'#E8BBF8', border:'1px solid black'}} />
                        <div>
                             <p style={{fontSize:18, fontWeight:'bold'}}>Mark Jaxon</p>
                             <p style={{marginTop:-12, fontSize:14}}><LuAlarmClock /> 08:00-09:00 Am</p>
                        </div>
                    </div>
                </div>
                <div className='div1'>
                    <p style={{color:'white'}}>09:00 am</p>
                    <div className='pro1' style={{backgroundColor:'#E5F5E6', marginLeft:120}}>
                        <Avatar src="maria.png" alt='...' style={{backgroundColor:'#BBF8F1', border:'1px solid black'}} />
                        <div>
                             <p style={{fontSize:18, fontWeight:'bold'}}>Maira Khan</p>
                             <p style={{marginTop:-12, fontSize:14}}><LuAlarmClock /> 09:00-10:00 Am</p>
                        </div>
                    </div>
                </div>
                <div className='div1'>
                    <p style={{color:'white'}}>10:00 am</p>
                    <div className='pro1' style={{backgroundColor:'#C9F3EC', marginLeft:10}}>
                        <Avatar src="brick.png" alt='...' style={{backgroundColor:'#CBF8BB', border:'1px solid black'}} />
                        <div>
                             <p style={{fontSize:18, fontWeight:'bold'}}>Brick Zon</p>
                             <p style={{marginTop:-12, fontSize:14}}><LuAlarmClock /> 10:00-11:00 Am</p>
                        </div>
                    </div>
                </div>
                <div className='div1'>
                    <p style={{color:'white'}}>11:00 am</p>
                    <button className='butt' style={{marginLeft:'auto', marginRight:'auto'}}>Break Time</button>
                </div>
                <div className='div1'>
                    <p style={{color:'white'}}>12:00 am</p>
                    <div className='pro1' style={{backgroundColor:'#C1E2F4',  marginLeft:100}}>
                        <Avatar src="alexa.png" alt='...' style={{backgroundColor:'#E8F8BB', border:'1px solid black'}} />
                        <div>
                             <p style={{fontSize:18, fontWeight:'bold'}}>Alexa Max</p>
                             <p style={{marginTop:-12, fontSize:14}}><LuAlarmClock /> 12:00-13:00 Am</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className='coltwo'>
            <p style={{fontSize:24, color:'white'}}>Upcoming Events</p>
            <div className='onebox'>
                <div className='ll'>
                <p style={{fontSize:24, color:'white'}}>Team Meeting</p>
                <p style={{color:'white'}}><LuAlarmClock /> 05:00-06:00</p>
                <AvatarGroup total={7}>
      <Avatar alt="..." src="mark.png" style={{backgroundColor:'#E8BBF8', border:'1px solid black'}}/>
      <Avatar alt="..." src="maira.png" style={{backgroundColor:'#BBF8F1', border:'1px solid black'}}/>
      <Avatar alt="..." src="brick.png" style={{backgroundColor:'#CBF8BB', border:'1px solid black'}}/>
    </AvatarGroup>
                </div>
                <div className='rr'>
                    <div className="boxxx">
                            <FaBell style={{color:"#409BEE", height:28, width:32}} />
                    </div>
                    <div className='arrow'>
                        <FaArrowRight style={{fontSize:24}} />
                    </div>
                </div>
            </div>
            <div className='twobox'>
                <div className='firstcol'>
                    <p style={{color:'white', fontSize:18}}>Consultation</p>
                    <p style={{fontSize:28, color:'white', marginTop:-10}}>82/100</p>
                    <button 
                    style={{
                        width:100, 
                        height:50, 
                        borderRadius:10, 
                        backgroundColor:'#2C3A58', 
                        border:'none', 
                        color:'white',
                        fontSize:18
                        }}>82% <img src='thunder.png' alt='...' style={{width:20, height:14}}/>
                        </button>
                </div>
                <div className='secondcol'>
                    <div style={{display:'flex', gap:3}}>
                    <div style={{width:6, height:6, borderRadius:'50%', backgroundColor:'black'}}></div>
                    <div style={{width:6, height:6, borderRadius:'50%', backgroundColor:'black'}}></div>
                    <div style={{width:6, height:6, borderRadius:'50%', backgroundColor:'black'}}></div>
                    </div>
                    <div className='bluespin'>
                        
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Phase3