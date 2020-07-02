import React, { useState } from 'react';

export const AuthContext = React.createContext();

const AuthContextProvider = (props) => {
    const [accessToken, setAccessToken] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const addToken = (token) => {
        setAccessToken(token);
    }
    const toggleIsLoggedIn = () => {
        setIsLoggedIn(!isLoggedIn);
    }
    return (
        <AuthContext.Provider value={{ accessToken, isLoggedIn, addToken, toggleIsLoggedIn }}>
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthContextProvider;