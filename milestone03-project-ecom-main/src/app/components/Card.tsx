import React from "react";

const floatingImage = () => {
  return (
    <section className="container mx-auto py-10 flex flex-col md:flex-row items-center bg-gradient-to-r from-indigo-500 via-sky-500 to-emerald-500">
      <div className="md:w-1/2 md:pr-10">
        <h2 className="text-3xl font-bold mb-4 text-white">New year Dhamaka Sale!</h2>
        <p className="text-white mb-4 ">Grab your favorites items at unbeatable prices ,Shop now and save big with us!"</p>
        <button className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-red-500 transition duration-300">
        <b>Order Now</b>
        </button>

        <h3 className="text-2xl font-semibold mt-6 mb-2 text-center text-white">
          {" "}
          2025 Big Sale Coming Soon.....{" "}
        </h3>

        <ul className="text-white">
          <li>
            {" "}
           
          </li>
          <br />

          <li>
            {" "}
           
          </li>
          <br />

          <li>
            {" "}
            
          </li>
          <br />
          <li>
            {" "}
            
          </li>
          <br />
        </ul>
        
        </div>

        <div className="md:w-1/2 mt-6 md:mt-0">
        <img src="https://www.gadgetsonline.pk/wp-content/uploads/2020/11/Banner-of-Health-gadgets-1.jpg" alt=" shoping image" 
        className="w-full h-auto rounded-lg shadow-lg transition-transform duration-500 ease-in-out transform hover:scale-105 mr-7"/>

        
      </div>
    </section>
  );
};

export default floatingImage;
