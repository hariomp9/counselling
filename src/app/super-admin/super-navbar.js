import React from "react";

const SuperNavbar = () => {
  return (
    <>
      <section>
        <nav className="flex justify-between px-5 py-4 lg:p-4 2xl:h-[80px] xl:h-[80px] h-[80px]">
          <div>
            <h1 className="inter font-[600] 2xl:text-[25px] xl:text-[18px] text-[14px] leading-[45px]">
              Super Admin
            </h1>
          </div>
          <div>
            <div className="flex gap-5">
              <h2 className="2xl:text-[14px] xl:text-[10px] text-[9px]">
                NEET UG
              </h2>
              <input type="checkbox" className="toggle toggle-info" />
              <h1 className="2xl:text-[14px] xl:text-[10px] text-[9px]">
                NEET PG
              </h1>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                class="bi bi-bell-fill w-4"
              >
                <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2m.995-14.901a1 1 0 1 0-1.99 0A5 5 0 0 0 3 6c0 1.098-.5 6-2 7h14c-1.5-1-2-5.902-2-7 0-2.42-1.72-4.44-4.005-4.901" />
              </svg>
            </div>
          </div>
        </nav>
      </section>
    </>
  );
};

export default SuperNavbar;
