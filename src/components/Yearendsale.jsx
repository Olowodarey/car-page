
import React from "react";
import data from "../data.json"; 

const Yearendsale = () => {

    const limitedProducts = data.slice(0, 4);

  return (
    <div className="mx-auto max-w-7xl px-5 lg:px-10">
      <div className="mt-[500px] lg:mt-10">
        <h1 className="text-blue-800 font-bold text-xl">Year End Sales</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-10">
        {limitedProducts .map((product ) => (
          <div key={product.id} className="border-2 border-gray-500 rounded-2xl p-4">
            <div className="">
              <img
                src={product.imageUrl}
                alt={product.item}
                className="w-full h-48 object-cover mb-4 rounded-md"
              />
            </div>

            <div className="  h-[40px] ">
              <h3 className="text-sm font-semibold">{product.item}</h3>
            </div>
            <p className=" p-2 text-lg text-gray-700">{product.price}</p>



            <div className="p-2  px-5 flex gap-4 justify-between">
              <button className="bg-black text-white rounded-full px-3 ">
                Cart
              </button>
              <button className="bg-black text-white rounded-full px-3 ">
                See More
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Yearendsale;

