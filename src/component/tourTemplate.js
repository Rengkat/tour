import { info } from "autoprefixer";
import React, { useState } from "react";

function TourTemplate({ tours, handleClick }) {
  const [readMore, setReadMore] = useState(false);

  return (
    <div>
      <div className=" mt-4 w-full">
        <div className="text-center mt-8 font-bold text-2xl">
          <h1>List of Tours</h1>
          <div className="bg-blue-400 w-16 mx-auto h-1"></div>
        </div>
      </div>
      <div className=" w-11/12 md:w-4/5 lg:w-1/2 mt-5 mx-auto shadow-xl border-b-2 border-black ">
        <section className=" ">
          {tours.map((tour) => {
            return (
              <div key={tour.id}>
                <div className="image">
                  <img src={tour.image} alt="" />
                </div>
                <div className="flex justify-between p-7 font-bold text-2xl">
                  <h1>{tour.name}</h1>
                  <h3 className="text-blue-600">${tour.price}</h3>
                </div>
                <div className="px-7 text-xl tracking-2">
                  <p>
                    {readMore
                      ? tour.info
                      : ` ${tour.info.substring(0, 200)}...`}
                  </p>
                  <button
                    className="text-blue-600 inline"
                    onClick={() => setReadMore(!readMore)}>
                    {readMore ? "Read less" : "Read more"}
                  </button>
                </div>
                <div className=" flex justify-center my-5 pb-7">
                  <button
                    className=" border-2 border-black py-2 px-3 hover:bg-black hover:text-white shadow-md"
                    onClick={() => handleClick(tour.id)}>
                    Not Intrested
                  </button>
                </div>
              </div>
            );
          })}
        </section>
      </div>
    </div>
  );
}

export default TourTemplate;
