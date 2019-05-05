import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {

  state = {
    persons: [
      {key: 1, name: 'Max', age: 28},
      {key: 2, name: 'Manu', age: 29},
      {key: 3, name: 'Stephanie', age: 26}
    ],
    otherState: 'some other value'
  }

  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons.slice;
    const persons = [...this.state.persons]
    persons.splice(personIndex, 1) 
    this.setState({persons: persons})
  }

  nameChangedHandler = (event, key) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.key === key
    })

    const person = {
      ...this.state.persons[personIndex]
    }

    person.name = event.target.value;

    const persons = [...this.state.persons]
    persons[personIndex] = person;

    this.setState({persons: persons})
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow})
  }

  render() {

    let persons = null;

    if (this.state.showPersons) {
      persons = (
      <div>
        {this.state.persons.map((person, index) => {
          return <Person 
          click={() => this.deletePersonHandler(index)}
          name={person.name} 
          age={person.age}
          key={person.key}
          changed={(event) => this.nameChangedHandler(event, person.key)}/>
        })}
       </div> 
      )}
      
    return (
      <div className="App">
       <h1>Hi, I'm a React App</h1>
       <p>This is really working!</p>
       <button onClick={this.togglePersonsHandler}>Switch Name</button>
      {persons}
      </div>
    );
  }
}
export default App;
