import intialState from "./intialState";

export default function courseReducer(state = intialState.courses, action) {
  switch (action.type) {
    case "CREATE_COURSE_SUCCESS":
      return [...state, { ...action.course }];

    case "LOAD_COURSES_SUCCESS":
      return action.courses;

    case "SAVE_COURSE_SUCCESS":
      console.log("here2");
      return state.map((course) =>
        course.id === action.course.id ? action.course : course
      );

    case "DELETE_COURSE_OPTIMISTIC":
      return state.filter((course) => course.id !== action.course.id);

    default:
      return state;
  }
}
