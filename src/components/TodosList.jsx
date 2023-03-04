import React from 'react';
import TodoItem from './TodoItem';

const TodosList = ({ todos }) => {
  return (
    <>
      <ul>
        <TodoItem todos={todos} />
      </ul>
    </>
  );
};

export default TodosList;
