import React, { Component } from 'react';
import trampos from '../../../../assets/img/trampos.png';
import './styles.css';

class Footer extends Component {

    render() {
        return (
            <div className='footer-widget'>
                <img alt='trampos.co' src={trampos} />
            </div>
        )
    }
}

export default Footer;