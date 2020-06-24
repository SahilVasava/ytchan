import React from 'react';
import { Button, Grid } from '@material-ui/core';
import './App.css';
import NavBar from './components/NavBar'
import ChannelCards from './container/ChannelCards';
function App() {
  return (
    <div className="App">
      <Grid container direction="column">
        <NavBar />
        <ChannelCards />
      </Grid>
    </div>
  );
}

export default App;
