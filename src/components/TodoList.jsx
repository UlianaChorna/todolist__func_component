import React from "react";
import TodoItem from "./TodoItem";

const TodoList = ({todoItems, onDelete,onClickDone}) => {

    return (
      <ul className="todo__list">
        {todoItems.map(todo => (
           
          <TodoItem 
            todo={todo} 
            key={todo.id} 
            onDelete={() => onDelete(todo.id)} 
            onClickDone={() => onClickDone(todo.id)} 
          />
       
        ))}
      </ul>
    )}

export default TodoList;