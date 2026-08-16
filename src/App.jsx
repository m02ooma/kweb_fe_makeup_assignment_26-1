import React, { useState } from 'react';
import TodoPage from './pages/TodoPage';
import ReviewPage from './pages/ReviewPage';

function App() {
  const [currentTab, setCurrentTab] = useState('todo');

  return (
    <div className="app-container">
      <header className="app-header">
        <div className="logo-section">
          <h1>KWEB To-Do</h1>
          <span className="badge">2026-1 FE</span>
        </div>
        <nav className="app-nav">
          <button 
            className={`nav-btn ${currentTab === 'todo' ? 'active' : ''}`}
            onClick={() => setCurrentTab('todo')}
          >
            할 일 관리
          </button>
          <button 
            className={`nav-btn ${currentTab === 'review' ? 'active' : ''}`}
            onClick={() => setCurrentTab('review')}
          >
            스터디 회고
          </button>
        </nav>
      </header>

      <main className="app-main">
        {currentTab === 'todo' ? <TodoPage /> : <ReviewPage />}
      </main>
    </div>
  );
}

export default App;
