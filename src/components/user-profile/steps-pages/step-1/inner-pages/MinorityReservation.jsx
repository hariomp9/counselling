import Image from "next/image";
import React, { useState } from "react";
import HeadTitle from "../HeadTitle";

const MinorityReservation = ({ options }) => {
    const [selectedValue, setSelectedValue] = useState("yes");
    const [selectedCategory, setSelectedCategory] = useState('DEF');

    const handleRadioChange = (e) => {
        setSelectedValue(e.target.value);
    };
    const handleCategoryClick = (category) => {
        setSelectedCategory(category);
    };

    return (
        <>
            <HeadTitle title="Minority Reservation" />
            <div className="flex flex-wrap gap-[19px] mt-[19px] mb-[16px] ">
                {options.map((category, index) => (
                    <div key={index} className={`flex gap-[3px] items-center rounded-[5px] px-[16px] h-[48px] w-[210px] justify-center cursor-pointer
                    ${selectedCategory === category ? 'border-1px border-[#D9D9D9] bg-theme_primary' : 'border-1px border-[#D9D9D9] bg-[#FFFFFF] '}
                    `}
                        onClick={() => handleCategoryClick(category)}>
                        <input
                            type="checkbox"
                            id={category}
                            className="hidden"
                        />
                        {selectedCategory === category && <Image src="/svg/profile/tick_white.svg" height={16} width={16} alt="select" />} {/* Tick icon */}
                        <label htmlFor={category} className={`text-[15px] font-[400] font-inter leading-[18.15px] whitespace-nowrap
                         ${selectedCategory === category ? 'text-[#ffffff]' : 'text-[#747474]'}
                    `}>
                            {category}
                        </label>
                    </div>
                ))}
            </div>
        </>
    )
};

export default MinorityReservation;
