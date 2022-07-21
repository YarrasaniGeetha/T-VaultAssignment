import React, { useState } from "react";
import { useSelector } from "react-redux/es/exports";
import secretCard from "./secret.svg";
import deleteSecret from "./delete.svg";
import { useDispatch } from "react-redux";
import { deletesecret } from "../../../Redux/safe/safeActions";
import moment from "moment/moment.js";

function SecretList() {
  const activeSafe = useSelector((state) => state.add.activeIndex);
  // const [active, setActive] = useState(false);
  const safeLength = Object.keys(activeSafe).length;
  // const handleClick = () => {
  //   setActive(true);
  // };
  const dispatch = useDispatch();
  const deleteSecretCard = (e, id) => {
    const secretDelete = { ...activeSafe };
    const deleteActive = secretDelete.secret.filter((item) => item.id !== id);
    //console.log("Called");
    e.stopPropagation();
    secretDelete.secret = deleteActive;
    dispatch(deletesecret(secretDelete));
    console.log(id);
    //dispatch(activeSafeDelete(id));
  };
  return (
    <div className="secret_List_content">
      <ul className="secret_list">
        {safeLength > 0 &&
          activeSafe.secret.map((card) => (
            <li className="secretItem">
              <div className="card">
                <img src={secretCard} alt="secret_icon" />
                <div className="card_info">
                  <div className="card_name">{card.folderName}</div>
                  <div className="card_time">
                    {moment().startOf("minute").fromNow()}
                  </div>
                </div>
                <div className="card_actions">
                  <span className="delete_Secret">
                    <img
                      src={deleteSecret}
                      alt="deleteIcon"
                      onClick={(e) => deleteSecretCard(e, card.id)}
                    />
                  </span>
                </div>

                {/* <div className="card_actions">
                  <span className="delete_card">
                    <img
                      src={deleteList}
                      alt="delete Icon"
                      //onClick={() => dispatch(deleteSafe(item.id))}
                      onClick={(e) => deletesafeAction(e, item.id)}
                    />
                  </span>
                </div> */}
              </div>
            </li>
          ))}
      </ul>
    </div>
  );
}

export default SecretList;
