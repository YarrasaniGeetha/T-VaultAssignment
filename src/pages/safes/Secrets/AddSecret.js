import React, { useState } from "react";
import "./secrets.css";
import { addSecretData } from "../../../Redux/safe/safeActions";
import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";

function AddSecret({ closeSecret, safesData }) {
  const secretData = {
    id: uuidv4(),
    folderName: "",
  };

  const [secretValue, setSecretValue] = useState(secretData);
  const handleInput = (e) => {
    console.log(e.target);
    const { name, value } = e.target;
    setSecretValue({ ...secretValue, [name]: value });
    console.log(secretValue);
  };
  const dispatch = useDispatch();
  const addSecret = (e) => {
    let safes = { ...safesData };

    let secretArray = [...safes.secret];
    console.log("hi");
    secretArray.push(secretValue);
    safes.secret = secretArray;
    //safes.secrets.push(secretValue);
    console.log("ALL DATA", safes);
    dispatch(addSecretData(safes));
    closeSecret(false);
  };
  // const [secretValue, setSecretValue] = useState("");
  // // const dispatch = useDispatch();
  // const handleChange = (e) => {
  //   setSecretValue(e.target.value);
  // };
  //   setSecretValue({ ...secretValue, [name]: value });
  // const saveClick = (e) => {
  //   e.preventDefault();
  //   //   dispatch(addSafe(safeValues));
  // };
  // function SaveButton() {
  //   if (folderName !== "") {
  //     return <button className="save_button">Save</button>;
  //   } else {
  //     return (
  //       <button className="save_button" disabled={true}>
  //         Save
  //       </button>
  //     );
  //   }
  // }

  return (
    <div className="overlay_secret">
      <div className="secret_form">
        <div className="folder_header">
          <h1 className="f_header">Add Folder</h1>
        </div>
        <div className="folder_body">
          <label className="folder_label">Folder Name</label>
          <input
            className="input_folder"
            name="folderName"
            type="text"
            maxLength={25}
            value={secretValue.folderName}
            onChange={handleInput}
            placeholder="Folder Name"
          ></input>
          <div className="secret_info">
            Please enter a minimum of 3 characters lowercase alphabets number
            and underscores only.
          </div>
        </div>
        <div className="add_secret_buttons">
          <div
            className="secret_cancel_button"
            onClick={() => closeSecret(false)}
          >
            <button className="secret_cancel_button">Cancel</button>
          </div>
          {secretValue.folderName !== "" ? (
            <div className="save_button">
              <button
                className="save_secret"
                minLength={3}
                onClick={() => addSecret()}
              >
                Save
              </button>
            </div>
          ) : (
            <div className="save_button">
              <button className="save_secretd" disabled={true}>
                Save
              </button>
            </div>
          )}
          {/* <button className="save_button" onClick={() => closeSecret(false)}>
            Save
          </button> */}
        </div>
      </div>
    </div>
  );
}

export default AddSecret;
