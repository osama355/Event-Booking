import React, { useState } from "react";

function OfficeForm() {
  const [formData, setFormData] = useState({
    phoneNumber: "",
    name: "",
    companyname:"",
    eventDate: "",
    numberOfGuests: "",
    services: [],
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleCheckboxChange = (event) => {
    const { name } = event.target;
    if (formData.services.includes(name)) {
      setFormData({
        ...formData,
        services: formData.services.filter((service) => service !== name),
      });
    } else {
      setFormData({
        ...formData,
        services: [...formData.services, name],
      });
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Save the form data here
  };

  return (
    <div className="w-full mt-20 flex flex-row justify-center bg-mainContainer2" style={{position:'absolute'}}>
      
      <form
        onSubmit={handleSubmit}
        className="bg-white w-[600px] shadow-md rounded px-8 pt-6 pb-8 mb-4"
      >
        <h1 className="text-xl mb-8 text-textColor text-center">Book An Event for you Office</h1>
        <div className="mb-4">
          <label
            className="block text-textColor text-sm font-bold mb-2"
            htmlFor="phoneNumber"
          >
            Phone Number
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="phoneNumber"
            name="phoneNumber"
            type="text"
            value={formData.phoneNumber}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-textColor text-sm font-bold mb-2"
            htmlFor="name"
          >
            Name
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="name"
            name="name"
            type="text"
            value={formData.name}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-textColor text-sm font-bold mb-2"
            htmlFor="compnayname"
          >
            Company Name
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="companyname"
            name="companyname"
            type="text"
            value={formData.name}
            onChange={handleInputChange}
            required
          />
        </div>
        
        <div className="mb-4">
          <label
            className="block text-textColor text-sm font-bold mb-2"
            htmlFor="eventDate"
          >
            Event Date
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="eventDate"
            name="eventDate"
            type="date"
            value={formData.eventDate}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-textColor text-sm font-bold mb-2"
            htmlFor="numberOfGuests"
          >
            Number of Guests
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="numberOfGuests"
            name="numberOfGuests"
            type="number"
            value={formData.numberOfGuests}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-textColor text-sm font-bold mb-2">
            Services
          </label>
          <div className="flex items-center">
            <input
              className="form-checkbox h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
              id="catering"
              type="checkbox"
              name="catering"
              onChange={handleCheckboxChange}
            />
            <label
              className="ml-2 block text-sm"
              htmlFor="catering"
            >
              Catering
            </label>
          </div>
          <div className="flex items-center mt-2">
            <input
              className="form-checkbox h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
              id="echosound"
              type="checkbox"
              name="echosound"
              onChange={handleCheckboxChange}
            />
            <label
              className="ml-2 block text-sm"
              htmlFor="echosound"
            >
              Echo Sound
            </label>
          </div>
          <div className="flex items-center mt-2">
            <input
              className="form-checkbox h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
              id="specialtable"
              type="checkbox"
              name="specialtable"
              onChange={handleCheckboxChange}
            />
            <label
              className="ml-2 block text-sm"
              htmlFor="specialtable"
            >
              VIP Tables
            </label>
          </div>
          <div className="flex items-center mt-2">
            <input
              className="form-checkbox h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
              id="transport"
              type="checkbox"
              name="transport"
              onChange={handleCheckboxChange}
            />
            <label
              className="ml-2 block text-sm"
              htmlFor="transport"
            >
              Transport
            </label>
          </div>
          <div className="flex items-center mt-2">
            <input
              className="form-checkbox h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
              id="cardPrinting"
              type="checkbox"
              name="cardPrinting"
              onChange={handleCheckboxChange}
            />
            <label
              className="ml-2 block text-sm "
              htmlFor="cardPrinting"
            >
              Card Printing
            </label>
          </div>
          <div className="flex items-center mt-2">
            <input
              className="form-checkbox h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
              id="panaflex"
              type="checkbox"
              name="panaflex"
              onChange={handleCheckboxChange}
            />
            <label
              className="ml-2 block text-sm "
              htmlFor="panaflex"
            >
              Panaflex Printing
            </label>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <button
            className=" text-white bg-btnback hover:bg-btnhover w-full mt-4 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
}

export default OfficeForm;