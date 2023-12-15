import { combineReducers, legacy_createStore } from "redux";
import { authReducer } from "../components/LoginAndSignup/redux/authReducer";


const combineReducer = combineReducers({ authReducer});

const store = legacy_createStore(combineReducer);

export { store };
