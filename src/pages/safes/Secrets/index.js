import { React, useState } from "react";
import "./secrets.css";
import { useSelector } from "react-redux/es/exports";
import inactivePlus from "./addFolder.svg";
import activePlus from "./folder-plus 1.svg";
import AddSecret from "./AddSecret";
import SecretImage from "./img_secrets.svg";

import SecretList from "../Secrets/secretList";
// import SafesList from "../AllSafes/safeList";
// import addReducer from "../../../Redux/safe/addReducer"/;
///import { activeIndex } from "../../../Redux/safe/safeActions";
// import { useDispatch } from "react-redux";

function Secrets({ activeIndex }) {
  const safes = useSelector((state) => state.add.safesList);
  const activeSafe = useSelector((state) => state.add.activeIndex);
  const secrets = useSelector((state) => state.add.activeIndex.secret);
  /// console.log(activeSafe.length);
  //console.log(activeSafe);
  //const safeLength = Object.keys(activeSafe).length;
  const [secret, setsecret] = useState(false);

  const handleClickOpen = (e) => {
    setsecret(true);
  };

  return (
    <div className="right_content">
      <div className="secrets_content">
        {activeSafe.length < 1 ? (
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
      <div className="secret_section">
        <div className="secret_body">
          <div className="secret_header">
            <div>Secrets</div>
            <div className="folder">
              Add Folder
              {activeSafe.length < 1 ? (
                <img
                  className="folder_Plus"
                  src={inactivePlus}
                  alt="folder plus"
                  disabled={true}
                />
              ) : (
                <img
                  src={activePlus}
                  className="folder_Plus_Active"
                  onClick={handleClickOpen}
                  alt="folder plus"
                />
              )}
              {/* </div>
          <div className="modal"> */}
              <div className="secret_add">
                {secret && (
                  <AddSecret safesData={activeIndex} closeSecret={setsecret} />
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="secret_count">
          {secrets && secrets.length}&nbsp;&nbsp;secrets
        </div>
        <div className="body_secret">
          {!secrets || secrets.length < 1 ? (
            <>
              <img
                src={SecretImage}
                alt="secretIcon"
                className="secret_default_image"
              />
              <div className="secret_caption">
                "Add a"
                <span className="secrets_caption">Folder</span>
                "and then you'll be able to add"
                <span className="secrets_caption">Secrets</span>
                "to view them all here"
              </div>

              {safes.length < 1 ? (
                <button
                  className="Add_button"
                  disabled={true}
                  //onClick={handleClickOpen}
                >
                  + Add
                </button>
              ) : (
                <button className="Add_button" onClick={handleClickOpen}>
                  + Add
                </button>
              )}
            </>
          ) : (
            <SecretList />
          )}
        </div>
      </div>
    </div>
  );
}

export default Secrets;
