import React from "react";
import "./../styles/style.css";

function handleChange() {
  console.log('it works!')
}

function TodoItem(props) {
  let style = {}

  if (props.todo.completed) {
    style.textDecoration = "line-through"
    style.fontStyle = "italic"
  }

  return(
    <div className="todo-item">
      <input type="checkbox" checked={props.todo.completed} onChange={handleChange}/>
      <p style={style}>{props.todo.text}</p>
    </div>
  );
}

export default TodoItem
