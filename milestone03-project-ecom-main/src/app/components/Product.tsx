import React from "react";


const products = [
  {
    id: 1,
    tittle: "Winter Warmths",

    price: "$25,00",
    imageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmzYVOWIqvLoZSqGh0rtu-PYpFsRHgdTlHHZUrcDZ1KqzmZnUrqXXEJQm_0uG535y8FdQ&usqp=CAU",
    bgColor: "bg-amber-500",
  },

  {
    id: 2,

    tittle: "Perfect Match",

    price: "$18,00",
    imageUrl:
      "https://static-01.daraz.pk/p/2cfbda688db2973f9321454e00033aa3.jpg",
    bgColor: "bg-amber-500",
  },

  {
    id: 3,
    tittle: "Skin Product",

    price: "$3,000",
    imageUrl:
      "https://img.drz.lazcdn.com/static/pk/p/59666a5126c91a985d96d3b874958588.jpg_720x720q80.jpg",
    bgColor: "bg-amber-500",
  },
];
export default function Product() {
  return (
    <div className="p-1 flex flex-wrap items-center justify-center mb-6">
      {products.map((product) => (
        <div
          key={product.id}
          className={`flex shrink-0 m-6 relative overflow-hidden ${product.bgColor}rounded-lg shadow-lg group max-w-sm`}
        >
          <svg
            className="absolute bottom-0 left-0 mb-8 scale-150 group-hover:scale-[1.65] transition-transform"
            viewBox="0 0 375 283"
            fill="none"
            style={{ opacity: 0.2 }}
          >
            <rect
              x="159.52"
              y="175"
              height="152"
              width="152"
              rx="8"
              transform="rotate(-45 159.52 175)"
              fill="white"
            />
            <rect
              y="107.48"
              height="152"
              width="152"
              rx="8"
              transform="rotate(-45 0 107.48)"
              fill="white"
            />
          </svg>

          <div className="relative pt-10 px-10 flex items-center justify-center group-hover:scale-110 transition-transform">
            <div
              className="block absolute w-48 h-48 bottom-0 left-0 -mb-24 ml-3"
              style={{
                background: "radial-gradient(black, transparent 60%)",
                transform: "rotate3d(0, 0, 1, 20deg) scale3d(1, 0.6, 1)",
                opacity: 0.2,
              }}
            ></div>

            <img
              className="relative w-50"
              src={product.imageUrl}
              alt={product.tittle}
            />
          </div>

          <div className="relative text-white px-4 pb-4 mt-4">
            <div className="felx  justify-center">
              <span className="block font-semibold text-xl">
                {product.tittle}
              </span>
              <span className="block bg-white rounded-full text-orange-800 text-lg font-black justify-center px-6 py-3 leading-none items-center">
                {product.price}
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
