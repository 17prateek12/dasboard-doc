import * as React from 'react';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl'; import Avatar from '@mui/material/Avatar';
import Select from '@mui/material/Select';
import './Phase2.css';
import { FaArrowRight } from "react-icons/fa";
import { LuAlarmClock } from "react-icons/lu";


const Phase2 = () => {
    return (
        <div className='phases2'>
            <div className='boxes'>
                <div className='box4'>
                    <div className='patientxt'>
                        <p style={{ color: 'white', fontSize: 36 }}>42</p>
                        <p style={{ color: 'white', fontSize: 20 }}>Patient Visited</p>
                        <p style={{ color: 'white', fontSize: 14, marginTop: -10 }}>This Month</p>
                    </div>
                    <div className='rbox'>
                        <div className='cap'>
                            <div className="upbox"></div>
                            <div className="smallbox">
                                <img src="thunder.png" alt="..." style={{ height: 12, width: 24, marginTop: 6 }} />
                                <p style={{ fontSize: 16, marginTop: -1, color: 'white' }}>70%</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='box5'>
                    <div className='event'>
                        <div className='boxx'>
                            <FaArrowRight />
                        </div>
                        <p style={{ fontSize: 18, color: 'white' }}>Upcoming event</p>
                    </div>
                    <div className='aliza'>
                        <div className='spin'>
                            <Avatar alt="Alice" src="profile4.png" className='profilealice' />
                        </div>
                        <div className='shah'>
                            <p style={{ color: 'white', fontSize: 24, fontWeight: 'bold' }}>Aliza Shah</p>
                            <p style={{ color: 'white', fontSize: 14, marginTop: -15 }}><LuAlarmClock /> 08:00-09:00 am</p>
                            <button className='but'>Visited 7 days ago</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='bigbox'>
                <div className='stat'>
                    <div className="txt4">
                        <p style={{ color: 'white', fontSize: 28 }}>Statistics</p>
                        <p style={{ color: 'white', fontSize: 16, marginTop: -8 }}>November 2023</p>
                    </div>
                    <FormControl sx={{ width: 120, borderRadius: 20, marginLeft: 'auto', marginRight: 5 }} size="small">
                        <Select
                            labelId="demo-select-small-label"
                            id="demo-select-small"
                            label="Age"
                            style={{ color: 'white' }}
                        >
                            <MenuItem value="weekly">
                            </MenuItem>
                            <MenuItem value={10}>Weekly</MenuItem>
                            <MenuItem value={20}>daily</MenuItem>
                            <MenuItem value={30}>Monthly</MenuItem>
                        </Select>
                    </FormControl>
                </div>
                <div className='sinx'>
                    <img src='sin.png' alt="..." className='sins' />
                    <img src='wave.png' alt='...' className='wave' />
                    <div className="whitedot"></div>
                    <hr className='vertical' />
                </div>
            </div>
        </div>
    )
}

export default Phase2