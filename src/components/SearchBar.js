import { getSuggestedQuery } from "@testing-library/dom";
import React from "react";
// Styling

const SearchBar = (props) => {
  return (
    <input
      className="searchBar"
      placeholder="Search for a cookie name"
      onChange={(e) => props.setQuery(e.target.value)}
    />
  );
};

export default SearchBar;
