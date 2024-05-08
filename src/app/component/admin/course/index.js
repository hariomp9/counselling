import axios from "axios";
import React, { Fragment, useEffect, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { useSelector } from "react-redux";
import DeleteCourse from "./deleet-modeule";
import Loader from "../../loader";

export const headItems = [
  "S. No.",
  " Course Name",
  "Time Duration",
  "Admission Criteria",
  " Fees",
  "Action",
];

const Course = () => {
  const [getAllCourse, setGetAllCourse] = useState("");
  const [isOpenDelete, setOpenDelete] = useState(false);
  const closeModal = () => setOpenDelete(false);
  const [courseID, setCourseID] = useState("");
  const [isRefresh, setRefresh] = useState(false);
  const [isLoader, setLoader] = useState(false);

  const refreshData = () => {
    setRefresh(!isRefresh);
  };

  function openModal(id) {
    setCourseID(id);
    setOpenDelete(true);
  }

  useEffect(() => {
    defaultCourse();
  }, [isRefresh]);

  const defaultCourse = () => {
    setLoader(true);

    const option = {
      method: "GET",
      url: "https://counselling-backend.vercel.app/api/course/getAllCourses",
    };
    axios
      .request(option)
      .then((response) => {
        setGetAllCourse(response?.data?.courses);
        console.log(response?.data?.courses);
        setLoader(false);
      })
      .catch((error) => {
        console.log(error, "Error");
        setLoader(false);
      });
  };

  return (
    <>
      {isLoader && <Loader />}

      <section className="py-[30px] px-[20px] mt-[20px] lg:mt-0">
        <div className="rounded-[10px] bg-white py-[15px] flex justify-between items-center px-[20px]">
          <p className=" text-[22px] font-semibold">Course list</p>
          <div className="flex gap-x-7 lg:gap-x-5 md:flex-auto flex-wrap gap-y-3  items-center justify-center md:justify-end">
            <div className="border border-[gray] rounded-[5px] bg-[#302f2f82]] flex justify-center items-center h-[32px] pl-[10px] md:w-auto w-full">
              <input
                type="text"
                className="focus-visible:outline-none border-none w-full rounded-[5px] font-normal text-[15px] text-[#6a6969] placeholder:text-[11px]"
                placeholder="Search by name, admissionCriteria, duration."
              />

              <button className="px-1 rounded text-[12px] text-[gray] border border-[#6a696917] hover:text-black mr-1"></button>

              <button className="px-6 rounded text-[12px] text-[gray] h-[32px] bg-[#6a696917] hover:text-black">
                Search
              </button>
            </div>
          </div>
        </div>

        <div className="rounded-[10px] bg-white 2xl:py-[30px] 2xl:px-[20px] flex justify-between items-center mt-[20px] 2xl:p-6 overflow-x-scroll">
          <table className="w-full min-w-[640px] table-auto mt-[20px] ">
            <thead className="">
              <tr className=" ">
                {headItems.map((items, inx) => (
                  <th className="py-3 px-5 text-left bg-white" key={inx}>
                    <p className="block text-[13px] font-medium uppercase text-[#72727b]">
                      {" "}
                      {items}
                    </p>
                  </th>
                ))}
              </tr>
            </thead>

            {Array.isArray(getAllCourse) && getAllCourse.length > 0 && (
              <tbody>
                {getAllCourse.map((item, index) => (
                  <tr key={index}>
                    <td className="text-[14px] font-[400] py-3 px-5">
                      {index + 1}
                    </td>
                    <td className="text-[14px] font-[400] py-3 px-5">
                      {item.name}
                    </td>
                    <td className="text-[14px] font-[400] py-3 px-5 capitalize">
                      {item.duration}Year
                    </td>
                    <td className="text-[14px] font-[400] py-3 px-5">
                      {item.admissionCriteria}
                    </td>
                    <td className="text-[14px] font-[400] py-3 px-5">
                      {item.fees}
                    </td>
                    <td className="text-[14px] font-[400] py-3 px-5">
                      <div className="flex flex-col md:flex-row items-center gap-x-5">
                        <button
                          className="px-4 text-[13px] border rounded h-[25px] text-[red] hover:bg-[#efb3b38a]"
                          onClick={() => openModal(item._id)} //
                        >
                          Delete
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            )}
          </table>
        </div>
      </section>
      <Transition appear show={isOpenDelete} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={() => {}}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-[90%] sm:w-full sm:max-w-[500px] transform overflow-hidden rounded-2xl bg-white p-4  sm:px-8 lg:px-8 2xl:p-10 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="custom_heading_text font-semibold leading-6 text-gray-900 mt lg:mt-5"
                  >
                    Are You Sure! Want to Delete?
                  </Dialog.Title>
                  <DeleteCourse
                    courseID={courseID}
                    closeModal={closeModal}
                    refreshData={refreshData}
                  />
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default Course;
