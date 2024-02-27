import React from "react";
import poster from "../../../public/dashboard.svg";
import Image from "next/image";

const Dashashboard = () => {
  return (
    <>
      <div className="h-screen flex items-center">
        <div className="mx-auto ">
          <div className="text-center ">
            <h3 className="text-[28px] font-bold">Welcome</h3>
            <h5 className="pt-2 text-[25px] font-semibold ">Admin Dashboard</h5>
          </div>
          <div className=" flex">
            <Image src={poster} alt="welcome dashboard" className="mx-auto" />
            <div></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashashboard;
