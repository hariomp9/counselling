import React from "react";
import AllIndiaCategory from "./inner-pages/AllIndiaCategory";
import HeadTitle from "./HeadTitle";
import Neetdetails from "./inner-pages/Neetdetails";
import DomicileStateCategory from "./inner-pages/DomicileStateCategory";
import ParallelReservation from "./inner-pages/ ParallelReservation";
import MinorityReservation from "./inner-pages/MinorityReservation";
import Image from "next/image";

const Category = [
  'GEN',
  'OBC',
  'EWS',
  'SC',
  'ST',
  'Gen-PWD',
  'OBC-PWD',
  'EWS-PWD',
  'SC-PWD',
  'ST-PWD'
];
const domicileCategory = [
  'OPEN',
  'OBC',
  'SC',
  'ST',
  'EWS',
  'OPEN PWD',
  'OBC PWD',
  'SC PWD',
  'ST PWD',
  'EWS PWD',
  'SEBC',
  'VJ',
  'NT1',
  'NT2',
  'NT3',
];
const Reservation = [
  'HA',
  'MKB',
  'DEF',
  'PWD',
  'ORPHAN',
];
const minorityReservation = [
  'Jain Minority',
  'Muslim Minority',
  'Christian Minority',
  'Gujarati / Sindhi Minority',
  'Hindi Linguistic Minority',
];
const NeetInformation = ({next, prev}) => {
  return (
    <>
      <div className="bg-theme_background py-[40px] px-[55px]">
        <Neetdetails />
        <div className="h-[1px] bg-[#E3E3E3] w-[100%] mt-[48px] mb-[33px]" />
        <AllIndiaCategory categoryValues={Category} />
        <div className="h-[1px] bg-[#E3E3E3] w-[100%] mt-[48px] mb-[33px]" />
        <DomicileStateCategory domicileCategory={domicileCategory} />
        <div className="h-[1px] bg-[#E3E3E3] w-[100%] mt-[48px] mb-[33px]" />
        <ParallelReservation reservation={Reservation} />
        <div className="h-[1px] bg-[#E3E3E3] w-[100%] mt-[48px] mb-[33px]" />
        <MinorityReservation options={minorityReservation} />
        <div className="flex justify-start items-center gap-[32px]">
          <div 
          onClick={()=>prev()}
          className="flex  gap-[5px] justify-center items-center rounded-[4px] h-[48px] bg-[#4F9ED9] text-[#ffffff] px-[20px] whitespace-nowrap text-[15px] font-[700] leading-[20px] font-inter cursor-pointer"
          >

            <Image src="/svg/profile/left_arrow.svg" height={16} width={16} alt="back" />
            Back
          </div>
          <div 
          onClick={()=>next()}
          className="flex gap-[5px]  justify-center items-center rounded-[4px] h-[48px] bg-[#4F9ED9] text-[#ffffff] px-[20px] whitespace-nowrap text-[15px] font-[700] leading-[20px] font-inter cursor-pointer"
          >
            Next
            <Image src="/svg/profile/right_arrow.svg" height={16} width={16} alt="next" />
          </div>
        </div>
      </div>
    </>
  )
};

export default NeetInformation;
