// import React from "react";
// import ChangePassword from "./update-password";

// const Setting = () => {
//   return (
//     <>
//       <section className="py-[30px] px-[20px] mt-[20px] lg:mt-0">
//         <div className="collapse collapse-arrow border mt-10">
//           <input type="radio" name="my-accordion-2" defaultChecked />
//           <div className="collapse-title text-xl font-medium">Profile</div>
//           <div className="collapse-content">
//             <p>hello</p>
//           </div>
//         </div>
//         <div className="collapse collapse-arrow border mt-5">
//           <input type="radio" name="my-accordion-2" />
//           <div className="collapse-title text-xl font-medium">
//             Update Password
//           </div>
//           <div className="collapse-content">
//             <ChangePassword/>
//           </div>
//         </div>
//         {/* <div className="collapse collapse-arrow border mt-5">
//           <input type="radio" name="my-accordion-2" />
//           <div className="collapse-title text-xl font-medium">
        
//           </div>
//           <div className="collapse-content">
//             <p>hello</p>
//           </div>
//         </div> */}
//       </section>
//     </>
//   );
// };

// export default Setting;


const inputHandler = (e, index, fieldName) => {
  const { value } = e.target;

  if (fieldName === "size" || fieldName === "quantity") {
    setProductDetail((prevProductDetail) => {
      const updatedStocks = [...prevProductDetail.stocks];
      updatedStocks[index][fieldName] = value;

      return {
        ...prevProductDetail,
        stocks: updatedStocks,
      };
    });
  } else {
    setProductDetail({
      ...productDetail,
      [fieldName]: value,
    });
  }
};

// Inside the JSX
<div className="flex mt-3 gap-3">
  {productDetail.stocks.map((stock, index) => (
    <div key={index}>
      <input
        maxLength={100}
        required
        type="text"
        value={stock.size}
        onChange={(e) => inputHandler(e, index, "size")}
        className="w-[100%] border p-[5px]"
        placeholder="Size"
      />
      <input
        value={stock.quantity}
        onChange={(e) => inputHandler(e, index, "quantity")}
        className="w-[100%] border p-[5px]"
        type="text"
        placeholder="Quantity"
      />
      <div className="flex flex-col items-center text-[12px]">
        <button onClick={() => removeItem(index)}>Remove</button>
      </div>
    </div>
  ))}
  <div className="flex flex-col items-center text-[12px]">
    <button onClick={addItem}>Add</button>
  </div>
</div>
