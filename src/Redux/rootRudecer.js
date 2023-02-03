import { combineReducers } from "redux";
import { filterReducer } from "./FillterReducer";
import { carAddToCartReducer } from "./Reducers";

const rootReducer = combineReducers({
    carReducer: carAddToCartReducer,
    carFilter: filterReducer
})
export default rootReducer