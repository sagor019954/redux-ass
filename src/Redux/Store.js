import { applyMiddleware, createStore } from "redux";
import { carAddToCartReducer } from "./Reducers";
import { composeWithDevTools } from '@redux-devtools/extension';
import rootReducer from "./rootRudecer";
import carnumber from "./MIddleaware/carnumber";
import thunk from "redux-thunk";

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(carnumber, thunk)))