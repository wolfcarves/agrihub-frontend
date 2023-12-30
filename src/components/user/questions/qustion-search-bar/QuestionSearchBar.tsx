import React, { useState } from "react";

const QuestionSearchBar = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");

  return (
    <div className="w-full xl:w-fit bg-gray-100 items-center border border-gray-300 rounded-lg shadow-sm overflow-hidden">
      <div className="flex">
        <input
          type="text"
          placeholder="Type to search..."
          className="px-4 py-2 w-full focus:outline-none bg-gray-100"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button className="text-gray-400 text-sm px-4 py-2 ">Enter</button>
      </div>
    </div>
  );
};

export default QuestionSearchBar;