import withRequireAuth from "@higher-order/account/withRequireAuth";
import useAuth from "@hooks/useAuth";
import React from "react";
import { IoMdAdd } from "react-icons/io";
import { Link } from "react-router-dom";

const Input = () => (
  <div className="w-full flex justify-between items-center h-14 py-1.5 px-3 rounded-xl border-border hover:opacity-80 duration-100 shadow-md bg-white cursor-pointer max-w-[45rem] mx-auto border">
    <span className="text-gray-400 text-sm font-poppins-regular">
      Post A Question
    </span>

    <div className="relative text-white items-center h-full bg-primary aspect-square rounded-xl">
      <div className="absolute inset-0 w-max h-max text-lg m-auto">
        <IoMdAdd />
      </div>
    </div>
  </div>
);

const QuestionsInputAddQuestion = () => {
  const isAuthenticated = useAuth().isAuthenticated;

  if (!isAuthenticated) {
    return <Input />;
  }

  return (
    <Link to="/forum/ask">
      <Input />
    </Link>
  );
};

export default withRequireAuth(QuestionsInputAddQuestion);
