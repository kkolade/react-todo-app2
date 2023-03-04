import React from 'react';

const TodoItem = ({ todos }) => {
  return (
    <div>
      {todos.map((todo) => (
        <li key={todo.id}>{todo.title}</li>
      ))}
    </div>
  );
};

export default TodoItem;
