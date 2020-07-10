import React, { useState } from 'react';

export const AuthContext = React.createContext();

const AuthContextProvider = (props) => {
    const [accessToken, setAccessToken] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(false);



    return (
        <AuthContext.Provider value={{ accessToken, isLoggedIn, setAccessToken, setIsLoggedIn }}>
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthContextProvider;