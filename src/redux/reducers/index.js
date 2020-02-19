import {combineReducers} from "redux";
import drawerReducer from "./drawerReducer";
import paths from "./paths";

export default combineReducers({paths, drawerReducer});
