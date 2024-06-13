import { combineReducers, createStore } from "redux";
import { cartReducer } from "./Reducers/Cart";


const rootReducer = combineReducers({
    cartReducer,
});

export const store = createStore(rootReducer);