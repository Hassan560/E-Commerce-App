import { createStore, combineReducers } from "redux";

import CartReducer from "./Reducers/CartReducer";

const Reducers = combineReducers({
  CartReducer: CartReducer,
});

const store = createStore(Reducers);
export default store;
