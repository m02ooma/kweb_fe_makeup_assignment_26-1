import React from 'react';
import { updateTodo, deleteTodo } from '../api/todoApi';

const TodoItem = ({ todo, onTodoChanged }) => {
  
  // TODO: 할 일 완료 상태 토글 함수 구현 (PATCH API 사용)
  const handleToggle = async () => {
    // 1. updateTodo API 호출 (현재 completed 상태의 반대값으로)
    // 2. 성공 시 onTodoChanged() 호출하여 목록 새로고침
    console.log(`Toggle todo ${todo.id}`);
  };

  // TODO: 할 일 삭제 함수 구현 (DELETE API 사용)
  const handleDelete = async () => {
    // 1. deleteTodo API 호출
    // 2. 성공 시 onTodoChanged() 호출하여 목록 새로고침
    console.log(`Delete todo ${todo.id}`);
  };

  return (
    <div className={`todo-item ${todo.completed ? 'completed' : ''}`}>
      <label className="checkbox-container">
        <input 
          type="checkbox" 
          checked={todo.completed} 
          onChange={handleToggle} 
        />
        <span className="checkmark"></span>
      </label>
      <div className="todo-content">
        <span className="todo-title">{todo.title}</span>
      </div>
      <button className="delete-btn" onClick={handleDelete}>
        삭제
      </button>
    </div>
  );
};

export default TodoItem;
