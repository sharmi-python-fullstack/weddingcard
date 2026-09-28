import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../components/Button';

const Login = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('login');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Navigate to user account or home
    navigate('/');
  };

  return (
    <div className="login-page-wrapper container">
      <div className="login-modal-card animate-fade-in">
        {/* Tab Headers */}
        <div className="login-tab-headers">
          <button
            type="button"
            className={`login-tab-btn ${activeTab === 'login' ? 'active' : ''}`}
            onClick={() => setActiveTab('login')}
          >
            Login
          </button>
          <button
            type="button"
            className={`login-tab-btn ${activeTab === 'signup' ? 'active' : ''}`}
            onClick={() => setActiveTab('signup')}
          >
            Sign Up
          </button>
        </div>

        {/* Form Body */}
        {activeTab === 'login' ? (
          <form className="auth-form" onSubmit={handleSubmit}>
            <h3 className="auth-title">Login to my Account</h3>

            <div className="form-group">
              <label className="form-label">Email</label>
              <input
                type="email"
                required
                className="form-input"
                placeholder="Enter Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="form-group">
              <label className="form-label">Password</label>
              <input
                type="password"
                required
                className="form-input"
                placeholder="Enter Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <button type="submit" className="login-continue-btn">
              Login & Continue
            </button>

            <a href="#forgot" onClick={(e) => { e.preventDefault(); alert('Password reset link sent to your email.'); }} className="forgot-password-link">
              Forgot Password
            </a>
          </form>
        ) : (
          <form className="auth-form" onSubmit={handleSubmit}>
            <h3 className="auth-title">Create an Account</h3>

            <div className="form-group">
              <label className="form-label">Full Name</label>
              <input
                type="text"
                required
                className="form-input"
                placeholder="Enter Full Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div className="form-group">
              <label className="form-label">Email</label>
              <input
                type="email"
                required
                className="form-input"
                placeholder="Enter Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="form-group">
              <label className="form-label">Password</label>
              <input
                type="password"
                required
                className="form-input"
                placeholder="Create Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <button type="submit" className="login-continue-btn">
              Sign Up & Continue
            </button>
          </form>
        )}
      </div>

      <style>{`
        .login-page-wrapper {
          min-height: 75vh;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 60px 20px;
        }

        .login-modal-card {
          background: #ffffff;
          border-radius: 12px;
          padding: 48px 56px;
          max-width: 540px;
          width: 100%;
          box-shadow: 0 8px 30px rgba(0, 0, 0, 0.08);
          border: 1px solid rgba(0, 0, 0, 0.05);
        }

        .login-tab-headers {
          display: flex;
          justify-content: center;
          gap: 60px;
          margin-bottom: 36px;
        }

        .login-tab-btn {
          font-size: 26px;
          font-weight: 700;
          color: #111111;
          background: transparent;
          border: none;
          cursor: pointer;
          padding-bottom: 6px;
          position: relative;
        }

        .login-tab-btn.active::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 3px;
          background-color: #111111;
          border-radius: 2px;
        }

        .auth-form {
          display: flex;
          flex-direction: column;
        }

        .auth-title {
          font-size: 18px;
          font-weight: 700;
          color: #111111;
          margin-bottom: 22px;
        }

        .form-group {
          display: flex;
          flex-direction: column;
          gap: 6px;
          margin-bottom: 18px;
        }

        .form-label {
          font-size: 14px;
          font-weight: 600;
          color: #222222;
        }

        .form-input {
          width: 100%;
          height: 44px;
          border: 1.5px solid #dcdcdc;
          border-radius: 6px;
          padding: 0 14px;
          font-size: 14.5px;
          outline: none;
          transition: border-color 0.2s;
        }

        .form-input:focus {
          border-color: #111111;
        }

        .login-continue-btn {
          background-color: #b72b2b; /* Crimson button from Login.png */
          color: #ffffff;
          height: 44px;
          border-radius: 6px;
          border: none;
          font-size: 15px;
          font-weight: 700;
          cursor: pointer;
          margin-top: 10px;
          margin-bottom: 16px;
          transition: background 0.2s;
        }

        .login-continue-btn:hover {
          background-color: #9f1f1f;
        }

        .forgot-password-link {
          text-align: center;
          font-size: 13.5px;
          font-weight: 600;
          color: #b72b2b;
          text-decoration: none;
        }

        .forgot-password-link:hover {
          text-decoration: underline;
        }

        @media (max-width: 600px) {
          .login-modal-card {
            padding: 32px 24px;
          }
          .login-tab-headers {
            gap: 30px;
          }
          .login-tab-btn {
            font-size: 20px;
          }
        }
      `}</style>
    </div>
  );
};

export default Login;
