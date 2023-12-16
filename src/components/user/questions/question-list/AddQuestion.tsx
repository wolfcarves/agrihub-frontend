import React from "react";
import { IoMdAdd } from "react-icons/io";

interface AddQuestionsProps {
  handleNavigateAsk: () => void;
}

function AddQuestion({ handleNavigateAsk }: AddQuestionsProps) {
  return (
    <div className="w-full border flex justify-between items-center py-2 px-3 rounded-xl border-border">
      <p className="text-gray-400 text-sm">Add a new thread</p>
      <div
        className="bg-primary text-white p-2 rounded-lg cursor-pointer"
        onClick={() => handleNavigateAsk()}
      >
        <IoMdAdd />
      </div>
    </div>
  );
}

export default AddQuestion;
