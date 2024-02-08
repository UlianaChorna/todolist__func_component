import React from "react";
import { useState } from "react";

const  TodoForm  = ({onAdd})  =>{
  const [todo, setTodo] = useState('');


  const handleSubmit = (e) => {
    e.preventDefault();
    if (todo.trim() !== "") {
      onAdd(todo);
      setTodo('')
    }
  };

  const handleChange = (e) => {
    setTodo(e.target.value);
  };

    return (
      <form onSubmit={handleSubmit} className="todo-form">
        <input
          type="text"
          value={todo}
          onChange={handleChange}
          placeholder="Enter a new todo"
          className="input"
        />
        <button type="submit" className="button button--add">
          Add
        </button>
      </form>
    );
  }

export default TodoForm;
