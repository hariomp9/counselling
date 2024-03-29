import React from "react";
import Image from "next/image";
import neet11 from "../../../../public/images/neet11.svg";
import neet22 from "../../../../public/images/neet22.svg";
import neet33 from "../../../../public/images/neet33.svg";
import neet4 from "../../../../public/images/neet4.svg";

const NeetUG = () => {
  return (
    <>
      <section>
        <div className="flex justify-center bg-[#EAEEF6]">
          <div className="flex 2xl:w-[1740px] 2xl:mt-20 gap-10 xl:w-[1200px] lg:w-[900px] xl:mt-14  lg:mt-8 border rounded-[20px]  bg-white">
            <div className="2xl:w-[950px] xl:w-[750px] lg:w-[600px] mx-auto 2xl:ml-[155px] xl:ml-[115px] ml-12">
              <div className="neetBG rounded-[10px] flex justify-between items-center lg:px-5 xl:px-[40px] w-full 2xl:h-[160px] xl:h-[120px] lg:h-[80px] 2xl:my-10 xl:my-8 lg:my-5">
                <div>
                  <h1 className="inter font-[400] 2xl:text-[30px] 2xl:leading-[36.31px] xl:text-[20px] xl:leading-[25px] lg:text-[16px] lg:leading-[25px]">
                    Welcome <span className="font-semibold">Mayank!</span>
                  </h1>
                  <p className="inter font-[400] 2xl:text-[14px] 2xl:leading-[24px] xl:text-[10px] xl:leading-[18px] lg:text-[8px] lg:leading-[14px] 2xl:my-3">
                    Welcome back and explore the knowledge
                  </p>
                </div>
                <div className="flex items-center gap-[20px]">
                  <p className="inter font-[500] 2xl:text-[14px] 2xl:leading-[24px] xl:text-[10px] xl:leading-[18px] lg:text-[8px] lg:leading-[14px]">
                    Use plan free
                  </p>
                  <button className="bg-[#0071BC] text-white rounded-[5px] 2xl:text-[16px] 2xl:leading-[24px] xl:text-[12px] xl:leading-[18px] lg:text-[10px] lg:leading-[14px] 2xl:w-[130px] 2xl:h-[50px] xl:w-[80px] xl:h-[30px] lg:w-[60px] lg:h-[25px]">
                    Upgrade
                  </button>
                </div>
              </div>

              <div className="flex justify-between 2xl:my-10">
                <div className="neet1 flex justify-center rounded-[10px] items-center 2xl:w-[304.33px] xl:w-[31%] lg:w-[120.33px] lg:h-[100px] 2xl:h-[193px] xl:h-[143px] ">
                  <div className="flex justify-center items-center rounded-full 2xl:w-[67px] 2xl:h-[67px] bg-white">
                    <Image
                      src={neet11}
                      className="2xl:w-[35px] 2xl:h-[35px] xl:w-[25px] xl:h-[25px] lg:w-[20px] lg:h-[20px]"
                    />
                  </div>
                </div>

                <div className="neet2 2xl:w-[304.33px] rounded-[10px] xl:w-[31%] 2xl:h-[193px] xl:h-[143px]  lg:w-[120.33px] lg:h-[100px]">
                  <div className="neet2 flex justify-center items-center 2xl:w-[304.33px] mx-auto 2xl:h-[193px] xl:h-[143px] lg:w-[120.33px] lg:h-[100px]">
                    <div className="">
                      <div className="flex justify-center mx-auto items-center border rounded-full 2xl:w-[67px] 2xl:h-[67px] bg-white xl:w-[50px] xl:h-[50px] lg:w-[40px] lg:h-[40px]">
                        <Image
                          src={neet22}
                          className="2xl:w-[35px] 2xl:h-[35px] xl:w-[25px] xl:h-[25px] lg:w-[20px] lg:h-[20px] xl:w-[27px] xl:h-[27px] lg:w-[20px] lg:h-[20px]"
                        />
                      </div>
                      <h1 className="inter font-[600] 2xl:text-[20px] 2xl:leading-[30px] xl:text-[14px] xl:leading-[24px] lg:text-[10px] lg:leading-[18px] my-1">
                        College Database
                      </h1>
                    </div>
                  </div>
                </div>

                <div className="neet3 2xl:w-[304.33px] rounded-[10px] xl:w-[31%]  2xl:h-[193px] lg:w-[120.33px] lg:h-[100px]">
                  <div className="neet3 flex justify-center items-center 2xl:w-[304.33px] mx-auto 2xl:h-[193px] xl:h-[143px] lg:w-[120.33px] lg:h-[100px]">
                    <div className="">
                      <div className="flex justify-center mx-auto items-center border rounded-full 2xl:w-[67px] 2xl:h-[67px] bg-white xl:w-[50px] xl:h-[50px] lg:w-[40px] lg:h-[40px]">
                        <Image
                          src={neet33}
                          className="2xl:w-[35px] 2xl:h-[35px] xl:w-[25px] xl:h-[25px] lg:w-[20px] lg:h-[20px] xl:w-[27px] xl:h-[27px] lg:w-[20px] lg:h-[20px]"
                        />
                      </div>
                      <h1 className="inter font-[600] 2xl:text-[20px] 2xl:leading-[30px] xl:text-[14px] xl:leading-[24px] lg:text-[10px] lg:leading-[18px] my-1">
                        Choice Filling
                      </h1>
                    </div>
                  </div>
                </div>
              </div>

              <div className=" my-14">
                <h1 className="inter font-[600] 2xl:text-[24px] 2xl:leading-[34px] xl:text-[18px] xl:leading-[30px] lg:text-[16px] lg:leading-[25px] my-3">
                  Counselling Updates
                </h1>

                <div className="overflow-x-auto">
                  <table className="table">
                    {/* head */}
                    <thead className="bg-[#ECECEC]">
                      <tr>
                        <th className="text-[#000000] inter font-[700] 2xl:text-[14px] 2xl:leading-[28px] xl:text-[10px] xl:leading-[16px] lg:text-[8px] lg:leading-[14px]">
                          Counselling Type
                        </th>
                        <th className="text-[#000000] inter font-[700] 2xl:text-[14px] 2xl:leading-[28px] xl:text-[10px] xl:leading-[16px] lg:text-[8px] lg:leading-[14px]">
                          Details
                        </th>
                        <th className="text-[#000000] inter font-[700] 2xl:text-[14px] 2xl:leading-[28px] xl:text-[10px] xl:leading-[16px] lg:text-[8px] lg:leading-[14px]">
                          Link
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="">
                        <td className="tablerow text-[#4E4E4E]">
                          Counselling Type 1
                        </td>
                        <td className="tablerow text-[#4E4E4E]">Details 1</td>
                        <td className="text-[#4A64EC] tablerow">
                          https://www.lorem.com/premium-photo/
                        </td>
                      </tr>
                      <tr>
                        <td className="tablerow text-[#4E4E4E]">
                          Counselling Type 2
                        </td>
                        <td className="tablerow text-[#4E4E4E]">Details 2</td>
                        <td className="text-[#4A64EC] tablerow">
                          https://www.lorem.com/premium-photo/
                        </td>
                      </tr>
                      <tr>
                        <td className="tablerow text-[#4E4E4E]">
                          Counselling Type 3
                        </td>
                        <td className="tablerow text-[#4E4E4E]">Details 3</td>
                        <td className="text-[#4A64EC] tablerow">
                          https://www.lorem.com/premium-photo/
                        </td>
                      </tr>
                      <tr>
                        <td className="tablerow text-[#4E4E4E]">
                          Counselling Type 4
                        </td>
                        <td className="tablerow text-[#4E4E4E]">Details 4</td>
                        <td className="text-[#4A64EC] tablerow">
                          https://www.lorem.com/premium-photo/
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            <div className=" lg:w-[400px] xl:w-[555px] ">
              <div className="neetyellow flex items-center 2xl:px-[45px] 2xl:w-[555px] 2xl:h-[282px] 2xl:my-10 xl:px-[45px] xl:w-[390px] xl:h-[200px] xl:my-10 lg:p-5 lg:my-5">
                <div>
                  <h1 className="inter font-[700] 2xl:text-[30px] 2xl:leading-[40px] xl:text-[18px] xl:leading-[30px] lg:text-[16px] lg:leading-[25px] xl:my-2">
                    Join AN’24’s
                  </h1>
                  <hr />
                  <h1 className="inter font-[600] 2xl:text-[24px] 2xl:leading-[34px] xl:text-[16px] xl:leading-[30px] lg:text-[16px] lg:leading-[25px] my-4">
                    Upcoming Counselling Webinar
                  </h1>
                  <div className="flex justify-between">
                    <p className="inter font-[600] 2xl:text-[18px] 2xl:leading-[28px] xl:text-[12px] xl:leading-[24px] lg:text-[10px] lg:leading-[18px]">
                      Link
                    </p>
                    <p className="inter font-[400] 2xl:text-[18px] 2xl:leading-[28px] xl:text-[12px] xl:leading-[24px] lg:text-[10px] lg:leading-[18px]">
                      https://www.loreminfo.com
                    </p>
                  </div>
                  <div className="flex justify-between">
                    <p className="inter font-[600] 2xl:text-[18px] 2xl:leading-[28px] xl:text-[12px] xl:leading-[24px] lg:text-[10px] lg:leading-[18px]">
                      Date
                    </p>
                    <p className="inter font-[400] 2xl:text-[18px] 2xl:leading-[28px] xl:text-[12px] xl:leading-[24px] lg:text-[10px] lg:leading-[18px]">
                      July 26, 2024
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-[#F6F6F6] xl:p-8 lg:p-5">
                <h1 className="inter font-[700] 2xl:text-[30px] 2xl:leading-[40px] xl:text-[18px] xl:leading-[30px] lg:text-[14px] lg:leading-[25px]">
                  Learn Aroma
                </h1>
                <p className="inter font-[400] 2xl:text-[18px] 2xl:leading-[28px] xl:text-[12px] xl:leading-[20px] lg:text-[10px] lg:leading-[16px] 2xl:w-[410px] xl:w-[270px] lg:w-[200px] 2xl:my-5 ">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry,s
                  standard dummy text
                </p>
                <Image
                  src={neet4}
                  className="2xl:w-[461px] 2xl:h-[215px] 2xl:my-4 xl:mt-10 mt-5"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default NeetUG;
