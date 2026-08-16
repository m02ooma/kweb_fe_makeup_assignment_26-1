import React from 'react';
import TodoItem from './TodoItem';

const TodoList = ({ todos, onTodoChanged }) => {
  if (todos.length === 0) {
    return (
      <div className="empty-state">
        <p>등록된 할 일이 없습니다.</p>
      </div>
    );
  }

  return (
    <div className="todo-list">
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} onTodoChanged={onTodoChanged} />
      ))}
    </div>
  );
};

export default TodoList;
