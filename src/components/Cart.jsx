import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearCart, removeItem } from "../utils/cartSlice";
import { CON_URL } from "../utils/constants";

export const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();

  const total = cartItems.reduce((acc, curr) => {
    acc = acc + curr?.card?.info?.price;
    return acc;
  }, 0);

  const gst = 1.18 * total;


  return (
    <div>
      <h2 className="font-bold text-2xl text-center m-2">Your Cart 🛒</h2>
      {cartItems.length == 0 ? (
        <div>
          <h2 className="font-bold text-xl text-center m-2">
            Your Cart is Empty !
          </h2>
        </div>
      ) : (
        <div className="flex flex-col justify-center items-center w-full">
          <button
            className="bg-amber-200 w-20 h-8 cursor-pointer hover:bg-amber-300 rounded-xl"
            onClick={() => {
              dispatch(clearCart());
            }}
          >
            Clear Cart
          </button>
          {cartItems.map((item, key) => {
            return (
              <div>
                <div key={key} className="flex justify-between w-200 m-3">
                  <div className="flex flex-col justify-center">
                    <h3 className="font-bold">{item?.card?.info?.name}</h3>
                    <h4>₹ {item?.card?.info?.price / 100}</h4>
                  </div>
                  <div>
                    <div>
                      <button
                        className="absolute mx-9 w-18 rounded cursor-pointer hover:bg-gray-600 bg-red-700 text-white"
                        onClick={() => {dispatch(removeItem(item.card.info.id))}}
                      >
                        Remove
                      </button>
                      <img
                        className="w-35 h-35 rounded-2xl"
                        src={CON_URL + item?.card?.info?.imageId}
                      />
                    </div>
                  </div>
                </div>
                <div style={{ height: "0.1px" }} className="bg-gray-300"></div>
              </div>
            );
          })}
          <div className="m-5 flex flex-col items-center justify-center">
            <span className="font-semibold">
              Amount : ₹{total / 100} + {(gst - total) / 100} (GST)
            </span>
            <div>
              <span className="font-bold">
                Total to Pay : ₹{gst / 100} (Incl. GST)
              </span>
              <div className="text-center">
                <button className="bg-green-400 w-25 h-10 m-2 cursor-pointer rounded-2xl">
                  Checkout
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
