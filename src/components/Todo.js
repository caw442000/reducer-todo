import React, {useState} from 'react';

const Todo = props => {

  const [newTodo, setNewTodo] = useState("");

  const handleChange = e => {
    setNewTodo(e.target.value);
  }

  const handleDelete = e => {
      e.preventDefault();
      props.dispatch({type: 'CLEAR_COMPLETED'});
  } 
  const handleSubmit = e => {
    e.preventDefault();
    console.log("should be added to array", newTodo)
    props.dispatch({ type: "ADD_TODO", payload: newTodo });
    setNewTodo("");
  };

    return (
        <div>
            <form >
              <label htmlFor="todo" >Add Todo: </label>
              <input id="todo" name="todo" onChange={handleChange} value={newTodo} />
            </form>
            <button onClick={handleSubmit}>Add Todo</button>

            <button onClick={handleDelete}>Clear Completed Todos</button>
        </div>
    )
}

export default Todo 