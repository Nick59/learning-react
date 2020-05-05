import intialState from "./intialState";

export default function authorReducer(state = intialState.authors, action) {
  switch (action.type) {
    case "LOAD_AUTHOR_SUCCESS":
      return action.authors;

    default:
      return state;
  }
}
