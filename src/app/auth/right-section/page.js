import React from "react";
import Image from "next/image";

const RightSection = () => {
    return (
        <div className="block lg:w-[50%] px-[10px] lg:px-0">
            <Image
                src="/counselling.svg"
                alt="img"
                className="w-full mx-auto"
                width={100}
                height={100}
            />
        </div>)
};

export default RightSection;
