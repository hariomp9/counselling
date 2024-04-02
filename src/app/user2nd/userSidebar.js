import React from "react";
import Image from "next/image";
import sideLogo from "./assets/AN24Logo.svg";
import profile from "./assets/profile.svg";
import documentM from "./assets/document-manage.svg";

const UserSidebar = () => {
  return (
    <>
      <section>
        <div className="hidden lg:block  border h-screen">
          <div className="flex justify-center border border-x-0 pb-3  ">
            <a href="/user/user-dashboard">
              <Image
                src={sideLogo}
                className="mx-auto 2xl:w-24 2xl:h-10 w-20 h-7 mt-5"
              />
            </a>
            <hr />
          </div>
          <div className="flex justify-center mt-6 2xl:mt-10 mx-4">
            <div className="w-4/6 hover:text-[#2083C4]">
              <a href="/user2nd/neetUG-home">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-house w-5 h-5 2xl:w-6 2xl:h-6 mx-auto text-[#66696F]"
                  viewBox="0 0 16 16"
                >
                  <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L2 8.207V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V8.207l.646.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293zM13 7.207V13.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V7.207l5-5z" />
                </svg>
                <p className="2xl:text-[13px] text-[10px] montserrat-countinue text-center ">
                  Home
                </p>
              </a>
            </div>
          </div>
          <div className="flex justify-center  2xl:mt-7 mt-5">
            <div className="w-4/6 hover:text-[#2083C4]">
              <a href="/super-admin/create-user">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-bar-chart w-5 h-5 2xl:w-6 2xl:h-6 mx-auto text-[#66696F]"
                  viewBox="0 0 16 16"
                >
                  <path d="M4 11H2v3h2zm5-4H7v7h2zm5-5v12h-2V2zm-2-1a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM6 7a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1zm-5 4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1z" />
                </svg>
                <p className="2xl:text-[13px] text-[10px] montserrat-countinue text-center">
                  {" "}
                  Rank Predictor
                </p>
              </a>
            </div>
          </div>
          <div className="flex justify-center  2xl:mt-7 mt-5">
            <div className="w-4/6 hover:text-[#2083C4]">
              <a href="/user2nd/userSubscription">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-currency-rupee w-5 h-5 2xl:w-6 2xl:h-6 mx-auto text-[#66696F]"
                  viewBox="0 0 16 16"
                >
                  <path d="M4 3.06h2.726c1.22 0 2.12.575 2.325 1.724H4v1.051h5.051C8.855 7.001 8 7.558 6.788 7.558H4v1.317L8.437 14h2.11L6.095 8.884h.855c2.316-.018 3.465-1.476 3.688-3.049H12V4.784h-1.345c-.08-.778-.357-1.335-.793-1.732H12V2H4z" />
                </svg>
                <p className="2xl:text-[13px] text-[10px] montserrat-countinue text-center">
                  Subscription
                </p>
              </a>
            </div>
          </div>
          <div className="flex justify-center  2xl:mt-7 mt-5">
            <div className="w-4/6 hover:text-[#2083C4]">
              <a href="/user2nd/user-profile">
                <Image
                  src={profile}
                  className="mx-auto  w-5 h-5 2xl:w-6 2xl:h-6 mx-auto"
                />

                <p className="2xl:text-[13px] text-[10px] montserrat-countinue text-center">
                  Profile
                </p>
              </a>
            </div>
          </div>
          <div className="flex justify-center 2xl:mt-7 mt-5">
            <div className="w-4/6 hover:text-[#2083C4]">
              <a href="/user2nd">
                <Image
                  src={documentM}
                  className="mx-auto  w-5 h-5 2xl:w-6 2xl:h-6 mx-auto"
                />
                <p className="2xl:text-[13px] text-[10px] montserrat-countinue text-center">
                  {" "}
                  Document Management
                </p>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default UserSidebar;
