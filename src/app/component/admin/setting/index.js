"use client";
import { useState } from "react";
import React from "react";
import ChangePassword from "./update-password";

const Setting = () => {
  const [size, setSize] = useState("");
  const [quantity, setQuantity] = useState("");
  const [items, setItems] = useState([]);

  const addItem = () => {
    if (size.trim() !== "" && quantity.trim() !== "") {
      const newItem = { size, quantity };
      setItems([...items, newItem]);
      setSize("");
      setQuantity("");
    } else {
      alert("Please enter both size and quantity before adding.");
    }
  };
  const removeItem = (index) => {
    const newItems = [...items];
    newItems.splice(index, 1);
    setItems(newItems);
  };
  return (
    <>
      <section className="py-[30px] px-[20px] mt-[20px] lg:mt-0">
        <div className="collapse collapse-arrow border mt-10">
          <input type="radio" name="my-accordion-2" defaultChecked />
          <div className="collapse-title text-xl font-medium">Profile</div>
          <div className="collapse-content">
            <p>hello</p>
          </div>
        </div>
        <div className="collapse collapse-arrow border mt-5">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title text-xl font-medium">
            Update Password
          </div>
          <div className="collapse-content">
            <ChangePassword />
          </div>
        </div>
        {/* <div className="collapse collapse-arrow border mt-5">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title text-xl font-medium">

          </div>
          <div className="collapse-content">
            <p>hello</p>
          </div>
        </div> */}

        <div className="container">
          <div className="flex mt-3 gap-3">
            <div>
              <input
                maxLength={100}
                required
                type="text"
                value={size}
                onChange={(e) => setSize(e.target.value)}
                className="w-[100%] border p-[5px]"
                placeholder="Size"
              />
            </div>
            <div>
              <input
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
                className="w-[100%] border p-[5px]"
                type="number"
                placeholder="Quantity"
              />
            </div>
            <div className="flex flex-col items-center text-[12px]">
              <button onClick={addItem}>add</button>+
            </div>
          </div>
          <div>
            {items.map((item, index) => (
              <div key={index} className="flex gap-10">
                <p>
                  Size : {item.size}, Quantity : {item.quantity}
                </p>
                <button onClick={() => removeItem(index)}>X</button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Setting;
