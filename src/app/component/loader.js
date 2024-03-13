import React from "react";

const Loader = () => {
  return (  
    <div className="flex items-center justify-center min-h-screen bg-[#7871716e] fixed left-0 right-0 top-0 bottom-0 z-[99] ">
      <div className="flex space-x-4">
        <div>
          <span className="loading loading-dots loading-lg"></span>
        </div>
      </div>
    </div>
  );
};
export default Loader;
