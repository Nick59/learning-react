import React from "react";
import { connect } from "react-redux";
import * as courseAction from "../../redux/actions/courseAction";
import * as authorAction from "../../redux/actions/authorAction";
import { bindActionCreators } from "redux";
import CourseList from "./CourseList";
import { Link } from "react-router-dom";
import Spinner from "../common/Spinner";
import { toast } from "react-toastify";

const CoursesPage = (props) => {
  const { courses, authors, actions, loading } = props;
  React.useEffect(() => {
    if (courses.length === 0) {
      actions.loadCourses().catch((error) => {
        throw error;
      });
    }
    if (authors.length === 0) {
      actions.loadAuthors().catch((error) => {
        throw error;
      });
    }
  }, []);

  const handleDelete = async (course) => {
    toast.success("Course deleted");
    try {
      await actions.deleteCourse(course);
    } catch (error) {
      toast.error("delete failed" + error.message, { autoClose: false });
    }
  };

  return (
    <>
      <h2>Courses</h2>
      <Link to="/course" className="btn btn-primary">
        Add new
      </Link>
      {loading ? (
        <Spinner />
      ) : (
        <CourseList courses={props.courses} onDelete={handleDelete} />
      )}
    </>
  );
};

function mapStateToProps(state) {
  return {
    courses:
      state.authors.length === 0
        ? []
        : state.courses.map((course) => {
            return {
              ...course,
              authorName: state.authors.find((a) => a.id === course.authorId)
                .name,
            };
          }),
    authors: state.authors,
    loading: state.apiCallsInProgress > 0,
  };
}

function mapDispatchToProp(dispatch) {
  return {
    //createCourse: (course) => dispatch(courseAction.createCourse(course)), //Méthode longue
    actions: {
      loadCourses: bindActionCreators(courseAction.loadCourses, dispatch),
      loadAuthors: bindActionCreators(authorAction.loadAuthors, dispatch),
      deleteCourse: bindActionCreators(courseAction.deleteCourse, dispatch),
    },
  };
}
/** version OBJ
const mapDispatchToProp = {
  createCourse: courseAction.createCourse,
};*/

export default connect(mapStateToProps, mapDispatchToProp)(CoursesPage);
