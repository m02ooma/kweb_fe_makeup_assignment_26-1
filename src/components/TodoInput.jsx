import React, { useState } from 'react';
import { createTodo } from '../api/todoApi';

const TodoInput = ({ onTodoAdded }) => {
  const [title, setTitle] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  // TODO: 할 일 생성 처리 함수 구현
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title.trim() || isSubmitting) return;

    // 1. createTodo API 호출
    // 2. 입력창 초기화 (setTitle(''))
    // 3. 성공 시 onTodoAdded() 호출하여 목록 새로고침
    console.log(`Create todo with title: ${title}`);
    
    // API 연동 후 호출되도록 수정하세요.
    setTitle('');
  };

  return (
    <form className="todo-input-form" onSubmit={handleSubmit}>
      <input 
        type="text" 
        className="todo-input"
        placeholder="새로운 할 일을 입력하세요..."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        disabled={isSubmitting}
      />
      <button type="submit" className="add-btn" disabled={isSubmitting}>
        {isSubmitting ? '추가 중...' : '추가'}
      </button>
    </form>
  );
};

export default TodoInput;
