import {
  AUTHORFILTER,
  AUTHORIMGFILTER,
  CATEGORYFILTER,
  SEARCHFILTER,
} from "./actionType";

export const searchByText = (searchText) => {
  return {
    type: SEARCHFILTER,
    payload: searchText,
  };
};
export const authorSearch = (authorName) => {
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
