import './RecentWorks.css';
import RecentWorks from './RecentWorks';
import WorkCardData from './WorkCardData';

import React from 'react';

const Works = () => {
    return (
        <div className='work-container'>
            {/* <h1 className='project-heading'>projects</h1> */}
            <div className='project-container'>
                {WorkCardData.map((val, ind) => {
                    return (
                        <RecentWorks
                            key={ind}
                            imgsrc={val.imgsrc}
                            title={val.title}
                            description={val.description}
                            view={val.view}
                            source={val.source}
                        />
                    )
                })}
            </div>
        </div>
    );
};

export default Works;