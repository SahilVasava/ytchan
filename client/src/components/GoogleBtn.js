import React, { useState } from 'react';
import { GoogleLogin, GoogleLogout } from 'react-google-login';
import axios from 'axios';

const GoogleBtn = () => {

    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [accessToken, setAccessToken] = useState(null);

    const login = (response) => {
        console.log(response);
        if (response.accessToken) {
            setIsLoggedIn(true);
            setAccessToken(response.access_token);
            axios.get(`https://www.googleapis.com/youtube/v3/subscriptions?part=snippet,contentDetails&mine=true`, {
                headers: { 'Authorization': 'Bearer ' + accessToken }
            })
                .then(response => {
                    console.log(response);
                }).catch(err => {
                    console.log(err);
                })
        }
    }

    const logout = (response) => {
        setIsLoggedIn(false);
        setAccessToken(null);
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