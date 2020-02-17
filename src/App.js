import React, { useReducer } from 'react';
import './App.css';
import {initialState, todoReducer} from './reducers/todoReducer';
import Todo from './components/Todo';
import TodoList from './components/TodoList';

function App() {
  const [state, dispatch] = useReducer(todoReducer, initialState);

  return (
    <div className="App">
      <h1>Todo List</h1>
      
      <Todo state={state} dispatch={dispatch}/>
      <TodoList state={state} dispatch={dispatch}/>
    </div>
  );
}

export default App;