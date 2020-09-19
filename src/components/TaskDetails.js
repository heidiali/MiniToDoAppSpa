import React, { Component } from 'react';
import { fetchone, updateTask } from './ServiceClient'
import './TaskDetails.css';
class TaskDetails extends Component {

    constructor(props) {
        super(props);
        this.state = {
            taskId: this.props.match.params.taskId,
            task: {}
        };
    }
    componentDidMount() {

        let id = this.props.match.params.taskId
        fetchone(id)
            .then((task) => {
                console.log("Haettu task", task);
                this.setState({ task: task });
            })
    }
    handleDescChange = (e) => {
        // this.setState({ task:{ TaskDesc: e.target.value }}) 
        e.persist();
        this.setState(prevState => ({
            task: {
                ...prevState.task,
                TaskDesc: e.target.value
            }
        }))

    }
    handleNameChange = (e) => {
        // this.setState({ TaskName: e.target.value })
        console.log("handleNameC")
        e.persist();
        this.setState(prevState => ({
            task: {
                ...prevState.task,
                TaskName: e.target.value
            }
        }))
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log("HandleSubmit käynnistyi")
        var formok = true;
        var auerr = '';
        var terr = '';
        if (this.state.task.TaskName.length === 0) {
            formok = false;
            terr = 'Name required';
        }
        // if (this.state.task.TaskDesc.length === 0) {
        //     formok = false;
        //     auerr = 'Please enter description';
        // }
        if (!formok) {
            this.setState({ formErrors: { name: terr, desc: auerr } });
            return false;
        } else {
            updateTask(this.state, () => { console.log("updated"); console.dir(this); this.props.history.push('/'); });
            console.log("Update task käynnistyi")

            // this.setState({ TaskName: '', TaskDesc: '', formErrors: { name: '', desc: '' } });
        }
    }


    render() {
        return (
            // <div>
            //     <ul className="task">
            //         <li className="taskid">{this.state.task.TaskID}
            //         </li>

            //         <li>{this.state.task.TaskName}
            //         </li>

            //         <li>{this.state.task.TaskDesc}
            //         </li>
            //         <div className="dlink" onClick={this.handleSubmit}>
            //         Edit<span className="glyphicon glyphicon-trash"></span>
            //     </div>
            //     </ul>

            // </div>
            //                 AKAFJDÖFKLJASDÖFJASDÖKFHASDHASDÖKGHASÖKGHASDÖKGHASDÖKGHASDÖKHGASDÖKGH
            <form className='taskDetails-formi'>
                <input
                    name="taskName"
                    value={this.state.task.TaskName}
                    onChange={this.handleNameChange}
                    placeholder="Task Name" />
                <br />
                <textarea
                    name="taskDesc" value={this.state.task.TaskDesc}
                    onChange={this.handleDescChange}
                    placeholder="Task Description. 400 max."></textarea>

                <button variant="primary" value="Edit" class="btn btn-default btn-sm" class="glyphicon glyphicon-pencil" onClick={this.handleSubmit} >Edit</button>
            </form>


        );
    }
}
export default TaskDetails;