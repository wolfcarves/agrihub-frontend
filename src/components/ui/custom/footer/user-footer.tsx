import React from "react";
import agrihub from "@icons/main-logo.svg";
import urban from "@icons/center-logo.svg";
import qcu from "@icons/qcu-logo.svg";
import { BsTelephone } from "react-icons/bs";
import {
  RiTiktokLine,
  RiFacebookCircleLine,
  RiYoutubeLine
} from "react-icons/ri";
import { PiLeaf } from "react-icons/pi";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { GiThreeLeaves } from "react-icons/gi";
import { FiEye } from "react-icons/fi";
import { FaRegNewspaper } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

const UserFooter = () => {
  const navigate = useNavigate();
  const navigateAbout = () => {
    navigate("/about");
  };
  const navigateInitiatives = () => {
    navigate("/about/initiatives");
  };
  const navigateFocus = () => {
    navigate("/about/our-focus");
  };
  const navigateNews = () => {
    navigate("/about/latest");
  };
  return (
    <div className="bg-[#404040] p-10">
      <div className="flex justify-center items-center gap-1">
        <img className="h-[3.5rem]" src={qcu} />
        <img className="h-[5.4rem]" src={agrihub} />
        <img className="h-[2.6rem] ml-1" src={urban} />
      </div>
      <div className="py-8 grid grid-cols-10">
        <div className=" hidden md:block col-span-1"></div>

        <div
          onClick={navigateInitiatives}
          className="hover:bg-[#464646] text-white pt-2 pb-8 pl-4 rounded-lg md:col-span-2 col-span-5 flex flex-col justify-between"
        >
          <div>
            <PiLeaf size={35} />
            <div className=" font-semibold my-1">Initiatives</div>
            <p className=" text-sm font-light w-[50%]">
              Be informed with our main objectives
            </p>
          </div>
          <div className="flex items-center mt-2">
            <span className=" text-sm font-bold">LEARN MORE</span>
            <MdKeyboardDoubleArrowRight size={22} />
          </div>
        </div>

        <div className="hover:bg-[#464646] text-white pt-2 pb-8 pl-4 rounded-lg md:col-span-2 col-span-5 flex flex-col justify-between">
          <div>
            <GiThreeLeaves size={31} />
            <div className=" font-semibold my-1">Learning Hub</div>
            <p className=" text-sm font-light w-[50%]">
              Empower each minds with agriculture
            </p>
          </div>
          <div className="flex items-center mt-2">
            <span className=" text-sm font-bold">LEARN MORE</span>
            <MdKeyboardDoubleArrowRight size={22} />
          </div>
        </div>

        <div
          onClick={navigateFocus}
          className="hover:bg-[#464646] text-white pt-2 pb-8 pl-4 rounded-lg md:col-span-2 col-span-5 flex flex-col justify-between"
        >
          <div>
            <FiEye size={35} />
            <div className=" font-semibold my-1">Our Focus</div>
            <p className=" text-sm font-light w-[50%]">
              Align our insights for promoting Urban Farming
            </p>
          </div>
          <div className="flex items-center mt-2">
            <span className=" text-sm font-bold">LEARN MORE</span>
            <MdKeyboardDoubleArrowRight size={22} />
          </div>
        </div>

        <div
          onClick={navigateNews}
          className="hover:bg-[#464646] text-white pt-2 pb-8 pl-4 rounded-lg md:col-span-2 col-span-5 flex flex-col justify-between"
        >
          <div>
            <FaRegNewspaper size={31} />
            <div className=" font-semibold my-1">Latest News</div>
            <p className=" text-sm font-light w-[50%]">
              Ocassional updates for Urban Farming
            </p>
          </div>
          <div className="flex items-center mt-2">
            <span className=" text-sm font-bold">LEARN MORE</span>
            <MdKeyboardDoubleArrowRight size={22} />
          </div>
        </div>
        <div className="hidden md:block col-span-1"></div>
      </div>
      <div className="flex justify-between px-2">
        <div className="flex items-center justify-center font-bold text-[0.7rem] gap-2 text-white">
          <BsTelephone size={20} />{" "}
          <span className="md:block hidden ">091237418238</span>
          <span>|</span>
          <span
            onClick={navigateAbout}
            role="button"
            className="underline underline-offset-1"
          >
            About Us
          </span>
        </div>
        <div className="flex items-center justify-center  text-[0.7rem] gap-3 text-white">
          <span className=" font-thin md:block hidden">
            FOLLOW US ON SOCIAL MEDIA
          </span>
          <RiFacebookCircleLine size={22} />
          <RiYoutubeLine size={22} />
          <RiTiktokLine size={22} />
        </div>
      </div>
      <hr className="border-t border-[#767676] my-2" />
      <div className="flex justify-center text-center">
        <p className="text-[#A2A2A2] text-[.70rem] w-[70%]">
          Agrihub is an Urban Farming Data Sharing Platform, Philippines, 673
          Quirino Highway, San Bartolome, Novaliches Q.C. © 2024 Agrihub. All
          rights reserved. Privacy Policy and Terms of Use.
        </p>
      </div>
    </div>
  );
};

export default UserFooter;
