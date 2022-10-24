import React from "react";
import { useOutletContext } from "react-router-dom";
import "./search.css";
function Search() {
  const { search, SetSearch } = useOutletContext();

  return (
    <div className="search">
      <form>
        <input
          onChange={(e) => SetSearch(e.target.value)}
          id="inputsearch"
          type="text"
          placeholder="Search Friends..."
          value={search}
        />
        <label htmlFor="inputsearch" className="lupa">
          {"🔍"}
        </label>
      </form>
    </div>
  );
}

export default Search;
