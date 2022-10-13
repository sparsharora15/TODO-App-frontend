import React from 'react'
import { AuthContext } from './AuthContext'

const AuthState = (props) => {
    function LoadUser() {
        if (localStorage.getItem('userToken')) {
            return true
        }
        else {
            return false
        }
    }
    return (
        <AuthContext.Provider value={{ LoadUser }}>{props.children}</AuthContext.Provider>
    )
}

export default AuthState