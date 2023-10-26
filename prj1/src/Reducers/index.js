import {combineReducers} from "redux";
import cartReducer from "./cart";
import wishReducer from "./wish";

const allReducers = combineReducers({
    cartReducer,
    wishReducer,
})
export default allReducers;