import React, { useState } from "react";
import { servicesData } from "../utils/data";
import Footer from "../components/Footer";

function Services() {
  const [services, setServices] = useState(servicesData);

  return (
    <div className="mt-12 bg-mainContainer2" style={{ position: "absolute" }}>
      <div className="w-full  px-7 py-7 mt-10 mb-10">
        <div>
          <h1 className="text-3xl uppercase text-textColor font-bold text-gray-800 mb-5">
            Event Planning Services
          </h1>
          <p className="text-lg text-textColor leading-loose mb-8 text-justify">
            We are providing all the services given below
          </p>
        </div>

        <div className="flex flex-wrap justify-between gap-20">
          {services &&
            services.map((data, index) => {
              return (
                <div key={data.id} className="flex hover:shadow-lg cursor-pointer flex-col w-80 bg-white rounded-md">
                  <img src={data.imageSrc} className="w-full h-48 object-cover" alt="" />
                  <div className="p-5">
                    <h1 className="text-btnback text-lg border-b-2">{data.name}</h1>
                    <p className="flex mt-2 text-textColor text-justify text-sm">{data.decp}</p>
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

export default Services;
