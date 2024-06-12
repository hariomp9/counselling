import React, { useEffect, useState } from "react";
import Image from "next/image";
import arrow from "../../assets/arrow.svg";
import axios from "axios";
import { useSelector } from "react-redux";
import Link from "next/link";
import config from "@/config";

const PersonalDetails = ({ prev, onFormDataChange, userids }) => {
  const userid = useSelector((state) => state?.auth?.ad_details?._id);
  const [statusinfo, setData] = useState({ step_status: "personal_details" });
  const [address, setAddress] = useState({
    StudentAddress: [
      {
        HouseNo: "",
        Area: "",
        City: "",
        District: "",
        State: "",
        PinCode: "",
      },
    ],
  });

  const [getStudentsde, setStudentsde] = useState({
    studentDetails: [
      {
        Gender: "",
        Email: "",
        Mobile: "",
      },
    ],
  });

  const handleDetailsChange = (e, index) => {
    const { name, value } = e.target;
    setStudentsde((prevState) => ({
      studentDetails: [
        {
          ...prevState.studentDetails[index],
          [name]: value,
        },
      ],
    }));
  };

  const [parentDetail, setParentDetails] = useState({
    parentDetails: [
      {
        parentName: "",
        parentEmail: "",
        parentMobile: "",
        Parents_Profession: "",
        parentOccupation: "",
        FamilyAnualIncome: "",
      },
    ],
  });

  // const handleInputChanges = (index, e) => {
  //   const { name, value } = e.target;
  //   const updatedDetails = [...parentDetail.parentDetails];
  //   updatedDetails[index][name] = value;
  //   setParentDetails({ parentDetails: updatedDetails });
  // };

  // const handleInputChanges = (index, event) => {
  //   const { name, value } = event.target;
  //   const updatedParentDetails = [...parentDetails];
  //   updatedParentDetails[index] = {
  //     ...updatedParentDetails[index],
  //     [name]: value,
  //   };
  //   setParentDetails(updatedParentDetails);
  // };

  const handleCheckboxChange = (index, event) => {
    const { name, checked } = event.target;
    const updatedParentDetails = [...parentDetails];
    updatedParentDetails[index] = {
      ...updatedParentDetails[index],
      [name]: checked,
    };
    setParentDetails(updatedParentDetails);
  };

  const handleInputChange = (e, index) => {
    const { name, value } = e.target;
    setAddress((prevState) => ({
      StudentAddress: [
        {
          ...prevState.StudentAddress[index],
          [name]: value,
        },
      ],
    }));
  };
  const mergedStates = {
    address: address,
    getStudentsde: getStudentsde,
    parentDetail: parentDetail,
  };

  const sendData = async () => {
    const mergedData = {
      ...statusinfo,
      ...address,
      ...getStudentsde,
      ...parentDetail,
    };
    try {
      const response = await axios.put(
        `${config.baseURL}/api/auth/updatedUser_Steps/${userid || userids}`,
        mergedData
      );

      console.log("PUT request successful", response.data);
      next();
    } catch (error) {
      console.error("Error making PUT request:", error);
    }
  };
  // const handleNextClick = () => {
  //   sendData();
  // };

  const [studentAddress, setStudentAddress] = useState({});
  const [studentDetails, setStudentDetails] = useState({});
  const [parentDetailss, setParentDetail] = useState({});
  const [nriQouta, setNriQouta] = useState({});
  const { token } = useSelector((state) => state?.auth);
  useEffect(() => {
    defaultAUser();
  }, []);

  const defaultAUser = () => {
    const options = {
      method: "GET",
      url: `${config.baseURL}/api/auth/getUserById/${userids}`,
      headers: {
        Accept: "application/json",
        authorization: token,
      },
    };
    axios
      .request(options)
      .then((response) => {
        setStudentAddress(response?.data?.user?.StudentAddress[0]);
        setStudentDetails(response?.data?.user?.studentDetails[0]);
        setParentDetail(response?.data?.user?.parentDetails[0]);
      })
      .catch((error) => {
        console.log(error, "Error");
      });
  };
  return (
    <>
      {""}
      <section>
        <div className="main_div mx-auto">
          <form>
            <div>
              <h1 className="inter font-[700] 2xl:text-[20px] xl:text-[16px] lg:text-[12px] 2xl:leading-[20px] xl:leading-[20px]">
                Student’s Address
              </h1>

              <div className="">
                {address.StudentAddress.map((addr, index) => (
                  <div
                    className="flex flex-wrap xl:gap-[35px] gap-[20px] xl:my-[30px] my-[20px]"
                    key={index}
                  >
                    <div className="flex flex-col">
                      <label className="pre_input_lable">House No/Road</label>
                      <input
                        type="text"
                        className="pre_input"
                        placeholder="Enter detail"
                        name="HouseNo"
                        // value={addr.HouseNo}
                        defaultValue={studentAddress?.HouseNo}
                        onChange={(e) => handleInputChange(e, index)}
                      />
                    </div>

                    <div className="flex flex-col">
                      <label className="pre_input_lable">Area</label>
                      <input
                        type="text"
                        className="pre_input"
                        placeholder="Enter detail"
                        name="Area"
                        // value={addr.Area}
                        defaultValue={studentAddress?.Area}
                        onChange={(e) => handleInputChange(e, index)}
                      />
                    </div>

                    <div className="flex flex-col">
                      <label className="pre_input_lable">City</label>
                      <input
                        type="text"
                        className="pre_input"
                        placeholder="Enter detail"
                        name="City"
                        // value={addr.City}
                        defaultValue={studentAddress?.City}
                        onChange={(e) => handleInputChange(e, index)}
                      />
                    </div>
                    <div className="flex flex-col">
                      <label className="pre_input_lable">District</label>
                      <input
                        type="text"
                        className="pre_input"
                        placeholder="Enter detail"
                        name="Distict"
                        // value={addr.Distict}
                        defaultValue={studentAddress?.Distict}
                        onChange={(e) => handleInputChange(e, index)}
                      />
                    </div>
                    <div className="flex flex-col">
                      <label className="pre_input_lable">State</label>
                      <input
                        type="text"
                        className="pre_input"
                        placeholder="Enter detail"
                        name="State"
                        // value={addr.State}
                        defaultValue={studentAddress?.State}
                        onChange={(e) => handleInputChange(e, index)}
                      />
                    </div>

                    <div className="flex flex-col">
                      <label className="pre_input_lable">Pin Code</label>
                      <input
                        type="text"
                        className="pre_input"
                        placeholder="Enter detail"
                        name="PinCode"
                        // value={addr.PinCode}
                        defaultValue={studentAddress?.PinCode}
                        onChange={(e) => handleInputChange(e, index)}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <hr />
            <div className="2xl:my-[20px] xl:my-[15px] my-[10px]">
              <h1 className="inter font-[700] 2xl:text-[20px] xl:text-[16px] lg:text-[12px] 2xl:leading-[20px] xl:leading-[20px]">
                Students Details
              </h1>

              {getStudentsde.studentDetails.map((addr, index) => (
                <div
                  className="flex flex-wrap xl:gap-[35px] gap-[20px]  xl:my-[30px] my-[20px]"
                  key={index}
                >
                  <div className="flex flex-col">
                    <label className="pre_input_lable">Gender</label>
                    <input
                      type="text"
                      className="pre_input"
                      placeholder="Enter detail"
                      name="Gender"
                      // value={addr.Gender}
                      defaultValue={studentDetails?.Gender}
                      onChange={(e) => handleDetailsChange(e, index)}
                    />
                  </div>

                  <div className="flex flex-col">
                    <label className="pre_input_lable">Students email Id</label>
                    <input
                      type="text"
                      className="pre_input"
                      placeholder="Enter detail"
                      name="Email"
                      // value={addr.Email}
                      defaultValue={studentDetails?.Email}
                      onChange={(e) => handleDetailsChange(e, index)}
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="pre_input_lable">
                      Students alternate mobile number
                    </label>
                    <input
                      type="text"
                      className="pre_input"
                      placeholder="Enter detail"
                      name="Mobile"
                      // value={addr.Mobile}
                      defaultValue={studentDetails?.Mobile}
                      onChange={(e) => handleDetailsChange(e, index)}
                    />
                  </div>
                </div>
              ))}
            </div>

            <hr />

            <div className="mt-3">
              {parentDetail.parentDetails.map((addr, index) => (
                <div key={index}>
                  <h1 className="inter font-[700] 2xl:text-[20px] xl:text-[16px] lg:text-[12px] 2xl:leading-[20px] xl:leading-[20px]">
                    Parents Details
                  </h1>
                  <div className="flex flex-wrap xl:gap-[35px] gap-[20px] xl:my-[30px] my-[20px]">
                    <div className="flex flex-col">
                      <label className="pre_input_lable">
                        Parents Full Name
                      </label>
                      <input
                        type="text"
                        className="pre_input"
                        placeholder="Enter detail"
                        name="parentName"
                        // value={addr.parentName}
                        defaultValue={parentDetailss?.parentName}
                        onChange={(e) => handleInputChanges(index, e)}
                      />
                    </div>
                    <div className="flex flex-col">
                      <label className="pre_input_lable">
                        Parents email Id
                      </label>
                      <input
                        type="text"
                        className="pre_input"
                        placeholder="Enter detail"
                        name="parentEmail"
                        // value={addr.parentEmail}
                        defaultValue={parentDetailss?.parentEmail}
                        onChange={(e) => handleInputChanges(index, e)}
                      />
                    </div>

                    <div className="flex flex-col">
                      <label className="pre_input_lable">
                        Parents Phone Number
                      </label>
                      <input
                        type="text"
                        className="pre_input"
                        placeholder="Enter detail"
                        name="parentMobile"
                        // value={addr.parentMobile}
                        defaultValue={parentDetailss?.parentMobile}
                        onChange={(e) => handleInputChanges(index, e)}
                      />
                    </div>
                    <div className="flex flex-col">
                      <label className="pre_input_lable">
                        Parents Profession
                      </label>
                      <input
                        type="text"
                        className="pre_input"
                        placeholder="Enter detail"
                        name="Parents_Profession"
                        // value={addr.Parents_Profession}
                        defaultValue={parentDetailss?.Parents_Profession}
                        onChange={(e) => handleInputChanges(index, e)}
                      />
                    </div>
                  </div>

                  <div className="flex 2xl:gap-[25px] xl:gap-[25px] gap-[30px] 2xl:my-[25px] xl:my-[20px] my-[10px]">
                    <p className="pre_input_lable">Is your parent</p>
                    <div className="flex items-center 2xl:gap-2 gap-1 ">
                      <input
                        type="checkbox"
                        className="2xl:w-[22px] 2xl:h-[22px] xl:h-[12px] xl:w-[12px] lg:w-[10px] lg:h-[10px] sm:w-[] w-[] "
                        name="govtMaharashtraEmployee"
                        checked={parent.govtMaharashtraEmployee}
                        onChange={(e) => handleCheckboxChange(index, e)}
                      />
                      <h1 className="inter font-[400] pre_input_lable text-[#000000]">
                        Govt of Maharashtra Employee?
                      </h1>
                    </div>
                    <div className="flex items-center 2xl:gap-2 gap-1 ">
                      <input
                        type="checkbox"
                        className="2xl:w-[22px] 2xl:h-[22px] xl:h-[12px] xl:w-[12px] lg:w-[10px] lg:h-[10px] sm:w-[] w-[] "
                        name="govtIndiaEmployee"
                        checked={parent.govtIndiaEmployee}
                        onChange={(e) => handleCheckboxChange(index, e)}
                      />
                      <h1 className="inter font-[400] pre_input_lable text-[#000000]">
                        Govt of India Employee?
                      </h1>
                    </div>
                  </div>

                  <div className="flex flex-col">
                    <label className="pre_input_lable">
                      Family Annual Income
                    </label>
                    <input
                      type="text"
                      className="pre_input"
                      placeholder="Enter detail"
                      name="FamilyAnualIncome"
                      // value={addr.FamilyAnualIncome}
                      defaultValue={parentDetailss?.FamilyAnualIncome}
                      onChange={(e) => handleInputChanges(index, e)}
                    />
                  </div>
                </div>
              ))}
            </div>
          </form>
          <div className="flex xl:gap-[30px] gap-[20px] 2xl:mb-[60px] xl:mb-[40px]">
            <div className="  2xl:my-[30px] xl:my-[20px]">
              <button
                onClick={() => prev()}
                className="flex justify-center items-center gap-2 inter font-[700] 2xl:my-[10px] bg-[#4F9ED9] text-white 2xl:w-[112px] xl:w-[80px] w-[65px] 2xl:h-[48px] xl:h-[35px] h-[25px] rounded-[4px] 2xl:text-[14px] xl:text-[12px] 2xl:leading-[20px] text-[10px]"
              >
                <Image
                  src={arrow}
                  className="rotate-180 2xl:w-[14px] 2xl:h-[10px] rounded-full"
                  alt="img"
                />
                Back
              </button>
            </div>
            <div className="2xl:my-[30px] xl:my-[20px]">
              <Link href="/user2nd/profile">
                <button
                  type="button"
                  // onClick={handleNextClick}
                  onClick={() => {
                    // handleNextClick();
                    sendData();
                  }}
                  className="flex justify-center items-center gap-2 inter font-[700] 2xl:my-[10px] bg-[#4F9ED9] text-white 2xl:w-[112px] xl:w-[80px] w-[65px] 2xl:h-[48px] xl:h-[35px] h-[25px] rounded-[4px] 2xl:text-[14px] xl:text-[12px] 2xl:leading-[20px] text-[10px]"
                >
                  Next
                  <Image
                    src={arrow}
                    className="2xl:w-[14px] 2xl:h-[10px] rounded-full"
                    alt="img"
                  />
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PersonalDetails;
