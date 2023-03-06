import React from 'react';
import Header from './Header';
import Navbar from './Navbar';
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
