"use client";
import React, { Fragment, useState, useEffect } from "react";
import axios from "axios";
import Navbar from "../navbar";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useSelector } from "react-redux";
import Loader from "@/app/component/loader";
import SideBar from "../sideBar";

export const headItems = [
  "S. No.",
  "College Name",
  "Courses",
  " Contact No",
  "Email",
  "Website",
  "Action",
];

const Colleges = () => {
  const { token } = useSelector((state) => state?.auth);
  const [isLoader, setLoader] = useState(false);
  const [getCollage, setGetCollage] = useState("");
  const [isRefresh, setRefresh] = useState(false);

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
        setLoader(false);
      })
      .catch((error) => {
        console.log("Error", error);
      });
  };
  const handleAddToFavorite = async (id) => {
    setLoader(true);

    try {
      const response = await axios.post(
        "http://localhost:4000/api/auth/addToWishlist",
        {
          collegeId: id,
        },
        {
          headers: {
            Accept: "application/json",
            Authorization: token,
          },
        }
      );

      if (response.status === 200) {
        toast.success("Added to favorites successfully!");
        refreshData();
        setLoader(false);
      } else {
        toast.error("Failed. Something went wrong!");
        setLoader(false);
      }
    } catch (error) {
      console.error(error);
      toast.error("Failed. Something went wrong!");
    } finally {
      setLoader(false);
    }
  };
  return (
    <>
      <ToastContainer autoClose={1000} className="mt-10" />
      {isLoader && <Loader />}
      <section>
        <div className="flex">
          <SideBar />
          <div className="w-full lg:w-11/12">
            <Navbar />
            <div className="sm:m-10 m-5">
              <div className="rounded-[10px] bg-white 2xl:py-[30px] 2xl:px-[20px] flex justify-between items-center mt-[20px] 2xl:p-6 overflow-x-scroll">
                <table className="w-full min-w-[640px] table-auto mt-[20px] border">
                  <thead className="">
                    <tr className=" ">
                      {headItems.map((items, inx) => (
                        <th className="py-3 px-5 text-left bg-white " key={inx}>
                          <p className="block text-[13px] font-medium uppercase text-[#72727b] ">
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
                              ? item.courses
                                  .map((course) => course.name)
                                  .join(", ")
                              : item.courses.name}
                          </td>
                          <td className="text-[14px] font-[400] py-3 px-5">
                            {item.phone}
                          </td>
                          <td className="text-[14px] font-[400] py-3 px-5">
                            {item.email}
                          </td>
                          <td className="text-[14px] font-[400] py-3 px-5 ">
                            {item.website}
                          </td>
                          <td className="text-[14px] font-[400] py-3 px-5">
                            <div className="flex flex-col md:flex-row items-center gap-x-5">
                              <button
                                className="px-2 text-[13px] border rounded h-[30px] text-sky-600 w-28"
                                onClick={() => handleAddToFavorite(item?._id)}
                              >
                                Add Favorites
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
          </div>
        </div>
      </section>
    </>
  );
};

export default Colleges;
