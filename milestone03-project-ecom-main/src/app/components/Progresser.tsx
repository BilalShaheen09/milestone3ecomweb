import React from "react";

export default function Progresser() {
  return (
    <div>
      <div className="flex items-start max-w-screen-lg w-full mx-auto mt-10 bg-gradient-to-r from-indigo-500 via-sky-500 to-emerald-500">
        <div className="w-full">
          <div className="flex items-center w-full">
            <div className="w-8 h-8 shrink-0 mx-[-1px] bg-amber-400 p-1.5 flex items-center justify-center rounded-full">
              <span className="text-base text-black font-bold ">1</span>
            </div>
            <div className="w-full h-1 mx-4 rounded-lg bg-pink-500"></div>
          </div>
          <div className="mt-2 mr-4">
            <h6 className="text-xl font-bold text-black">
              Step:1 Choose Your product
            </h6>
            <p className="text-sm text-white">
              Mobile Phones, Smart Watches, Powerbank, Airpods,Accessories & Covers
            </p>
          </div>
        </div>
        <div className="w-full">
          <div className="flex items-center w-full">
            <div className="w-8 h-8 shrink-0 mx-[-1px] bg-amber-400 p-1.5 flex items-center justify-center rounded-full">
              <span className="text-base text-black font-bold ">2</span>
            </div>
            <div className="w-full h-1 mx-4 rounded-lg bg-pink-500"></div>
          </div>
          <div className="mt-2 mr-4">
            <h6 className="text-xl font-bold text-black">
              Step:2 Customize Your order{" "}
            </h6>
            <p className="text-sm text-white">
              Choose Your Product Colour, Medium, large, & Customized
            </p>
          </div>
        </div>
        <div className="w-full">
          <div className="flex items-center w-full">
            <div className="w-8 h-8 shrink-0 mx-[-1px] bg-amber-400 p-1.5 flex items-center justify-center rounded-full">
              <span className="text-xl text-black font-bold ">3</span>
            </div>
            <div className="w-full h-1 mx-4 rounded-lg bg-pink-500"></div>
          </div>
          <div className="mt-2 mr-4">
            <h6 className="text-xl font-bold text-black">
              Step:3 Place Your Order {" "}
            </h6>
            <p className="text-sm text-white">
          Orignal 100% Guaraenteed 
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}
