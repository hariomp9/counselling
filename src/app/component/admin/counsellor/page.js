"use client";
import React, { Fragment, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Dialog, Transition } from "@headlessui/react";
import axios from "axios";
import Link from "next/link";
import AddCounsellor from "./add-counsellor/page";
import DeleteModule from "./delete-module";
import { useSelector } from "react-redux";
// import Pagination from "../Pagination/Index";

export const headItems = ["S. No.", "Name", " Contact No", "Email", "Action"];

const Counsellor = () => {
  const { token } = useSelector((state) => state?.auth);
  const [openDelete, setOpenDelete] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isRefresh, setRefresh] = useState(false);
  const [getCounsellor, setGetCounsellor] = useState("");
  const [counsellorID, setCounsellorID] = useState("");
  const [editData, setEditData] = useState([]);
  const [isLoader, setLoader] = useState(false);

  function openModal(id) {
    setCounsellorID(id);
    setOpenDelete(true);
  }

  function closeModal() {
    setOpenDelete(false);
  }
  const closeDeleteModal = () => {
    setOpenDelete(false);
  };
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
    defaultCounsellor();
  }, [!isRefresh]);

  const defaultCounsellor = () => {
    const option = {
      method: "GET",
      url: "https://counselling-backend.vercel.app/api/counselor/getAllCounselors",
    };
    axios
      .request(option)
      .then((response) => {
        setGetCounsellor(response?.data?.counselors);
      })
      .catch((error) => {
        console.log(error, "Error");
      });
  };

  const handleSearch = (e) => {
    const search = e.target.value;
    if (search.trim() === "") {
      refreshData();
    } else {
      const options = {
        method: "GET",
        url: `https://counselling-backend.vercel.app/api/counselor/getAllCounselors?search=${search}`,
        headers: {
          authorization: token,
        },
      };
      axios
        .request(options)
        .then(function (response) {
          if (response.status === 200) {
            setGetCounsellor(response?.data?.counselors);
          }
        })
        .catch(function (error) {
          console.error(error);
        });
    }
  };

  return (
    <>
      <section className="py-[30px] px-[20px] mt-[20px] lg:mt-0">
        <div className=" mx-auto">
          <div className="rounded-[10px] bg-white py-[15px] flex justify-between items-center px-[20px]">
            <p className=" text-[22px] font-semibold">Counsellor list</p>
            <div className="flex gap-x-7 lg:gap-x-5 md:flex-auto flex-wrap gap-y-3  items-center justify-center ">
              <div className="border border-[gray] rounded-[5px] bg-[#302f2f82]] flex justify-center items-center h-[32px] pl-[10px] md:w-auto w-full">
                <input
                  type="text"
                  className="focus-visible:outline-none border-none w-full rounded-[5px] font-normal text-[15px] text-[#6a6969] placeholder:text-[11px]"
                  placeholder="Search by name, contact, email."
                  onChange={handleSearch}
                />

                <button className="px-1 rounded text-[12px] text-[gray] border border-[#6a696917] hover:text-black mr-1"></button>

                <button className="px-6 rounded text-[12px] text-[gray] h-[32px] bg-[#6a696917] hover:text-black">
                  Search
                </button>
              </div>
            </div>
            <div className=" flex justify-end  items-center">
              <div>
                <a href="/component/admin/counsellor/add-counsellor">
                  <button
                    // onClick={openDrawer}
                    className="border hover:bg-gray-300 rounded-md my-auto bg-black text-white cursor-pointer 2xl:p-3  2xl:text-[22px] xl:p-2 xl:text-[14px] lg:p-[6px] lg:text-[12px] md:text-[10px] md:p-1 sm:text-[10px] sm:p-1 p-[3px] text-[12px]"
                  >
                    Add Counsellor
                  </button>
                </a>
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

              {Array.isArray(getCounsellor) && getCounsellor.length > 0 && (
                <tbody>
                  {getCounsellor.map((item, index) => (
                    <tr key={index}>
                      <td className="text-[14px] font-[400] py-3 px-5">
                        {index + 1}
                      </td>
                      <td className="text-[14px] font-[400] py-3 px-5">
                        {item.firstname} {item.lastname}
                      </td>
                      <td className="text-[14px] font-[400] py-3 px-5">
                        {item.email}
                      </td>
                      <td className="text-[14px] font-[400] py-3 px-5 capitalize">
                        {item.mobile}
                      </td>
                      <td className="text-[14px] font-[400] py-3 px-5">
                        <div className="flex flex-col md:flex-row items-center gap-x-5">
                          <Link href={`/pages/counsellor-update/${item?._id}`}>
                            <button
                              className="px-4 text-[13px] border rounded h-[25px] text-sky-600 hover:bg-[#efb3b38a]"
                              // onClick={() => openModall(item?._id)}
                            >
                              Edit
                            </button>
                          </Link>
                          <button
                            className="px-4 text-[13px] border rounded h-[25px] text-[red] hover:bg-[#efb3b38a]"
                            onClick={() => openModal(item._id)}
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

          {/* {Array.isArray(allData?.users) && allData?.users?.length === 0 && (
            <div className="py-4 px-4 w-full flex flex-col items-center justify-center border border-[#f3f3f3] bg-white rounded-[20px] mt-[10px]">
              <p className="text-[18px] fontsemibold">No data</p>
            </div>
          )} */}
        </div>

        {/* {allData?.pagination?.totalPages > 1 && (
          <Pagination
            currentpage={allData?.pagination?.currentPage}
            totalCount={allData?.pagination?.totalPages}
            visiblePageCount={visiblePageCount}
            getAllData={getAllData}
          />
        )} */}
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
                    <DeleteModule
                      counsellorID={counsellorID}
                      closeModal={closeModal}
                      refreshData={refreshData}
                    />
                  </Dialog.Title>
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
                  <AddCounsellor
                    closeDrawer={closeDrawer}
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

export default Counsellor;
