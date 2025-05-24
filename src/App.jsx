import { useKindeAuth } from '@kinde-oss/kinde-auth-react';
// import { LoginLink, LogoutLink, RegisterLink } from '@kinde-oss/kinde-auth-react/components'; //v5.4.1
import React, { useEffect } from 'react';


export default function App() {

  const { isAuthenticated, user, login, logout, isLoading } = useKindeAuth();

  // Log once on mount
  useEffect(() => {
    console.log('Initial mount log:');
    console.log('isLoading:', isLoading);
    console.log('isAuthenticated:', isAuthenticated);
    console.log('user:', user);
  }, []);

  // Log whenever any state changes
  useEffect(() => {
    console.log('State change detected:');
    console.log({ isLoading, isAuthenticated, user });
  }, [isLoading, isAuthenticated, user]);


  if (isLoading) return <p>Loading...</p>;

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Kinde Auth Demo</h1>
      {!isAuthenticated ? (
        <>
          {/* For v5.4.1 */}
          {/* <LoginLink>Sign In</LoginLink> | <RegisterLink>Sign up</RegisterLink> */}


          {/* For v4.0.4 */}
          <button onClick={login}>Login</button>

        </>
      ) : (
        <>
          <p>Welcome, {user?.given_name || 'User'}!</p>

          {/* For v5.4.1 */}
          {/* <LogoutLink>Sign out</LogoutLink> */}

          {/* For v4.0.4 */}
          <button onClick={logout}>Logout</button>
        </>
      )}
    </div>
  );
}