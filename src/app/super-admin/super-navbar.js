import React from "react";

const SuperNavbar = () => {
  return (
    <>
      <section>
        <nav className="px-5 py-4 lg:p-4 flex ">
          <div className="lg:hidden flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6 sm:w-8 sm:h-8"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3.75 6.75h16.5M3.75 12H12m-8.25 5.25h16.5"
              />
            </svg>
          </div>
          <div className="relative lg:ml-0 sm:ml-5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="2xl:w-6 2xl:h-6 xl:w-4 xl:h-4 lg:w-3 lg:h-3 sm:w-4 sm:h-4 w-3 h-3 absolute 2xl:left-7 2xl:top-2 xl:left-5 xl:top-[7px] lg:left-4 lg:top-[10px] sm:left-[18px] sm:top-[10px] left-[18px] top-[7px] text-[#A8A8A8]"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
              />
            </svg>

            <input
              type="search"
              className="2xl:p-2 2xl:px-10 border rounded-full  2xl:ml-5
                  xl:p-1 xl:px-7 xl:ml-3 lg:ml-3 lg:p-2 lg:px-5 2xl:text-[16px] xl:text-[13px] lg:text-[10px] sm:text-[12px] sm:ml-3 sm:p-[8px] sm:px-7 text-[12px] ml-3 p-[3px] px-5 w-2/3 sm:w-auto "
              placeholder="Search"
            />
          </div>
          <div className="relative hidden sm:block">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="2xl:w-6 2xl:h-6 xl:w-4 xl:h-4 lg:w-3  lg:h-3  w-5 h-5  absolute lg:right-3 lg:top-[10px] sm:right-3 sm:top-[10px] text-[#A8A8A8]"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 0 1-.659 1.591l-5.432 5.432a2.25 2.25 0 0 0-.659 1.591v2.927a2.25 2.25 0 0 1-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 0 0-.659-1.591L3.659 7.409A2.25 2.25 0 0 1 3 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0 1 12 3Z"
              />
            </svg>

            <input
              type="search"
              className="2xl:py-2  2xl:p-2 border rounded-full 2xl:ml-5 w-[100px]
                  xl:p-1 xl:px-3 xl:ml-3 lg:p-2 lg:px-3 lg:ml-3 2xl:text-[16px] xl:text-[13px] lg:text-[10px] sm:text-[12px] sm:ml-3 sm:p-[8px] sm:px-5"
              placeholder="Filters"
            />
          </div>
        </nav>
      </section>
    </>
  );
};

export default SuperNavbar;
