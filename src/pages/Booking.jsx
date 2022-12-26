import React, { useState } from "react";
import { Link } from "react-router-dom";
import { categories } from "../utils/data";
import Footer from "../components/Footer";

function Booking() {
  const [category, setCategory] = useState(categories);
  return (
    <div
      className="mt-12 bg-mainContainer2 w-full"
      style={{ position: "absolute" }}
    >
      <div className="w-full px-7 py-7 mt-10 mb-10">
        <div className="flex flex-row justify-center">
          <h1 className="text-3xl uppercase text-textColor font-bold text-gray-800 mb-5">
            Please select the Category of your Event
          </h1>
        </div>

        <div className="flex flex-wrap mt-20 justify-center gap-20">
          {categories &&
            categories.map((data, index) => {
              return (
                <div
                  key={data.id}
                  className="flex hover:shadow-lg cursor-pointer flex-col w-80 bg-white rounded-md"
                >
                  <img
                    src={data.imageSrc}
                    className="w-full h-48 object-cover"
                    alt=""
                  />
                  <div className="p-5">
                    <h1 className="text-btnback text-lg">{data.name}</h1>
                    <Link to={data.form}>
                      <button className="flex bg-btnback hover:bg-btnhover text-sm px-5 py-1 mt-3 rounded-sm text-white">Register</button>
                    </Link>
                  </div>
                </div> 
              );
            })}
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default Booking;
