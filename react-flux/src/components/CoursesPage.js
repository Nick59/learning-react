import React from "react";
import courseStore from '../stores/courseStore';
import CourseList from "./CourseList";
import { Link } from "react-router-dom";
import { loadCourses, deleteCourse } from '../actions/courseAction';
import { toast } from 'react-toastify'; 

const CoursesPage = () => {

    const [courses, setCourses] = React.useState(courseStore.getCourses())

    React.useEffect(() => {
        courseStore.addChangeListener(onChange);
        if (courseStore.getCourses().length === 0) loadCourses();

        return () => courseStore.removeChangeListener(onChange);
    }, []);

    const onChange = () => {
        setCourses(courseStore.getCourses());
    };

    const onDelete = (id) => {
        deleteCourse(id);
        toast.success("Delete success");
    }

    return <>
        <h2>Courses</h2>
        <Link to="/course" className="btn btn-primary">
            Add new
        </Link>
        <CourseList courses={courses} onDelete={onDelete}/>
    </>
}

export default CoursesPage; 