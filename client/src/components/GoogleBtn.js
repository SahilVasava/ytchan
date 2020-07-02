import React, { useContext } from 'react';
import { GoogleLogin, GoogleLogout } from 'react-google-login';
import { AuthContext } from '../contexts/authContext';

const GoogleBtn = () => {



    const { isLoggedIn, addToken, toggleIsLoggedIn } = useContext(AuthContext);
    const login = (loginRes) => {
        console.log(loginRes);
        if (loginRes.accessToken) {
            toggleIsLoggedIn(true);
            addToken(loginRes.accessToken);
        }
    }

    const logout = (response) => {
        toggleIsLoggedIn(false);
        addToken('');
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