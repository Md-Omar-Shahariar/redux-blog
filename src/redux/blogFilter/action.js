import {
  AUTHORFILTER,
  AUTHORIMGFILTER,
  CATEGORYFILTER,
  SEARCHFILTER,
} from "./actionType";

export const search = (searchText) => {
  return {
    type: SEARCHFILTER,
    payload: searchText,
  };
};
export const author = (authorName) => {
  return {
    type: AUTHORFILTER,
    payload: authorName,
  };
};
export const authorImage = (authorImg) => {
  return {
    type: AUTHORIMGFILTER,
    payload: authorImg,
  };
};
export const category = (categoryFilter) => {
  return {
    type: CATEGORYFILTER,
    payload: categoryFilter,
  };
};
