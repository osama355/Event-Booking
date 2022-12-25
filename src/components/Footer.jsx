import React from "react";
import { Link } from "react-router-dom";
import { FiFacebook } from "react-icons/fi";
import { BsInstagram } from "react-icons/bs";
import { FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="pt-10 pb-9 bg-footer text-center text-conback">
      <div className="flex flex-col sm:flex-row justify-between">
        <div className="sm:w-1/4 mb-4 sm:mb-0">
          <ul className="list-none">
            <li className="mb-2 hover:text-btnback">
              <Link to="/wedding-planning">Event Planning</Link>
            </li>
            <li className="mb-2 hover:text-btnback">
              <Link to="/my-projects">My Projects</Link>
            </li>
            <li className="mb-2 hover:text-btnback">
              <Link to="/create-new-wedding-project">
                Create New Event Project
              </Link>
            </li>
            <li className="mb-2 hover:text-btnback">
              <Link to="/wedding-photo-of-the-day">Event Photo Of The Day</Link>
            </li>
          </ul>
        </div>
        <div className="sm:w-1/4 mb-4 sm:mb-0">
          <ul className="list-none">
            <li className="mb-2 hover:text-btnback">
              <Link to="business-portal">Business Portal</Link>
            </li>
            <li className="mb-2 hover:text-btnback">
              <Link to="/ideas-and-advice">Ideas & Advice</Link>
            </li>
            <li className="mb-2 hover:text-btnback">
              <Link to="/white-label-integration">White-label Integration</Link>
            </li>
            <li className="mb-2 hover:text-btnback">
              <Link to="/pricing">Pricing</Link>
            </li>
          </ul>
        </div>
        <div className="sm:w-1/4 mb-4 sm:mb-0">
          <ul className="list-none">
            <li className="mb-2 hover:text-btnback">
              <Link to="/contact-us">Contact Us</Link>
            </li>
            <li className="mb-2 hover:text-btnback">
              <Link to="/faqs">FAQs</Link>
            </li>
            <li className="mb-2 hover:text-btnback">
              <Link to="/about-us">About Us</Link>
            </li>
            <li className="mb-2 hover:text-btnback">
              <Link to="/media-kit">Media Kit</Link>
            </li>
          </ul>
        </div>
        <div className="sm:w-1/4 mb-4 sm:mb-0">
          <h4 className="font-bold text-base mb-2">Social Media</h4>
          <ul className="list-none mt-5 flex flex-row justify-around">
            <li>
              <a href="#">
                <FiFacebook size={20} className="text-btnback" />
              </a>
            </li>
            <li>
              <a href="#" >
                <BsInstagram size={20} className="text-btnback" />
              </a>
            </li>
            <li>
              <a href="#">
                <FaTwitter size={20} className="text-btnback" />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <p className="mt-10 text-xs">Copyright © 2022 Online Event Planner LLC, All rights reserved.</p>
    </footer>
  );
};

export default Footer;
