import React, { useEffect } from 'react'
import { useKindeAuth } from '@kinde-oss/kinde-auth-react'
import { useNavigate } from 'react-router-dom'

export default function Callback() {
    const { handleRedirectCallback } = useKindeAuth()
    const nav = useNavigate()

    useEffect(() => {
        handleRedirectCallback().then(() => nav('/dashboard'))
    }, [])

    return <p>Signing you in...</p>
}