import React, { useState } from 'react';
import './SignUpForm.css';

const SignUpForm = () => {
  const [isSignIn, setIsSignIn] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validateForm = () => {
    const newErrors = {};

    // Full Name validation (only for sign-up)
    if (!isSignIn && !formData.fullName.trim()) {
      newErrors.fullName = 'Full name is required';
    } else if (!isSignIn && formData.fullName.trim().length < 2) {
      newErrors.fullName = 'Full name must be at least 2 characters';
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    // Password validation
    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (!isSignIn && formData.password.length < 8) {
      newErrors.password = 'Password must be at least 8 characters';
    } else if (!isSignIn && !/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/.test(formData.password)) {
      newErrors.password = 'Password must contain at least one uppercase letter, one lowercase letter, and one number';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      setIsSubmitting(true);
      
      // Simulate API call
      setTimeout(() => {
        setIsSubmitting(false);
        setIsSuccess(true);
        
        // Reset form after success
        setTimeout(() => {
          setIsSuccess(false);
          setFormData({ fullName: '', email: '', password: '' });
        }, 3000);
      }, 1500);
    }
  };

  const handleFocus = (e) => {
    e.target.parentElement.classList.add('focused');
  };

  const handleBlur = (e) => {
    if (!e.target.value) {
      e.target.parentElement.classList.remove('focused');
    }
  };

  const toggleMode = () => {
    setIsSignIn(!isSignIn);
    setFormData({ fullName: '', email: '', password: '' });
    setErrors({});
  };

  if (isSuccess) {
    return (
      <div className="success-container">
        <div className="success-card">
          <div className="success-icon">✓</div>
          <h2>{isSignIn ? 'Welcome back!' : 'Welcome aboard!'}</h2>
          <p>{isSignIn ? 'You have been signed in successfully.' : 'Your account has been created successfully.'}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="signup-container">
      <div className="signup-card">
        <div className="signup-header">
          <h1>{isSignIn ? 'Welcome Back' : 'Create Account'}</h1>
          <p>{isSignIn ? 'Sign in to continue your journey' : 'Join us and start your journey today'}</p>
        </div>

        <form onSubmit={handleSubmit} className="signup-form">
          {!isSignIn && (
            <div className="form-group">
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleInputChange}
                onFocus={handleFocus}
                onBlur={handleBlur}
                className={errors.fullName ? 'error' : ''}
                placeholder=" "
              />
              <label htmlFor="fullName">Full Name</label>
              {errors.fullName && <span className="error-message">{errors.fullName}</span>}
            </div>
          )}

          <div className="form-group">
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
              className={errors.email ? 'error' : ''}
              placeholder=" "
            />
            <label htmlFor="email">Email Address</label>
            {errors.email && <span className="error-message">{errors.email}</span>}
          </div>

          <div className="form-group">
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
              className={errors.password ? 'error' : ''}
              placeholder=" "
            />
            <label htmlFor="password">Password</label>
            {errors.password && <span className="error-message">{errors.password}</span>}
          </div>

          {isSignIn && (
            <div className="forgot-password">
              <a href="#" className="forgot-link">Forgot Password?</a>
            </div>
          )}

          <button 
            type="submit" 
            className={`submit-btn ${isSubmitting ? 'submitting' : ''}`}
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <>
                <span className="spinner"></span>
                {isSignIn ? 'Signing In...' : 'Creating Account...'}
              </>
            ) : (
              isSignIn ? 'Sign In' : 'Sign Up'
            )}
          </button>
        </form>

        <div className="signup-footer">
          <p>
            {isSignIn ? "Don't have an account? " : "Already have an account? "}
            <button 
              type="button" 
              className="toggle-mode-btn" 
              onClick={toggleMode}
            >
              {isSignIn ? 'Sign Up' : 'Sign In'}
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUpForm;
