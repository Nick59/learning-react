export function beginApiCall() {
  return { type: "BEGIN_API_CALL" };
}

export function errorApiCall() {
  return { type: "API_ERROR" };
}
