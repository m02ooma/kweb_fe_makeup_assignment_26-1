const API_URL = 'http://localhost:3000/todos';

// 전체 할 일 목록 조회 (GET /todos)
export const getTodos = async () => {
  const response = await fetch(API_URL);
  if (!response.ok) throw new Error('Failed to fetch todos');
  return response.json();
};

// TODO: 개별 할 일 조회 (GET /todos/:id)
export const getTodoById = async (id) => {
  const response = await fetch(`${API_URL}/${id}`);
  if (!response.ok) throw new Error('Failed to fetch todo');
  return response.json();
};

// TODO: 할 일 생성 (POST /todos)
export const createTodo = async (title) => {
  const response = await fetch(API_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ title, completed: false }),
  });
  if (!response.ok) throw new Error('Failed to create todo');
  return response.json();
};

// TODO: 할 일 완료 상태 수정 (PATCH /todos/:id)
export const updateTodo = async (id, data) => {
  const response = await fetch(`${API_URL}/${id}`, {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  if (!response.ok) throw new Error('Failed to update todo');
  return response.json();
};

// TODO: 할 일 삭제 (DELETE /todos/:id)
export const deleteTodo = async (id) => {
  const response = await fetch(`${API_URL}/${id}`, {
    method: 'DELETE',
  });
  if (!response.ok) throw new Error('Failed to delete todo');
  return response.json();
};
