import React from "react";
import { FaShoppingCart } from "react-icons/fa";

const productCardGrid = () => {
  const productImages = [
   " https://img.drz.lazcdn.com/static/pk/p/c7840125743ae91a1ce8e48e4521698b.jpg_400x400q75.jpg_.webp",
    "https://img.drz.lazcdn.com/static/pk/p/47944f0a498e23c01fd5a7872ed06fe3.jpg_400x400q75.jpg_.webp",
    "https://img.drz.lazcdn.com/static/pk/p/0fb4cdcecc21d4f487390278164ab7a7.jpg_400x400q75.jpg_.webp",
    "https://img.drz.lazcdn.com/static/pk/p/bf123da8a002a83c98564a006ac84b2e.jpg_400x400q80.jpg_.webp",
    "https://img.drz.lazcdn.com/static/pk/p/0155ab4df841da0370a1a75fd87e09e8.jpg_400x400q80.jpg_.webp",
    "https://img.drz.lazcdn.com/static/pk/p/b214e3a78ce3feada52b1f94faff978e.jpg_400x400q80.jpg_.webp",
  ];

  return (
    <div className=" relative text-center p-10 bg-gradient-to-r from-indigo-500 via-sky-500 to-emerald-500">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url('https://static.vecteezy.com/system/resources/previews/029/625/830/non_2x/young-woman-with-shopping-bags-against-color-wall-background-generative-ai-free-photo.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          zIndex: 0,
          opacity: 0.1,
        }}/>


          <h1 className="font-bold text-4xl mb-4 text-white z-10 relative">Most Hot Selling Items</h1>
<h1 className="text-4xl text-white z-10 relative">Order Now! </h1>

<section id="Projects" className="w-fit mx-auto  grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center gap-y-20 gap-x-14 mt-10 mb-5">

  {Array.from({length: 6}).map((_,index) => (
    <div key={index} className="w-70 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl z-10 relative">
<a href="#">
  <img src={productImages[index]}
  alt={`product${index+ 1 }`} 
  className="h-80 w-72 object-cover rounded-t-xl"/>
  <div className="px-4 py-3 w-72">
    <span className="text-gray-500 mr-3 uppercase text-xs">Category</span>
    <p className="text-lg font-bold text-red-700 truncate block capitalize">  In Stock {index+1}</p>
   
    <div className="flex items-center">
      <p className="text-lg font-semibold text-black my-3 cursor-auto"> {""} $200 </p>
      <del>
        <br />
       <p className="text-sm text-blue-800 cursor-auto ml-2">$350</p>
      </del>


      <div className="ml-auto">
      <FaShoppingCart className="w-5 h-5 text-blue-900 " />
      </div>
       
    </div>
  </div>
</a>
    </div>
  ))}

</section>
      </div>
    
  );
};

export default productCardGrid;
