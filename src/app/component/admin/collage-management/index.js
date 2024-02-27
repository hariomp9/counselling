import React, { Fragment, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Dialog, Transition } from "@headlessui/react";
import axios from "axios";
import DeleteModule from "./delete-module";
import CreateCollege from "./addd-module";
import UpdateMmodule from "./update-module";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Loader from "../../loader";

export const headItems = [
  "S. No.",
  "College Name",
  "Courses",
  " Contact No",
  "Email",
  "Website",
  "Action",
];

const CollageManagement = () => {
  const [collegeID, setCollegeID] = useState("");
  const [isRefresh, setRefresh] = useState(false);
  const [isOpenDelete, setOpenDelete] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isDrawerOpenO, setIsDrawerOpenO] = useState(false);
  const [editCollege, setCollegeEdit] = useState("");
  const [editData, setEditData] = useState([]);
  const [getCollage, setGetCollage] = useState("");
  const [isLoader, setLoader] = useState(false);


  const closeDrawerO = () => {
    setIsDrawerOpenO(false);
  };

  function closeModal() {
    setOpenDelete(false);
  }

  function openModal(id) {
    setCollegeID(id);
    setOpenDelete(true);
  }

  const openDrawer = () => {
    setIsDrawerOpen(true);
  };

  const closeDrawer = () => {
    setIsDrawerOpen(false);
  };
  const refreshData = () => {
    setRefresh(!isRefresh);
  };

  useEffect(() => {
    defaultCollage();
  }, [isRefresh]);

  const defaultCollage = () => {
    setLoader(true);

    const option = {
      method: "GET",
      url: "http://localhost:4000/api/collage/getAllColleges",
    };
    axios
      .request(option)
      .then((response) => {
        setGetCollage(response?.data?.colleges);
        setEditData(response?.data?.colleges);
        setLoader(false);
      })
      .catch((error) => {
        console.log("Error", error);
      });
  };

  const openModall = async (id) => {
    setLoader(true);
    try {
      const options = {
        method: "GET",
        url: `http://localhost:4000/api/collage/getCollegeById/${id}`,
      };
      const response = await axios.request(options);
      if (response.status === 200) {
        setEditData(response?.data);
        setCollegeID(id);

        console.log(response, "A Event");

        setIsDrawerOpenO(true);
        setLoader(false);
      } else {
        console.error("Error: Unexpected response status");
        // setLoader(false);
      }
    } catch (error) {
      console.error(error);
      // setLoader(false);
    }
  };
  return (
    <>
     {isLoader && <Loader/> }
      <ToastContainer autoClose={1500} />
      <section className="py-[30px] px-[20px] mt-[20px] lg:mt-0">
        <div className=" mx-auto">
          <div className="rounded-[10px] bg-white py-[15px] flex justify-between items-center px-[20px]">
            <p className=" text-[22px] font-semibold">Collage Management</p>
            <div className="flex gap-x-7 lg:gap-x-5 md:flex-auto flex-wrap gap-y-3  items-center justify-center ">
              <div className="border border-[gray] rounded-[5px] bg-[#302f2f82]] flex justify-center items-center h-[32px] pl-[10px] md:w-auto w-full">
                <input
                  type="text"
                  className="focus-visible:outline-none border-none w-full rounded-[5px] font-normal text-[15px] text-[#6a6969] placeholder:text-[11px]"
                  placeholder="Search by name, course , contact, email"
                />

                <button className="px-1 rounded text-[12px] text-[gray] border border-[#6a696917] hover:text-black mr-1"></button>

                <button className="px-6 rounded text-[12px] text-[gray] h-[32px] bg-[#6a696917] hover:text-black">
                  Search
                </button>
              </div>
            </div>
            <div className=" flex justify-end  items-center">
              <div>
                <button
                  onClick={openDrawer}
                  className="border hover:bg-gray-300 rounded-md my-auto bg-black text-white cursor-pointer 2xl:p-3  2xl:text-[22px] xl:p-2 xl:text-[14px] lg:p-[6px] lg:text-[12px] md:text-[10px] md:p-1 sm:text-[10px] sm:p-1 p-[3px] text-[12px]"
                >
                  Add College
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
              {Array.isArray(getCollage) && getCollage.length > 0 && (
                <tbody>
                  {getCollage.map((item, index) => (
                    <tr key={index}>
                      <td className="text-[14px] font-[400] py-3 px-5">
                        {index + 1}
                      </td>
                      <td className="text-[14px] font-[400] py-3 px-5 capitalize">
                        {item.name}
                      </td>
                      <td className="text-[14px] font-[400] py-3 px-5">
                        {Array.isArray(item.courses)
                          ? item.courses.map((course) => course.name).join(", ")
                          : item.courses.name}
                      </td>
                      <td className="text-[14px] font-[400] py-3 px-5">
                        {item.phone}
                      </td>
                      <td className="text-[14px] font-[400] py-3 px-5">
                        {item.email}
                      </td>
                      <td className="text-[14px] font-[400] py-3 px-5">
                        {item.website}
                      </td>
                      <td className="text-[14px] font-[400] py-3 px-5">
                        <div className="flex flex-col md:flex-row items-center gap-x-5">
                          <button
                            className="px-4 text-[13px] border rounded h-[25px] text-sky-600 hover:bg-[#efb3b38a]"
                            onClick={() => openModall(item?._id)}
                          >
                            Edit
                          </button>
                          <button
                            className="px-4 text-[13px] border rounded h-[25px] text-[red] hover:bg-[#efb3b38a]"
                            onClick={() => openModal(item?._id)}
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
        </div>
      </section>

      {/*---------- Delete popup---------- */}

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
                  <DeleteModule
                    collegeID={collegeID}
                    closeModal={closeModal}
                    refreshData={refreshData}
                  />
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>

      <Transition appear show={isDrawerOpen} as={Fragment}>
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
            <div className="flex min-h-full items-center justify-center p-1 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-2/3 sm:w-full sm:max-w-[500px] transform overflow-hidden rounded-2xl bg-white sm:py-6 p-4  sm:px-8 lg:px-8 text-left align-middle shadow-xl transition-all">
                  <div className="flex justify-end">
                    <button onClick={closeDrawer}>
                      <img
                        src="/images/close-square.svg"
                        className="w-7 md:w-7 lg:w-8 xl:w-9 2xl:w-14"
                      />
                    </button>
                  </div>
                  <CreateCollege
                    closeDrawer={closeDrawer}
                    refreshData={refreshData}
                  />
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>

      <Transition appear show={isDrawerOpenO} as={Fragment}>
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
                <Dialog.Panel className="w-2/3 sm:w-full sm:max-w-[500px]  transform overflow-hidden rounded-2xl bg-white p-4  sm:px-8 lg:px-8 text-left align-middle shadow-xl transition-all">
                  <div className="flex justify-end">
                    <button onClick={closeDrawerO}>
                      <img
                        src="/images/close-square.svg"
                        className="w-7 md:w-7 lg:w-8 xl:w-9 2xl:w-14"
                      />
                    </button>
                  </div>
                  <UpdateMmodule
                    cateEdit={editCollege}
                    closeDrawerO={closeDrawerO}
                    refreshData={refreshData}
                    editData={editData}
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

export default CollageManagement;
