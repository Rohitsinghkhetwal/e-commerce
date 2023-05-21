import React from "react";
import { useStore } from "./Store";
import clsx from "clsx";
import toast from "react-hot-toast";

const Cart = () => {
  const { cart, RemoveFromCartItem } = useStore();

  return (
    <div className="flex justify-center">
      <div className="flex flex-col w-1/2 pt-24 pb-24">
        {cart.map((products, index) => (
          <div className=" ">
            <div
              className={clsx("  flex items-center ", {
                "border-b border-black-300": index !== cart.length - 1,
              })}
            >
              <div className="text-xl font-serif  ">
                <img
                  style={{ height: "200px" }}
                  src={products.image}
                  alt="images"
                />
              </div>

              <div
                className="flex flex-col flex-grow font-serif px-3  "
                style={{ height: "200px" }}
              >
                <h4 className=" py-2 ">{products.name}</h4>
               <div className="flex pb-2">
              
                <button className="bg-slate-100 px-1 rounded ">-</button>
                <h3 className="px-2">qty</h3>
                <button className="bg-slate-100 px-1 rounded">+</button>
               </div>
                <h3>${products.price}</h3>
                <div className="flex justify-end pt-5">
                  <button
                    className="font-serif rounded-md bg-lime-200  font-bold hover:bg-lime-400 w-20 justify-end "
                    onClick={() =>{ 
                      RemoveFromCartItem(products._id);
                      toast.error("item Removed")
                    }}
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cart;
