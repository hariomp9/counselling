import Image from "next/image";
import React, { useState, useEffect } from "react";
import HeadTitle from "../HeadTitle";

const DomicileStateCategory = ({
  states,
  onSelectState,
  getStateCat,
  onSelectCategory,
  handleDomicileSt,
  domicileStateCategoryy,
}) => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const handleState = (e) => {
    onSelectState(e.target.value);
    handleDomicileSt("state_id", e.target.value);
  };
  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    onSelectCategory(category);
    handleDomicileSt("category_id", category);
  };
  const statess = domicileStateCategoryy?.state_id?.name;
  return (
    <>
      <HeadTitle title="Domicile State Category" />
      <h6 className="text-[15px] font-[300] leading-[18.15px] font-inter mt-[19px] mb-[14px]">
        Select the category for State counselling
      </h6>

      <div className="mb-[16px]">
        <select
          className="select select-bordered w-full max-w-xs"
          onChange={handleState}
          defaultValue={statess}
        >
          <option disabled value="" selected>
            {statess}
          </option>
          {states.map((state) => (
            <option key={state?._id} value={state?._id}>
              {state.name}
            </option>
          ))}
        </select>
      </div>

      <div className="flex flex-wrap gap-[19px] lg:w-[80%]">
        {/* {getStateCat.map((state) => ( */}
        <div className="flex flex-wrap gap-[19px] lg:w-[80%]">
          {Array.isArray(getStateCat) &&
            getStateCat?.length > 0 &&
            getStateCat[0].categories?.map((category) => (
              <div
                key={category?._id}
                className={`flex gap-[3px] items-center rounded-[5px] px-[16px] h-[48px] w-[103px] justify-center cursor-pointer
          ${
            selectedCategory === category?._id
              ? "border-1px border-[#D9D9D9] bg-theme_primary"
              : "border-1px border-[#D9D9D9] bg-[#FFFFFF] "
          }
        `}
                onClick={() => handleCategoryClick(category?._id)}
              >
                {console.log(category)}
                <input type="checkbox" id={category?._id} className="hidden" />
                {selectedCategory === category?._id && (
                  <Image
                    src="/svg/profile/tick_white.svg"
                    height={16}
                    width={16}
                    alt="select"
                  />
                )}
                <label
                  htmlFor={category.Select_category}
                  className={`text-[15px] font-[400] font-inter leading-[18.15px] whitespace-nowrap
            ${
              selectedCategory === category._id
                ? "text-[#ffffff]"
                : "text-[#747474]"
            }
          `}
                >
                  {category?.Select_category}
                </label>
              </div>
            ))}
        </div>
        {/* ))} */}
      </div>
    </>
  );
};

export default DomicileStateCategory;
