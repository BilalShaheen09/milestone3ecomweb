import React from "react";

const products = [
  {
    id: 1,
    tittle: "Airpods Products",

    price: "$500",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUzHI6DkQFgPwWp542wJU9L269lJCKDR9utw&s",
    bgColor: "bg-orange-500",
  },

  {
    id: 2,

    tittle: "Smart Watches",

    price: "$300",
    imageUrl:
      "https://m.media-amazon.com/images/I/718A+IN8KzL._AC_SL1500_.jpg",
    bgColor: "bg-yellow-500",
  },

  {
    id: 3,
    tittle: "iPhone 16 Pro Max",

    price: "$2000",
    imageUrl:
      "https://m.media-amazon.com/images/I/61cTi9MBqOL._AC_SL1500_.jpg",
    bgColor: "bg-amber-500",

  
  

  },
];
export default function Product() {
  return (
    <div className="p-1 flex flex-wrap items-center justify-center mb-6  bg-gradient-to-r from-yellow-500 from-10% via-green-500 via-30% to-pink-500">
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
