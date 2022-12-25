import React from "react";
import HeroBg from "../assests/couples.svg";
// import { heroData } from "../utils/data";
import MainContainer from "../components/MainContainer";
import Footer from "../components/Footer";

function Home() {
  return (
    <div className="mt-20" style={{ position: "absolute" }}>
      <section
        className="grid grid-cols-1 md:grid-cols-2 gap-2 w-full"
        id="home"
      >
        <div className="py-2 px-7 flex flex-col items-start justify-center flex-1 gap-5">
          <p className="text-[2.5rem] lg:text-[3rem] font-bold tracking-wide text-headingColor">
            Online Wedding Planning Assistant
            <span className="text-orange-600 text-[3rem] lg:text-[4rem]"></span>
          </p>
          <p className="text-base text-textColor text-center md:text-left md:w-[80%]">
            Your one-stop event planning website, with all the tools you’ll need
            to create the dream celebration. No hidden fees! No challenge will
            have to face
          </p>
          <button
            type="button"
            className=" bg-btnback text-white w-full md:w-auto px-4 py-2 rounded-lg hover:shadow-lg transition-all ease-in-out duration-100"
          >
            Book Now
          </button>
        </div>
        {/* p-4 */}
        <div className="py-2 px-7 flex-1 flex items-center relative">
          <img
            src={HeroBg}
            className="ml-auto h-420 w-full lg:w-auto lg:h-505"
            alt="hero-bg"
          />
        </div>
      </section>
      <div className="w-full  bg-mainContainer px-7 py-7 mt-10 mb-10">
        <MainContainer />
        <br />
      </div>
      <div className="w-full px-7 mb-4">
        <hr style={{ color: "grey" }} />
      </div>
      <Footer />
    </div>
  );
}

export default Home;
