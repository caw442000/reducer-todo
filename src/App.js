import React, { useReducer } from 'react';
import './App.css';
import Todo from './components/Todo';


const App = () => {

  return (
    <div className="App">
      <h1>Todo List</h1>
      
      <Todo />
    </div>
  );
}

export default App;