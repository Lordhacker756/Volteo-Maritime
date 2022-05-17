import React from "react";
import weather from "../assets/weather.png";
import plus from "../assets/plus.png";
import Tasks from "./Tasks";

const MyDay = (props) => {
  return (
    <div
      className="w-[344px] rounded-[10px] mx-0 my-3 p-5 flex flex-col justify-between"
      style={{ boxShadow: "0px 0px 1px rgba(0,0,0,0.48)", maxHeight: "746px" }}
    >
      <div className="top_container">
        <div className="greeting_container flex justify-between items-center mb-5">
          <div className="heading_date">
            <div className="title font-[700] text-[20px] leading-[36px] text-[#19191D]">
              My Day
            </div>
            <div className="title font-[500] text-[14px] leading-[20px] text-[#5A5B6A]">
              {props.date}
            </div>
          </div>
          <div className="weather">
            <img src={weather} className="w-[33px] h-[33px]" alt="" />
          </div>
        </div>
        <Tasks content="Deck Log | 1200 - 1600 Watch" assigned="Assigned by Wayship"/>
        <Tasks content="COVID19 Health Guidelines" assigned="Assigned by Technical" due="Due in 2 days" important={true}/>
        <Tasks content="Steering Check" assigned="Assigned by Chief Officer" due="Due in 2 hours" urgent={true}/>
        <Tasks content="ECDIS Check" assigned="Assigned by Chief Officer" due="Due in 6 hours"/>
        <Tasks content="Review Noon Report" assigned="Assigned by Self" due="Due in 8 hours"/>
      </div>
      <div className="input_box w-[301px] h-[44px] border-[0.5px] border-[#787885] rounded-[8px] flex items-center px-5">
        <img className="w-[14px] h-[14px] mr-5" src={plus} alt="" />
        <input
        className="border-none"
          type="text"
          name="todo"
          id="todo"
          placeholder="Add a to-do reminder"
        />
      </div>
    </div>
  );
};

export default MyDay;
