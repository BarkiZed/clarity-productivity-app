import { useState } from 'react'

export default function Dashboard() {
  const [tasks, setTasks] = useState([])
  const [habits, setHabits] = useState([])

  return (
    <div className="dashboard">
      <h2>Your Productivity Dashboard</h2>
      
      <div className="stats">
        <div className="stat-card">
          <h3>Tasks</h3>
          <p>{tasks.length} total</p>
        </div>
        
        <div className="stat-card">
          <h3>Habits</h3>
          <p>{habits.length} active</p>
        </div>
      </div>

      <div className="recent-items">
        <section>
          <h3>Recent Tasks</h3>
          {tasks.length === 0 ? (
            <p>No tasks yet. Add some to get started!</p>
          ) : (
            <ul>
              {tasks.map(task => (
                <li key={task.id}>{task.name}</li>
              ))}
            </ul>
          )}
        </section>

        <section>
          <h3>Your Habits</h3>
          {habits.length === 0 ? (
            <p>No habits yet. Start building good habits!</p>
          ) : (
            <ul>
              {habits.map(habit => (
                <li key={habit.id}>{habit.name}</li>
              ))}
            </ul>
          )}
        </section>
      </div>
    </div>
  )
}
