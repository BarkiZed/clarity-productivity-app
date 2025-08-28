import { useState } from 'react'
import './App.css'
import Dashboard from './pages/Dashboard'

function App() {
  const [currentPage, setCurrentPage] = useState('dashboard')

  return (
    <div className="app">
      <header className="app-header">
        <h1>Clarity</h1>
        <nav>
          <button onClick={() => setCurrentPage('dashboard')}>Dashboard</button>
          <button onClick={() => setCurrentPage('tasks')}>Tasks</button>
          <button onClick={() => setCurrentPage('habits')}>Habits</button>
        </nav>
      </header>
      
      <main>
        {currentPage === 'dashboard' && <Dashboard />}
        {currentPage === 'tasks' && <div>Tasks Page - Coming Soon</div>}
        {currentPage === 'habits' && <div>Habits Page - Coming Soon</div>}
      </main>
    </div>
  )
}

export default App
