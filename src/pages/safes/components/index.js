import React from "react";
import IconSafe from "./icon_safe.svg";
function CreateForm() {
  return (
    <form className="safe_form">
      <h2>Create Safe</h2>
      <div className="safe_info">
        <img src={IconSafe} alt="safe Icon" />
        <span>
          A Safe is a logical unit to store the secrets. All the safes are
          created within Vault. You can control access only at the safe level.
          As a vault administrator you can manage safes but cannot view the
          content of the safe.
        </span>
        <div className="form_input">
          <label>Safe Name</label>
          <input className="safe_name" placeholder="Safe Name"></input>
        </div>
        <div className="form_input">
          <label>Owner</label>
          <input className="safe_name" placeholder="Owner"></input>
        </div>
        <div className="form_input">
          <label>Type</label>
          <input className="safe_name" placeholder="Personal"></input>
        </div>
        <div className="form_input">
          <label>Description</label>
          <input className="safe_name" placeholder="Description"></input>
          <div className="description_info">
            Please add a minimum of 10 characters
          </div>
        </div>
        <div className="create_safe_buttons">
          <button className="cancel_button">Cancel</button>
          <button className="create_button"> Create</button>
        </div>
      </div>
    </form>
  );
}

export default CreateForm;
