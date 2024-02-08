import React from "react";

const TodoItem = ({ todo, onDelete, onClickDone}) => {

    const  todoClass = todo.completed ? "done" : "undone";
    return(
      <li className="todo__item" >
        <div className={todoClass}>
        <span aria-hidden="true" onClick={onClickDone} >✓
       {todo.title}
       </span>
        <button className="delete-btn" onClick={onDelete}>🗑️</button> 
        </div>
      </li>
      
    )
}

export default TodoItem;