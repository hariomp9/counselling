import React, { useEffect, useState } from "react";
import Image from "next/image";
import arrow from "../../assets/arrow.svg";
import axios from "axios";
import { useSelector } from "react-redux";
import Link from "next/link";
import config from "@/config";

const PersonalDetails = ({ prev, onFormDataChange, userids }) => {
  const [studentAddresss, setStudentAddress] = useState({});
  const [studentDetail, setStudentDetails] = useState({});
  const [parentDetailss, setParentDetail] = useState({});

  const [nriQouta, setNriQouta] = useState({});
  const { token } = useSelector((state) => state?.auth);
  const userid = useSelector((state) => state?.auth?.ad_details?._id);
  const [statusinfo, setData] = useState({ step_status: "personal_details" });
  const [address, setAddress] = useState({
    StudentAddress: [
      {
        HouseNo: "",
        Area: "",
        City: "",
        Distict: "",
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
  // const [parentDetail, setParentDetails] = useState({
  //   parentDetails: [
  //     {
  //       parentName: "",
  //       parentEmail: "",
  //       parentMobile: "",
  //       Parents_Profession: "",
  //       parentOccupation: "",
  //       FamilyAnualIncome: "",
  //     },
  //   ],
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

  // const handleCheckboxChange = (event) => {
  //   const { name, checked } = event.target;
  //   const updatedParentDetails = [...parentDetails];
  //   updatedParentDetails = {
  //     ...updatedParentDetails,
  //     [name]: checked,
  //   };
  //   setParentDetails(updatedParentDetails);
  // };

  useEffect(() => {
    if (studentAddresss) {
      setAddress({
        StudentAddress: [
          {
            HouseNo: studentAddresss.HouseNo || "",
            Area: studentAddresss.Area || "",
            City: studentAddresss.City || "",
            Distict: studentAddresss.Distict || "",
            State: studentAddresss.State || "",
            PinCode: studentAddresss.PinCode || "",
          },
        ],
      });
    }
  }, [studentAddresss]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setAddress((prevState) => ({
      StudentAddress: prevState.StudentAddress.map((addr, index) => {
        if (index === 0) {
          return {
            ...addr,
            [name]: value,
          };
        }
        return addr;
      }),
    }));
  };
  useEffect(() => {
    if (studentDetail) {
      setStudentsde({
        studentDetails: [
          {
            Gender: studentDetail?.Gender || "",
            Email: studentDetail?.Email || "",
            Mobile: studentDetail?.Mobile || "",
          },
        ],
      });
    }
  }, [studentDetail]);

  const handleDetailsChange = (e) => {
    const { name, value } = e.target;
    setStudentsde((prevState) => ({
      studentDetails: prevState.studentDetails?.map((add, index) => {
        if (index === 0) {
          return {
            ...add,
            [name]: value,
          };
        }
        return add;
      }),
    }));
  };

  useEffect(() => {
    if (parentDetailss) {
      setParentDetails({
        parentDetails: [
          {
            parentName: parentDetailss?.parentName || "",
            parentEmail: parentDetailss?.parentEmail || "",
            parentMobile: parentDetailss?.parentMobile || "",
            Parents_Profession: parentDetailss?.Parents_Profession || "",
            parentOccupation: parentDetailss?.parentOccupation || "",
            FamilyAnualIncome: parentDetailss?.FamilyAnualIncome || "",
          },
        ],
      });
    }
  }, [parentDetailss]);

  const handleInputChanges = (e) => {
    const { name, value } = e.target;
    setParentDetails((prevState) => ({
      parentDetails: prevState.parentDetails?.map((addrs, index) => {
        if (index === 0) {
          return {
            ...addrs,
            [name]: value,
          };
        }
        return addrs;
      }),
    }));
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
                <div className="flex flex-wrap xl:gap-[35px] gap-[20px] xl:my-[30px] my-[20px]">
                  <div className="flex flex-col">
                    <label className="pre_input_lable">House No/Road</label>
                    <input
                      type="text"
                      className="pre_input"
                      placeholder="Enter detail"
                      name="HouseNo"
                      value={address.StudentAddress[0].HouseNo}
                      onChange={handleInputChange}
                    />
                  </div>

                  <div className="flex flex-col">
                    <label className="pre_input_lable">Area</label>
                    <input
                      type="text"
                      className="pre_input"
                      placeholder="Enter detail"
                      name="Area"
                      value={address.StudentAddress[0].Area}
                      onChange={handleInputChange}
                    />
                  </div>

                  <div className="flex flex-col">
                    <label className="pre_input_lable">City</label>
                    <input
                      type="text"
                      className="pre_input"
                      placeholder="Enter detail"
                      name="City"
                      value={address.StudentAddress[0].City}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="pre_input_lable">District</label>
                    <input
                      type="text"
                      className="pre_input"
                      placeholder="Enter detail"
                      name="Distict"
                      value={address.StudentAddress[0].Distict}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="pre_input_lable">State</label>
                    <input
                      type="text"
                      className="pre_input"
                      placeholder="Enter detail"
                      name="State"
                      value={address.StudentAddress[0].State}
                      onChange={handleInputChange}
                    />
                  </div>

                  <div className="flex flex-col">
                    <label className="pre_input_lable">Pin Code</label>
                    <input
                      type="text"
                      className="pre_input"
                      placeholder="Enter detail"
                      name="PinCode"
                      value={address.StudentAddress[0].PinCode}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
              </div>
            </div>
            <hr />
            <div className="2xl:my-[20px] xl:my-[15px] my-[10px]">
              <h1 className="inter font-[700] 2xl:text-[20px] xl:text-[16px] lg:text-[12px] 2xl:leading-[20px] xl:leading-[20px]">
                Students Details
              </h1>

              <div className="flex flex-wrap xl:gap-[35px] gap-[20px]  xl:my-[30px] my-[20px]">
                <div className="flex flex-col">
                  <label className="pre_input_lable">Gender</label>
                  <input
                    type="text"
                    className="pre_input"
                    placeholder="Enter detail"
                    name="Gender"
                    value={getStudentsde?.studentDetails[0]?.Gender}
                    onChange={handleDetailsChange}
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

                    value={getStudentsde?.studentDetails[0]?.Email}
                    onChange={handleDetailsChange}
                  />
                </div>
                <div className="flex flex-col">
                  <label className="pre_input_lable">
                    Students alternate mobile number
                  </label>
                  <input
                    className="pre_input"
                    placeholder="Enter detail"
                    name="Mobile"
                    // value={addr.Mobile}
                    value={getStudentsde?.studentDetails[0]?.Mobile}
                    onChange={handleDetailsChange}
                    onInput={(e) => {
                      const value = e.target.value.replace(/\D/g, "");
                      e.target.value = value.slice(0, 15);
                      handleDetailsChange(e);
                    }}
                  />
                </div>
              </div>
            </div>

            <hr />

            <div className="mt-3">
              <div>
                <h1 className="inter font-[700] 2xl:text-[20px] xl:text-[16px] lg:text-[12px] 2xl:leading-[20px] xl:leading-[20px]">
                  Parents Details
                </h1>
                <div className="flex flex-wrap xl:gap-[35px] gap-[20px] xl:my-[30px] my-[20px]">
                  <div className="flex flex-col">
                    <label className="pre_input_lable">Parents Full Name</label>
                    <input
                      type="text"
                      className="pre_input"
                      placeholder="Enter detail"
                      name="parentName"
                      value={parentDetail?.parentDetails[0]?.parentName}
                      onChange={handleInputChanges}
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="pre_input_lable">Parents email Id</label>
                    <input
                      type="text"
                      className="pre_input"
                      placeholder="Enter detail"
                      name="parentEmail"
                      value={parentDetail?.parentDetails[0]?.parentEmail}
                      onChange={handleInputChanges}
                    />
                  </div>

                  <div className="flex flex-col">
                    <label className="pre_input_lable">
                      Parents Phone Number
                    </label>
                    <input
                      className="pre_input"
                      placeholder="Enter detail"
                      name="parentMobile"
                      value={parentDetail?.parentDetails[0]?.parentMobile}
                      onChange={handleInputChanges}
                      onInput={(e) => {
                        const value = e.target.value.replace(/\D/g, "");
                        e.target.value = value.slice(0, 15);
                        handleDetailsChange(e);
                      }}
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
                      value={parentDetail?.parentDetails[0]?.Parents_Profession}
                      onChange={handleInputChanges}
                    />
                  </div>
                </div>

                <div className="flex 2xl:gap-[25px] xl:gap-[25px] gap-[30px] 2xl:my-[25px] xl:my-[20px] my-[10px]">
                  <p className="pre_input_lable">Is your parent</p>
                  <div className="flex items-center 2xl:gap-2 gap-1">
                    <input
                      type="checkbox"
                      className="2xl:w-[22px] 2xl:h-[22px] xl:h-[12px] xl:w-[12px] lg:w-[10px] lg:h-[10px]"
                      name="govtMaharashtraEmployee"
                      checked={parentDetail?.govtMaharashtraEmployee}
                      onChange={handleInputChanges}
                    />
                    <h1 className="inter font-[400] pre_input_label text-[#000000]">
                      Govt of Maharashtra Employee?
                    </h1>
                  </div>
                  <div className="flex items-center 2xl:gap-2 gap-1">
                    <input
                      type="checkbox"
                      className="2xl:w-[22px] 2xl:h-[22px] xl:h-[12px] xl:w-[12px] lg:w-[10px] lg:h-[10px]"
                      name="govtIndiaEmployee"
                      checked={parentDetail?.govtIndiaEmployee}
                      onChange={handleInputChanges}
                    />
                    <h1 className="inter font-[400] pre_input_label text-[#000000]">
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
                    value={parentDetail?.parentDetails[0]?.FamilyAnualIncome}
                    onChange={handleInputChanges}
                  />
                </div>
              </div>
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
