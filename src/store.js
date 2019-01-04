import { createStore } from "redux";

/*Importing reducers*/
import reducer from "./reducers/handleLogin";

const initialState = {};

export default createStore(reducer, initialState);
