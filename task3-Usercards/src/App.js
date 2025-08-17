import React, { useState } from 'react';
import './App.css';
import UserCard from './components/UserCard';

function App() {
  // Sample user data for demonstration
  const sampleUsers = [
    {
      name: 'John Doe',
      email: 'john.doe@example.com',
      role: 'Software Developer',
      status: 'active',
      avatar: null // Will show initials "JD"
    },
    {
      name: 'Jane Smith',
      email: 'jane.smith@example.com',
      role: 'UI/UX Designer',
      status: 'active',
      avatar: null
    },
    {
      name: 'Mike Johnson',
      email: 'mike.johnson@example.com',
      role: 'Product Manager',
      status: 'pending',
      avatar: null
    },
    {
      name: 'Sarah Wilson',
      email: 'sarah.wilson@example.com',
      role: 'Frontend Developer',
      status: 'inactive',
      avatar: null
    },
    {
      name: 'Alex Chen',
      email: 'alex.chen@example.com',
      role: 'Backend Developer',
      status: 'active',
      avatar: null
    },
    {
      name: 'Emily Davis',
      email: 'emily.davis@example.com',
      role: 'DevOps Engineer',
      status: 'active',
      avatar: null
    }
  ];

  const [filterStatus, setFilterStatus] = useState('all');

  const filteredUsers = filterStatus === 'all' 
    ? sampleUsers 
    : sampleUsers.filter(user => user.status === filterStatus);

  return (
    <div className="App">
      <header className="app-header">
        <h1 className="main-title">👥 UserCard Component Demo</h1>
        <p className="subtitle">Modern React components with black and yellow gradient theme</p>
        
        {/* Filter Controls */}
        <div className="filter-controls">
          <button 
            className={`filter-btn ${filterStatus === 'all' ? 'active' : ''}`}
            onClick={() => setFilterStatus('all')}
          >
            All Users ({sampleUsers.length})
          </button>
          <button 
            className={`filter-btn ${filterStatus === 'active' ? 'active' : ''}`}
            onClick={() => setFilterStatus('active')}
          >
            Active ({sampleUsers.filter(u => u.status === 'active').length})
          </button>
          <button 
            className={`filter-btn ${filterStatus === 'pending' ? 'active' : ''}`}
            onClick={() => setFilterStatus('pending')}
          >
            Pending ({sampleUsers.filter(u => u.status === 'pending').length})
          </button>
          <button 
            className={`filter-btn ${filterStatus === 'inactive' ? 'active' : ''}`}
            onClick={() => setFilterStatus('inactive')}
          >
            Inactive ({sampleUsers.filter(u => u.status === 'inactive').length})
          </button>
        </div>
      </header>

      <main className="main-content">
        <div className="users-grid">
          {filteredUsers.map((user, index) => (
            <UserCard
              key={index}
              name={user.name}
              email={user.email}
              role={user.role}
              status={user.status}
              avatar={user.avatar}
            />
          ))}
        </div>

        {filteredUsers.length === 0 && (
          <div className="no-results">
            <h3>No users found</h3>
            <p>Try adjusting your filter criteria</p>
          </div>
        )}
      </main>

      <footer className="app-footer">
        <p>Built with React and modern CSS animations</p>
        <div className="tech-stack">
          <span className="tech-tag">React 18</span>
          <span className="tech-tag">CSS3</span>
          <span className="tech-tag">Glassmorphism</span>
          <span className="tech-tag">Gradients</span>
        </div>
      </footer>
    </div>
  );
}

export default App;
