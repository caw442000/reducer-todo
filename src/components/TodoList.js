import React from 'react';


const TodoList = props => {


    const complete = event =>{
      event.preventDefault();
      props.dispatch({type:'TOGGLE_COMPLETED', payload: event.target.id})
    }
    return(
      <div>
        {props.state.map(todo =>{
          return <p  className={`${todo.completed ? 'completed' : ''}`}
          id={todo.id} onClick={complete}>{todo.item}</p>
        })}
      </div>
    )
};
export default TodoList;