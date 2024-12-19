import React, { useState } from "react";

function Search() {
  const [showSearchBar, setShowSearchBar] = useState(false);
  const [query, setQuery] = useState("");

  const handleClick = () => {
    setShowSearchBar(!showSearchBar);
  };

  const handleInput = (e) => {
    setQuery(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // where to implement the search functionality
    console.log("Searching for:", query);
  };

  return (
    <div className="relative inline-block mt-2 ml-2">
      <button
        onClick={handleClick}
        className="bg-none border-none text-xl cursor-pointer"
      >
        <img src="\images\image.png" alt="" className="h-[2rem]" />
      </button>
      {showSearchBar && (
        <form
          action=""
          onSubmit={handleSubmit}
          className="absolute top-0 left-12 mt-2 w-[200px]"
        >
          <input
            type="text"
            value={query}
            onChange={handleInput}
            placeholder="Am looking for..."
            className="font-dancing p-2 border-2 border-[#4d4b4b] rounded-lg outline-none placeholder:text-gray-500 placeholder:text-lg placeholder:opacity-80 placeholder:font-dancing w-full"
          />
        </form>
      )}
    </div>
  );
}

export default Search;
