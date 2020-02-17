import React, { useReducer, useState } from "react";
import { todoReducer, initialState } from "../reducers/todoReducer";
import Todo from "./Todo";

const TodoForm = props => {
  

  const [state, dispatch] = useReducer(todoReducer, initialState);
  const [todo, setTodo] = useState("");

  const handleChange = event => {
    setTodo(event.target.value);
    console.log("this is todo", todo)
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch({ type: "ADD", payload: todo });
  };

  const handleDelete = e => {
    e.preventDefault();
    dispatch({ type: "REMOVE", payload: todo });
  };

  console.log("this is state", state);

  return (
    <div className='form'>
      <form>
        <label htmlFor='todo'>Add Todo: </label>
        <input
          id='todo'
          name='todo'
          type='text'
          value={todo}
          onChange={handleChange}></input>
        <button onClick={handleSubmit}>Add</button>
        <button onClick={handleDelete}>Delete</button>
      </form>
      {/* <Todo id={state.id} todo={todo} dispatch={dispatch} state={state} /> */}
    </div>
  );
};

export default TodoForm;