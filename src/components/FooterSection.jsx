import React from "react";
import { FaPhone } from "react-icons/fa6";
import { IoLogoYoutube, IoMdMailOpen } from "react-icons/io";
import {
  FaAddressBook,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";

const FooterSection = () => {
  return (
    <div className="relative w-full">
      <footer className="min-h-[32rem] relative z-10 left-0 right-0 w-full bg-gradient-to-b from-blue-500/90 to-blue-600/90">
        {/* Content Container */}
        <div className="px-[2rem] sm:px-[4rem] lg:px-[6rem] pt-[16.5rem]">
          {/* Logo and Description Section */}
          <div className="flex flex-col xl:flex-row gap-8 xl:gap-16">
            <div className="max-w-md">
              {/* Logo */}
              <div className="flex items-center space-x-2 mb-4">
                <img src="" alt="Quickdaak icon" className="w-8 h-8" />
                <span className="text-white text-2xl sm:text-3xl font-bold">
                  QUICKDAAK
                </span>
              </div>

              {/* Description */}
              <p className="text-white/80 text-sm sm:text-base mt-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Vestibulum facilisis quam eget ex blandit cursus. Sed ut
                perspiciatis unde omnis iste natus error sit.
              </p>

              <div className="flex gap-4 mt-4 text-white">
                <FaInstagram className="hover:scale-110 transition-transform cursor-pointer" />
                <FaLinkedin className="hover:scale-110 transition-transform cursor-pointer" />
                <FaFacebook className="hover:scale-110 transition-transform cursor-pointer" />
                <FaTwitter className="hover:scale-110 transition-transform cursor-pointer" />
                <IoLogoYoutube className="hover:scale-110 transition-transform cursor-pointer" />
              </div>
            </div>

            {/* Links Container */}
            <div className="w-[100%] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 relative">
              {/* Vertical Dotted Lines */}

              <div className="absolute left-1/3 top-0 bottom-0 border-l border-dotted border-white/30 hidden lg:block"></div>
              <div className="absolute left-2/3 top-0 bottom-0 border-l border-dotted border-white/30 hidden lg:block"></div>

              {/* Quick Links */}
              <div className="">
                <h3 className="text-white text-lg font-semibold mb-4">
                  Quick Links
                </h3>
                <ul className="space-y-2">
                  <li>
                    <a
                      href="#"
                      className="text-white/80 hover:text-white text-sm sm:text-base"
                    >
                      About Us
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-white/80 hover:text-white text-sm sm:text-base"
                    >
                      Contact
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-white/80 hover:text-white text-sm sm:text-base"
                    >
                      Pricing
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-white/80 hover:text-white text-sm sm:text-base"
                    >
                      Blog
                    </a>
                  </li>
                </ul>
              </div>

              {/* Contact Us */}
              <div>
                <h3 className="text-white text-lg font-semibold mb-4">
                  Contact Us
                </h3>
                <ul className="space-y-2">
                  <li className="text-white/80 text-sm sm:text-base flex items-center gap-4">
                    <FaPhone /> +1 234 456 7890
                  </li>
                  <li className="text-white/80 text-sm sm:text-base flex items-center gap-4">
                    <IoMdMailOpen /> info@quickpack.com
                  </li>
                  <li className="text-white/80 text-sm sm:text-base flex items-center gap-4">
                    <FaAddressBook />
                    <span>
                      123 Street Name,
                      <br />
                      City, Country
                    </span>
                  </li>
                </ul>
              </div>

              {/* Support */}
              <div>
                <h3 className="text-white text-lg font-semibold mb-4">
                  Support
                </h3>
                <ul className="space-y-2">
                  <li>
                    <a
                      href="#"
                      className="text-white/80 hover:text-white text-sm sm:text-base"
                    >
                      Help Center
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-white/80 hover:text-white text-sm sm:text-base"
                    >
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-white/80 hover:text-white text-sm sm:text-base"
                    >
                      Terms & Conditions
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-white/80 hover:text-white text-sm sm:text-base"
                    >
                      FAQ
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Copyright Section */}
          <div className="mt-12 sm:mt-16 pt-8 pb-4 border-t border-white/20">
            <p className="text-center text-white/70 text-xs sm:text-sm">
              Copyright © {new Date().getFullYear()} QUICKDAAK. All rights
              reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default FooterSection;
