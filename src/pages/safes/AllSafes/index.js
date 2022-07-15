import { React, useState } from "react";
import "./index.css";
import { useSelector } from "react-redux";
import SafesList from "./safeList";
import SearchBar from "../../../component/SearchBar";
import CreateSafe from "../components/create";
import safes from "../AllSafes/safeList";

const AllSafes = () => {
  const safes = useSelector((state) => state.add.safesList);
  console.log("length", safes.length);
  const [editFormVisibility, setEditFormVisibility] = useState(false);
  const handleEditSafe = () => {
    setEditFormVisibility(true);
  };
  return (
    <div className="left_content">
      <div className="header">
        <div className="all_safes">All Safes ({safes && safes.length})</div>
        {<SearchBar />}
      </div>
      <div className="safes_section">
        {safes && safes.length < 1 ? (
          <div className="default_image_container">
            <div className="caption">Create a Safe to get started!</div>
          </div>
        ) : (
          <SafesList
            editsafe={handleEditSafe}
            editFormVisibility={editFormVisibility}
          />
        )}
        <div className="add_safe" type="add">
          <CreateSafe editFormVisibility={editFormVisibility} />
        </div>
        {/* <img className="plusImage" src={PlusImage} alt="Plus Icon" /> */}
      </div>
    </div>
  );
};

export default AllSafes;
