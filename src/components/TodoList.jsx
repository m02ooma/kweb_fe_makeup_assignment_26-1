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
      {/* TODO: todos 배열을 map() 함수를 사용하여 반복 렌더링하세요. 
          각 항목은 TodoItem 컴포넌트로 렌더링하며, key prop을 반드시 전달해야 합니다! 
          필요한 props(todo, onTodoChanged)도 함께 전달해주세요. */}
    </div>
  );
};

export default TodoList;
