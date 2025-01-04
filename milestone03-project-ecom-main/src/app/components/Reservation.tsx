import React from "react";

const ReservationSection = () => {
  return (
    <section className="bg-gradient-to-r from-yellow-500 via-purple-500 to-red-500 py-10">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6 text-white">
         Place Your Order Here!
        </h2>
        <form className="max-w-md mx-auto">
          <div className="mb-4 text-black ">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-3 border border-gray-300 rounded-md"
              required
            />
          </div>
          <div className="mb-4">
            <input
              type="number"
              placeholder ="Your Phone Number"
              className="w-full p-3 border border-gray-300 rounded-md"
              required
            />
          </div>
          <div className="mb-4">
            <input
              type="address"
              placeholder="Your Address"
              className="w-full p-3 border border-gray-300 rounded-md"
              required
            />
          </div>

          <div className="mb-4">
            <input
              type="text"
              placeholder="Product Name"
              className="w-full p-3 border border-gray-300 rounded-md"
              required
            />
          </div>
          <div className="mb-4">
            <input
              type="number"
              placeholder="Price"
              className="w-full p-3 border border-gray-300 rounded-md"
              required
            />
          </div>
          <div className="mb-4">
            <input
              type="number"
              placeholder="Your Card Number"
              className="w-full p-3 border border-gray-300 rounded-md"
              required
            />
          </div>
         

          <div className="mb-4 ">
            <button className="bg-blue-900 hover:bg-blue-600 textbold text-white py-3 px-6 rounded-md">
          Submit
            </button>
          </div>

        </form>
      </div>
    </section>
  );
};

export default ReservationSection;
