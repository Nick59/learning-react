import * as courseApi from "../../api/courseApi";
import { beginApiCall, errorApiCall } from "./apiStatusAction";

export function loadCoursesSuccess(courses) {
  return { type: "LOAD_COURSES_SUCCESS", courses: courses };
}

export function saveCourseSuccess(course) {
  console.log("SAVE_COURSE_SUCCESS");
  return { type: "SAVE_COURSE_SUCCESS", course: course };
}
export function createCourseSuccess(course) {
  console.log("CREATE_COURSE_SUCCESS");
  return { type: "CREATE_COURSE_SUCCESS", course: course };
}

export function deleteCourseOptimistic(course) {
  console.log("DELETE_COURSE_OPTIMISTIC");
  return { type: "DELETE_COURSE_OPTIMISTIC", course: course };
}

export function loadCourses() {
  return function (dispatch) {
    dispatch(beginApiCall());
    return courseApi
      .getCourses()
      .then((courses) => {
        dispatch(loadCoursesSuccess(courses));
      })
      .catch((error) => {
        dispatch(errorApiCall());
        throw error;
      });
  };
}

export function saveCourse(course) {
  return function (dispatch, getState) {
    dispatch(beginApiCall());
    return courseApi
      .saveCourse(course)
      .then((newCourse) => {
        course.id
          ? dispatch(saveCourseSuccess(newCourse))
          : dispatch(createCourseSuccess(newCourse));
      })
      .catch((error) => {
        dispatch(errorApiCall());
        throw error;
      });
  };
}

export function deleteCourse(course) {
  return function (dispatch) {
    dispatch(deleteCourseOptimistic(course));
    return courseApi.deleteCourse(course.id);
  };
}
