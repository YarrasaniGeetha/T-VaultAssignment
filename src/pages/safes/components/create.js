import React, { useState } from "react";
import PlusImage from "./PlusImage.svg";
import CreateForm from "../components/SafeForm";
import "./index.css";
// import { Modal, ModalHeader } from "reactstrap";
import { useSelector } from "react-redux/es/exports";
function CreateSafe() {
  const safes = useSelector((state) => state.add.safesList);
  const [safe, setsafe] = useState(false);
  const handleClickOpen = () => {
    setsafe(true);
  };

  return (
    <div className="create_safe_form">
      {safes && safes.length < 1 ? (
        <img
          className="plusImage"
          src={PlusImage}
          onClick={handleClickOpen}
          alt="Plus Icon"
        />
      ) : (
        <img
          className="plusimage"
          src={PlusImage}
          onClick={handleClickOpen}
          alt="Plus Icon"
        />
      )}

      <div className="modal">{safe && <CreateForm closeSafe={setsafe} />}</div>
    </div>
  );
}

export default CreateSafe;
