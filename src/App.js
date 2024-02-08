import React, { useEffect, useState } from 'react';
import './styles/index.css';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';


const App  = () => {
 
  const [todoItems, setTodoItems] = useState([])

useEffect(() => {
  fetchData()
}, [])
 

  const fetchData = async () => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/todos');
      const jsonData = await response.json();
      const firstTenTodos = jsonData.slice(0, 10);
      setTodoItems(firstTenTodos)
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const addItem=(todoItem) =>{
    const newTodoItems = [
      ...todoItems,
    
      {
        id: todoItems.length + 1,
        title: todoItem,
        completed: false,
      }
    ];
    setTodoItems(newTodoItems)
  }

  const removeItem = (itemId)=> {
    const updatedTodoItems = todoItems.filter(
      (todo) => todo.id !== itemId
    );
    setTodoItems(updatedTodoItems);
  }

  const todoCompleted = (itemId) =>  {
    const completedItems = todoItems.map((todo) => {
      if (todo.id === itemId) {
        return {
          ...todo,
          completed: !todo.completed
        };
      }
      return todo;
    });
    setTodoItems(completedItems);
  }

  return (
    <div className="wrapper">
      <h1 className='nav__item'>Todo App</h1>
      <TodoForm onAdd={addItem} /> 
      <TodoList todoItems={todoItems} onDelete={removeItem} onClickDone={todoCompleted}/> 
    </div>
  );
 } 
 

export default App;
