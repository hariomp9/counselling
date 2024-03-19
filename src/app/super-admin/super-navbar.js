import React from 'react'

const SuperNavbar = () => {
  return (
    <>
      <section>
      <nav className="p-4 flex ">
              <div className="relative">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="2xl:w-6 2xl:h-6 xl:w-4 xl:h-4 lg:w-3 lg:h-3 absolute 2xl:left-5 2xl:top-2 xl:left-5 xl:top-[7px] lg:left-4 lg:top-[8px] text-[#A8A8A8]"
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
                  xl:p-1 xl:px-7 xl:ml-3 lg:ml-3 lg:p-1 lg:px-5 2xl:text-[16px] xl:text-[13px] lg:text-[10px]"
                  placeholder="Search"
                />
              </div>
              <div className="relative">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="2xl:w-6 2xl:h-6 xl:w-4 xl:h-4 lg:w-3  lg:h-3   absolute right-3 top-2 text-[#A8A8A8]"
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
                  xl:p-1 xl:px-3 xl:ml-3 lg:p-1 lg:px-3 lg:ml-3 2xl:text-[16px] xl:text-[13px] lg:text-[10px]"
                  placeholder="Filters"
                />
              </div>
            </nav>
      </section>
    </>
  )
}

export default SuperNavbar