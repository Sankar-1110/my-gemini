import React, { useContext, useState } from 'react'
import {assets} from '../../assets/assets'
import './mainbar.css'
import {Context} from '../../context/context'

function Mainbar(){
  const{onSent,recentPrompt,showResult,loading,resultData
    ,setInput,input
  }=useContext(Context)
  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      onSent();
    }
  };
  const commonqueries=(prompt)=>{
   setInput(prompt);
   
  }
    return(
         <div className="mainbar">
          <div className="navbar">
            <div className='gemitext'>Gemini</div>
            <div className='new'>
              <img className='icon' src={assets.gemini_icon} alt="geminiicon" /> 
              <div > Try Gemini advance</div>
            </div>
            </div>
            <div className="result">
              <div className='resultbox'>
                <div className='finalresult'>
                  {!showResult?<>
                  <div className='finalresult-in'>
                  <div className='hello-dev'>
                  <p><span>Hello,Dev</span></p>
                  <p>How can i help you today?</p>
                  </div>
                  <div className='preprompts'>
                      <div  className='prompts'
                      onClick={()=>{
                        commonqueries('Help me write an email to Solar Toothbrush Co. requesting a refund for a product that came damaged. ')
                      }}>
                      <p>Help me write an email to Solar Toothbrush Co. requesting a refund for a product that came damaged. r</p>
                      <img className='icon' src={assets.question_icon} alt="" />
                      </div>
                      <div 
                       onClick={()=>{
                        commonqueries('What is noteworthy about this image? Give me ideas for how I can use its elements creatively ')
                      }}
                       className='prompts'>
                      <p>What is noteworthy about this image? Give me ideas for how I can use its elements creatively</p>
                      <img className='icon' src={assets.bulb_icon} alt="" />
                      </div>
                      <div 
                       onClick={()=>{
                        commonqueries('I’m selling a new type of toothbrush and need a description that will help me sell it. Here are the details: it’s electric, solar powered, and has a 2-minute cleaning cycle')
                      }}
                       className='prompts'>
                      <p>I’m selling a new type of toothbrush and need a description that will help me sell it. Here are the details: it’s electric, solar powered, and has a 2-minute cleaning cycle</p>
                      <img className='icon' src={assets.code_icon} alt="" />
                      </div>
                      <div 
                       onClick={()=>{
                        commonqueries('Explain what the keto diet is in simple terms.')
                      }} 
                       className='prompts'>
                      <p>Explain what the keto diet is in simple terms. </p>
                      <img className='icon' src={assets.compass_icon} alt="" />
                      </div>
                  </div>
                  <div
                  className='manageactivity'>
                  <p>Humans review some saved chats to improve Google AI. To stop this for future chats, turn off Gemini Apps activity. If this setting is on, don't enter info that you wouldn't want reviewed or used. <a href="#">How it works</a></p>
                  <div>
                    <a href="#">Manage activity</a>
                    <a href="#">Dismiss</a>
                  </div>
                  </div>
                
                </div>
                 </>:<div className='result2 '>
                  <div className='result2-title'>
                   
                    <img  src={assets.user_icon} alt="" />
                   
                    <p>{recentPrompt}</p>
                  </div>
                  <div className="result-data">
                    <img className=' geminiicon' src={assets.gemini_icon} alt="" />
                    {loading?<div className="loader">
                      <hr />
                      <hr />
                      <hr />
                    </div>
                     :
                    <p dangerouslySetInnerHTML={{__html:resultData}} ></p>}

                  </div>
                </div> }
                
              </div>
              
            </div>
            </div>
            <div className='search'>
          <input onChange={(e)=>setInput(e.target.value)} value={input} type="text"placeholder='Enter a prompt here' className='inpt' onKeyDown={handleKeyPress} />
          <div className='hovereff'>
          <img className="icon"src={assets.gallery_icon} alt="Gallery" /></div>
          <div className='hovereff'>
          <img className='icon' src={assets.mic_icon} alt="mic" /></div>
          <div className="hovereff">
            <img onClick={()=>onSent()} className='icon' src={assets.send_icon} alt="" />
          </div>
          </div>
          
    
         </div>
        
    )
}
export default Mainbar;