import React from "react";

const DeleteModule = () => {
  return (
    <>
      <div className="mt-2">
        <p className="text-[12px] sm:text-[16px] font-normal ms:leading-[30px] text-gray-500 mt-4">
          Do you really want to delete these records? You cant view this in your
          list anymore if you delete!
        </p>
      </div>

      <div className=" mt-4 lg:mt-8">
        <div className="flex justify-between gap-x-5">
          <button
            className="w-full border border-1 rounded-md border-lightBlue-400 text-lightBlue-700 hover:bg-lightBlue-200 text-sm  px-2 py-3
                              hover:border-none  border-sky-400 text-sky-700 hover:bg-sky-200 custom_btn_d "
            // onClick={handleClose}
          >
            No, Keep It
          </button>

          <button
            className={`w-full  rounded-md 
            custom_btn_d 
                              border-red-400 text-red-700 bg-red-200  
                              hover:border-none
                        ${isLoading ? "bg-gray-200" : "hover:bg-red-200"}
                        hover:border-none`}
            // onClick={handleDelete}
            // disabled={isLoading}
          >
            {/* {isLoading ? "Deleting..." : "Yes, Delete It"} */}
            Yes, Delete It
          </button>
        </div>
      </div>
    </>
  );
};

export default DeleteModule;
