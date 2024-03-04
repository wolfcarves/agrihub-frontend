import React from "react";
import { Link } from "react-router-dom";
import { FaArrowLeftLong } from "react-icons/fa6";

const QuestionBackButton = () => {
  return (
    <div className="mb-10 w-max">
      <Link to={".."}>
        <span className="flex items-center gap-x-2 text-foreground font-poppins-semibold hover:underline hover:underline-offset-2 py-2.5 px-1.5 rounded-lg duration-200">
          <FaArrowLeftLong /> Back
        </span>
      </Link>
    </div>
  );
};

export default QuestionBackButton;
