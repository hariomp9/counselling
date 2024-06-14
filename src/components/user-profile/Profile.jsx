"use client";
import React, { useState } from "react";
import Stepper from "./Stepper";
import NeetInformation from "./steps-pages/step-1/NeetInformation";
import UserProfile from "@/app/user2nd/user-profile/page";
import PersonalDetails from "./steps-pages/personal-details";
import EducationInfo from "./steps-pages/education-info";
import AddmissionPreference from "./steps-pages/addmission-preference";

const stepsArray = [
  {
    title: "NEET Information",
    status: "in progress",
    component: <NeetInformation />,
  },
  {
    title: "Admission Preferences",
    status: "pending",
    component: <AddmissionPreference/>,
  },
  {
    title: "Educational Information",
    status: "pending",
    component:<EducationInfo/>,
  },
  {
    title: "Personal Details",
    status: "pending",
    component: <PersonalDetails />,
  },
];

const Profile = ({ student_id }) => {
  const [steps, setSteps] = useState(stepsArray);
  const userids = student_id;

  return (
    <div className="w-[100%] xl:w-[80%] 2xl:max-w-[1345px] mx-auto">
      <div className="bg-theme_background  p-[20px] flex flex-col justify-center items-center gap-[8px]">
        <h2 className="font-[700] 2xl:text-[30px]  2xl:leading-[36.31px] xl:text-[20px] text-[16px]  font-[Inter]">
          Complete your profile
        </h2>
        <p className="font-[400] font-[Inter] 2xl:text-[14px] 2xl:leading-[24px] xl:text-[12px] text-[10px] ">
          Start completing your profile to get better result and analysis{" "}
        </p>
      </div>

      <Stepper steps={steps} setSteps={setSteps} userids={userids} />
    </div>
  );
};

export default Profile;
