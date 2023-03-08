import React from 'react';
import Header from './Header';
import Navbar from './navbar';
import TodosLogic from './TodosLogic';

const TodoApp = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <TodosLogic />
    </div>
  );
};

export default TodoApp;
