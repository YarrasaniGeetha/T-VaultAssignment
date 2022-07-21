import * as actionTypes from "./safeTypes";

//import addSafe from "./safeActions";
// const initialData = {
//   safeName: "",
//   ownerName: "",
//   Type: "",
//   Description: "",
//   id: "2",

// };
const store = { safesList: [], activeIndex: "", filteredList: [] };

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
      const safe = [...state.safesList]; //{}

      const index = safe.findIndex((item) => item.id === action.payload.id);
      console.log("Values", safe);
      safe.splice(index, 1, action.payload);

      return {
        ...state,
        safesList: safe,
        activeIndex: action.payload,
      };
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
    case actionTypes.DELETE_SECRET:
      console.log("Payload", action.payload);
      const safes = [...state.safesList];
      const activesecret = { ...state.activeIndex };
      console.log(activesecret);
      const index1 = safes.findIndex((item) => item.id === action.payload.id);

      safes.splice(index1, 1, action.payload);

      return {
        ...state,
        safesList: safes,
        activeIndex: action.payload,
      };
    case actionTypes.EDIT_SAFE:
      const editSafe = [...state.safesList];
      const indexValue = editSafe.findIndex(
        (item) => item.id === action.payload.id
      );
      editSafe.splice(indexValue, 1, action.payload);
      // const index = state.safesList.findIndex((i) => i.id === id);
      // const editSafes = state.safesList.splice(index, 1, newObj);
      return {
        ...state,
        safesList: editSafe,
        activeIndex: action.payload,
      };
    case actionTypes.DELETE_ACTIVE_ITEM:
      //const activeId = safes.findIndex((item) => item.id === action.payload.id);

      return {
        ...state,
        activeIndex: state.safesList[0],
      };
    // case actionTypes.EDIT_SAFE:
    //   const editSafe = state.safesList.filter(
    //     (item) => item.id === action.payload
    //   );
    //   // const index = state.safesList.findIndex((i) => i.id === id);
    //   // const editSafes = state.safesList.splice(index, 1, newObj);
    //   return {
    //     ...state,
    //     safesList: [...editSafe],
    //   };
    case actionTypes.SEARCH_SAFE:
      const searchSafe = state.safesList.filter((item) =>
        item.safeName.toLowerCase().includes(action.payload)
      );

      console.log("FilterTOTAL", searchSafe);
      return {
        ...state,

        filteredList: [...searchSafe],
      };
    default:
      return state;
  }
};

export default addReducer;
