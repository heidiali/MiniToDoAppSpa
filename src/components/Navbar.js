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
                <table className="Navi">
                    <tr>
                        <td className="Greeting"> <br />Have a nice {timeofDay}! <br /> It's about {date.getHours() % 24} o'clock </td><p className="glyphicon glyphicon-time"></p>
                        <td width='50%'><Link to="/" className="navi">Home</Link></td> 
                        {/* <td><Link to="/TaskList" className="navi">Task List &nbsp; </Link></td> */}
                        <td width='50%'> &nbsp;<Link to="/Container" className="navi">Add Task</Link></td> 
                    
                    </tr> 
                    {/* <img src={logo} alt="My logo" /> */}
                </table >
            </div>
        );
    }
}

export default Navbar;