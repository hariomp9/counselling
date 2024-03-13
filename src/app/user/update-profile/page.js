import React from "react";
import Image from "next/image";
import female from "../../../../public/images/female.svg";
import Navbar from "../navbar";
import SideBar from "../sideBar";

const UserProfile = () => {
  return (
    <>
      <section>
        <div className="flex">
         <SideBar/>
          <div className="lg:w-11/12 w-full">
           <Navbar/>

            <div>
              <div className="2xl:h-[58px] xl:h-[50px] lg:h-[45px] md:h-[40px] sm:h-[35px] h-[35px] text-[14px] bg-[#E7F4FD] flex items-center">
                <h1 className="montserrat-countinue 2xl:leading-[19.5px] 2xl:text-[16px]  2xl:p-10 pl-5">
                  Parent’s Details<span className="text-[#E72027]">*</span>
                </h1>
              </div>
              <form className="md:flex 2xl:gap-20 xl:gap-10 gap-7 2xl:pl-10 pl-5 2xl:my-5">
                <div className="my-3">
                  <label
                    htmlFor="email"
                    className="montserrat-lable block userprofileU "
                  >
                    Name
                  </label>
                  <input
                    required
                    type="text"
                    id="Name"
                    name="Name"
                    className=" quicksand font-[600] text-[#979797]  px-6 xl:py-4  xl:my-1 2xl:my-1 userupdateInputs"
                  />
                </div>
                <div className="my-3">
                  <label
                    htmlFor="email"
                    className="montserrat-lable block userprofileU "
                  >
                    Phone Number
                  </label>
                  <input
                    required
                    type="number"
                    id="Name"
                    name="Name"
                    className=" quicksand font-[600] text-[#979797] px-6 xl:py-4 xl:my-1 2xl:my-1 userupdateInputs"
                  />
                </div>
                <div className="my-3">
                  <label
                    htmlFor="email"
                    className="montserrat-lable block userprofileU "
                  >
                    City
                  </label>
                  <input
                    required
                    type="text"
                    id="Name"
                    name="Name"
                    className=" quicksand font-[600] text-[#979797] px-6 xl:py-4 xl:my-1 2xl:my-1 outline-[#0071BC] userupdateInputs"
                  />
                </div>
                <button
                  type="submit"
                  className="montserrat-btn mt-1 mb-5 md:my-7 lg:my-7 xl:my-8 userupdateBtn"
                >
                  Save Changes
                </button>
              </form>
            </div>

            <div className=" 2xl:mt-40 xl:mt-20 lg:mt-12 md:mt-10">
              <div className="2xl:h-[58px] xl:h-[50px] lg:h-[45px] md:h-[40px] sm:h-[35px] h-[35px] text-[14px] bg-[#E7F4FD] flex items-center">
                <h1 className="montserrat-countinue 2xl:leading-[19.5px] 2xl:text-[16px]  2xl:p-10 pl-5">
                  Student Details<span className="text-[#E72027]">*</span>
                </h1>
              </div>
              <form className="">
                <div className="md:flex 2xl:gap-20 xl:gap-10 gap-7 2xl:pl-10 pl-5 xl:mt-5 md:mt-3 ">
                  <div className="my-3">
                    <label
                      htmlFor="email"
                      className="montserrat-lable block userprofileU "
                    >
                      Name
                    </label>
                    <input
                      required
                      type="text"
                      id="Name"
                      name="Name"
                      className=" quicksand font-[600] text-[#979797] px-6 xl:py-4 xl:my-1 2xl:my-1 outline-[#0071BC] userupdateInputs"
                    />
                  </div>
                  <div className="my-3">
                    <label
                      htmlFor="email"
                      className="montserrat-lable block userprofileU "
                    >
                      Email
                    </label>
                    <input
                      required
                      type="number"
                      id="Name"
                      name="Name"
                      className=" quicksand font-[600] text-[#979797] px-6 xl:py-4 xl:my-1 2xl:my-1 outline-[#0071BC] userupdateInputs"
                    />
                  </div>
                  <div className="my-3">
                    <label
                      htmlFor="email"
                      className="montserrat-lable block userprofileU "
                    >
                      Phone Number
                    </label>
                    <input
                      required
                      type="text"
                      id="Name"
                      name="Name"
                      className=" quicksand font-[600] text-[#979797] px-6 xl:py-4 xl:my-1 2xl:my-1 outline-[#0071BC] userupdateInputs"
                    />
                  </div>
                </div>
                <div className="flex 2xl:gap-20 xl:gap-10 lg:gap-7 pl-5  2xl:my-5">
                  <div>
                    <div className="flex gap-20 2xl:pl-5">
                      <div>
                        <div className="md:flex 2xl:gap-20 xl:gap-10 gap-7 my-3">
                          <div className="my-2 md:my-0">
                            <label
                              htmlFor="email"
                              className="montserrat-lable block userprofileU "
                            >
                              Gender
                            </label>
                            <div className="flex xl:w-[200px] 2xl:w-[286px]">
                              <button
                                id="states-button"
                                data-dropdown-toggle="dropdown-states"
                                className=" quicksand font-[600] text-[#979797] border rounded-full 2xl:h-[52px] w-[52px] xl:h-[35px] lg:h-[30px]  xl:my-1 2xl:my-1 outline-[#0071BC] 2xl:text-[16px] xl:text-[12px] lg:text-[10px] rounded-r-[0px]"
                                type="button"
                              >
                                <Image
                                  src={female}
                                  className="mx-auto lg:w-auto md:w-3"
                                />
                              </button>
                              <div
                                id="dropdown-states"
                                className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow"
                              >
                                <ul
                                  className="py-2 text-sm text-gray-700 dark:text-gray-200"
                                  aria-labelledby="states-button"
                                >
                                  <li>
                                    <button
                                      type="button"
                                      className="inline-flex w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
                                    ></button>
                                  </li>
                                </ul>
                              </div>
                              <label
                                htmlFor="states"
                                className="sr-only"
                              ></label>
                              <select
                                id="states"
                                className=" quicksand font-[600]  text-black border rounded-full px-6 xl:py-4  2xl:h-[52px] xl:h-[35px] l h-[30px] 2xl:w-full xl:my-1 2xl:my-1 outline-[#0071BC] 2xl:text-[16px] xl:text-[12px] text-[10px] rounded-l-[0px] xl:w-[200px] lg:w-[115px]  w-[120px]"
                              >
                                <option value="TX">Female</option>
                                <option value="CA">Male</option>
                              </select>
                            </div>
                          </div>

                          <div className="my-2 md:my-0">
                            <label
                              htmlFor="email"
                              className="montserrat-lable block text-black  userprofileU "
                            >
                              College Type
                            </label>
                            <select
                              id="states"
                              className=" quicksand font-[600] text-black border rounded-full px-6 xl:py-4  2xl:h-[52px] xl:h-[35px] h-[30px] xl:my-1 2xl:my-1 outline-[#0071BC] 2xl:text-[16px] xl:text-[12px] text-[10px] 2xl:w-[286px] xl:w-[200px] lg:w-[167px]  w-[170px]"
                            >
                              <option value="TX">Pvt</option>
                              <option value="TX">Government</option>
                            </select>
                          </div>

                          <div className="my-2 md:my-0">
                            <label
                              htmlFor="email"
                              className="montserrat-lable block userprofileU "
                            >
                              Course Type
                            </label>
                            <select
                              id="states"
                              className=" quicksand font-[600] text-black border rounded-full px-6 xl:py-4  2xl:h-[52px] xl:h-[35px] h-[30px] xl:my-1 2xl:my-1 outline-[#0071BC] 2xl:text-[16px] xl:text-[12px] text-[10px] 2xl:w-[286px] xl:w-[200px] lg:w-[167px]  w-[170px]"
                            >
                              <option value="TX">MD</option>
                              <option value="TX">HR</option>
                            </select>
                          </div>

                          <div>
                            <button
                              type="submit"
                              className=" montserrat-btn mt-2 mb-5 md:my-4 xl:my-6 userupdateBtn"
                            >
                              Save Changes
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default UserProfile;