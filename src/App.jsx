import React from 'react';
import { useKindeAuth } from '@kinde-oss/kinde-auth-react';
import { LoginLink, LogoutLink, RegisterLink } from '@kinde-oss/kinde-auth-react/components';


export default function App() {
  // const { isAuthenticated, user } = useKindeAuth();

  const { isAuthenticated, user, login, logout } = useKindeAuth();

  console.log('KindeAuth exports:', isAuthenticated);


  return (
    <div style={{ textAlign: 'center', marginTop: '4rem' }}>
      <h1>Welcome to Kinde + Vite</h1>

      {isAuthenticated ? (
        <>
          <p>Hello, {user?.given_name || 'User'}!</p>
          <LogoutLink>Sign Out</LogoutLink>
        </>
      ) : (
        <LoginLink>Sign In / Sign Up</LoginLink>
      )}
    </div>
  );
}
