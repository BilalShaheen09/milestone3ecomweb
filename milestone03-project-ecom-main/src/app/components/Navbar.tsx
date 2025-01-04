import React from "react";
import { ImSearch } from "react-icons/im";
import { FaBoltLightning } from "react-icons/fa6";
import { FaCartShopping } from "react-icons/fa6";
import { TbShoppingBagCheck } from "react-icons/tb";

export default function Navbar() {
  return (
    <div className="bg-gradient-to-r from-indigo-500 via-sky-500 to-emerald-500">
      <div className="p-5">
        <div className="py-4 px-4 rounded-xl border w-full">
          <div className="flex justify-between items-center">
            <div className="flex justify-center items-center gap-8">
              {/* Logo */}

              {/* Search Input */}
              <div style={{ position: "relative" }}>
                <input
                  className="rounded-3xl py-3 px-3 font-medium outline-none text-xs w-[350px] pr-9 hidden lg:block md:block"
                  placeholder="Find Your Perfect Product..."
                />
                <ImSearch className="w-5 h-6 text-gray-600 absolute right-2 top-1 transform translate-y-1 hidden lg:block md:block" />
              </div>
            </div>

            <div className="flex justify-center items-center gap-2">
              
              <p className="text-sm text-white font-medium hidden lg:block md:block">
              <b>Shop Your Favourite Products!</b>
              </p>

              {/* Cart Icon */}
              <FaCartShopping className="p-1 w-8 h-8 rounded-full text-yellow-500 ring-black ring-2" />
              <img
                className="inline-block w-8 h-8 rounded-full ring-2 ring-black"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxMs_dOpSeiJRtz2y9-fBpwG9lc9fnZapOmw&s"
                alt="user avatar"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
