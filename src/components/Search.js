import React from "react";

function Search({ search, setSearch }) {
  return (
    <div className="search-bar">
      <input
        id="search-bar"
        type="text"
        placeholder="Search Restaurants..."
        name="search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  );
}

export default Search;
