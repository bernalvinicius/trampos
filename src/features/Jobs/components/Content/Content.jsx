import React from 'react';
import JobItem from './JobItem';
import './styles.css';

const Content = ({ jobs = [], permalinkJob }) => {
    // console.log('content', jobs)

    if (jobs.length === 0) {
        return null;
    }

    let colorIndex = 0;


    return (
        <div className='content-widget'>
            {            
                jobs.map((job) => {                    
                    colorIndex++;
                    colorIndex = colorIndex === 4 ? 0 : colorIndex;
                    console.log(job)
                    return <JobItem
                        key={job.opportunity.id}
                        index={colorIndex}
                        job={job}
                        permalinkJob={permalinkJob}
                    />
                })
            }
        </div >
    )
}


export default Content;