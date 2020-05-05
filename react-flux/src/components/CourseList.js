import React from "react";
import PropsTypes from "prop-types";
import { Link } from "react-router-dom";

const CourseList = (props) => {

    return (
        <table className="table">
            <thead>
                <tr>
                    <th>Title</th>
                    <th>Author</th>
                    <th>Category</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                { props.courses.map(course => { return( 
                <tr key={course.id}>
                    <td><Link to={"/course/" + course.slug}>{course.title}</Link></td>
                    <td>{course.authorId}</td>
                    <td>{course.category}</td>
                    <td><Link to="/courses" className="btn btn-danger" onClick={() => props.onDelete(course.id)}>Delete </Link></td>
                </tr>
                )})}
            </tbody>
        </table>
    );
}

export default CourseList;

CourseList.PropsTypes = {
    courses: PropsTypes.arrayOf(PropsTypes.shape({
        id: PropsTypes.number.isRequired,
        title: PropsTypes.string.isRequired,
        authorId: PropsTypes.number.isRequired,
        category: PropsTypes.string.isRequired
    })).isRequired
};
