import React, { useState } from 'react'
import more from "../assets/more.png";
import './CSS/Dashboard.css'

const Tasks = (props) => {
  const [status, setStatus] = useState(false)
  return (
    // Using props to determine if the task is important or not, if it is we will change the border to red along with text color
    <div className={`w-[296px] h-[65px] rounded-[10px] my-2 p-2 flex justify-between items-center bg-[#F9F9F9] ${(props.important)?"border-[1px] border-[#E95454]":""}`} style={{ boxShadow: "0px 0px 1px rgba(0,0,0,0.48)"}}>
        <div className="task_container flex items-center">
            <input type="checkbox" className={``} style={{height:"22px",width:"22px"}}name="task" id="task" onClick={()=>{
              if(!status){
                setStatus(true)
              }
              else
              {
                setStatus(false)
              }
            }}/>
            <div className="task ml-4">
                <p className={`task_heading font-[500] text-[14px] leading-[12px] tracking-[0.44px] ${(props.important)?"text-[#E95454]":""} ${(!status)?"":"line-through"}`}>
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