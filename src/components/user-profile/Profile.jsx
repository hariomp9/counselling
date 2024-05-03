"use client";
import React, { useState } from "react";
import Stepper from "./Stepper";
import NeetInformation from "./steps-pages/step-1/NeetInformation";
import UserProfile from "@/app/user2nd/user-profile/page";

const stepsArray = [
  {
    title: "NEET Information",
    status: "in progress",
    component: <NeetInformation />,
  },
  {
    title: "Admission Preferences",
    status: "pending",
    component: <p>This is the content of step 2.</p>,
  },
  {
    title: "Educational Information",
    status: "pending",
    component: <p>This is the content of step 3 (final).</p>,
  },
  {
    title: "Personal Details",
    status: "pending",
    component: <p>This is the content of step 3 (final).</p>,
  },
];

const Profile = ({ student_id }) => {
  const [steps, setSteps] = useState(stepsArray);
  const userids = student_id;
 

  return (
    <div className="w-[100%] max-w-[1345px] mx-auto py-[40px]">
      <div className="bg-theme_background  p-[20px] flex flex-col justify-center items-center gap-[8px]">
        <h2 className="text-[30px] font-[700] leading-[36.31px] font-[Inter]">
          Complete your profile
        </h2>
        <p className="text-[14px] font-[400] leading-[24px] font-[Inter]">
          Start completing your profile to get better result and analysis{" "}
        </p>
      </div>

      <Stepper steps={steps} setSteps={setSteps} userids={userids}/>
    </div>
  );
};

export default Profile;
