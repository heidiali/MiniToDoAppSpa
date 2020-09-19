import React, { Component } from 'react';
import './Footer.css';

class Footer extends Component {
    render() {
        return (
            <div>
                <div className="wrapper">
                    <div className="push"></div>
                </div>
                <footer className="footer">ToDo app copyright: Annukka, Miklas, Heidi and Topias</footer>
            </div>
        );
    }
}

export default Footer;