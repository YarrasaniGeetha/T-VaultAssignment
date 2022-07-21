import { React, useState } from "react";
import "./index.css";
import { useSelector } from "react-redux";
import SafesList from "./safeList";
import SearchBar from "../../../component/SearchBar";
import CreateSafe from "../components/create";
//import safes from "../AllSafes/safeList";
import safesDefault from "./safes.svg";

const AllSafes = () => {
  const safes = useSelector((state) => state.add.safesList);
  //const filteredData = useSelector((state) => state.add.filteredList);
  const [item, setItem] = useState([]);

  // const searchValue = () => {
  //   setItem(true);
  // };
  // const searchFalse = () => {
  //   setItem(false);
  // };
  // const filteredSafes = filteredData(safes, item);
  // const filteredcount = filteredSafes.length;

  return (
    <div className="left_content">
      <div className="header">
        <div className="all_safes">
          All Safes ({item ? item.length : safes && safes.length})
        </div>
        {/* //searchh={searchValue} */}
        {console.log("ITEM", item)}
        {<SearchBar setItem={setItem} />}
      </div>
      <div className="safes_section">
        {safes && safes.length < 1 ? (
          <div className="default_image_container">
            <img
              src={safesDefault}
              alt="safes Icon"
              className="Default_safe_Image"
            />
            <div className="caption">Create a Safe to get started!</div>
          </div>
        ) : item && item.length <= 0 ? (
          <div className="all-safes__not-found">No Safe Found!</div>
        ) : (
          //safeSearch={item} searchfalse={setItem}
          <SafesList item={item} />
        )}
        <div className="add_safe" type="add">
          <CreateSafe />
        </div>
        {/* <img className="plusImage" src={PlusImage} alt="Plus Icon" /> */}
      </div>
    </div>
  );
};

export default AllSafes;
