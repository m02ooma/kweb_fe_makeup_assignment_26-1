const API_URL = 'http://localhost:3000/todos';

// 전체 할 일 목록 조회 (GET /todos)
export const getTodos = async () => {
  const response = await fetch(API_URL);
  if (!response.ok) throw new Error('Failed to fetch todos');
  return response.json();
};

// TODO: 개별 할 일 조회 (GET /todos/:id)
export const getTodoById = async (id) => {
  // 여기에 코드를 작성하세요
};

// TODO: 할 일 생성 (POST /todos)
export const createTodo = async (title) => {
  // 여기에 코드를 작성하세요
};

// TODO: 할 일 완료 상태 수정 (PATCH /todos/:id)
export const updateTodo = async (id, data) => {
  // 여기에 코드를 작성하세요
};

// TODO: 할 일 삭제 (DELETE /todos/:id)
export const deleteTodo = async (id) => {
  // 여기에 코드를 작성하세요
};
