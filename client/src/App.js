import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SearchBar from './components/SearchBar'
import YTSearch from 'youtube-api-search';
import API_KEY from './secrets'


YTSearch({key: API_KEY, term: 'tutorials'}, function(data) {
  console.log(data);
})

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome to uTorial</h2>
          <SearchBar />
        </div>
        <p className="App-intro">
         Want to learn something, type in your topic and get to viewing!
        </p>
      </div>
    );
  }
}

export default App;
