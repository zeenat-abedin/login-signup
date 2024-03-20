// pages/ProtectedPage.js
import React from 'react';

const ProtectedPage = ({ loggedIn, user }) => {
  return (
    <div>
      {loggedIn ? (
        <div>
          <h2>Welcome, {user.username}!</h2>
          <p>This is a protected page.</p>
        </div>
      ) : (
        <h2>Please log in to view this page.</h2>
      )}
    </div>
  );
};

export default ProtectedPage;
