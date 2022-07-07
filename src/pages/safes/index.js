import React from "react";
import "./index.css";
import AllSafes from "./AllSafes";
import Secrets from "./Secrets";
const Safe = () => {
  return (
    <div className="section">
      {<AllSafes />}
      {<Secrets />}
    </div>
  );
};

export default Safe;
