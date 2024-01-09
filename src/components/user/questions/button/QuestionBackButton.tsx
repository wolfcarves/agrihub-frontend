import React from "react";
import { Link } from "react-router-dom";
import { FaArrowLeftLong } from "react-icons/fa6";

const QuestionBackButton = () => {
  return (
    <div className="py-10 w-max">
      <Link to={".."}>
        <button className="flex items-center gap-x-2 text-foreground font-poppins-semibold hover:bg-gray-100 py-2.5 px-5 rounded-lg duration-200">
          <FaArrowLeftLong /> Back
        </button>
      </Link>
    </div>
  );
};

export default QuestionBackButton;
