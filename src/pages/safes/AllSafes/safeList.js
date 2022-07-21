import React, { useEffect, useState } from "react";
import "./index.css";
// import CreateForm from "../components/SafeForm";
// import addReducer from "../../../Redux/safe/addReducer";
import { useSelector } from "react-redux/es/exports";
import safeCard from "./safecard_img.svg";
import editList from "./edit.svg";
import deleteList from "./delete_List.svg";
import {
  deleteSafe,
  activeIndex,
  activeSafeDelete,
} from "../../../Redux/safe/safeActions";
import { useDispatch } from "react-redux";
import EditSafe from "../components/edit";
//import Timestamp from "react-timestamp";
import moment from "moment/moment.js";

function SafesList(props) {
  const safes = useSelector((state) => state.add.safesList);

  const activeSafe = useSelector((state) => state.add.activeIndex);

  //// const [search, setEditOpen] = useState("");
  // const editClickOpen = () => {
  //   setEditOpen(true);
  // };
  // const filteredData = useSelector((state) => state.add.filteredList);
  // const filteredCount = filteredData.length;
  // console.log("FILTER", filteredData);
  const [edit, setEdit] = useState(false);
  const editClick = () => {
    setEdit(true);
    console.log("Clicked");
  };
  const dispatch = useDispatch();
  const [data, setData] = useState([]);

  //const [active, setActive] = useState("");
  useEffect(() => {
    if (safes.length > 0) {
      setData(safes);
    }
  }, [safes, data]);
  console.log("ALL DATA", data);
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

  return (
    <div className="all_safe_list">
      {console.log("abd", props.item.length)}
      {console.log("saveList", data.length)}
      {props.item && props.item.length >= 0
        ? props.item.map((item, index) => {
            return (
              <ul className="list">
                <li
                  className="safeItem"
                  onClick={() => Activesafe(item)}
                  key={item.id}
                  safesdata={safes}
                  style={{
                    background:
                      item.id === activeSafe.id
                        ? "linear-gradient(to right, #72134b, #1d212c)"
                        : "black",
                  }}
                >
                  <div className="card">
                    <img src={safeCard} alt="safe_icon" />
                    <div className="card_info">
                      <div className="card_name">{item.safeName}</div>
                      <div className="card_time">
                        Last Updated:{moment().startOf("minute").fromNow()}
                      </div>
                      {/* <Timestamp date={Date} />; */}
                    </div>

                    <div className="card_actions">
                      <span className="edit_card">
                        <img
                          className="editCard"
                          src={editList}
                          alt="edit Icon"
                          onClick={(e) => editClick(e, item)}
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
              </ul>
            );
          })
        : data &&
          data.length > 0 &&
          data.map((item, index) => {
            return (
              <ul className="list">
                <li
                  className="safeItem"
                  onClick={() => Activesafe(item)}
                  key={item.id}
                  safesdata={safes}
                  style={{
                    background:
                      item.id === activeSafe.id
                        ? "linear-gradient(to right, #72134b, #1d212c)"
                        : "black",
                  }}
                >
                  <div className="card">
                    <img src={safeCard} alt="safe_icon" />
                    <div className="card_info">
                      <div className="card_name">{item.safeName}</div>
                      <div className="card_time">
                        Last Updated:{moment().startOf("minute").fromNow()}
                      </div>
                      {/* <Timestamp date={Date} />; */}
                    </div>

                    <div className="card_actions">
                      <span className="edit_card">
                        <img
                          className="editCard"
                          src={editList}
                          alt="edit Icon"
                          onClick={(e) => editClick(e, item)}
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
              </ul>
            );
          })}

      <div className="modal">{edit && <EditSafe closeSafe={setEdit} />}</div>
    </div>
  );
}

export default SafesList;
