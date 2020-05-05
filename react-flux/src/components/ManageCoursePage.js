import React, { useState, useEffect } from "react";
import { Prompt } from "react-router-dom";
import CourseForm from "./CourseForm";
import { toast } from "react-toastify";
import courseStore from '../stores/courseStore';
import * as courseAction from '../actions/courseAction';


const ManageCoursePage = (props) => {
    const [errors, setErrors] = useState({});
    const [courses, setCourses] = useState(courseStore.getCourses());
    const [course, setCourse] = useState({
        id: null,
        slug: '',
        title: '',
        authorId: null,
        category: ''
    });

    useEffect(() => {
        courseStore.addChangeListener(onChange);
        const slug = props.match.params.slug;
        console.log('Here i am');
        if (courses.length === 0) {
            courseAction.loadCourses();
        } else if (slug) {
            setCourse(courseStore.getCourseBySlug(slug));    
        };
        
        return () => courseStore.removeChangeListener(onChange);
    }, [courses.length, props.match.params.slug]);

    const onChange = () => {
        setCourses(courseStore.getCourses());
    };

    const handleChange = ({ target }) => {
        setCourse({...course, [target.name]: target.value});
    };

    const formIsValid = (course) => {
        const _errors = {};

        if (!course.title) _errors.title = 'Title is required';
        if (!course.authorId) _errors.authorId = 'authorId is required';
        if (!course.category) _errors.category = 'category is required';

        setErrors(_errors);

        return Object.keys(_errors).length === 0;
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if (!formIsValid(course)) {
            return;
        }
        courseAction.saveCourse(course).then(() => {
            props.history.push("/courses");
            toast.success("Save success");
        });
    };

    return (
        <>
            <h2>Manager courses</h2>
            <CourseForm course={course} errors={errors} onChange={handleChange} onSubmit={handleSubmit}/>
            {props.match.params.slug}
        </>
    );
}

export default ManageCoursePage;