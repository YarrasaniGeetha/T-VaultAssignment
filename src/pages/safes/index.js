import React from "react";
import "./index.css";
import AllSafes from "./AllSafes";
import Secrets from "./Secrets";
import { useSelector } from "react-redux";
const Safe = () => {
  const safes = useSelector((state) => state.add.safesList);
  const activeSafe = useSelector((state) => state.add.activeIndex);
  //console.log("total", safes, activeSafe);
  return (
    <div className="section">
      {<AllSafes safesList={safes} activeIndex={activeSafe} />}
      {<Secrets safesList={safes} activeIndex={activeSafe} />}
    </div>
  );
};

export default Safe;
