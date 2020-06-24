import React from 'react';
import { Button } from '@material-ui/core';
import './App.css';
import AppBar from './components/NavBar'
import ChannelCards from './container/ChannelCards';
function App() {
  return (
    <div className="App">
      <AppBar />
      <ChannelCards />
    </div>
  );
}

export default App;
