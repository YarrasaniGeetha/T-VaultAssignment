import React from "react";
import "./secrets.css";
//import Secrets from "../Secrets/index";
//import { useDispatch } from "react-redux";
function AddSecret({ closeSecret }) {
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
      <form className="secret_form">
        <div className="folder_header">
          <h1 className="f_header">Add Folder</h1>
        </div>
        <div className="folder_body">
          <label className="folder_label">Folder Name</label>
          <input
            className="input_folder"
            name="folderName"
            type="text"
            // value={secretValue.folderName}
            // onChange={handleChange}
            placeholder="Folder Name"
          ></input>
          <div className="secret_info">
            Please enter a minimum of 3 characters lowercase alphabets numbebr
            and underscores only.
          </div>
        </div>
        <div className="add_secret_buttons">
          <button className="cancel_button" onClick={() => closeSecret(false)}>
            Cancel
          </button>
          <button className="save_button">Save</button>
          {/* <button className="save_button" onClick={() => closeSecret(false)}>
            Save
          </button> */}
        </div>
      </form>
    </div>
  );
}

export default AddSecret;
