// Import 3rd Party Libraries
import React from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

function LoginView() {
  return (
    <>
      <div className="landing-page-container">
        <div>
          <Link to="/home">Logo</Link>
          <p>Login Page</p>
          <Link to="/register">Click Here To Register</Link>
        </div>
      </div>
    </>
  );
}

export default LoginView;
