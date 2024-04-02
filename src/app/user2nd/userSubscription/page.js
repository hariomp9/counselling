import React from "react";
import Image from "next/image";
import UserSidebar from "../userSidebar";
import UserNavbar from "../userNav";
import starterplan from "../assets/starterplan.svg";
import basicplan from "../assets/basicplan.svg";
import proplan from "../assets/proplan.svg";
import advanceplan from "../assets/advanceplan.svg";
import right from "../assets/right.svg";

const data = [
  {
    para: "Lorem Ipsum",
  },
  {
    para: "Lorem Ipsum is simply",
  },
  {
    para: "Lorem Ipsum",
  },
  {
    para: "Lorem Ipsum is simply",
  },

  {
    para: "Lorem Ipsum",
  },
  {
    para: "Lorem Ipsum is simply",
  },
];
const UserSubscription = () => {
  return (
    <>
      <section>
        <div className="flex">
          <div className="">
            <UserSidebar />
          </div>
          <div className="w-11/12">
            <UserNavbar />
            <div>
              <div className="flex justify-center 2xl:mt-[45px] xl:mt-[30px] lg:mt-[30px]">
                <div>
                  <h1 className="inter font-[600] text-center 2xl:text-[25px] 2xl:leading-[45px] xl:text-[18px] xl:leading-[28px] text-[14px] leading-[20px]">
                    Tailored Pricing Plan Designed for you
                  </h1>
                  <p className="inter font-[400] text-center mx-auto px-5 2xl:my-1 2xl:text-[14px] 2xl:leading-[20px] xl:text-[10px] xl:leading-[16px] text-[8px] leading-[14px] 2xl:w-[361px] xl:w-[250px] lg:w-[200px]">
                    All plans include features to boost your search. Choose the
                    best plan to fit your needs.
                  </p>
                </div>
              </div>

              <div className="flex justify-center 2xl:gap-[30px] xl:gap-[20px] lg:gap-[15px]">
                <div className="subsBox">
                  <div className="subsimgBox">
                    <Image src={starterplan} className="subsImg" />
                  </div>
                  <div className="subsPlan">
                    <p className="subsplantext">Starter Plan</p>

                    <h1 className="subsplanprice">Free</h1>
                  </div>
                  <div className="subsplantermBox">
                    {data.map((item) => (
                      <div key={item.id} className="flex gap-4 my-[5px]">
                        <div className="flex justify-center items-center rounded-full w-[16px] h-[16px] bg-[#DCEDFA]">
                          <Image src={right} className="w-[8px] h-[6px]" />
                        </div>
                        <p className="planpara">{item.para}</p>
                      </div>
                    ))}
                    <button className="subsBtn">Get Started</button>
                  </div>
                </div>{" "}
                <div className="subsBox">
                  <div className="subsimgBox">
                    <Image src={basicplan} className="subsImg" />
                  </div>
                  <div className="subsPlan">
                    <p className="subsplantext">Basic Plan</p>

                    <h1 className="subsplanprice">₹650</h1>
                  </div>
                  <div className="subsplantermBox">
                    {data.map((item) => (
                      <div key={item.id} className="flex gap-4 my-[5px]">
                        <div className="flex justify-center items-center rounded-full w-[16px] h-[16px] bg-[#DCEDFA]">
                          <Image src={right} className="w-[8px] h-[6px]" />
                        </div>
                        <p className="planpara">{item.para}</p>
                      </div>
                    ))}
                    <button className="subsBtn">Get Started</button>
                  </div>
                </div>{" "}
                <div className="subsBox">
                  <div className="subsimgBox">
                    <Image src={proplan} className="subsImg" />
                  </div>
                  <div className="subsPlan">
                    <p className="subsplantext">Pro Plan</p>

                    <h1 className="subsplanprice">₹1000</h1>
                  </div>
                  <div className="subsplantermBox">
                    {data.map((item) => (
                      <div key={item.id} className="flex gap-4 my-[5px]">
                        <div className="flex justify-center items-center rounded-full w-[16px] h-[16px] bg-[#DCEDFA]">
                          <Image src={right} className="w-[8px] h-[6px]" />
                        </div>
                        <p className="planpara">{item.para}</p>
                      </div>
                    ))}
                    <button className="subsBtn">Get Started</button>
                  </div>
                </div>{" "}
                <div className="subsBox">
                  <div className="subsimgBox">
                    <Image src={advanceplan} className="subsImg" />
                  </div>
                  <div className="subsPlan">
                    <p className="subsplantext">Advance Counselling</p>

                    <h1 className="subsplanprice">₹1550</h1>
                  </div>
                  <div className="subsplantermBox">
                    {data.map((item) => (
                      <div key={item.id} className="flex gap-4 my-[5px]">
                        <div className="flex justify-center items-center rounded-full w-[16px] h-[16px] bg-[#DCEDFA]">
                          <Image src={right} className="w-[8px] h-[6px]" />
                        </div>
                        <p className="planpara">{item.para}</p>
                      </div>
                    ))}
                    <button className="subsBtn">Get Started</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default UserSubscription;
