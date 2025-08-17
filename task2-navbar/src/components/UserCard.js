import React from 'react';
import './UserCard.css';

const UserCard = ({ name, email, avatar, role, status = 'active' }) => {
  // Generate initials from name for avatar fallback
  const getInitials = (fullName) => {
    return fullName
      .split(' ')
      .map(word => word.charAt(0))
      .join('')
      .toUpperCase()
      .slice(0, 2);
  };

  // Get status color and text
  const getStatusInfo = (status) => {
    switch (status) {
      case 'active':
        return { color: '#00ff88', text: 'Active', icon: '🟢' };
      case 'inactive':
        return { color: '#ff6b6b', text: 'Inactive', icon: '🔴' };
      case 'pending':
        return { color: '#ffd700', text: 'Pending', icon: '🟡' };
      default:
        return { color: '#b0b0b0', text: 'Unknown', icon: '⚪' };
    }
  };

  const statusInfo = getStatusInfo(status);

  return (
    <div className="user-card">
      {/* Card Background with Gradient Border */}
      <div className="card-background">
        <div className="gradient-border"></div>
        <div className="card-content">
          {/* Avatar Section */}
          <div className="avatar-section">
            <div className="avatar-container">
              {avatar ? (
                <img src={avatar} alt={name} className="avatar-image" />
              ) : (
                <div className="avatar-fallback">
                  <span className="avatar-initials">{getInitials(name)}</span>
                </div>
              )}
              <div className="status-indicator" style={{ backgroundColor: statusInfo.color }}>
                <span className="status-icon">{statusInfo.icon}</span>
              </div>
            </div>
          </div>

          {/* User Information */}
          <div className="user-info">
            <h3 className="user-name">{name}</h3>
            <p className="user-email">{email}</p>
            {role && <p className="user-role">{role}</p>}
            <div className="status-badge">
              <span className="status-text">{statusInfo.text}</span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="action-buttons">
            <button className="action-btn primary-btn">
              <span className="btn-icon">👤</span>
              View Profile
            </button>
            <button className="action-btn secondary-btn">
              <span className="btn-icon">✉️</span>
              Message
            </button>
          </div>

          {/* Decorative Elements */}
          <div className="decorative-elements">
            <div className="floating-dot dot-1"></div>
            <div className="floating-dot dot-2"></div>
            <div className="floating-dot dot-3"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
