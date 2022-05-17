import React from 'react'
import more from "../assets/more.png";
import './CSS/Dashboard.css'

const Tasks = () => {
  return (
    <div className='w-[296px] h-[65px] rounded-[10px] my-2 p-2 flex justify-between items-start bg-[#F9F9F9]' style={{ boxShadow: "0px 0px 1px rgba(0,0,0,0.48)"}}>
        <div className="task_container flex items-center">
        <label className='main'>
            <input type="checkbox" style={{height:"20px",width:"20px"}}name="task" id="task" />
            <span class="geekmark"></span>
        </label>
            <div className="task ml-2">
                <p className="task_heading font-[500] text-[14px] leading-[24px] tracking-[0.44px]">
                Deck Log | 1200 - 1600 Watch
                </p>
                <p className="task_details font-[400] text-[10px] leading-[20px] tracking-[0.25px] text-[#5a5b6a]">
                Assigned by Wayship
                </p>
            </div>
        </div>
        <img src={more} className="cursor-pointer" alt="" />
    </div>
  )
}

export default Tasks