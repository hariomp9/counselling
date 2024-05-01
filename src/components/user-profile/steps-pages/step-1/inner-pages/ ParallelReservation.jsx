import Image from "next/image";
import React, { useState, useEffect } from "react";
import HeadTitle from "../HeadTitle";

const ParallelReservation = ({ reservation, onSelect }) => {
  const [selectedValue, setSelectedValue] = useState("yes");
  const [selectedCategory, setSelectedCategory] = useState(
    selectedValue === "yes" ? "DEF" : null
  );

  useEffect(() => {
    onSelect(selectedCategory);
  }, [selectedCategory, onSelect]);

  const handleRadioChange = (e) => {
    setSelectedValue(e.target.value);
  };

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  

  return (
    <>
      <HeadTitle title="Specify Parallel Reservation" applicable={true} />
      <div className="mt-[19px] mb-[16px] flex items-center space-x-4">
        <label className="inline-flex items-center cursor-pointer">
          <input
            type="radio"
            className="form-radio h-5 w-5 text-theme_primary"
            value="yes"
            checked={selectedValue === "yes"}
            onChange={handleRadioChange}
          />
          <span className="ml-2 text-sm text-gray-700">Yes</span>
        </label>
        <label className="inline-flex items-center cursor-pointer">
          <input
            type="radio"
            className="form-radio h-5 w-5 text-theme_primary"
            value="no"
            checked={selectedValue === "no"}
            onChange={handleRadioChange}
          />
          <span className="ml-2 text-sm text-gray-700">No</span>
        </label>
      </div>
      <div className="flex flex-wrap gap-[19px]">
        {reservation.map((category, index) => (
          <div
            key={index}
            className={`flex gap-[3px] items-center rounded-[5px] px-[16px] h-[48px] w-[103px] justify-center cursor-pointer
                ${
                  selectedCategory === category
                    ? "border-1px border-[#D9D9D9] bg-theme_primary"
                    : "border-1px border-[#D9D9D9] bg-[#FFFFFF] "
                }
            `}
            onClick={
              selectedValue === "yes"
                ? () => handleCategoryClick(category)
                : null
            }
          >
            <input
              type="checkbox"
              id={category}
              className="hidden"
              checked={selectedCategory === category && selectedValue === "yes"}
              onChange={() => handleCategoryClick(category)}
            />
            {selectedCategory === category && selectedValue === "yes" && (
              <Image
                src="/svg/profile/tick_white.svg"
                height={16}
                width={16}
                alt="select"
              />
            )}
            <label
              htmlFor={category}
              className={`text-[15px] font-[400] font-inter leading-[18.15px] whitespace-nowrap
                    ${
                      selectedCategory === category
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

export default ParallelReservation;
