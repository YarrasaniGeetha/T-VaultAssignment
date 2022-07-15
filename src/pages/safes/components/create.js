import React, { useState } from "react";
import PlusImage from "./PlusImage.svg";
import CreateForm from "../components/SafeForm";
import "./index.css";
// import { Modal, ModalHeader } from "reactstrap";
function CreateSafe(editFormVisibility) {
  const [safe, setsafe] = useState(false);
  const handleClickOpen = () => {
    setsafe(true);
  };
  // const createClick = () => {
  //   setmodal(modal);
  // };
  // function makeBlur() {
  //   document.body.style.opacity = 0.5;
  // }
  return (
    <>
      <div className="create_safe_form">
        {/* <Modal size="lg" isOpen={modal} toggle={() => setmodal(!modal)}>
        <ModalHeader toggle={() => setmodal(!modal)}>{CreateForm}</ModalHeader>
      </Modal> */}
        <img
          className="plusImage"
          src={PlusImage}
          onClick={handleClickOpen}
          alt="Plus Icon"
        />
        {/* <div>{modal ? { CreateForm } : ""}</div> */}
        <div className="modal">
          {safe && <CreateForm closeSafe={setsafe} />}
        </div>
      </div>
    </>
  );
}

export default CreateSafe;
