import intialState from "./intialState";

const typeEndInSuccess = (type) => {
  return type.substring(type.length - 8) === "_SUCCESS";
};

export default function apiCallStatusReducer(
  state = intialState.apiCallsInProgress,
  action
) {
  switch (action.type) {
    case "BEGIN_API_CALL":
      return state + 1;

    case "API_ERROR":
      return state - 1;

    default:
      if (typeEndInSuccess(action.type)) {
        return state - 1;
      }
      return state;
  }
}
