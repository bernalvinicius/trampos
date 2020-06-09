import React from 'react';
import './styles.css'

const JobItem = ({ job, permalinkJob, index }) => {

    const barColors = ['#56c3c6', '#ec5e6d', '#53c3c5', '#e0c124'];

    return (
        <div 
            onClick={() => permalinkJob(job)}
            style={{ borderLeft: '8px solid', borderLeftColor: barColors[index] }}
            className='jobItem-widget'>
            <span>
                {job.opportunity.name.toUpperCase()}
            </span>
            <p>{job.opportunity.company_name.toUpperCase()}</p>
        </div>
    )
}

export default JobItem;