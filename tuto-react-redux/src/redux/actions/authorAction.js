import * as authorApi from "../../api/authorApi";
import { beginApiCall, errorApiCall } from "./apiStatusAction";

export function loadAuthorsSuccess(authors) {
  return { type: "LOAD_AUTHOR_SUCCESS", authors: authors };
}

export function loadAuthors() {
  return function (dispatch) {
    dispatch(beginApiCall());
    return authorApi
      .getAuthors()
      .then((authors) => {
        dispatch(loadAuthorsSuccess(authors));
      })
      .catch((error) => {
        dispatch(errorApiCall());
        throw error;
      });
  };
}
