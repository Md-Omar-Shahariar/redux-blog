import {
  AUTHORFILTER,
  AUTHORIMGFILTER,
  CATEGORYFILTER,
  SEARCHFILTER,
} from "./actionType";
import { initialState } from "./initialState";

const blogFilterReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEARCHFILTER:
      return {
        ...state,
        searchText: action.payload,
      };
    case AUTHORFILTER:
      return {
        ...state,
        Author: action.payload,
      };
    case CATEGORYFILTER:
      return {
        ...state,
        category: action.payload,
      };
    case AUTHORIMGFILTER:
      return {
        ...state,
        AuthorImg: action.payload,
      };
    default:
      return state;
  }
};

export default blogFilterReducer;
