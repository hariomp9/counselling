import Image from "next/image";
import React, { useEffect, useState } from "react";
import HeadTitle from "../HeadTitle";

const MinorityReservation = ({
  options,
  SetMinReservation,
  minorityReservtion,
}) => {
  const [selectedValue, setSelectedValue] = useState("yes");
  const [minority, setminority] = useState(
    minorityReservtion || "Hindi Linguistic Minority"
  );

  const handleRadioChange = (e) => {
    setSelectedValue(e.target.value);
  };
  const handleCategoryClick = (category) => {
    setminority(category);
    SetMinReservation(category);
  };
  useEffect(() => {
    setminority(minorityReservtion || "GEN");
  }, [minorityReservtion]);
  return (
    <>
      <HeadTitle title="Minority Reservation" />
      <div className="flex flex-wrap gap-[19px] 2xl:mt-[19px] 2xl:mb-[16px] xl:my-[14px]">
        {options.map((category, index) => (
          <div
            key={index}
            className={`flex gap-[3px] items-center rounded-[5px] 2xl:px-[16px] 2xl:h-[48px] 2xl:w-[210px] 2xl:text-[16px] xl:px-[10px] xl:h-[35px]  xl:text-[12px] justify-center cursor-pointer
                    ${
                      minority === category
                        ? "border-1px border-[#D9D9D9] bg-theme_primary"
                        : "border-1px border-[#D9D9D9] bg-[#FFFFFF] "
                    }
                    `}
            onClick={() => handleCategoryClick(category)}
          >
            <input type="checkbox" id={category} className="hidden" />
            {minority === category && (
              <Image
                src="/svg/profile/tick_white.svg"
                height={16}
                width={16}
                alt="select"
              />
            )}{" "}
            <label
              htmlFor={category}
              className={`2xl:text-[15px] font-[400] font-inter 2xl:leading-[18.15px] whitespace-nowrap
                         ${
                           minority === category
                             ? "text-[#ffffff]"
                             : "text-[#747474]"
                         }
                    `}
            >
              {category}
            </label>
          </div>
        ))}
      </div>
    </>
  );
};

export default MinorityReservation;
