import React, { useContext, useState } from 'react'
import {assets} from '../../assets/assets'
import './Sidebar.css'
import { Context } from '../../context/context'
function Sidebar(){
    const[Extend,setExtend]=useState(false)
    const{onSent,prevPrompts,setRecentPrompt}=useContext(Context)
    return(
        <div className="Sidebar">
            
                <div className='menu'>
               <img onClick={()=>{setExtend(prev=>!prev)}} className='menuicon' src={assets.menu_icon} alt="menu" />
            </div>
            <div className="addchat">
                <img className='plus' src={assets.plus_icon} alt="add" />
              { Extend?<div className='newchat'>New Chat</div>:null}
            </div>
            {Extend?<div className="questions">
                <div className='recent'>Recent</div>
                <div className='recentque'>
                    {prevPrompts.map((item,index)=>{
                        return(
                            <div className='que'>
                            <img className=' message icons' src={assets.message_icon} alt="
                            message" />
                           <div className="quetext">{item.slice(0,18)}...</div>
                        </div>
                        )
                    })}
                    
                </div>
            </div>:null}
            <div className="options">
            <div className='help box'>
                <div className="box-in">
                <img className='help icons' src={assets.question_icon} alt="" />
                {Extend?<div className='sidetext'>Help</div>:null}
                </div>
            </div>
            <div className="activity box">
            <div className="box-in">
            <img className='activity  icons' src={assets.compass_icon} alt="" />
            {Extend?<div className='sidetext'>Activity</div>:null}

            </div>
            </div>
            <div className="settings box">
            <div className="box-in">
            <img className='settings  icons' src={assets.setting_icon} alt="" />
            {Extend?<div className='sidetext'>Settings</div>:null}
            </div>

            </div>
            </div>
        </div>
    )
}
export default Sidebar;