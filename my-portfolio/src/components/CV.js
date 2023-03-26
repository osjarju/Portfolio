import './cvStyles.css';
import React from 'react';
import { Link } from 'react-router-dom';


const CV = () => {
    return (
        <div classname="cv-btn">
            <Link to="/contact" className="btn">
                DOWNLOAD CV
            </Link>
        </div>
    )
}

export default CV