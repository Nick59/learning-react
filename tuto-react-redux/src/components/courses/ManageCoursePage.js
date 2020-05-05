import React from "react";
import { connect } from "react-redux";
import * as courseAction from "../../redux/actions/courseAction";
import * as authorAction from "../../redux/actions/authorAction";
import CourseForm from "./CourseForm";
import { newCourse } from "../../../tools/mockData";
import Spinner from "../common/Spinner";
import { toast } from "react-toastify";

const ManageCoursePage = ({
  courses,
  authors,
  loadAuthors,
  loadCourses,
  saveCourse,
  history,
  ...props
}) => {
  const [course, setCourse] = React.useState({ ...props.course });
  const [errors, setErrors] = React.useState({});
  const [saving, setSaving] = React.useState(false);

  React.useEffect(() => {
    if (courses.length === 0) {
      loadCourses().catch((error) => {
        throw error;
      });
    } else {
      setCourse({ ...props.course });
    }

    if (authors.length === 0) {
      loadAuthors().catch((error) => {
        throw error;
      });
    }
  }, [props.course]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setCourse((prevCourse) => ({
      ...prevCourse,
      [name]: name === "authorId" ? parseInt(value, 10) : value,
    }));
  };

  const HandleSave = (event) => {
    setSaving(true);
    event.preventDefault();
    saveCourse(course)
      .then(() => {
        toast.success("Save success");
        history.push("/courses");
      })
      .catch((errors) => {
        setSaving(false);
        setErrors({ onSave: errors.message });
      });
  };

  return authors.length === 0 || courses.length === 0 ? (
    <Spinner />
  ) : (
    <CourseForm
      course={course}
      errors={errors}
      authors={authors}
      onChange={handleChange}
      onSave={HandleSave}
      saving={saving}
    />
  );
};

const getCourseBySlug = (courses, slug) => {
  return courses.find((course) => course.slug === slug) || null;
};

function mapStateToProps(state, ownProps) {
  const slug = ownProps.match.params.slug;
  const course =
    slug && state.courses.length > 0
      ? getCourseBySlug(state.courses, slug)
      : newCourse;
  return {
    course: course,
    courses: state.courses,
    authors: state.authors,
  };
}

const mapDispatchToProp = {
  loadCourses: courseAction.loadCourses,
  loadAuthors: authorAction.loadAuthors,
  saveCourse: courseAction.saveCourse,
};
/** version OBJ
const mapDispatchToProp = {
  createCourse: courseAction.createCourse,
};*/

export default connect(mapStateToProps, mapDispatchToProp)(ManageCoursePage);
