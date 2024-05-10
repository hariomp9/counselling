'use client'
import React, { useEffect, useState } from "react";
import UserSidebar from "../userSidebar";
import UserNavbar from "../userNav";
import woman2 from "../assets/woman2.svg";
import Image from "next/image";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const PrivateCounselling = () => {

  const [buttonClicked, setButtonClicked] = useState(false);

  useEffect(() => {
    if (buttonClicked) {
      toast.success(
        "Your request for Premium counselling is received. Our expert counseller will get in touch with you shortly.",
        {
          autoClose: 5000, // Adjust the auto close duration as needed
          onClose: () => setButtonClicked(false), // Reset buttonClicked state after toast disappears
        }
      );
    }
  }, [buttonClicked]);
  return (
    <>
      <section>
        <div className="flex">
          <div className="">
            <UserSidebar />
          </div>
          <div className="w-full">
            <UserNavbar />

            <div className="2xl:w-[1725px] xl:w-[1800px] xl:h-[130px] bg-[#F5F6FF] font-inter mt-[20px] ml-[50px] rounded-[10px] flex items-center">
              <div className="ml-20">
                <div className="text-[36px]  font-[700]">
                  Welcome to Private Counselling
                </div>
                <div className="text-black font-[400] mt-4 text-[15px]">
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                </div>
              </div>
            </div>

            <div className="flex">
              <div className="flex-start ml-6">
                <Image
                  src={woman2}
                  alt="Description of the image"
                  width={552.76}
                  height={492}
                  className="mt-[30px]"
                  style={{ minWidth: "552.76px", minHeight: "492px" }}
                />
              </div>

              <div className="flex flex-col justify-between ml-[20px] mt-[30px] ml-[200px]">
                <div className="mr-[300px] ">
                  <div className="w-[263px] font-[700] h-[36px] text-[30px] flex justify-end">
                    1 on 1 Counselling
                  </div>

                  <div className="font-inter mt-[40px] font-[400] text-[20px]">
                    It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at
                    its layout. The point of using Lorem Ipsum is that it has a
                    more-or-less normal distribution of letters, as opposed to
                    using 'Content here, content here, making it look like
                    readable English.
                    <div className="mt-2">
                      It is a long established fact that a reader will be
                      distracted by the readable content of a page when looking
                      at its layout. The point of using Lorem Ipsum is that it
                      has a more-or-less normal distribution of letters, as
                      opposed to using 'Content here, content here, making it
                      look like readable English.
                    </div>
                  </div>
                </div>

                {buttonClicked ? null : (
                  <div className="bg-[#4F9ED9] w-[217px] h-[48px] flex justify-center items-center rounded-md cursor-pointer mb-5">
                    <button
                      className="bg-[#4F9ED9] text-white rounded-md px-4 py-2"
                      onClick={() => setButtonClicked(true)}
                    >
                      Click Here To Subscribe
                    </button>
                  </div>
                )}

                <ToastContainer
                  autoClose={5000}
                  position="top-center"
                  className="mt-[700px] ml-[270px] text-[20px] w-[695px] h-[123px] rounded-[10px] font-[500]"
                  style={{ width: "695px", fontSize: "20px", fontWeight: 500 }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PrivateCounselling;
