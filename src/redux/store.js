import { combineReducers, legacy_createStore } from "redux";
import { authReducer } from "../components/LoginAndSignup/redux/authReducer";
import { employeeReducer } from "../components/Dashboard/redux/employeeReducer";

const combineReducer = combineReducers({ authReducer, employeeReducer });

const store = legacy_createStore(combineReducer);

export { store };
