import * as actionTypes from "./safeTypes";

//import addSafe from "./safeActions";
// const initialData = {
//   safeName: "",
//   ownerName: "",
//   Type: "",
//   Description: "",
//   id: "2",
// };
const store = { safesList: [], activeIndex: "" };

const addReducer = (state = store, action) => {
  //console.log(state);

  console.log(action.type);
  switch (action.type) {
    //if action.type is equal to ADD_SAFE then do below return
    case actionTypes.ADD_SAFE:
      return {
        ...state,
        safesList: [...state.safesList, action.payload],
        activeIndex: action.payload,
      };
    case actionTypes.ADD_SECRET:
      return {};
    case actionTypes.ACTIVE_INDEX:
      return {
        ...state,
        activeIndex: action.payload,
      };
    case actionTypes.DELETE_SAFE:
      //console.log("hello");
      const filterSafe = state.safesList.filter(
        (item) => item.id !== action.payload
      );
      //console.log("array", filterSafe);
      return {
        ...state,
        safesList: [...filterSafe],
        //activeIndex: state.safesList[0],
      };
    case actionTypes.DELETE_ACTIVE_ITEM:
      return {
        ...state,
        activeIndex: state.safesList[0],
      };
    case actionTypes.EDIT_SAFE:
      const editSafe = state.safesList.filter(
        (item) => item.id === action.payload
      );
      // const index = state.safesList.findIndex((i) => i.id === id);
      // const editSafes = state.safesList.splice(index, 1, newObj);
      return {
        ...state,
        safesList: [...editSafe],
      };
    default:
      return state;
  }
};

export default addReducer;
