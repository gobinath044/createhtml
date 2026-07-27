import React from 'react';

function AuthButton1({ isLoggedIn }) {
  return <button>{isLoggedIn ? 'Logout' : 'Login'}</button>;
}

function AuthButton2({ isLoggedIn }) {
  return <button>{isLoggedIn ? 'Sign Out' : 'Sign In'}</button>;
}

function AuthButton3({ isLoggedIn }) {
  return <button>{isLoggedIn ? 'Exit' : 'Enter'}</button>;
}

function TestApp() {
  const currentButton = 2;
  const isLoggedIn = true;

  let RenderedButton;

  if (currentButton === 1) {
    RenderedButton = <AuthButton1 isLoggedIn={isLoggedIn} />;
  } else if (currentButton === 2) {
    RenderedButton = <AuthButton2 isLoggedIn={isLoggedIn} />;
  } else {
    RenderedButton = <AuthButton3 isLoggedIn={isLoggedIn} />;
  }

  return (
    <div>
      <h2>Dynamic Button Render</h2>
      {RenderedButton}
    </div>
  );
}

export default TestApp;
