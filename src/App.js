import React, { Component } from 'react';
import './App.css';
import UserOutput from './UserOutput/UserOutput';
import UserInput from './UserInput/UserInput';

class App extends Component {

  state = {
    persons: [
      {name: 'Max', age:28},
      {name: 'Manu', age:29},
      
    ],
  }

  updateNameHandler = (event) => {
    this.setState( {
      persons: [
        {name: event.target.value, age:28},
        {name: 'Manu', age:29},
      ]
    })
  }
  
  render() {
    return (
      <div className="App">
        <h1>This is my first React assignment.</h1>
        <UserInput changed={this.updateNameHandler} name={this.state.persons[0].name}></UserInput>
        <UserOutput name="Sakshi"></UserOutput>
        <UserOutput name={this.state.persons[0].name}></UserOutput>
        <UserOutput name={this.state.persons[1].name}></UserOutput>
      </div>
    );
  }
}

export default App;
