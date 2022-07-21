import React from "react";
import IconSafe from "./icon_safe.svg";
import { useSelector } from "react-redux/es/exports";
import { useState } from "react";
import { editSafe } from "../../../Redux/safe/safeActions";
import { useDispatch } from "react-redux";

function EditSafe({ closeSafe }) {
  const activeSafe = useSelector((state) => state.add.activeIndex);
  const data = { ...activeSafe };
  console.log("My", data);
  const [editFormValues, setEditFormValues] = useState(data);
  //const [dropdownValue, setDropdownValue] = useState("");
  const dispatch = useDispatch();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditFormValues({
      ...editFormValues,
      [name]: value,
    });
  };
  const updateClick = (e) => {
    e.preventDefault();
    dispatch(editSafe(editFormValues));

    closeSafe(false);
  };

  return (
    <div className="overlay">
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
            maxLength={15}
            type="text"
            placeholder="Safe Name"
            value={editFormValues.safeName}
            onChange={handleChange}
          ></input>
        </div>
        <div className="form_input">
          <label className="label">Owner</label>
          <input
            className="input_name"
            name="ownerName"
            value={editFormValues.ownerName}
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
            value={editFormValues.Type}
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
            maxLength={25}
            minLength={10}
            id="description"
            type="text"
            placeholder="Description"
            value={editFormValues.Description}
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
          <button className="update_button" onClick={updateClick}>
            Update
          </button>
        </div>
      </form>
    </div>
  );
}

export default EditSafe;
