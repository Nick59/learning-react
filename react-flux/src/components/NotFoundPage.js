import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => (
    <div>
        <div className="alert alert-danger">Page not found</div>
        <Link to="/">Back to home</Link>
    </div>
);

export default NotFoundPage;