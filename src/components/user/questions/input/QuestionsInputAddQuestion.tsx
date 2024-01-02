import withRequireAuth from "@higher-order/account/withRequireAuth";
import React from "react";
import { IoMdAdd } from "react-icons/io";
import { Link } from "react-router-dom";

const QuestionsInputAddQuestion = () => {
  return (
    <Link to="/forum/ask">
      <div className="w-full border flex justify-between items-center h-14 py-1.5 px-3 rounded-xl border-border shadow-sm hover:shadow-md bg-white">
        <span className="text-gray-400 text-sm font-poppins-regular">
          Post A Question
        </span>

        <div className="relative text-white items-center h-full bg-primary aspect-square rounded-xl">
          <div className="absolute inset-0 w-max h-max text-lg m-auto">
            <IoMdAdd />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default withRequireAuth(QuestionsInputAddQuestion);
