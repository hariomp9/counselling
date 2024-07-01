import Image from "next/image";
import React, { useEffect, useState } from "react";
import HeadTitle from "../HeadTitle";

const AllIndiaCategory = ({
  categoryValues,
  onSelectCategory,
  allIndiaCategory,
}) => {
  const [selectedCategory, setSelectedCategory] = useState(allIndiaCategory);
  const handleCategoryClick = (category) => {
    setSelectedCategory(category?.Select_category);
    onSelectCategory(category?._id);
  };
  useEffect(() => {
    setSelectedCategory(allIndiaCategory || "GEN");
  }, [allIndiaCategory]);

  return (
    <>
      <HeadTitle title="All India Category" />
      <h6 className="text-[15px] font-[300] leading-[18.15px] font-inter mt-[19px] mb-[14px]">
        Select the category for all india counselling
      </h6>
      <div className="flex flex-wrap gap-[19px]">
        {categoryValues.map((category, index) => (
          <div
            key={index}
            className={`flex gap-[3px] items-center rounded-[5px] 2xl:px-[16px] 2xl:h-[48px] 2xl:w-[210px] 2xl:text-[16px] xl:px-[10px] xl:h-[35px]  xl:text-[12px] justify-center cursor-pointer
                    ${
                      selectedCategory === category.Select_category
                        ? "border-1px border-[#D9D9D9] bg-theme_primary"
                        : "border-1px border-[#D9D9D9] bg-[#FFFFFF] "
                    }
                    `}
            onClick={() => handleCategoryClick(category)}
          >
            <input type="checkbox" id={category._id} className="hidden" />
            {selectedCategory === category.Select_category && (
              <Image
                src="/svg/profile/tick_white.svg"
                height={16}
                width={16}
                alt="select"
              />
            )}{" "}
            {/* Tick icon */}
            <label
              htmlFor={category._id}
              className={`2xl:text-[15px] font-[400] font-inter 2xl:leading-[18.15px] whitespace-nowrap cursor-pointer
                         ${
                           selectedCategory === category.Select_category
                             ? "text-[#ffffff]"
                             : "text-[#747474]"
                         }
                    `}
            >
              {category.Select_category}
            </label>
          </div>
        ))}
      </div>
    </>
  );
};

export default AllIndiaCategory;
