import { combineReducers } from "redux";
import TodoReducer from "./TodoReducer";
import SideBarReducer from "./SideBarReducer";

export default combineReducers({
    todo: TodoReducer,
    sideBar: SideBarReducer
})