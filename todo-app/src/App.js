import React, { Component } from 'react';
import Table from './Table';
import Form from './Form';

class App extends Component {
  state = {
	todos: [],
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

  handleSubmit = (todo) => {
    this.setState({ todos: [...this.state.todos, todo] })
  }

  render() {
    const { todos } = this.state;
    return (
      <div className="Container">
        <h1>Todo</h1>
        <Table todosData={todos} removeTodo={this.removeTodo} />
        <Form handleSubmit={this.handleSubmit} />
      </div>
    )
  }
}


export default App;
