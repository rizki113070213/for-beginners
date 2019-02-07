import React from "react"
import todosData from "./todosData"
import TodoItem from "./components/TodoItem"
import "./styles/style.css";

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      todos: todosData
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(id) {
    this.setState(prevState => {
      const updatedTodos = prevState.todos.map(todo => {
        if (id === todo.id) {
          todo.completed = !todo.completed
        }
        return todo
      })
      return{
        todos: updatedTodos
      }
    })
  }

  render() {
    const todoItems = this.state.todos.map(todo => <TodoItem key={todo.id} todo={todo} handleChange={this.handleChange} />)
    return(
      <div className="todo-list">
        {todoItems}
      </div>
    )
  }
}

export default App
