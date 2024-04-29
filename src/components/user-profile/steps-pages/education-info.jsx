import React from "react";
import Image from "next/image";
import arrow from "../../assets/arrow.svg";

const EducationInfo = () => {
  const subject = [
    { id: "1", subjectName: "Physics" },
    { id: "2", subjectName: "Chemistry" },
    { id: "3", subjectName: "Biology" },
    { id: "4", subjectName: "English" },
    { id: "5", subjectName: "PCB Total" },
    { id: "6", subjectName: "PCBE Total" },
    { id: "7", subjectName: "PCB %" },
    { id: "8", subjectName: "BASLP" },
    { id: "9", subjectName: "PCBE %" },
  ];
  const classs = [
    { id: "1", className: "12th" },
    { id: "2", className: "11th" },
    { id: "3", className: "10th" },
    { id: "4", className: "9th" },
    { id: "5", className: "8th" },
    { id: "6", className: "7th" },
    { id: "7", className: "6th" },
    { id: "8", className: "5th" },
    { id: "9", className: "4th" },
    { id: "10", className: "3th" },
    { id: "11", className: "2th" },
    { id: "12", className: "1th" },
  ];
  return (
    <>
      <section>
        <div className="main_div mx-auto">
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
                    {/* row 1 */}
                    {subject.map((item, index) => (
                      <tr
                        key={index}
                        className="2xl:h-[96px] inter font-[300] 2xl:text-[15px] xl:text-[12px] lg:text-[10px] 2xl:leading-[18px] xl:leading-[20px] border-none 2xl:px-[30px] table-cell-no-border"
                      >
                        <td className=" table-cell-no-border w-1/3 inter font-[300] 2xl:text-[15px] 2xl:leading-[18.15px] xl:text-[12px] text-[12px]">
                          {item.subjectName}
                        </td>
                        <td className="table-cell-no-border  w-1/3">
                          <div>
                            <input
                              type="text"
                              className="pre_input2nd"
                              placeholder="Enter detail"
                            />
                          </div>
                        </td>
                        <td className=" table-cell-no-border  w-1/3">
                          <div>
                            <input
                              type="text"
                              className="pre_input2nd"
                              placeholder="Enter detail"
                            />
                          </div>
                        </td>
                      </tr>
                    ))}
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
                    <th className="table-cell-no-border">Exam</th>
                    <th className="table-cell-no-border">Passing District </th>
                    <th className="table-cell-no-border">Passing State</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="2xl:h-[96px] inter font-[300] 2xl:text-[15px] xl:text-[12px] lg:text-[10px] 2xl:leading-[18px] xl:leading-[20px]  2xl:px-[30px]">
                    <td className=" table-cell-no-borderw-1/3 inter font-[300] 2xl:text-[15px] 2xl:leading-[18.15px] xl:text-[12px] text-[12px] border-none table-cell-no-border">
                      12th
                    </td>
                    <td className=" table-cell-no-borderw-1/3 table-cell-no-border">
                      <div>
                        <input
                          type="text"
                          className="pre_input"
                          placeholder="Enter detail"
                        />
                      </div>
                    </td>
                    <td className=" table-cell-no-borderw-1/3 table-cell-no-border">
                      <div>
                        <input
                          type="text"
                          className="pre_input"
                          placeholder="Enter detail"
                        />
                      </div>
                    </td>
                  </tr>
                  <tr className="2xl:h-[96px] inter font-[300] 2xl:text-[15px] xl:text-[12px] lg:text-[10px] 2xl:leading-[18px] xl:leading-[20px] border-none 2xl:px-[30px]">
                    <td className=" table-cell-no-borderw-1/3 inter font-[300] 2xl:text-[15px] 2xl:leading-[18.15px] xl:text-[12px] text-[12px] table-cell-no-border">
                      10th
                    </td>
                    <td className=" table-cell-no-borderw-1/3 table-cell-no-border">
                      <div>
                        <input
                          type="text"
                          className="pre_input"
                          placeholder="Enter detail"
                        />
                      </div>
                    </td>
                    <td className=" table-cell-no-borderw-1/3 table-cell-no-border">
                      <div>
                        <input
                          type="text"
                          className="pre_input"
                          placeholder="Enter detail"
                        />
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* ==============3================= */}

          <div className="bg-white 2xl:w-[1237px] xl:w-[840px] lg:w-[750px] 2xl:h-[] xl:h-[] h-[] 2xl:p-[25px] xl:p-[12px] p-[10px]">
            <h1 className="inter font-[700] 2xl:text-[20px] xl:text-[16px] lg:text-[12px] 2xl:leading-[20px] xl:leading-[20px]">
              Academic Details
            </h1>
            <div className="bg-white rounded-[10px] 2xl:w-[1187px] xl:w-[815px] lg:w-[725px] 2xl:h-[] xl:h-[] h-[]  2xl:mt-[30px] xl:mt-[20px] mt-[15px]">
              <div className="overflow-x-auto">
                <table className="table table-zebra border rounded-[10px]">
                  {/* head */}
                  <thead className="">
                    <tr className="bg-[#F5F6FF] 2xl:h-[51px] inter font-[700] text-[#000000] 2xl:text-[15px] xl:text-[12px] lg:text-[10px] 2xl:leading-[20px] xl:leading-[20px] border-none table-cell-no-border">
                      <th className="table-cell-no-border">Exams</th>
                      <th className="table-cell-no-border">Board / University</th>
                      <th className="table-cell-no-border">School/College </th>
                      <th className="table-cell-no-border">Passing Year</th>

                      <th className="table-cell-no-border">Obtained Marks</th>

                      <th className="table-cell-no-border">Results (%)</th>

                      <th className="table-cell-no-border">CGPA</th>
                    </tr>
                  </thead>
                  <tbody>
                    {/* row 1 */}
                    {classs.map((item, index) => (
                      <tr
                        key={index}
                        className="2xl:h-[96px] inter font-[300] 2xl:text-[15px] xl:text-[12px] lg:text-[10px] 2xl:leading-[18px] xl:leading-[20px] border-none 2xl:px-[30px] table-cell-no-border"
                      >
                        <td className=" table-cell-no-border inter font-[300] 2xl:text-[15px] 2xl:leading-[18.15px] xl:text-[12px] text-[12px]">
                          {item.className}
                        </td>
                        <td className=" table-cell-no-border">
                          <div>
                            <input
                              type="text"
                              className="pre_input3rd"
                              placeholder="Enter detail"
                            />
                          </div>
                        </td>
                        <td className=" table-cell-no-border">
                          <div>
                            <input
                              type="text"
                              className="pre_input3rd"
                              placeholder="Enter detail"
                            />
                          </div>
                        </td>
                        <td className=" table-cell-no-border">
                          <div>
                            <input
                              type="text"
                              className="pre_input4th"
                              placeholder="Enter detail"
                            />
                          </div>
                        </td>
                        <td className=" table-cell-no-border">
                          <div>
                            <input
                              type="text"
                              className="pre_input4th"
                              placeholder="Enter detail"
                            />
                          </div>
                        </td>
                        <td className=" table-cell-no-border">
                          <div>
                            <input
                              type="text"
                              className="pre_input4th"
                              placeholder="Enter detail"
                            />
                          </div>
                        </td>
                        <td className=" table-cell-no-border">
                          <div>
                            <input
                              type="text"
                              className="pre_input4th"
                              placeholder="Enter detail"
                            />
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className="flex xl:gap-[30px] gap-[20px] 2xl:mb-[60px] xl:mb-[40px]">
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
              <button className="flex justify-center items-center gap-2 inter font-[700] 2xl:my-[10px] bg-[#4F9ED9] text-white 2xl:w-[112px] xl:w-[80px] w-[65px] 2xl:h-[48px] xl:h-[35px] h-[25px] rounded-[4px] 2xl:text-[14px] xl:text-[12px] 2xl:leading-[20px] text-[10px]">
                Next
                <Image
                  src={arrow}
                  className="2xl:w-[14px] 2xl:h-[10px] rounded-full"
                />
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default EducationInfo;
