import React from "react";
import poster from "../../../../public/counselling.webp";
import Image from "next/image";

const RightSection = () => {
    return (
        <div className="block lg:w-[50%] px-[10px] lg:px-0">
            <Image
                src={poster}
                alt="img"
                className="w-full mx-auto"
            />
        </div>)
};

export default RightSection;
