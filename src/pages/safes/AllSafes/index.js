import React from "react";
import "./index.css";
import SafeImage from "./safes.svg";
import SearchBar from "../../../component/SearchBar";
import PlusImage from "./PlusImage.svg";

const AllSafes = () => {
  return (
    <div className="left_content">
      <div className="header">
        <div className="all_safes">All Safes</div>
        {<SearchBar />}
      </div>
      <div className="safes_section">
        <div className="default_image_container">
          <img className="safe_image" src={SafeImage} alt="safes Icon" />
          <div className="caption">Create a Safe to get started!</div>

          <img className="plusImage" src={PlusImage} alt="Plus Icon" />
        </div>
      </div>
    </div>
  );
};

export default AllSafes;
