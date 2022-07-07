import React from "react";
import { useSearchParams } from "react-router-dom";
import "./index.css";
const AppRoles = () => {
  const [searchparams, setSearchParams] = useSearchParams();
  const name = searchparams.get("data");
  return (
    <div className="app_roles">
      <span className="text">Vault AppRoles</span>
      <p className="data">data={name}</p>
    </div>
  );
};

export default AppRoles;
