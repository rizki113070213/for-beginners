import React from "react"
import todosData from "./todosData"
import TodoItem from "./components/TodoItem"

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      todos: todosData
    }
  }

  render() {
    const todoItems = this.state.todos.map(todo => <TodoItem key={todo.id} todo={todo} />)
    return(
      <div className="todo-list">
        {todoItems}
      </div>
    )
  }
}

export default App
