import React, { useState } from "react";
import { Modal, ModalHeader } from "reactstrap";
function Create() {
  const [modal, setmodal] = useState(false);
  return (
    <div>
      <Modal size="lg" isOpen={modal} toggle={() => setmodal(!modal)}>
        <ModalHeader toggle={() => setmodal(!modal)}>PopUp</ModalHeader>
      </Modal>
      <img
        className="plusImage"
        src={PlusImage}
        onClick={() => setmodal(true)}
        alt="Plus Icon"
      />
    </div>
  );
}

export default Create;
