import React from 'react'
import hi from '../assets/hi.png'
import ship from '../assets/cargo-ship.png'
import batch from '../assets/Merchant-Navy.png'
import './CSS/Dashboard.css'

const Officer = (props) => {
  return (
     <div className='flex flex-col'> 
    {/* Container about the details of the logged in officer */}
    <div className='officer_container w-[344px] h-[360px] rounded-[12px] my-3 flex flex-col justify-center' style={{boxShadow:"0px 0px 1px rgba(40,41,61,0.48)"}}>
        <div className="greeting_container flex justify-between p-4 px-5">
        {/* Icons */}
            <img src={hi} className="h-[30px] w-[30px]" alt="" />
            <img src={batch} className='h-[34.06] w-[71px]' alt="" />
        </div>
        {/* Important data passed as props for reusability */}
        <div className="about_officer px-5">
            <p className="post font-[500] text-[16px] w-[97px] h-[18px] leading-[18px]">
                {props.rank}
            </p>
            <p className="name w-[142px] h-[72px] text-[36px] font-[700] leading-[36px]">
                {props.name}
            </p>
            <p className="crewId text-[12px] font-[500] leading-[22px] tracking-[0.2px]">
                Crew ID {props.crewId}
            </p>
        </div>
        <hr className='my-5 w-[312px] m-auto'/>
       <div className="activity_container px-5">
        <p className='w-[132px] h-[24px] font-[500] text-[18px] leading-[24px]'>My Last Activity</p>
        {/* Activity can be passed as props, if sent it will be rendered or else by default the text on figma will be rendered */}
        <p className="last_activity w-[279px] h-[44px] font-[400] text-[16px] leading-[22px] tracking-[0.2px]">
           {(props.activity)?props.activity:(<>Submitted the Deck Log for <br/> <span className='font-[700]'>1200-1600 Watch</span> at 08:16 UTC</>)} 
        </p>
       </div>
    </div>


    {/* About Ship */}
    <div id='ship_container' className='officer_container w-[344px] h-[360px] rounded-[12px] my-3 flex flex-col justify-center content-center' style={{boxShadow:"0px 0px 1px rgba(40,41,61,0.48)"}}>
        <div className="greeting_container flex justify-between items-center p-4 px-5">
            <img src={ship} className="h-[45px] w-[45px]" alt="" />
            <p className="ship_code w-[182px] h-[28px] font-[700] text-[20px] leading-[28px]">
            {/* Ship code passed as props */}
                {props.ship_code}
            </p>
        </div>
        <div className="statement px-5 w-[286px] h-[38px]">
            <p className="post font-[500] text-[16px] leading-[18px] tracking-[0.44px]">
                Statement Of Facts
            </p>
            <p className="post font-[500] text-[12px] leading-[18px] tracking-[0.44px]">
                Current Status
            </p>
            <p className="crewId w-[196px] h-[24px] text-[18px] font-[700] leading-[20px] tracking-[0.25px]">
            {/* current status passed as props */}
                {props.current_status}
            </p>
        </div>
        <hr className='my-5 w-[312px] mx-auto'/>
       <div className="activity_container px-5 flex items-center">
       <div className="activity_title w-[181px] h-[24px] flex flex-col justify-start items-center">
       <p className='font-[500] text-[12px] leading-[24px]'>Next Port Call</p>
       <p className='font-[500] text-[#5A5B6A] text-[15px] leading-[20px]'>
       {/* Next port code passed as props */}
       {props.next_port}</p>
       </div>
       <div className="activity_content w-[181px] h-[24px] items-center flex flex-col justify-start">
       <p className='font-[500] text-[12px] leading-[24px]'>ETA</p>
       {/* ETA passed as props */}
       <p className='font-[500] text-[#5A5B6A] text-[15px] leading-[20px]'>{props.eta}</p>
       </div>
       </div>
    </div>
    </div>
  )
}

export default Officer