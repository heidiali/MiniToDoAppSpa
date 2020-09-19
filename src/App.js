import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Navbar from "./components/Navbar";
import FormContainer from './components/FormContainer';
// import Home from './components/Home';
import TaskDetails from './components/TaskDetails';
import TaskList from './components/TaskList';
import Footer from "./components/Footer";




class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <div>
            <Navbar />
            <Route name="TaskList" exact path="/" component={TaskList} />
            {/* <Route name="TaskBox" exact path="/TaskBox" component={TaskBox} /> */}
            <Route name="Create New" path="/Container" component={FormContainer} />
            <Route name="Details" exact path="/Details/:taskId" component={TaskDetails} />
            <br />

          </div>
        </Router>
        <br />

        <Footer />
        <br />

      </div>
    );
  }
}

export default App;
