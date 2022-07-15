import { combineReducers } from "redux";
import addReducer from "./safe/addReducer";
const RootReducer = combineReducers({
  add: addReducer,
});
// const initialData = {
//   safeName: "",
//   ownerName: "",
//   Type: "",
//   Description: "",
// };
// const store = [initialData];
// const SafeReducer = (state = initialData, action) => {
//   switch (action.type) {
//     default:
//       return state;
//   }
// };
export default RootReducer;
