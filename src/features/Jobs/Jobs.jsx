import React, { Component } from 'react';
import Content from './components/Content';
import Footer from './components/Footer';
import Header from './components/Header';
import './styles.css';

import { getJobs } from '../../api';

class Jobs extends Component {

    state = {
        jobs: [],
    };

    componentDidMount() {

        getJobs().then(response => {
            this.setState({
                jobs: response.data,
            });
        });
    }

    permalinkJob = (selectedJob) => {
        let newTab = selectedJob.opportunity.permalink
        window.open(newTab);
    }

    render() {

        const { jobs } = this.state;

        return (
            <div className='jobs-widget'>
                <Header />
                <Content
                    jobs={jobs}
                    permalinkJob={this.permalinkJob}
                />
                <Footer />
            </div>
        )
    }
}

export default Jobs;