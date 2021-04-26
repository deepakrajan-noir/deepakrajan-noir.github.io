import React from 'react';
import './Nav.css';
import {Link} from 'react-router-dom';

function Nav() {
    return (
        <div className="nav">
            <div className="nav-logo">
                <Link to="/">
                <b>DEEPAK </b>RAJAN <span dangerouslySetInnerHTML={{ "__html": "&copy;" }} /> 2021
                </Link>
            </div>
            <div className="nav-link">
                <ul>
                    <Link to="/">
                        <li>ART</li>
                    </Link>
                    <Link to="/archives">
                        <li>ARCHIVES</li>
                    </Link>
                    <Link to="/">
                        <li>PROFILE</li>
                    </Link>
                </ul>
            </div>
        </div>
    );
}

export default Nav;