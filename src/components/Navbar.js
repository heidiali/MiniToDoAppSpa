import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from '../logo.svg';

//inserts greeting to Navbar 
//set time and appropriate greeting
const date = new Date();
const hours = date.getHours();
let timeofDay;

if (hours < 12) {
    timeofDay = "morning"
} else if (hours >= 12 && hours < 17) {
    timeofDay = "afternoon"
} else if (hours >= 17 && hours < 22) {
    timeofDay = "evening"
} else {
    timeofDay = "night"
}

class Navbar extends Component {
    state = {}
    render() {
        return (
            <div>
                <div className="Navi">
                    <div>
                        <div className="Greeting"> <br />Have a nice {timeofDay}! <br /> It's about {date.getHours() % 24} o'clock </div><p className="glyphicon glyphicon-time"></p>
                        <div width='50%'><Link to="/" className="navi">Home</Link></div> 
                        {/* <td><Link to="/TaskList" className="navi">Task List &nbsp; </Link></td> */}
                        <div width='50%'> &nbsp;<Link to="/Container" className="navi">Add Task</Link></div> 
                    
                    </div> 
                    {/* <img src={logo} alt="My logo" /> */}
                </div >
            </div>
        );
    }
}

export default Navbar;