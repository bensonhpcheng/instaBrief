// src/components/LoginBox.jsx
import React from 'react';

const LoginBox = () => {
  const handleLogin = () => {
    // Redirects to the OAuth endpoint for Instagram login
    window.location.href = 'http://localhost:3000/auth/instagram';
  };

  return (
    <div className="login-box">
      <h2>Welcome to InstaBrief</h2>
      <button onClick={handleLogin}>Login with Instagram</button>
    </div>
  );
};

export default LoginBox;
