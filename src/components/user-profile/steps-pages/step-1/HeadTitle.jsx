import React from "react";

const HeadTitle = ({ title, applicable }) => {
  return (
    <div className="">
      <h4 className="text-[20px] font-[700] leading-[40px] font-inter" > {title}
        {applicable && <span className="font-[400] ">(If applicable)</span>}
      </h4>
      <div className="h-[3px] bg-theme_primary w-[55px]" />
    </div>
  );
};

export default HeadTitle;
