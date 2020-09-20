import React, { Component } from 'react';
// import TaskDetails from './TaskDetails';
import Task from './Task'
import { fetchall, deletequote } from './ServiceClient';
import './TaskList.css';

class TaskList extends Component {
  constructor(props) {
    super(props);
    this.state = { data: [] };
  }
  //calls REST
  componentDidMount() {
    this.all();
  }

  all = () => {
    fetchall().then(tasks => {
      // console.dir(tasks)
      console.log('tasks', tasks)
      this.setState({ data: tasks.TaskInfoes });
      // console.dir(this.state);
    });
  }

  allreceived = (tasks, error) => {
    if (error) {
      // virhekäsittely
    } else {
      this.setState({ data: tasks });
    }
  }

  deletoisanonta = (id) => {
    deletequote(id).then((function () {
      this.all();
    }).bind(this));
  }


  render() {
    var callback = this.deletoisanonta;
    var taskInstances = this.state.data.map(function (tasks) {
      return <Task task={tasks} key={tasks.id} {...this.props} deletecb={callback} className="list-group-item" />
    }.bind(this));

    return (
      <div className="taskList">
        <h1 className="todoHeader">Tasks to remember:</h1>
        <div className="list-group">
          {taskInstances}
        </div>
        {/* <TaskDetails /> */}
      </div>
    );
  }
}

export default TaskList;