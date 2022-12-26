import React from "react";
import { RiTeamLine } from "react-icons/ri";
import { GiHeadbandKnot } from "react-icons/gi";
import { AiOutlineCloud } from "react-icons/ai";

function MainContainer() {
  return (
    <div className="container">
      <div className="flex md:flex-row flex-col md:justify-between w-full gap-5">
        <div className="md:w-1/3 w-full bg-mainContainer2 flex flex-col text-center p-8">
          <RiTeamLine className="text-5xl text-btnback w-full" />
          <h2 className="font-bold mt-3 mb-3">Plan Together</h2>
          <p>
            The best events are planned together, as a team. With our online
            Events Planning Assistant, your loved ones can each play a part in
            the real-time preparations of your big day. They don’t even need to
            set up an account! Just send them a quick online invite, and soon
            they’ll be utilizing all the same amazing, easy-to-access event
            planner tools.
          </p>
        </div>
        <div className="md:w-1/3 w-full flex bg-mainContainer2 flex-col text-center p-8">
          <GiHeadbandKnot className="text-5xl text-btnback w-full" />
          <h2 className="font-bold mt-3 mb-3">Online Events Tools</h2>
          <p>
            Whether you’re an expert event planner, or a couple tying the knot,
            our professional event tools will save you countless hours, and
            make your planning experience (nearly) stress-free. Whether you’re
            effortlessly creating a event seating chart online, or using our
            timeline template to guarantee your celebrations run smoothly.
          </p>
        </div>
        <div className="md:w-1/3 w-full flex bg-mainContainer2 flex-col text-center p-8">
          <AiOutlineCloud className="text-5xl text-btnback w-full" />
          <h2 className="font-bold mt-3 mb-3">Stored Safely</h2>
          <p>
            We understand the time, and emotional energy it takes to plan a
            event. Which is why any project created with the online Event
            Planning Assistant is safely stored on our cloud storage system.
            Meaning, it’s not only protected, but also synchronizes instantly
            whenever anyone in your group makes a change.
          </p>
        </div>
      </div>
      <div className="flex flex-col mt-16">
        <h2 className="text-btnback text-2xl mb-5">A Custom Event Planning Space</h2>
        <p>
          Our expert team designed the online Event Planning Assistant to be a
          creative space for everyone to collaborate, virtually. Whether you’re
          a local event planner juggling several projects simultaneously
          online. Or your whole family is helping you piece together the dream
          celebration. You can all be together at the same time with WA.
        </p>
      </div>
    </div>
  );
}

export default MainContainer;
