import React, { useContext, useEffect } from 'react';
import { GoogleLogin, GoogleLogout } from 'react-google-login';
import { AuthContext } from '../contexts/authContext';

const GoogleBtn = () => {


    const { accessToken, isLoggedIn, setAccessToken, setIsLoggedIn } = useContext(AuthContext);

    useEffect(() => {
        let access_token = JSON.parse(localStorage.getItem('access_token'));
        if (access_token && new Date(access_token.expires_at) >= new Date()) {
            setIsLoggedIn(true);
            console.log(access_token);
            setAccessToken(access_token.token);
        } else {
            logout();
        }
    }, [])
    const login = (loginRes) => {
        if (loginRes.accessToken) {
            localStorage.setItem('access_token', JSON.stringify({ 'token': loginRes.accessToken, 'expires_at': loginRes.tokenObj.expires_at }));
            //localStorage.setItem('access_token', loginRes.accessToken);
            setIsLoggedIn(true);
            setAccessToken(loginRes.accessToken);
        }
    }

    const logout = (response) => {
        localStorage.removeItem('access_token');
        setIsLoggedIn(false);
        setAccessToken('');
    }

    const handleLoginFailure = (response) => {
        alert('Failed to log in')
    }

    const handleLogoutFailure = (response) => {
        alert('Failed to log out')
    }
    return (
        <div>
            {isLoggedIn ?
                <GoogleLogout
                    clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
                    buttonText='Logout'
                    onLogoutSuccess={logout}
                    onFailure={handleLogoutFailure}
                >
                </GoogleLogout> : <GoogleLogin
                    clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
                    buttonText='Login'
                    onSuccess={login}
                    onFailure={handleLoginFailure}
                    cookiePolicy={'single_host_origin'}
                    responseType='code,token'
                    scope='https://www.googleapis.com/auth/youtube'
                />
            }


        </div>
    )
}

export default GoogleBtn;
;