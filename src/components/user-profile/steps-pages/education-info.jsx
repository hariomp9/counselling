import React, { useEffect, useState } from "react";
import Image from "next/image";
import arrow from "../../assets/arrow.svg";
import { useSelector } from "react-redux";
import axios from "axios";
import config from "@/config";

const EducationInfo = ({ next, prev, onFormDataChange, userids }) => {
  const [isKarnatakaCounselling, setIsKarnatakaCounselling] = useState(true);
  const [studentDetail, setStudentDetail] = useState({});
  console.log(studentDetail, "studentDetail");
  const [examData, setExamData] = useState({});
  const Academic_Details = [
    { id: "1", type: "12th" },
    { id: "2", type: "11th" },
    { id: "3", type: "10th" },
    { id: "4", type: "9th" },
    { id: "5", type: "8th" },
    { id: "6", type: "7th" },
    { id: "7", type: "6th" },
    { id: "8", type: "5th" },
    { id: "9", type: "4th" },
    { id: "10", type: "3th" },
    { id: "11", type: "2th" },
    { id: "12", type: "1th" },
  ];

  const standard_12thMarks = [
    { id: "1", subject: "Physics" },
    { id: "2", subject: "Chemistry" },
    { id: "3", subject: "Biology" },
    { id: "4", subject: "English" },
    { id: "5", subject: "PCB Total" },
    { id: "6", subject: "PCBE Total" },
    { id: "7", subject: "PCB %" },
    { id: "8", subject: "BASLP" },
    { id: "9", subject: "PCBE %" },
  ];
  const exams = [
    { id: "1", type: "12th" },
    { id: "2", type: "10th" },
  ];
  const userid = useSelector((state) => state?.auth?.ad_details?._id);
  const [statusinfo, setData] = useState({ step_status: "education_info" });

  const [standard, setStandard_12thMarks] = useState(
    standard_12thMarks.map((subject) => ({
      subject: subject.subject,
      obtained: "",
      outOf: "",
    }))
  );

  const [academicData, setAcademicData] = useState(
    Academic_Details.map((type) => ({
      type: type.type,
    }))
  );
  const [exam, setExams] = useState(
    exams.map((type) => ({
      type: type.type,
    }))
  );
  useEffect(() => {
    if (Array.isArray(studentDetail)) {
      setStandard_12thMarks(
        studentDetail.map((detail) => ({
          subject: detail.subject,
          obtained: detail.obtained || "",
          outOf: detail.outOf || "",
        }))
      );
    }
  }, [studentDetail]);

  const inputHandler = (index, name, value) => {
    setStandard_12thMarks((prevState) =>
      prevState.map((item, i) =>
        i === index ? { ...item, [name]: value } : item
      )
    );
  };
  const inputHandlers = (index, fieldName, value) => {
    const newData = [...academicData];
    newData[index][fieldName] = value;
    setAcademicData(newData);
  };

  const inputHandle = (index, fieldName, value) => {
    const newData = [...examData];
    newData[index][fieldName] = value;
    setExamData(newData);
  };
  const sendData = async (e) => {
    // e.preventDefault(e);
    const mergedData = {
      ...statusinfo,
      standard_12thMarks: standard,
      Academic_Details: academicData,
      exams: examData,
    };
    try {
      const response = await axios.put(
        `${config.baseURL}/api/auth/updatedUser_Steps/${userid || userids}`,
        mergedData
      );
      next();
    } catch (error) {
      console.error("Error making PUT request:", error);
    }
  };
  // const handleNextClick = () => {
  //   sendData();
  // };

  // console.log(academicData, "data");
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
        setExamData(response?.data?.user?.exams);
        setStudentDetail(response?.data?.user?.standard_12thMarks);
        setAcademicData(response?.data?.user?.Academic_Details);
      })
      .catch((error) => {
        console.log(error, "Error");
      });
  };
  return (
    <>
      <section>
        <form className="main_div mx-auto">
          <div className="bg-white 2xl:w-[952px] xl:w-[680px] lg:w-[570px] 2xl:h-[] xl:h-[] h-[] 2xl:p-[25px] xl:p-[15px] p-[10px]">
            <h1 className="inter font-[700] 2xl:text-[20px] xl:text-[16px] lg:text-[12px] 2xl:leading-[20px] xl:leading-[20px]">
              Standard 12th Exam Marks
            </h1>
            <div className="bg-white rounded-[10px] 2xl:w-[905px] xl:w-[650px] lg:w-[550px] 2xl:h-[] xl:h-[] h-[]  2xl:mt-[30px] xl:mt-[20px] mt-[15px]">
              <div className="overflow-x-auto">
                <table className="table table-zebra border rounded-[10px]">
                  {/* head */}
                  <thead className="">
                    <tr className="bg-[#F5F6FF] 2xl:h-[51px] inter font-[700] text-[#000000] 2xl:text-[15px] xl:text-[12px] lg:text-[10px] 2xl:leading-[20px] xl:leading-[20px] border-none table-cell-no-border">
                      <th className="table-cell-no-border">Subjects</th>
                      <th className="table-cell-no-border">Marks Obtained</th>
                      <th className="table-cell-no-border">Marks Out Of</th>
                    </tr>
                  </thead>
                  <tbody>
                    {Array.isArray(standard) && standard.length > 0
                      ? standard.map((item, index) => (
                          <tr
                            key={index}
                            className="2xl:h-[96px] inter font-[300] 2xl:text-[15px] xl:text-[12px] lg:text-[10px] 2xl:leading-[18px] xl:leading-[20px] border-none 2xl:px-[30px] table-cell-no-border"
                          >
                            <td
                              key={index}
                              className="table-cell-no-border w-1/3 inter font-[300] 2xl:text-[15px] 2xl:leading-[18.15px] xl:text-[12px] text-[12px]"
                            >
                              <label>{item.subject}</label>
                            </td>
                            <td className="table-cell-no-border w-1/3">
                              <div>
                                <input
                                  type="text"
                                  value={item.obtained}
                                  onChange={(e) =>
                                    inputHandler(
                                      index,
                                      "obtained",
                                      e.target.value
                                    )
                                  }
                                  className="pre_input2nd"
                                  placeholder="Enter Detail"
                                />
                              </div>
                            </td>
                            <td className="table-cell-no-border w-1/3">
                              <div>
                                <input
                                  type="text"
                                  value={item.outOf}
                                  onChange={(e) =>
                                    inputHandler(index, "outOf", e.target.value)
                                  }
                                  className="pre_input2nd"
                                  placeholder="Enter Detail"
                                />
                              </div>
                            </td>
                          </tr>
                        ))
                      : null}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          {/* =========== 2 ============== */}
          <div>
            <div className="overflow-x-auto">
              <table className="table  rounded-[10px]  2xl:w-[952px] xl:w-[680px] lg:w-[570px] 2xl:my-[20px] xl:my-[15px] my-[10px]">
                {/* head */}
                <thead className="">
                  <tr className="bg-[#F5F6FF] 2xl:h-[51px] inter font-[700] text-[#000000] 2xl:text-[15px] xl:text-[12px] lg:text-[10px] 2xl:leading-[20px] xl:leading-[20px] table-cell-no-border">
                    <th className="table-cell-no-border  ">Exam</th>
                    <th className="table-cell-no-border  w-1/3 ">
                      Passing District{" "}
                    </th>
                    <th className="table-cell-no-border  w-1/3">
                      Passing State
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {Array.isArray(examData) && examData.length > 0
                    ? examData.map((item, index) => (
                        <tr
                          key={index}
                          className="2xl:h-[96px] inter font-[300] 2xl:text-[15px] xl:text-[12px] lg:text-[10px] 2xl:leading-[18px] xl:leading-[20px]  2xl:px-[30px]"
                        >
                          <td className="table-cell-no-border w-1/3 inter font-[300] 2xl:text-[15px] 2xl:leading-[18.15px] xl:text-[12px] text-[12px] border-none table-cell-no-border">
                            {item?.type}
                          </td>
                          <td className="table-cell-no-border w-1/3 table-cell-no-border">
                            <div>
                              <input
                                type="text"
                                className="pre_input"
                                placeholder="Enter detail"
                                value={item?.passingDistrict || ""}
                                onChange={(e) =>
                                  inputHandle(
                                    index,
                                    "passingDistrict",
                                    e.target.value
                                  )
                                }
                              />
                            </div>
                          </td>
                          <td className="table-cell-no-border w-1/3 table-cell-no-border">
                            <div>
                              <input
                                type="text"
                                value={item?.passingState || ""}
                                onChange={(e) =>
                                  inputHandle(
                                    index,
                                    "passingState",
                                    e.target.value
                                  )
                                }
                                className="pre_input2nd"
                                placeholder="Enter Detail"
                              />
                            </div>
                          </td>
                        </tr>
                      ))
                    : null}
                </tbody>
              </table>
            </div>
          </div>
          {/* ==============3================= */}

          <div className="bg-white 2xl:w-[1237px] xl:w-[840px] lg:w-[750px] 2xl:h-[] xl:h-[] h-[] 2xl:p-[25px] xl:p-[12px] p-[10px]">
            <h2 className="inter font-[700] 2xl:text-[20px] xl:text-[16px] lg:text-[12px] 2xl:leading-[20px] xl:leading-[20px]">
              Academic Details
            </h2>
            <div className="flex items-center gap-2 2xl:my-3 my-2">
              <input
                type="checkbox"
                defaultChecked={isKarnatakaCounselling}
                className="checkbox"
                onChange={() =>
                  setIsKarnatakaCounselling(!isKarnatakaCounselling)
                }
              />
              <p className="tablerow">
                Are you applying for Karnataka counselling
              </p>
            </div>

            <div className="bg-white rounded-[10px] 2xl:w-[1187px] xl:w-[815px] lg:w-[725px] 2xl:h-[] xl:h-[] h-[]  2xl:mt-[30px] xl:mt-[20px] mt-[15px]">
              <div className="overflow-x-auto">
                <table className="table table-zebra border rounded-[10px]">
                  <thead className="">
                    <tr className="bg-[#F5F6FF] 2xl:h-[51px] inter font-[700] text-[#000000] 2xl:text-[15px] xl:text-[12px] lg:text-[10px] 2xl:leading-[20px] xl:leading-[20px] border-none table-cell-no-border">
                      <th className="table-cell-no-border">Exams</th>
                      <th className="table-cell-no-border">
                        Board / University
                      </th>
                      <th className="table-cell-no-border">School/College </th>
                      <th className="table-cell-no-border">Passing Year</th>

                      <th className="table-cell-no-border">Obtained Marks</th>

                      <th className="table-cell-no-border">Results (%)</th>

                      <th className="table-cell-no-border">CGPA</th>
                    </tr>
                  </thead>
                  {/* <tbody>
                    {Array.isArray(academicData) && academicData.length > 0
                      ? academicData.map((item, index) => (
                          <tr
                            key={index}
                            className="2xl:h-[96px] inter font-[300] 2xl:text-[15px] xl:text-[12px] lg:text-[10px] 2xl:leading-[18px] xl:leading-[20px] border-none 2xl:px-[30px] table-cell-no-border"
                          >
                            <td className=" table-cell-no-border inter font-[300] 2xl:text-[15px] 2xl:leading-[18.15px] xl:text-[12px] text-[12px]">
                              {item.type}
                            </td>

                            <td className=" table-cell-no-border">
                              <div>
                                <input
                                  type="text"
                                  className="pre_input3rd"
                                  placeholder="Enter detail"
                                  defaultValue={item?.Board_University}
                                  onChange={(e) =>
                                    inputHandlers(
                                      index,
                                      "Board_University",
                                      e.target.value
                                    )
                                  }
                                />
                              </div>
                            </td>
                            <td className=" table-cell-no-border">
                              <div>
                                <input
                                  type="text"
                                  className="pre_input4th"
                                  placeholder="Enter detail"
                                  defaultValue={item?.School_College}
                                  onChange={(e) =>
                                    inputHandlers(
                                      index,
                                      "School_College",
                                      e.target.value
                                    )
                                  }
                                />
                              </div>
                            </td>
                            <td className=" table-cell-no-border">
                              <div>
                                <input
                                  type="text"
                                  className="pre_input4th"
                                  placeholder="Enter detail"
                                  defaultValue={item?.PassingYear}
                                  onChange={(e) =>
                                    inputHandlers(
                                      index,
                                      "PassingYear",
                                      e.target.value
                                    )
                                  }
                                />
                              </div>
                            </td>
                            <td className=" table-cell-no-border">
                              <div>
                                <input
                                  type="text"
                                  className="pre_input4th"
                                  placeholder="Enter detail"
                                  defaultValue={item?.ObtainedMarks}
                                  onChange={(e) =>
                                    inputHandlers(
                                      index,
                                      "ObtainedMarks",
                                      e.target.value
                                    )
                                  }
                                />
                              </div>
                            </td>
                            <td className=" table-cell-no-border">
                              <div>
                                <input
                                  type="text"
                                  className="pre_input3rd"
                                  placeholder="Enter detail"
                                  defaultValue={item?.Result}
                                  onChange={(e) =>
                                    inputHandlers(
                                      index,
                                      "Result",
                                      e.target.value
                                    )
                                  }
                                />
                              </div>
                            </td>
                            <td className=" table-cell-no-border">
                              <div>
                                <input
                                  type="text"
                                  className="pre_input4th"
                                  placeholder="Enter detail"
                                  defaultValue={item?.CGPA}
                                  onChange={(e) =>
                                    inputHandlers(index, "CGPA", e.target.value)
                                  }
                                />
                              </div>
                            </td>
                          </tr>
                        ))
                      : Array.isArray(Academic_Details) &&
                        Academic_Details.length > 0
                      ? Academic_Details.map((item, index) => (
                          <tr
                            key={index}
                            className="2xl:h-[96px] inter font-[300] 2xl:text-[15px] xl:text-[12px] lg:text-[10px] 2xl:leading-[18px] xl:leading-[20px] border-none 2xl:px-[30px] table-cell-no-border"
                          >
                            <td className=" table-cell-no-border inter font-[300] 2xl:text-[15px] 2xl:leading-[18.15px] xl:text-[12px] text-[12px]">
                              {item.type}
                            </td>

                            <td className=" table-cell-no-border">
                              <div>
                                <input
                                  type="text"
                                  className="pre_input3rd"
                                  placeholder="Enter detail"
                                  defaultValue={item?.Board_University}
                                  onChange={(e) =>
                                    inputHandlers(
                                      index,
                                      "Board_University",
                                      e.target.value
                                    )
                                  }
                                />
                              </div>
                            </td>
                            <td className=" table-cell-no-border">
                              <div>
                                <input
                                  type="text"
                                  className="pre_input4th"
                                  placeholder="Enter detail"
                                  defaultValue={item?.School_College}
                                  onChange={(e) =>
                                    inputHandlers(
                                      index,
                                      "School_College",
                                      e.target.value
                                    )
                                  }
                                />
                              </div>
                            </td>
                            <td className=" table-cell-no-border">
                              <div>
                                <input
                                  type="text"
                                  className="pre_input4th"
                                  placeholder="Enter detail"
                                  defaultValue={item?.PassingYear}
                                  onChange={(e) =>
                                    inputHandlers(
                                      index,
                                      "PassingYear",
                                      e.target.value
                                    )
                                  }
                                />
                              </div>
                            </td>
                            <td className=" table-cell-no-border">
                              <div>
                                <input
                                  type="text"
                                  className="pre_input4th"
                                  placeholder="Enter detail"
                                  defaultValue={item?.ObtainedMarks}
                                  onChange={(e) =>
                                    inputHandlers(
                                      index,
                                      "ObtainedMarks",
                                      e.target.value
                                    )
                                  }
                                />
                              </div>
                            </td>
                            <td className=" table-cell-no-border">
                              <div>
                                <input
                                  type="text"
                                  className="pre_input3rd"
                                  placeholder="Enter detail"
                                  defaultValue={item?.Result}
                                  onChange={(e) =>
                                    inputHandlers(
                                      index,
                                      "Result",
                                      e.target.value
                                    )
                                  }
                                />
                              </div>
                            </td>
                            <td className=" table-cell-no-border">
                              <div>
                                <input
                                  type="text"
                                  className="pre_input4th"
                                  placeholder="Enter detail"
                                  defaultValue={item?.CGPA}
                                  onChange={(e) =>
                                    inputHandlers(index, "CGPA", e.target.value)
                                  }
                                />
                              </div>
                            </td>
                          </tr>
                        ))
                      : null}
                  </tbody> */}
                  <tbody>
                    {isKarnatakaCounselling
                      ? Array.isArray(academicData) &&
                        academicData.map((item, index) => (
                          <tr
                            key={index}
                            className="2xl:h-[96px] inter font-[300] 2xl:text-[15px] xl:text-[12px] lg:text-[10px] 2xl:leading-[18px] xl:leading-[20px] border-none 2xl:px-[30px] table-cell-no-border"
                          >
                            <td className="table-cell-no-border inter font-[300] 2xl:text-[15px] 2xl:leading-[18.15px] xl:text-[12px] text-[12px]">
                              {item.type}
                            </td>
                            <td className="table-cell-no-border">
                              <input
                                type="text"
                                className="pre_input3rd"
                                placeholder="Enter detail"
                                defaultValue={item?.Board_University}
                                onChange={(e) =>
                                  inputHandlers(
                                    index,
                                    "Board_University",
                                    e.target.value
                                  )
                                }
                              />
                            </td>
                            <td className="table-cell-no-border">
                              <input
                                type="text"
                                className="pre_input4th"
                                placeholder="Enter detail"
                                defaultValue={item?.School_College}
                                onChange={(e) =>
                                  inputHandlers(
                                    index,
                                    "School_College",
                                    e.target.value
                                  )
                                }
                              />
                            </td>
                            <td className="table-cell-no-border">
                              <input
                                type="text"
                                className="pre_input4th"
                                placeholder="Enter detail"
                                defaultValue={item?.PassingYear}
                                onChange={(e) =>
                                  inputHandlers(
                                    index,
                                    "PassingYear",
                                    e.target.value
                                  )
                                }
                              />
                            </td>
                            <td className="table-cell-no-border">
                              <input
                                type="text"
                                className="pre_input4th"
                                placeholder="Enter detail"
                                defaultValue={item?.ObtainedMarks}
                                onChange={(e) =>
                                  inputHandlers(
                                    index,
                                    "ObtainedMarks",
                                    e.target.value
                                  )
                                }
                              />
                            </td>
                            <td className="table-cell-no-border">
                              <input
                                type="text"
                                className="pre_input3rd"
                                placeholder="Enter detail"
                                defaultValue={item?.Result}
                                onChange={(e) =>
                                  inputHandlers(index, "Result", e.target.value)
                                }
                              />
                            </td>
                            <td className="table-cell-no-border">
                              <input
                                type="text"
                                className="pre_input4th"
                                placeholder="Enter detail"
                                defaultValue={item?.CGPA}
                                onChange={(e) =>
                                  inputHandlers(index, "CGPA", e.target.value)
                                }
                              />
                            </td>
                          </tr>
                        ))
                      : academicData
                          .filter(
                            (item) =>
                              item.type === "10th" || item.type === "12th"
                          )
                          .map((item, index) => (
                            <tr
                              key={index}
                              className="2xl:h-[96px] inter font-[300] 2xl:text-[15px] xl:text-[12px] lg:text-[10px] 2xl:leading-[18px] xl:leading-[20px] border-none 2xl:px-[30px] table-cell-no-border"
                            >
                              <td className="table-cell-no-border inter font-[300] 2xl:text-[15px] 2xl:leading-[18.15px] xl:text-[12px] text-[12px]">
                                {item.type}
                              </td>
                              <td className="table-cell-no-border">
                                <input
                                  type="text"
                                  className="pre_input3rd"
                                  placeholder="Enter detail"
                                  defaultValue={item?.Board_University}
                                  onChange={(e) =>
                                    inputHandlers(
                                      index,
                                      "Board_University",
                                      e.target.value
                                    )
                                  }
                                />
                              </td>
                              <td className="table-cell-no-border">
                                <input
                                  type="text"
                                  className="pre_input4th"
                                  placeholder="Enter detail"
                                  defaultValue={item?.School_College}
                                  onChange={(e) =>
                                    inputHandlers(
                                      index,
                                      "School_College",
                                      e.target.value
                                    )
                                  }
                                />
                              </td>
                              <td className="table-cell-no-border">
                                <input
                                  type="text"
                                  className="pre_input4th"
                                  placeholder="Enter detail"
                                  defaultValue={item?.PassingYear}
                                  onChange={(e) =>
                                    inputHandlers(
                                      index,
                                      "PassingYear",
                                      e.target.value
                                    )
                                  }
                                />
                              </td>
                              <td className="table-cell-no-border">
                                <input
                                  type="text"
                                  className="pre_input4th"
                                  placeholder="Enter detail"
                                  defaultValue={item?.ObtainedMarks}
                                  onChange={(e) =>
                                    inputHandlers(
                                      index,
                                      "ObtainedMarks",
                                      e.target.value
                                    )
                                  }
                                />
                              </td>
                              <td className="table-cell-no-border">
                                <input
                                  type="text"
                                  className="pre_input3rd"
                                  placeholder="Enter detail"
                                  defaultValue={item?.Result}
                                  onChange={(e) =>
                                    inputHandlers(
                                      index,
                                      "Result",
                                      e.target.value
                                    )
                                  }
                                />
                              </td>
                              <td className="table-cell-no-border">
                                <input
                                  type="text"
                                  className="pre_input4th"
                                  placeholder="Enter detail"
                                  defaultValue={item?.CGPA}
                                  onChange={(e) =>
                                    inputHandlers(index, "CGPA", e.target.value)
                                  }
                                />
                              </td>
                            </tr>
                          ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className="flex xl:gap-[30px] gap-[20px] 2xl:mb-[0px] xl:mb-[40px]">
            <div className="  2xl:my-[30px] xl:my-[20px]">
              <button className="flex justify-center items-center gap-2 inter font-[700] 2xl:my-[10px] bg-[#4F9ED9] text-white 2xl:w-[112px] xl:w-[80px] w-[65px] 2xl:h-[48px] xl:h-[35px] h-[25px] rounded-[4px] 2xl:text-[14px] xl:text-[12px] 2xl:leading-[20px] text-[10px]">
                <Image
                  src={arrow}
                  className="rotate-180 2xl:w-[14px] 2xl:h-[10px] rounded-full"
                />
                Back
              </button>
            </div>
            <div className="2xl:my-[30px] xl:my-[20px]">
              <button
                type="button"
                onClick={() => {
                  sendData();
                }}
                className="flex justify-center items-center gap-2 inter font-[700] 2xl:my-[10px] bg-[#4F9ED9] text-white 2xl:w-[112px] xl:w-[80px] w-[65px] 2xl:h-[48px] xl:h-[35px] h-[25px] rounded-[4px] 2xl:text-[14px] xl:text-[12px] 2xl:leading-[20px] text-[10px]"
              >
                Next
                <Image
                  src={arrow}
                  className="2xl:w-[14px] 2xl:h-[10px] rounded-full"
                />
              </button>
            </div>
          </div>
        </form>
      </section>
    </>
  );
};

export default EducationInfo;
