import React, { Fragment, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Dialog, Transition } from "@headlessui/react";
import axios from "axios";

// import Pagination from "../Pagination/Index";
// import DeleteUser from "./DeleteUser";

export const headItems = [
  "S. No.",
  "Name",
  "Age",
  " Grade",
  " Collage Name",
  "Course",
  "Contact No",
  "Action",
];

export const students = [
  {
    name: "Alice",
    age: 20,
    grade: "A",
    contact: "123-456-7890",
    email: "alice@example.com",
    collegeName: "Example University",
    course : "B.Tech",
  },
  {
    name: "Bob",
    age: 21,
    grade: "B",
    contact: "234-567-8901",
    email: "bob@example.com",
    collegeName: "Example University",
     course : "MBA",
  },
  {
    name: "Charlie",
    age: 19,
    grade: "C",
    contact: "345-678-9012",
    email: "charlie@example.com",
    collegeName: "Example University",
     course : "M.Com",
  },
  {
    name: "Diana",
    age: 22,
    grade: "A",
    contact: "456-789-0123",
    email: "diana@example.com",
    collegeName: "Example University",
     course : "B.Tech",
  },
  {
    name: "Eva",
    age: 20,
    grade: "B",
    contact: "567-890-1234",
    email: "eva@example.com",
    collegeName: "Example University",
     course : "BBA",
  },
];

const Students = () => {
  const [isLoading, setLoading] = useState(false);
  const closeModal = () => setOpenDelete(false);
  let [openDelete, setOpenDelete] = useState(false);

  const handleDelete = () => {
    setOpenDelete(true);
  };

  const closeDeleteModal = () => {
    setOpenDelete(false);
  };
  const handleClose = () => {
    closeModal();
  };
  return (
    <>
      <section className="py-[30px] px-[20px] mt-[20px] lg:mt-0">
        <div className=" mx-auto">
          <div className="rounded-[10px] bg-white py-[15px] flex justify-between items-center px-[20px]">
            <p className=" text-[22px] font-semibold">Student list</p>
            <div className="flex gap-x-7 lg:gap-x-5 md:flex-auto flex-wrap gap-y-3  items-center justify-center md:justify-end">
              <div className="border border-[gray] rounded-[5px] bg-[#302f2f82]] flex justify-center items-center h-[32px] pl-[10px] md:w-auto w-full">
                <input
                  type="text"
                  className="focus-visible:outline-none border-none w-full rounded-[5px] font-normal text-[15px] text-[#6a6969] placeholder:text-[11px]"
                  placeholder="Search by name, contact, email."
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
              <tbody>
                {students.map((student, index) => (
                  <tr key={index}>
                  <td className="text-[14px] font-[400] py-3 px-5 ">
                      {index + 1 }
                    </td>
                    <td className="text-[14px] font-[400] py-3 px-5">
                      {student.name}
                    </td>
                 
                    <td className="text-[14px] font-[400] py-3 px-5 capitalize">
                      {student.age}
                    </td>
                    <td className="text-[14px] font-[400] py-3 px-5">
                      {student.grade}
                    </td>
                    <td className="text-[14px] font-[400] py-3 px-5">
                      {student.collegeName}
                    </td>
                    <td className="text-[14px] font-[400] py-3 px-5 capitalize">
                      {student.course}
                    </td>
                    <td className="text-[14px] font-[400] py-3 px-5">
                      {student.contact}
                    </td>
                    <td className="text-[14px] font-[400] py-3 px-5">
                      <div className="flex flex-col md:flex-row items-center gap-x-5">
                        <button
                          className="px-4 text-[13px] border rounded h-[25px] text-[red] hover:bg-[#efb3b38a]"
                          onClick={() => handleDelete()}
                        >
                          Delete
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/*---------- Delete popup---------- */}

      <Transition appear show={openDelete} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeDeleteModal}>
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
                <Dialog.Panel className="w-full max-w-[500px] transform overflow-hidden rounded-2xl bg-white py-10 px-12 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="xl:text-[20px] text-[18px] font-medium leading-6 text-gray-900"
                  >
                    <div className="mt-2">
                      <p className="custom_table_text font-normal  text-gray-500 mt-4">
                        Do you really want to delete these records? You can't
                        view this in your list anymore if you delete!
                      </p>
                    </div>

                    <div className="mt-4 lg:mt-8">
                      <div className="flex justify-between gap-x-5">
                        <button
                          className="w-full border border-1 rounded-md border-lightBlue-400 text-lightBlue-700 hover:bg-lightBlue-200 text-sm  px-2 py-3
                              hover:border-none  border-sky-400 text-sky-700 hover:bg-sky-200 custom_btn_d "
                          onClick={handleClose}
                        >
                          No, Keep It
                        </button>

                        <button
                          className={`w-full  rounded-md 
            custom_btn_d 
                              border-red-400 text-red-700 bg-red-200  
                              hover:border-none
                        ${isLoading ? "bg-gray-200" : "hover:bg-red-200"}
                        hover:border-none`}
                        >
                          {isLoading ? "Deleting..." : "Yes, Delete It"}
                        </button>
                      </div>
                    </div>
                  </Dialog.Title>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default Students;
