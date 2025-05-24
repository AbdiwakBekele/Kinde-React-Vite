import React from 'react'
import { useKindeAuth } from '@kinde-oss/kinde-auth-react'

export default function Dashboard() {
    const { user, getAccessToken } = useKindeAuth()

    const fetchProtected = async () => {
        const token = await getAccessToken()
        // call API with `Authorization: Bearer ${token}`
    }

    return (
        <div>
            <h2>Dashboard</h2>
            <p>Hello, {user.name}</p>
            <button onClick={fetchProtected}>Fetch Protected Data</button>
        </div>
    )
}