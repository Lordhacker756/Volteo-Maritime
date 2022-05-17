import React from 'react'
import refreshing from '../assets/refreshing.png'
import paperclip from '../assets/paperclip.png'
import eye from '../assets/eye.png'
import Messages from './Messages'

const Stream = (props) => {
  return (
    <div className='bg-[#EAF5FF] stream_container w-[429px] mt-[10px] rounded-[10px] my-3 mx-2 pt-5 overflowy-scroll' style={{boxShadow:"0px 0px 1px rgba(0,0,0,0.48)", maxHeight:"746px",overflowY:"scroll"}}>
    <div className="team_status flex justify-between items-center px-5 ">
        <p className="stream_name font-[700] text-[20px] leading-[36px] text-[#133774]">
            {props.streamName}
        </p>
        <img src={refreshing} className="w-[12.74px] h-[13px] cursor-pointer" alt="" />
    </div>
    <p className="last_updated w-[357px] h-[29px] font-[500] text-[14px] leading-[20px] tracking-[0.25px] text-[#5A5B6A] px-5">
        {props.lastUpdate}
    </p>


{/* Important Message */}
    <div className="important_notice w-[386px] h-[152px] bg-[#FFFAEC] rounded-[12px] px-5 m-3 flex flex-col justify-evenly">
        <div className="notice_heading  flex justify-between px-3">
            <p className="heading text-[#E95454] font-[500] text-[12px] leading-[20px] tracking-[0.25px]">
                Important Notice
            </p>
            <img src={paperclip} className="w-[20px] h-[20px]" alt="" />
        </div>
        <div className="important_msg w-[317px] h-[40px] px-3">
            {props.notice}
        </div>
        <div className="view_btn_container px-3 flex justify-between items-center">
            <div className="views flex items-center justify-center">
                <img src={eye} className="w-[15.71px] h-[11.43px]" alt="" />
                <p className="view_count w-[20px] h-[20px] mx-3 text-[14px] leading-[22px] tracking-[0.1px] text-[#19191D]">
                        {props.views}
                </p>
            </div>
            <button className='read_button h-[29px] w-[90px] rounded-full bg-[#E95454]'>
                <p className='font-[600] text-[10px] text-white leading-[16px] tracking-[1.5px]'>READ</p>
            </button>
        </div>
    </div>

{/* Normal messages  */}

{/* Send the message content as content props and timestamp as timestamp props */}
<Messages content="Second Officer Oliver submitted the Deck Log for 1400-1500 watch hour and completed the Handover Checklist" timeStamp="UTC 1105 | LT +06:30"/>
<Messages content="Third Engineer Edward submitted the Engine Log for 1200-1600 watch hour and completed the Handover Checklist" timeStamp="UTC 1055 | LT +06:30"/>
<Messages content="Second Officer Oliver submitted the Deck Log for 1400-1500 watch hour and completed the Handover Checklist" timeStamp="UTC 1105 | LT +06:30"/>
<Messages content="Second Officer Oliver submitted the Deck Log for 1400-1500 watch hour and completed the Handover Checklist" timeStamp="UTC 1105 | LT +06:30"/>
    </div>
  )
}

export default Stream