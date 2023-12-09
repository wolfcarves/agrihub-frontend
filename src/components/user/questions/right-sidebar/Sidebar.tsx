import React from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
const Sidebar = () => {
  return (
    <>
      <h5 className="font-semibold">Popular Questions</h5>
      <div className="pl-4">
        <div className="my-2 flex items-center">
          Take a look at this, pheno.. <MdOutlineKeyboardArrowRight size={18} />
        </div>
        <div className="my-2 flex items-center">
          Take a look at this, pheno.. <MdOutlineKeyboardArrowRight size={18} />
        </div>
        <div className="my-2 flex items-center">
          Take a look at this, pheno.. <MdOutlineKeyboardArrowRight size={18} />
        </div>
        <div className="my-2 flex items-center">
          Take a look at this, pheno.. <MdOutlineKeyboardArrowRight size={18} />
        </div>
        <div className="my-2 flex items-center">
          Take a look at this, pheno.. <MdOutlineKeyboardArrowRight size={18} />
        </div>
        <div className="my-2 flex items-center">
          Take a look at this, pheno.. <MdOutlineKeyboardArrowRight size={18} />
        </div>
      </div>
      <h5 className="font-semibold mt-5">Popular Tags</h5>
      <div className="pl-2 px-1 mt-2 flex flex-wrap gap-1">
        <span className="text-primary text-sm bg-secondary border border-primary py-1 px-2 rounded-lg">
          Rooftop
        </span>
        <span className="text-primary text-sm bg-secondary border border-primary py-1 px-2 rounded-lg">
          Hydroponics
        </span>
        <span className="text-primary text-sm bg-secondary border border-primary py-1 px-2 rounded-lg">
          Community
        </span>
        <span className="text-primary text-sm bg-secondary border border-primary py-1 px-2 rounded-lg">
          Vertical Farming
        </span>
        <span className="text-primary text-sm bg-secondary border border-primary py-1 px-2 rounded-lg">
          Composting
        </span>
        <span className="text-primary text-sm bg-secondary border border-primary py-1 px-2 rounded-lg">
          Organic Farming
        </span>
        <span className="text-primary text-sm bg-secondary border border-primary py-1 px-2 rounded-lg">
          Aquaponics
        </span>
        <span className="text-primary text-sm bg-secondary border border-primary py-1 px-2 rounded-lg">
          Herb Gardening
        </span>
        <span className="text-primary text-sm bg-secondary border border-primary py-1 px-2 rounded-lg">
          Sustainable Practices
        </span>
        <span className="text-primary text-sm bg-secondary border border-primary py-1 px-2 rounded-lg">
          Urban Beekeeping
        </span>
        <span className="text-primary text-sm bg-secondary border border-primary py-1 px-2 rounded-lg">
          Farmers Markets
        </span>
        <span className="text-primary text-sm bg-secondary border border-primary py-1 px-2 rounded-lg">
          Food Education
        </span>
        <span className="text-primary text-sm bg-secondary border border-primary py-1 px-2 rounded-lg">
          Urban
        </span>
      </div>
    </>
  );
};

export default Sidebar;
