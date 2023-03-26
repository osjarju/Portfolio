import './ProjectsMidStyles.css';
import React, { Component } from 'react';



class ProjectsMid extends Component {
    render() {
        return (
            <div className='mid-img'>
                <div className='heading'>
                    <h1>{this.props.heading}</h1>
                    <p>{this.props.text}</p>
                </div>
            </div>
        );
    }
};



export default ProjectsMid; 