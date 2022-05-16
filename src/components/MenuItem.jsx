import React from 'react'

const MenuItem = (props) => {
  return (
    //   If the status is active, it will have the blue background or else no background
    <div className="main_container flex flex-col">
        <div className={`menu_item_container flex flex-col justify-center items-center h-[82px] w-[98px] rounded-[8px] ${props.status?"bg-[#D8E6FF]":""}`}>
            <img src={props.icon} alt="" />
            <p className='font-[red hat text]'>{props.title}</p>
        </div>
    </div>
  )
}

export default MenuItem