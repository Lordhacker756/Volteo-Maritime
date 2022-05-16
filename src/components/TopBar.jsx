import React from 'react'
import ship from '../assets/viking-ship.png'
import power from '../assets/power.png'

const TopBar = (props) => {
  return (
    <div className='flex justify-between w-full p-5'>
        <div className="vessel_info_container flex items-center">
            <img className='h-[29.01px] w-[31px] m-3' src={ship} alt="" />
            <div className="vessel_info ">
                <p className="vessel_name font-[500] text-[16px]">
                    {props.name}
                </p>
                <p className="crew_status text-[#19191D] font-[400] text-[13px]">
                    {props.crew} Crewmates .   
                    <span className="crew_active text-[#19191D] ml-1 font-[500] text-[13px]">
                        {props.active} Active
                    </span>
                </p>
            </div>
        </div>

        <d className="date_power_container flex items-center">
            <button className='timezone mr-4 border-[1px] border-[#B4B4BB] px-[16px] py-[6.09px] rounded-[10px] font-[400] text-[14px]'>{props.timezone}</button>
            <button className='power_button bg-[#D8E6FF] h-[48px] w-[48px] rounded-full p-3'><img src={power} alt="" /></button>
        </d>

    </div>
  )
}

export default TopBar