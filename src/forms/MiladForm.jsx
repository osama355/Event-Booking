import React, { useState } from "react";

function MiladForm() {
  const [formData, setFormData] = useState({
    phoneNumber: "",
    name: "",
    eventType: "",
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
        <h1 className="text-xl mb-8 text-textColor text-center">Book Your Day for Milad and Aqiqah</h1>
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
            htmlFor="eventType"
          >
            Event Type
          </label>
          <div className="relative">
            <select
              className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
              id="eventType"
              name="eventType"
              value={formData.eventType}
              onChange={handleInputChange}
              required
            >
              <option value="">Select an event type</option>
              <option value="Valima">Aqiqah</option>
              <option value="Barat">Milad</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg
                className="fill-current h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
              </svg>
            </div>
          </div>
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
              htmlFor="music"
            >
              Echo Sound
            </label>
          </div>
          <div className="flex items-center mt-2">
            <input
              className="form-checkbox h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
              id="mufti"
              type="checkbox"
              name="mufti"
              onChange={handleCheckboxChange}
            />
            <label
              className="ml-2 block text-sm "
              htmlFor="mufti"
            >
              Mufti
            </label>
          </div>
          <div className="flex items-center mt-2">
            <input
              className="form-checkbox h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
              id="nattkhwan"
              type="checkbox"
              name="naatkhwan"
              onChange={handleCheckboxChange}
            />
            <label
              className="ml-2 block text-sm"
              htmlFor="naatkhwan"
            >
              Naat Khwan
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

export default MiladForm;