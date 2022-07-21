import React, { useState } from "react";
import "./index.css";
import { useDispatch, useSelector } from "react-redux/es/exports";
import { searchsafe } from "../../Redux/safe/safeActions";

function SearchBar({ setItem }) {
  const safes = useSelector((state) => state.add.safesList);
  console.log("all", safes);
  const [search, setSearch] = useState("");
  // const [item, setItem] = useState(false);
  console.log("AC", search);
  const filterData = useSelector((state) => state.add.filteredList);
  console.log("FilterDATA", filterData);

  // const searchsafe = () => {
  //   return safes.filter((item) => item.safeName.toLowerCase().includes(search));
  //

  const dispatch = useDispatch();
  const searchData = (value) => {
    setSearch(value);

    dispatch(searchsafe(value));
  };
  if (search !== "") {
    setItem(filterData);
  } else {
    setItem("");
  }

  return (
    <input
      className="search_bar"
      type="text"
      value={search}
      onChange={(e) => searchData(e.target.value)}
      placeholder="Search"
    ></input>
  );
}

export default SearchBar;
