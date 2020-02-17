import React, { useState, useReducer } from 'react';
import {initialState, todoReducer} from '../reducers/todoReducer';
import TodoList from './TodoList';


const Todo = props => {
  const [state, dispatch] = useReducer(todoReducer, initialState);

  const [newTodo, setNewTodo] = useState("");

  const handleChange = e => {
    setNewTodo(e.target.value);
  }

  const handleDelete = e => {
      e.preventDefault();
      dispatch({type: 'CLEAR_COMPLETED'});
  } 
  const handleSubmit = e => {
    e.preventDefault();
    console.log("should be added to array", newTodo)
    dispatch({ type: "ADD_TODO", payload: newTodo });
    setNewTodo("");
  };


  const handleToggle = event =>{
    event.preventDefault();
    dispatch({type:'TOGGLE_COMPLETED', payload: event.target.id})
  }
    return (
        <div>
            <form >
              <label htmlFor="todo" >Add Todo: </label>
              <input id="todo" name="todo" onChange={handleChange} value={newTodo} />
            </form>
            <button onClick={handleSubmit}>Add Todo</button>

            <button onClick={handleDelete}>Clear Completed Todos</button>

            <TodoList state={state} dispatch={dispatch} handleToggle = {handleToggle} />
        </div>
    )
}

export default Todo 