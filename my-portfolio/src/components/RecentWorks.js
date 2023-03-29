import './RecentWorks.css';
import React from 'react';
import { NavLink } from 'react-router-dom';


const RecentWorks = (props) => {
    return (
        // <div className='work-container'>
        //     <h1 className='project-heading'>projects</h1>
        //     <div className='project-container'>
        <div className='project-card'>
            <img src={props.imgsrc} alt="true" />
            <h2 className='project-title'>{props.title}</h2>
            <div className='description'>
                <p>{props.description}</p>
                <div className='project-btns'>
                    <NavLink to={props.view} className="btn" target="_blank" rel="noopener noreferrer">VIEW</NavLink>
                    <NavLink to={props.source} className="btn" target="_blank" rel="noopener noreferrer">SOURCE</NavLink>
                </div>
            </div>
        </div>
        //     </div>
        // </div>
    )
}

export default RecentWorks;