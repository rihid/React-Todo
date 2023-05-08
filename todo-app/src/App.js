import React, { Component } from 'react';
import Table from './Table'

class App extends Component {
  state = {
	todos: [
      {
        todo: 'Makan',
        waktu: '12.00'
      },
      {
        todo: 'Minum',
        waktu: '01.00'
      },
    ],
  }

  removeTodo = (index) => {
    const { todos } = this.state;
  
    this.setState({
      todos: todos.filter((todo, i) => {
        // console.log(todo)
        return i !== index
      }),
    })
  }

  render() {
    const { todos } = this.state;
    return (
      <div className="Container">
        <h1>Todo</h1>
        <Table todosData={todos} removeTodo={this.removeTodo} />
      </div>
    )
  }
}


export default App;
