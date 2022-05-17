import React from 'react'
import refreshing from '../assets/refreshing.png'
import paperclip from '../assets/paperclip.png'
import eye from '../assets/eye.png'
import Messages from './Messages'

const Stream = () => {
  return (
    <div className='bg-[#EAF5FF] stream_container w-[429px] mt-[10px] rounded-[10px] my-3 mx-2 pt-5 overflowy-scroll' style={{boxShadow:"0px 0px 1px rgba(0,0,0,0.48)", maxHeight:"746px",overflowY:"scroll"}}>
    <div className="team_status flex justify-between items-center px-5 ">
        <p className="stream_name font-[700] text-[20px] leading-[36px] text-[#133774]">
            Ahoy Stream
        </p>
        <img src={refreshing} className="w-[12.74px] h-[13px] cursor-pointer" alt="" />
    </div>
    <p className="last_updated w-[357px] h-[29px] font-[500] text-[14px] leading-[20px] tracking-[0.25px] text-[#5A5B6A] px-5">
        Last updated - 4 mins ago
    </p>


{/* Important Message */}
    <div className="important_notice w-[386px] h-[152px] bg-[#FFFAEC] rounded-[12px] px-5 m-3 flex flex-col justify-evenly">
        <div className="notice_heading  flex justify-between px-3">
            <p className="heading text-[#E95454] font-[500] text-[12px] leading-[20px] tracking-[0.25px]">
                Important Notice
            </p>
            <img src={paperclip} className="w-[20px] h-[20px]" alt="" />
        </div>
        <div className="important_msg 2-[317px] h-[40px] px-3">
            Captain's Bridge Order dated Nov 27,<br/> 2020
        </div>
        <div className="view_btn_container px-3 flex justify-between items-center">
            <div className="views flex items-center justify-center">
                <img src={eye} className="w-[15.71px] h-[11.43px]" alt="" />
                <p className="view_count w-[20px] h-[20px] mx-3 text-[14px] leading-[22px] tracking-[0.1px] text-[#19191D]">
                        1
                </p>
            </div>
            <button className='read_button h-[29px] w-[90px] rounded-full bg-[#E95454]'>
                <p className='font-[600] text-[10px] text-white leading-[16px] tracking-[1.5px]'>READ</p>
            </button>
        </div>
    </div>

{/* Normal messages  */}
<Messages/>
<Messages/>
<Messages/>
<Messages/>
    </div>
  )
}

export default Stream