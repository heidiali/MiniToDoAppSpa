import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Task.css';

class Task extends Component {
    constructor(props) {
        super(props);
        this.state = { TaskDesc: '', TaskName: '', TaskID: '' }
    }
    deletecb = (e) => {
        e.preventDefault();
        this.props.deletecb(this.props.task.TaskID);
    }

    detailsRedirect = () => {
        this.props.history.push('/details' + this.props.task.TaskID);
    }

    detailsRedirect = (e) => {
        e.preventDefault();
        //console.log(this.props.task.TaskName, this.props.task.TaskDesc, this.props.task.TaskID)
        this.setState({ task: this.state });

    }

    render() {
        return (
            <div className="todo-itemgroup">
                <div>
                    <strong>Task:</strong> {this.props.task.TaskName} <br /> <strong>Description:</strong> {this.props.task.TaskDesc} <br />
                    {/* Done? < input type="checkbox" checked="" onChange="" /> */}

                    <div className="dlink" onClick={this.deletecb}>
                        <a href="#">Delete?<span className="glyphicon glyphicon-trash"></span>
                        </a> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    </div>

                    <div className="taskName" onClick={this.detailsRedirect}>
                        <span><Link to={`/details/${this.props.task.TaskID}`}>Edit task details</Link></span>
                    </div>

                </div>
                <br/>

            </div >
        );
    }



}

export default Task;