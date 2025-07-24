import React, { useState } from "react";
import { addItem } from "../utils/cartSlice";
import { useDispatch } from "react-redux";
import { CON_URL } from "../utils/constants";

export const MenuItem = ({ item, setOpenIndex, openIndex }) => {
  const items = item?.card?.card?.itemCards || [];


  const dispatch = useDispatch()

  function addItemHandler(item) {
    dispatch(addItem(item))
  }

  return ( 
    <div className="flex flex-col justify-center items-center">
      <div
        className="w-200 h-10 m-3 p-1 shadow-xl border cursor-pointer font-bold rounded-xl"
        onClick={() => setOpenIndex(!openIndex)}
      >
        <span>
          {item?.card?.card?.title} ({item?.card?.card?.itemCards?.length})
        </span>
      </div>
      {openIndex && (
        <div className="flex flex-col justify-center items-center w-full">
          {items.map((item, key) => {
            return (
              <div>
                <div key={key} className="flex justify-between w-200 m-3">
                  <div className="flex flex-col justify-center">
                    <h3 className="font-bold">{item?.card?.info?.name}</h3>
                    <h4>₹ {item?.card?.info?.price / 100}</h4>
                  </div>
                  <div>
                    <button className="absolute mx-14 w-12 rounded cursor-pointer hover:bg-gray-600 bg-black text-white" onClick={() => {addItemHandler(item)}}>Add</button>
                    <img
                      className="w-40 h-35 rounded-2xl"
                      src={CON_URL + item?.card?.info?.imageId}
                    />
                  </div>
                </div>
                <div style={{ height: "0.1px" }} className="bg-gray-300"></div>

              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};
