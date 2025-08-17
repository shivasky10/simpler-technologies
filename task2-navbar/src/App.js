import React, { useState } from 'react';
import './App.css';
import NavigationBar from './components/NavigationBar';
import UserCard from './components/UserCard';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  // Sample user data for demonstration
  const sampleUsers = [
    {
      name: 'John Doe',
      email: 'john.doe@example.com',
      role: 'Software Developer',
      status: 'active',
      avatar: null // Will show initials
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
    }
  ];

  const renderContent = () => {
    switch (currentPage) {
      case 'home':
        return (
          <div className="content-section">
            <h1>Welcome Home</h1>
            <p>This is the home page content. Navigate using the menu above.</p>
            <div className="feature-grid">
              <div className="feature-card">
                <h3>Feature 1</h3>
                <p>Amazing feature description goes here.</p>
              </div>
              <div className="feature-card">
                <h3>Feature 2</h3>
                <p>Another incredible feature description.</p>
              </div>
              <div className="feature-card">
                <h3>Feature 3</h3>
                <p>Yet another fantastic feature description.</p>
              </div>
            </div>
          </div>
        );
      case 'about':
        return (
          <div className="content-section">
            <h1>About Us</h1>
            <p>Learn more about our company and mission.</p>
            <div className="about-content">
              <div className="about-text">
                <h3>Our Story</h3>
                <p>We are passionate about creating amazing user experiences with modern web technologies.</p>
                <h3>Our Mission</h3>
                <p>To build beautiful, responsive, and accessible web applications that delight users.</p>
              </div>
              <div className="about-stats">
                <div className="stat-item">
                  <span className="stat-number">100+</span>
                  <span className="stat-label">Projects</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">50+</span>
                  <span className="stat-label">Clients</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">5+</span>
                  <span className="stat-label">Years</span>
                </div>
              </div>
            </div>
          </div>
        );
      case 'contact':
        return (
          <div className="content-section">
            <h1>Contact Us</h1>
            <p>Get in touch with our team.</p>
            <div className="contact-content">
              <div className="contact-info">
                <h3>Get In Touch</h3>
                <div className="contact-item">
                  <span className="contact-icon">📧</span>
                  <span>hello@example.com</span>
                </div>
                <div className="contact-item">
                  <span className="contact-icon">📱</span>
                  <span>+91xxxxxx</span>
                </div>
                <div className="contact-item">
                  <span className="contact-icon">📍</span>
                  <span>xxx,xxxx , hyderabad</span>
                </div>
              </div>
              <div className="contact-form">
                <h3>Send Message</h3>
                <form>
                  <input type="text" placeholder="Your Name" />
                  <input type="email" placeholder="Your Email" />
                  <textarea placeholder="Your Message" rows="4"></textarea>
                  <button type="submit">Send Message</button>
                </form>
              </div>
            </div>
          </div>
        );
      case 'users':
        return (
          <div className="content-section">
            <h1>Our Team</h1>
            <p>Meet the amazing people behind our success.</p>
            <div className="users-grid">
              {sampleUsers.map((user, index) => (
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
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="App">
      <NavigationBar currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <main className="main-content">
        {renderContent()}
      </main>
    </div>
  );
}

export default App;

