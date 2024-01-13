import React, { useState } from "react";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");

  return (
    <div className="flex items-center h-full py-3">
      <input
        id="searchBar"
        className="flex h-12 w-72  font-poppins-regular rounded-lg focus:border focus:border-input bg-accent px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
        placeholder="Type to search..."
      />
    </div>
  );
};

export default SearchBar;
