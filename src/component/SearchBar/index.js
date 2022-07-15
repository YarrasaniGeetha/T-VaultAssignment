import React, { useState } from "react";
import "./index.css";
import { SafesList } from "../../pages/safes/AllSafes/safeList";

function SearchBar() {
  const [search, setSearch] = useState("");
  return (
    <input
      className="search_bar"
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      placeholder="Search"
    ></input>
    // {SafesList.filter(item =>item.safeName.includes(search)).map(item =>{

    // return{item.safeName}

    // })}
  );
}

export default SearchBar;
