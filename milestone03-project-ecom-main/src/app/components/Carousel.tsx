import React from "react";

export default function Carousel() {
  return (
    <div>
      <section className="bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%">
        <div className="py-0 px-0 mx-auto max-w-screen-xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-0">
            {/* First Item */}
            <div className="col-span-2 sm:col-span-1 md:col-span-2 flex flex-col">
              <a
                href="#"
                className="group relative flex flex-col overflow-hidden rounded-lg px-0 py-0 flex-grow"
              >
                <img
                  src="https://static"
                  alt="phone"
                  className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-gray-500"></div>
                <h3 className="z-10 text-2xl font-medium text-white absolute top-0 left-0">
                  Discover New Daily
                </h3>
              </a>
            </div>

            {/* Second Item */}
            <div className="col-span-2 sm:col-span-1 md:col-span-2">
              <a
                href="#"
                className="group relative flex flex-col overflow-hidden rounded-lg px-0 py-0 flex-grow"
              >
                <img
                  src="https://m.m"
                  alt="bags"
                  className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-gray-500"></div>
                <h3 className="z-10 text-2xl font-medium text-white absolute top-0 left-0">
                  Elevate Your Style
                </h3>
              </a>

              {/* Nested Grid */}
              <div className="grid grid-cols-2 gap-0 mt-0">
                <a
                  href="#"
                  className="group relative flex flex-col overflow-hidden rounded-lg px-0 py-0"
                >
                  <img
                    src="https://cdn.walkabouttours.com/uploads/bl"
                    alt="shoes"
                    className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-gray-500"></div>
                  <h3 className="z-10 text-2xl font-medium text-white absolute top-0 left-0">
                    Get Yours Today
                  </h3>
                </a>

                <a
                  href="#"
                  className="group relative flex flex-col overflow-hidden rounded-lg px-0 py-0"
                >
                  <img
                    src="https://miro.mediu"
                    alt="makeup"
                    className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-gray-500"></div>
                  <h3 className="z-10 text-2xl font-medium text-white absolute top-0 left-0">
                    Paint Your Beauty
                  </h3>
                </a>
              </div>
            </div>

            {/* Third Item */}
            <div className="col-span-2 sm:col-span-1 md:col-span-1 flex flex-col">
              <a
                href="#"
                className="group relative flex flex-col overflow-hidden rounded-lg px-0 py-0 flex-grow"
              >
                <img
                  src="https://bridalcollection.pk/wp-content/uploads/2022/11/g-4-360x480.jpg"
                  alt="jewelry"
                  className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-gray-500"></div>
                <h3 className="z-10 text-2xl font-medium text-white absolute top-0 left-0">
                  Jewels That C
                </h3>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
