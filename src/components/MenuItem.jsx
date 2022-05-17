import React from 'react'

const MenuItem = (props) => {
  return (
    //   This is the template of the menu item containing an image and a text which can be passed as props, later a link can also be passed as props
    <div className="main_container flex flex-col my-[10.5px]">
    {/* if the status is active, the background will be coloured or else white */}
        <div className={`menu_item_container flex flex-col justify-center items-center h-[82px] w-[98px] rounded-[8px] ${props.status?"bg-[#D8E6FF]":""}`}>
            {/* icon passed as props and rendered */}
            <img src={props.icon} alt="" />
            {/* title passed as props and rendered */}
            <p className='font-[red hat text]'>{props.title}</p>
        </div>
    </div>
  )
}

export default MenuItem