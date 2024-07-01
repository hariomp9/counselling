import Image from "next/image";
import React, { useEffect, useState } from "react";
import HeadTitle from "../HeadTitle";

const MinorityReservation = ({ options, InputHandlers, minorityReservtio }) => {
  const [selectValue, setSelectValue] = useState("Yes");
  const [minority, setMinority] = useState(
    minorityReservtio || "Hindi Linguistic Minority"
  );

  const handleRadioChang = (e) => {
    setSelectValue(e.target.value);
    InputHandlers(e.target.name);
  };

  const handleCategoryClick = (name, category) => {
    setMinority(category);
    InputHandlers(name, category);
  };

  useEffect(() => {
    setMinority(minorityReservtio || "GEN");
  }, [minorityReservtio]);

  return (
    <>
      <HeadTitle title="Minority Reservation" />
      <div className="mt-[19px] mb-[16px] flex items-center space-x-4">
        <label className="inline-flex items-center cursor-pointer">
          <input
            type="radio"
            className="form-radio h-5 w-5 text-theme_primary"
            value="Yes"
            name="select_option"
            checked={selectValue === "Yes"}
            onChange={handleRadioChang}
          />
          <span className="ml-2 text-sm text-gray-700">Yes</span>
        </label>
        <label className="inline-flex items-center cursor-pointer">
          <input
            type="radio"
            className="form-radio h-5 w-5 text-theme_primary"
            value="No"
            name="select_option"
            checked={selectValue === "No"}
            onChange={handleRadioChang}
          />
          <span className="ml-2 text-sm text-gray-700">No</span>
        </label>
      </div>
      {selectValue === "Yes" && (
        <div className="flex flex-wrap gap-[19px] 2xl:mt-[19px] 2xl:mb-[16px] xl:my-[14px]">
          {options.map((category, index) => (
            <div
              key={index}
              className={`flex gap-[3px] items-center rounded-[5px] 2xl:px-[16px] 2xl:h-[48px] 2xl:w-[210px] 2xl:text-[16px] xl:px-[10px] xl:h-[35px] xl:text-[12px] justify-center cursor-pointer
                ${
                  minority === category
                    ? "border-1px border-[#D9D9D9] bg-theme_primary"
                    : "border-1px border-[#D9D9D9] bg-[#FFFFFF]"
                }`}
              onClick={() => handleCategoryClick("Minority", category)}
            >
              <input
                type="checkbox"
                id={category}
                name="Minority"
                className="hidden"
              />
              {minority === category && (
                <Image
                  src="/svg/profile/tick_white.svg"
                  height={16}
                  width={16}
                  alt="select"
                />
              )}
              <label
                htmlFor={category}
                className={`2xl:text-[15px] font-[400] font-inter 2xl:leading-[18.15px] whitespace-nowrap cursor-pointer
                  ${
                    minority === category ? "text-[#ffffff]" : "text-[#747474]"
                  }`}
              >
                {category}
              </label>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default MinorityReservation;
