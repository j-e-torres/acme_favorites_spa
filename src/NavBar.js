import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = (props) => {
    return (
        <ul className="nav nav-pills">
            <Link to="/users" className="nav-link">users</Link>
            <Link to="/things" className="nav-link">things</Link>
        </ul>
    )
}

export default Navbar;
