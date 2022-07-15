import { React, useState, useEffect } from "react";
import "./secrets.css";
import folderPlus from "./folder-plus 1.svg";
import AddSecret from "./AddSecret";
import SecretImage from "./img_secrets.svg";
import { useSelector } from "react-redux/es/exports";
import SafesList from "../AllSafes/safeList";
import addReducer from "../../../Redux/safe/addReducer";
import { activeIndex } from "../../../Redux/safe/safeActions";
import { useDispatch } from "react-redux";

function Secrets() {
  const safes = useSelector((state) => state.add.safesList);
  const activeSafe = useSelector((state) => state.add.activeIndex);

  console.log(activeSafe);
  const [secret, setsecret] = useState(false);

  const handleClickOpen = (e) => {
    setsecret(true);
  };
  // const [add, setAdd] =
  //   useState[
  //     {
  //       activeIndex: "",
  //       safesList: [],
  //     }
  //   ];
  return (
    <div className="right_content">
      <div className="secrets_content">
        {safes.length < 1 ? (
          <div className="secret_description">
            <h1>No Safes Created Yet</h1>
            <p className="secret_details">
              Create a Safe to see your secrets, folders and permissions here
            </p>
          </div>
        ) : (
          <div className="secret_description">
            <h1>{activeSafe.safeName}</h1>
            <p className="secret_details">{activeSafe.Description} </p>
          </div>
        )}
      </div>
      <div className="secret_body">
        <div className="secret_header">
          <div>Secrets</div>
          <div className="folder">
            Add Folder
            <img src={folderPlus} onClick={handleClickOpen} alt="folder plus" />
            {/* </div>
          <div className="modal"> */}
            <div className="secret_add">
              {secret && <AddSecret closeSecret={setsecret} />}
            </div>
          </div>
        </div>
      </div>
      <div className="body_secret">
        <img src={SecretImage} alt="secretIcon" />
        <div className="secret_caption">
          "Add a"
          <span className="secrets_caption">Folder</span>
          "and then you'll be able to add"
          <span className="secrets_caption">Secrets</span>
          "to view them all here"
        </div>
        <button className="Add_button" onClick={handleClickOpen}>
          + Add
        </button>
      </div>
    </div>
  );
}

export default Secrets;
