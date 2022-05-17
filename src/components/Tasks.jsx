import React from 'react'
import more from "../assets/more.png";
import './CSS/Dashboard.css'

const Tasks = (props) => {
  return (
    // Using props to determine if the task is important or not, if it is we will change the border to red along with text color
    <div className={`w-[296px] h-[65px] rounded-[10px] my-2 p-2 flex justify-between items-start bg-[#F9F9F9] ${(props.important)?"border-[1px] border-[#E95454]":""}`} style={{ boxShadow: "0px 0px 1px rgba(0,0,0,0.48)"}}>
        <div className="task_container flex items-center">
        <label className='main'>
            <input type="checkbox" style={{height:"20px",width:"20px"}}name="task" id="task" />
            <span class="geekmark"></span>
        </label>
            <div className="task ml-2">
                <p className={`task_heading font-[500] text-[14px] leading-[24px] tracking-[0.44px] ${(props.important)?"text-[#E95454]":""}`}>
                {props.content}
                </p>
                <p className="task_details font-[400] text-[10px] leading-[20px] tracking-[0.25px] text-[#5a5b6a]">
                {props.assigned} <span className={`${(props.due)?"":"hidden"}`}>| </span><span className={`${(props.urgent?"text-[#E95454]":"")}`}>{(props.due?`${props.due}`:"")}</span>
                </p>
            </div>
        </div>
        <img src={more} className="cursor-pointer" alt="" />
    </div>
  )
}

export default Tasks