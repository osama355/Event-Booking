import React from "react";
import { AiOutlineWifi } from "react-icons/ai";
import {TbBuildingStore} from 'react-icons/tb';
import {BsFillQuestionCircleFill} from 'react-icons/bs';
import {GiCampCookingPot} from 'react-icons/gi';
import {CgSmileMouthOpen} from 'react-icons/cg';
import Footer from "../components/Footer";

const About = () => {
  return (
    <div className="mt-20" style={{ position: "absolute" }}>
      <div className="w-full  px-7 py-7 mt-10 mb-10">
        <div>
          <h1 className="text-3xl text-textColor font-bold text-gray-800 mb-5">Who Are We?</h1>
          <p className="text-lg text-textColor leading-loose mb-8 text-justify">
            Welcome to our event planning website! We are a team of experienced
            event planners and coordinators who are passionate about bringing
            your vision to life. With years of experience in the industry, we
            have the skills and expertise to handle every aspect of your event
            planning needs. From intimate gatherings to large-scale events, we
            have the resources and network to make your event a success. Our
            team is dedicated to providing top-notch customer service and
            ensuring that your event runs smoothly from start to finish. We are
            always available to answer any questions you may have and to help
            bring your vision to life. Thank you for considering us for your
            event planning needs. We look forward to working with you and making
            your event a success!
          </p>
        </div>
        <div className="flex mt-24 mb-28 flex-row justify-center">
          <AiOutlineWifi size={50} className="text-btnback" />
          <h1 className="text-3xl mt-2 ml-3 text-textColor">Live Since 2020</h1>
        </div>
        <hr style={{color:"grey"}}/>
        <div className="flex mt-16 mb-16 md:flex-row justify-center gap-12 flex-col">
          <div className="flex md:w-40 md:mt-0 mt-5 text-center flex-col items-center">
            <TbBuildingStore size={50} className="text-btnback"/>
            <p className="text-textColor mt-2">Find the best Venue for free</p>
          </div>
          <div className="flex md:w-40 md:mt-0 mt-5 text-center flex-col items-center">
            <BsFillQuestionCircleFill size={50} className="text-btnback"/>
            <p className="text-textColor mt-2">Let us hel you with the planning</p>
          </div>
          <div className="flex md:w-40 md:mt-0 mt-5 text-center flex-col items-center">
            <GiCampCookingPot size={50} className="text-btnback"/>
            <p className="text-textColor mt-2">Connect with the perfect vendors</p>
          </div>
          <div className="flex md:w-40 md:mt-0 mt-5 text-center flex-col items-center">
            <CgSmileMouthOpen size={50} className="text-btnback"/>
            <p className="text-textColor mt-2">Enjoy the event with your friends</p>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default About;
