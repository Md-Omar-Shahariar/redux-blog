import { createStore } from "redux";
import blogFilterReducer from "./blogFilter/blogFilterReducer";

const store = createStore(blogFilterReducer);

export default store;
