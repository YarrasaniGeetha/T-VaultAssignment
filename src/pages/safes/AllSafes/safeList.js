import React, { useEffect, useState } from "react";
import "./index.css";
import CreateForm from "../components/SafeForm";
import addReducer from "../../../Redux/safe/addReducer";
import { useSelector } from "react-redux/es/exports";
import safeCard from "./safecard_img.svg";
import editList from "./edit.svg";
import deleteList from "./delete_List.svg";
import {
  deleteSafe,
  editSafe,
  activeIndex,
  activeSafeDelete,
} from "../../../Redux/safe/safeActions";
import { useDispatch } from "react-redux";

function SafesList() {
  const safes = useSelector((state) => state.add.safesList);
  //const activeSafe = useSelector((state) => state.add.activeIndex);
  const [editOpen, setEditOpen] = useState(false);
  const editClickOpen = () => {
    setEditOpen(true);
  };
  const dispatch = useDispatch();
  const [data, setData] = useState([]);
  //const [active, setActive] = useState("");
  useEffect(() => {
    if (safes.length > 0) {
      setData(safes);
    }
  }, [safes, data]);
  const deletesafeAction = (e, id) => {
    // console.log("Called");
    e.stopPropagation();
    dispatch(deleteSafe(id));
    dispatch(activeSafeDelete(id));
  };
  const Activesafe = (item) => {
    //console.log("activeid");
    dispatch(activeIndex(item));
    ///dispatch(activeIndex());
  };

  const handleEdit = (e, id) => {
    e.preventDefault();
    dispatch(editSafe(id));
  };
  // function toggleActive(index) {
  //   setActive({ ...active, activeSafe: safes(index) });
  // }
  return (
    <div className="all_safe_list">
      <ul className="list">
        {/* {console.log("abd", data)} */}

        {data.map((item, index) => {
          return (
            <li
              className="safeItem"
              onClick={() => Activesafe(item)}
              key={item.id}
            >
              <div className="card">
                <img src={safeCard} alt="safe_icon" />
                <div className="card_info">
                  <div className="card_name">{item.safeName}</div>
                  <div className="card_time">Last Seen 10AM</div>
                </div>

                <div className="card_actions">
                  <span className="edit_card">
                    <img
                      src={editList}
                      alt="edit Icon"
                      onClick={editClickOpen}
                      //onClick={(e) => handleEdit(e, item)}
                    />
                  </span>
                  <span className="delete_card">
                    <img
                      src={deleteList}
                      alt="delete Icon"
                      //onClick={() => dispatch(deleteSafe(item.id))}
                      onClick={(e) => deletesafeAction(e, item.id)}
                    />
                  </span>
                </div>
              </div>
            </li>
          );
        })}
        {/* <CreateForm editopen={edit} setEdit={setEdit} /> */}
      </ul>
    </div>
  );
}

export default SafesList;
