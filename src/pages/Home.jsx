import React from 'react'
import KindeAuth from '@kinde-oss/kinde-auth-react'

const { useKindeAuth, LoginLink, LogoutLink } = KindeAuth;

export default function Home() {
    const { isAuthenticated } = useKindeAuth()
    return (
        <div>
            <h1>Welcome to Kinde + Vite</h1>
            {isAuthenticated ? (
                <LogoutLink>Sign Out</LogoutLink>
            ) : (
                <LoginLink>Sign In / Sign Up</LoginLink>
            )}
        </div>
    )
}