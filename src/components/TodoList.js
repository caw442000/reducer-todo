import React, { useReducer } from 'react';



const TodoList = ({state, dispatch, handleToggle}) => {
  

    return(
      <div>
        {state.map(todo =>{
          return <p  className={`${todo.completed ? 'completed' : ''}`}
          id={todo.id} onClick={handleToggle}>Todo Item: {todo.item}  Completed: {String(todo.completed)}</p>
        })}
      </div>
    )
};
export default TodoList;