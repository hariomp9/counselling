import React, { useState, useEffect } from "react";
import NeetInformation from "./steps-pages/step-1/NeetInformation";
import AddmissionPreference from "./steps-pages/addmission-preference";
import EducationInfo from "./steps-pages/education-info";
import PersonalDetails from "./steps-pages/personal-details";

const Stepper = ({ steps, setSteps, initialStep = 0 }) => {
  const [currentStep, setCurrentStep] = useState(initialStep);

  const handleNextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePreviousStep = () => {
    if (currentStep > 0) {
      const updatedSteps = [...steps];
      for (let i = currentStep; i < updatedSteps.length; i++) {
        updatedSteps[i].status = "pending";
      }
      setCurrentStep(currentStep - 1);
    }
  };

  const handleStep = (step) => {
    setCurrentStep(step);
  };

  useEffect(() => {
    const updatedSteps = [...steps];
    updatedSteps[currentStep].status = "in progress";

    for (let i = 0; i < currentStep; i++) {
      updatedSteps[i].status = "complete";
    }

    setSteps(updatedSteps);
  }, [currentStep, steps]);

  return (
    <div className="flex flex-col py-[25px] items-center justify-center">
      <div className="flex items-center justify-between relative mx-auto lg:max-w-[950px] max-w-[800px] w-[100%] ">
        {steps.map((step, index) => (
          <>
            <div className="flex flex-col justify-center items-center ">
              <span
                key={index}
                onClick={() => handleStep(index)}
                className={` h-[30px] w-[30px]  flex flex-col justify-center items-center 
                        ${
                          currentStep === index || step?.status === "complete"
                            ? " border-[1px] border-theme_primary rounded-[50%]"
                            : ""
                        }`}
              >
                <span
                  className={` cursor-pointer border-[1px] rounded-[50%] text-center
                                 ${
                                   currentStep === index ||
                                   step?.status === "complete"
                                     ? "h-[20px] w-[20px] bg-theme_primary text-white"
                                     : "bg-theme_secondary h-[30px] w-[30px] "
                                 }`}
                ></span>
              </span>
              <div className="absolute top-[20px] pl-[100px]">
                <div className="text-[#000000] text-[15px] font-[600] leading-[18.15px] pt-[25px] whitespace-nowrap">
                  {" "}
                  {step.title}
                </div>
                <div
                  className={` text-[15px] font-[400] leading-[18.15px] capitalize pt-[5px]
                            ${
                              currentStep === index ||
                              step?.status === "complete"
                                ? "text-theme_primary"
                                : "text-[#C5C5C5]"
                            }`}
                >
                  {" "}
                  {step.status}
                </div>
              </div>
            </div>
            {!(index === 3) && (
              <div
                className={`h-[2px] md:max-w-[200px] w-[100%] mx-auto 
                        ${
                          currentStep === index || step?.status === "complete"
                            ? " bg-theme_primary"
                            : "bg-theme_secondary"
                        }`}
              />
            )}
          </>
        ))}
      </div>
      <div className=" mt-[100px] w-full">
        {currentStep === 0 && (
          <NeetInformation
            currentStep={currentStep}
            next={handleNextStep}
            prev={handlePreviousStep}
          />
        )}
        {currentStep === 1 && (
          <AddmissionPreference
            currentStep={currentStep}
            next={handleNextStep}
            prev={handlePreviousStep}
          />
        )}
        {currentStep === 2 && (
          <EducationInfo
            currentStep={currentStep}
            next={handleNextStep}
            prev={handlePreviousStep}
          />
        )}
        {currentStep === 3 && (
          <PersonalDetails
            currentStep={currentStep}
            next={handleNextStep}
            prev={handlePreviousStep}
          />
        )}
      </div>
    </div>
  );
};

export default Stepper;
