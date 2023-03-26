import './cvStyles.css';
import React from 'react';
import { NavLink } from 'react-router-dom';


const CV = () => {
    return (
        <div classname="cv-btn">
            <NavLink to="https://docs.google.com/document/d/1zBJDHMTfrlB9dvie-xRRm0h_qX2n3XuPOPbVuoI5xc8/edit" className="download-btn">
                DOWNLOAD CV
            </NavLink>
        </div>
    )
}

export default CV