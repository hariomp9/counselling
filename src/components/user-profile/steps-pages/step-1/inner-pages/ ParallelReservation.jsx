import Image from "next/image";
import React, { useState, useEffect } from "react";
import HeadTitle from "../HeadTitle";

const ParallelReservation = ({
  reservation,
  InputHandler,
  parallelReservtion,
}) => {
  const [selectedValue, setSelectedValue] = useState("yes");
  const [parallelReserv, setParallelReserv] = useState(
    parallelReservtion || "DEF"
  );
  const handleRadioChange = (e) => {
    setSelectedValue(e.target.value);
    InputHandler(e.target.name);
  };

  const handleCategoryClick = (name, category) => {
    setParallelReserv(category);
    InputHandler(name, category);
  };
  useEffect(() => {
    setParallelReserv(parallelReservtion || "DEF");
  }, [parallelReservtion]);
  return (
    <>
      <HeadTitle title="Specify Parallel Reservation" applicable={true} />
      <div className="mt-[19px] mb-[16px] flex items-center space-x-4">
        <label className="inline-flex items-center cursor-pointer">
          <input
            type="radio"
            className="form-radio h-5 w-5 text-theme_primary"
            value="yes"
            name="select_options"
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
            name="select_options"
            checked={selectedValue === "no"}
            onChange={handleRadioChange}
          />
          <span className="ml-2 text-sm text-gray-700">No</span>
        </label>
      </div>
      {selectedValue === "yes" && (
        <div className="flex flex-wrap gap-[19px]">
          {Array.isArray(reservation) &&
            reservation?.length > 0 &&
            reservation?.map((category, index) => (
              <div
                key={index}
                className={`flex gap-[3px] items-center rounded-[5px] 2xl:px-[16px] 2xl:h-[48px] 2xl:w-[210px] 2xl:text-[16px] xl:px-[10px] xl:h-[35px]  xl:text-[12px] justify-center cursor-pointer
                ${
                  parallelReserv === category
                    ? "border-1px border-[#D9D9D9] bg-theme_primary"
                    : "border-1px border-[#D9D9D9] bg-[#FFFFFF] "
                }
            `}
                onClick={() =>
                  handleCategoryClick("Reservation_Fields", category)
                }
              >
                {console.log("==>", category)}
                <input
                  type="checkbox"
                  id={category}
                  className="hidden"
                  name="Reservation_Fields"
                  checked={parallelReserv === category}
                  disabled
                  // onChange={() => handleCategoryClick(category)}
                />
                {parallelReserv === category && (
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
                      parallelReserv === category
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
      )}
    </>
  );
};

export default ParallelReservation;
