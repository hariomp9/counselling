import React from "react";

const HeadTitle = ({ title, applicable }) => {
  return (
    <div className="">
      <h4 className="2xl:text-[20px] font-[700] 2xl:leading-[40px] xl:text-[16px] text-[14px] font-inter" > {title}
        {applicable && <span className="font-[400] ">(If applicable)</span>}
      </h4>
      <div className="h-[3px] bg-theme_primary w-[55px]" />
    </div>
  );
};

export default HeadTitle;
