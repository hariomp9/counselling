"use client";
import axios from "axios";
import React, { useEffect, useState, Fragment } from "react";
import Image from "next/image";
import news from "../../../../../public/news/news.webp";
import { Dialog, Transition } from "@headlessui/react";
import DeleteNews from "./delete-news/page";
import { useSelector } from "react-redux";

const News = () => {
  const [getNews, setGetNews] = useState("");
  const [openDelete, setOpenDelete] = useState(false);
  const [newsID, setNewsID] = useState("");
  const [isRefresh, setRefresh] = useState(false);
  const { token } = useSelector((state) => state?.auth);

  function openModal(id) {
    setNewsID(id);
    setOpenDelete(true);
  }
  function closeModal() {
    setOpenDelete(false);
  }
  const closeDeleteModal = () => {
    setOpenDelete(false);
  };
  const refreshData = () => {
    setRefresh(!isRefresh);
  };
  useEffect(() => {
    defaultNews();
  }, [isRefresh]);

  const defaultNews = () => {
    const option = {
      method: "GET",
      url: "https://counselling-backend.vercel.app/api/news/getAllNews",
    };
    axios
      .request(option)
      .then((response) => {
        setGetNews(response?.data?.news);
        console.log(response?.data?.news, "news");
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
        url: `https://counselling-backend.vercel.app/api/news/getAllNews?search=${search}`,
        headers: {
          authorization: token,
        },
      };
      axios
        .request(options)
        .then(function (response) {
          if (response.status === 200) {
            setGetNews(response?.data?.news);
          }
        })
        .catch(function (error) {
          console.error(error);
        });
    }
  };

  return (
    <>
      <section>
        <div className="rounded-[10px] bg-white py-[15px] flex justify-between items-center px-[20px]">
          <p className=" text-[22px] font-semibold">News list</p>
          <div className="flex gap-x-7 lg:gap-x-5 md:flex-auto flex-wrap gap-y-3  items-center justify-center md:justify-end">
            <div className="border border-[gray] rounded-[5px] bg-[#302f2f82]] flex justify-center items-center h-[32px] pl-[10px] md:w-auto w-full">
              <input
                type="text"
                className="focus-visible:outline-none border-none w-full rounded-[5px] font-normal text-[15px] text-[#6a6969] placeholder:text-[11px]"
                placeholder="Search"
                onChange={handleSearch}
              />

              <button className="px-1 rounded text-[12px] text-[gray] border border-[#6a696917] hover:text-black mr-1"></button>

              <button className="px-6 rounded text-[12px] text-[gray] h-[32px] bg-[#6a696917] hover:text-black">
                Search
              </button>
            </div>
          </div>
        </div>
        <div className="px-7 ">
          <div className=" flex justify-end items-center">
            <div>
              <a href="/component/admin/news/add-news">
                <button
                  // onClick={openDrawer}
                  className="border hover:bg-gray-300 rounded-md my-auto bg-black text-white cursor-pointer 2xl:p-3  2xl:text-[22px] xl:p-2 xl:text-[14px] lg:p-[6px] lg:text-[12px] md:text-[10px] md:p-1 sm:text-[10px] sm:p-1 p-[3px] text-[12px]"
                >
                  Add News
                </button>
              </a>
            </div>
          </div>
        </div>
        <div className="overflow-x-auto p-7">
          <table className="table">
            <thead>
              <tr>
                <th>Image</th>
                <th>Title</th>
                <th>Description</th>
                <th>Action</th>
              </tr>
            </thead>
            {Array.isArray(getNews) && getNews.length > 0 && (
              <tbody>
                {getNews.map((item, index) => (
                  <tr key={item.id}>
                    <td>
                      <Image alt="new_img" src={news} className="w-40 " />
                    </td>
                    <td className="font-semibold">{item?.title}</td>
                    <td>{item?.description}</td>
                    <td className="text-[14px] font-[400] py-3 px-5">
                      <div className="flex flex-col justify-start items-start gap-y-3">
                        <a href={`/pages/news-update/${item?._id}`}>
                          <button className="px-4 text-[13px] border rounded h-[25px] text-sky-600 hover:bg-[#efb3b38a]">
                            Edit
                          </button>
                        </a>
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
      </section>
      
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
                    <DeleteNews
                      newsID={newsID}
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

    </>
  );
};

export default News;
