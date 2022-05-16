import React from "react";

const Messages = () => {
  return (
    <div className="message_container w-[386px] h-[152px] bg-white rounded-[12px] p-5 m-3 flex flex-col justify-between">
      <p className="message w-[335px] h-[61px] font-[400] text-[16px] leading-[20px] tracking-[0.2px]">
        Second Officer Oliver submitted the Deck Log for 1400-1500 watch hour
        and completed the Handover Checklist
      </p>
      <div className="time_stamp flex justify-end">
        <p className="text-[#5A5B6A] font-[700] text-[12px] leading-[20px] tracking-[0.25px]">UTC 1105 | LT +06:30</p>
      </div>
    </div>
  );
};

export default Messages;
