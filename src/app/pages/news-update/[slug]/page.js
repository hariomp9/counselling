"use client";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/navigation";
import Image from "next/image";
import news from "../../../../../public/news/news.webp";

const UpdateNews = ({ params }) => {
  const router = useRouter();
  const { token } = useSelector((state) => state?.auth);
  const [newsDetail, setNewsDetail] = useState({});
  const inputHandler = (e) => {
    setNewsDetail({ ...newsDetail, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    openModal();
  }, []);

  const openModal = async () => {
    try {
      const options = {
        method: "GET",
        url: `https://counselling-backend.vercel.app/api/news/getNewsById/${params.slug}`,
        headers: {
          Accept: "application/json",
          authorization: token,
        },
      };
      const response = await axios.request(options);
      if (response.status === 200) {
        setNewsDetail(response?.data);
      } else {
        console.error("Error: Unexpected response status");
      }
    } catch (error) {
      console.error(error);
      toast.error("Failed to fetch student details.");
    }
  };

  const handleUpdateNews = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(
        `https://counselling-backend.vercel.app/api/news/updateNews/${params.slug}`,
        newsDetail,
        {
          headers: {
            "Content-Type": "application/json",
            authorization: token,
          },
        }
      );
      if (response.status === 200) {
        toast.success("Update successfully!");
        router.push("/component/admin/news");
      } else {
        console.log("Server error");
      }
    } catch (error) {
      console.log(error?.response?.data?.message || "Server error");
    }
  };

  return (
    <>
      <section>
        <div className="rounded-[10px] bg-white py-[15px] flex justify-between items-center px-[20px] border">
          <p className=" text-[22px] font-semibold">News Update</p>
        </div>
        <form onSubmit={handleUpdateNews}>
          <div className="flex my-10 w-2/3 mx-auto border rounded-md p-5">
            <div className="w-1/2 ">
              <input
                type="file"
                placeholder="Select Image"
                className=" border-[3px] border-dashed h-40 bg-gray-100"
              />
              <div>
                <Image src={news} className="w-40 my-3" />
              </div>
            </div>
            <div className="w-1/2">
              <div className="">
                <label className="custom_input_label">News title</label>
                <input
                  defaultValue={newsDetail?.title}
                  onChange={inputHandler}
                  maxLength={100}
                  required
                  type="text"
                  name="title"
                  className="custom_inputt w-full"
                />
              </div>
              <div className="">
                <label className="custom_input_label"> News Description</label>
                <textarea
                  defaultValue={newsDetail?.description}
                  onChange={inputHandler}
                  required
                  type=""
                  name="description"
                  className="rounded relative border border-gray-300 bg-gray-50 text-gray-500 focus:bg-white dark:border dark:border-gray-600 focus:outline-none w-10/12 lg:w-10/12 2xl:text-sm 2xl:m-10 2xl:px-3 2xl:py-2 2xl:h-[50px] xl:m-5 xl:px-3 xl:py-2 xl:h-[60px] lg:m-5 lg:px-2 lg:py-1 lg:h-[35px] md:m-4 md:px-3 md:py-2 md:h-[30px] sm:m-3 sm:px-2 sm:py-1 sm:h-[30px] m-2 px-2 py-1 h-[25px] text-[10px] "
                />
              </div>
              <div className="w-full ">
                <button type="submit" className="custom_btn">
                  Update News
                </button>
              </div>
            </div>
          </div>
        </form>
      </section>
    </>
  );
};

export default UpdateNews;
