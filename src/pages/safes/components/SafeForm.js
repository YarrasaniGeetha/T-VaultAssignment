import { React, useState } from "react";
import "./index.css";

import IconSafe from "./icon_safe.svg";
import { addSafe } from "../../../Redux/safe/safeActions";
import { useDispatch } from "react-redux";
//import activeIndex from "../../../Redux/safe/safeActions";

const CreateForm = ({ closeSafe, editFormVisibility }) => {
  const initialData = {
    safeName: "",
    ownerName: "",
    Type: "",
    Description: "",
    id: Date.now(),
    secret: [],
  };

  const [safeValues, setSafeValues] = useState(initialData);
  const dispatch = useDispatch();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setSafeValues({ ...safeValues, [name]: value });
  };

  const createClick = (e) => {
    e.preventDefault();
    dispatch(addSafe(safeValues));

    closeSafe(false);
  };

  function CreateButton() {
    if (
      safeValues.safeName !== "" &&
      safeValues.ownerName !== "" &&
      safeValues.Description.length > 10
    ) {
      return (
        <button className="create_button" onClick={createClick}>
          + Create
        </button>
      );
    } else {
      return (
        <button className="create_button" disabled={true}>
          + Create
        </button>
      );
    }
  }

  // if (!open) return null;
  return (
    <div className="overlay">
      {/* <>
        {editFormVisibility === false ? ( */}
      <form className="safe_form">
        <div className="safe_form_header">
          <h1>Create Safe</h1>
          <div className="safe_info">
            <img src={IconSafe} alt="safe Icon" />
            <div className="Info">
              A Safe is a logical unit to store the secrets. All the safes are
              created within Vault. You can control access only at the safe
              level. As a vault administrator you can manage safes but cannot
              view the content of the safe.
            </div>
          </div>
        </div>
        <div className="form_input">
          <label className="label">Safe Name</label>
          <input
            className="input_name"
            name="safeName"
            type="text"
            placeholder="Safe Name"
            value={safeValues.safeName}
            onChange={handleChange}
          ></input>
        </div>
        <div className="form_input">
          <label className="label">Owner</label>
          <input
            className="input_name"
            name="ownerName"
            value={safeValues.Owner}
            onChange={handleChange}
            type="text"
            placeholder="Owner"
          ></input>
        </div>
        <div className="form_input">
          <label className="label">Type</label>
          <select
            className="type"
            name="Type"
            value={safeValues.Type}
            onChange={handleChange}
            id="type_options"
          >
            <option value="personal">Personal</option>
            <option value="other">Others</option>
          </select>
        </div>
        <div className="form_input">
          <label className="label">Description</label>
          <textarea
            className="input_name"
            name="Description"
            minLength={10}
            id="description"
            type="text"
            placeholder="Description"
            value={safeValues.Description}
            onChange={handleChange}
          ></textarea>
          <div className="description_info">
            Please add a minimum of 10 characters
          </div>
        </div>
        <div className="create_safe_buttons">
          <button className="cancel_button" onClick={() => closeSafe(false)}>
            Cancel
          </button>
          <CreateButton />
        </div>
      </form>
      {/* ) : (
          <form className="safe_form">
            <div className="safe_form_header">
              <h1>Create Safe</h1>
              <div className="safe_info">
                <img src={IconSafe} alt="safe Icon" />
                <div className="Info">
                  A Safe is a logical unit to store the secrets. All the safes
                  are created within Vault. You can control access only at the
                  safe level. As a vault administrator you can manage safes but
                  cannot view the content of the safe.
                </div>
              </div>
            </div>
            <div className="form_input">
              <label className="label">Safe Name</label>
              <input
                className="input_name"
                name="safeName"
                type="text"
                placeholder="Safe Name"
                value={safeValues.safeName}
                onChange={handleChange}
              ></input>
            </div>
            <div className="form_input">
              <label className="label">Owner</label>
              <input
                className="input_name"
                name="ownerName"
                value={safeValues.Owner}
                onChange={handleChange}
                type="text"
                placeholder="Owner"
              ></input>
            </div>
            <div className="form_input">
              <label className="label">Type</label>
              <select
                className="type"
                name="Type"
                value={safeValues.Type}
                onChange={handleChange}
                id="type_options"
              >
                <option value="personal">Personal</option>
                <option value="other">Others</option>
              </select>
            </div>
            <div className="form_input">
              <label className="label">Description</label>
              <textarea
                className="input_name"
                name="Description"
                minLength={10}
                id="description"
                type="text"
                placeholder="Description"
                value={safeValues.Description}
                onChange={handleChange}
              ></textarea>
              <div className="description_info">
                Please add a minimum of 10 characters
              </div>
            </div>
            <div className="create_safe_buttons">
              <button
                className="cancel_button"
                onClick={() => closeSafe(false)}
              >
                Cancel
              </button>
              <button
                className="cancel_button"
                onClick={() => closeSafe(false)}
              >
                Update
              </button>
            </div>
          </form>
        )} */}
      {/* </> */}
    </div>
  );
};

export default CreateForm;
