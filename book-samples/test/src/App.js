import React, { Component } from 'react';
//import { Button, Form, Alert,  } from 'reactstrap';
import NavBar from './NavBar/NavBar.js';
import SearchBar from './SearchBar/SearchBar.js';

import './App.css';

// header with search bar

class App extends Component {
  render() {
    return (
      <div className="App">
      <NavBar />
      <SearchBar />
      </div>
    );
  }
  
}

export default App;
