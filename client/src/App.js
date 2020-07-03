import React from 'react';
import { Grid } from '@material-ui/core';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import './App.css';
import NavBar from './components/NavBar'
import ChannelCards from './container/ChannelCards';
import AuthContextProvider from './contexts/authContext';
import CssBaseline from '@material-ui/core/CssBaseline';


const App = () => {
  const theme = createMuiTheme({
    palette: {
      type: 'dark',
      /* primary: {
        // main: '#3f50b5',
        dark: '#000',
        light: '#fff'
      },
      secondary: {
        // main: '#f44336',
        main: '#ba000d',
      }, */
      /* background: {
        paper: '#303030'
      } */
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="App">
        <AuthContextProvider>
          <Grid container direction="column">
            <NavBar />
            <ChannelCards />
          </Grid>
        </AuthContextProvider>

      </div>
    </ThemeProvider>
  );
}

export default App;
