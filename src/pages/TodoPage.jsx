import React, { useState, useEffect } from 'react';
import { getTodos } from '../api/todoApi';
import TodoList from '../components/TodoList';
import TodoInput from '../components/TodoInput';

const TodoPage = () => {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);

  // [정답 예시] 전체 할 일 목록 불러오기
  const fetchTodos = async () => {
    try {
      const data = await getTodos();
      setTodos(data);
    } catch (error) {
      console.error('할 일 목록을 불러오는데 실패했습니다:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  return (
    <div className="todo-page">
      <div className="todo-header">
        <h2>My Tasks</h2>
        <p className="task-count">전체 할 일: {todos.length}개</p>
      </div>
      
      <TodoInput onTodoAdded={fetchTodos} />
      
      {loading ? (
        <div className="loading-state">로딩 중...</div>
      ) : (
        <TodoList todos={todos} onTodoChanged={fetchTodos} />
      )}
    </div>
  );
};

export default TodoPage;
