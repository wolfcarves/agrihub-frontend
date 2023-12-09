import React, { useState } from "react";
import { Button } from "../../button";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");

  const handleSearch = () => {
    // Implement your search logic here
    console.log("Searching for:", searchTerm);
  };
  return (
    <div className="xl:flex hidden bg-gray-100 items-center border border-gray-300 rounded-lg shadow-sm overflow-hidden">
      <input
        type="text"
        placeholder="Type to search..."
        className="px-4 py-2 w-full focus:outline-none bg-gray-100"
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
        // onKeyPress={handleKeyPress}
      />
      <button className="text-gray-400 text-sm px-4 py-2 ">Enter</button>
    </div>
  );
};

export default SearchBar;
