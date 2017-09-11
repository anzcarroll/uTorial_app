import React, { Component } from 'react';
import './App.css';
import VideoList from './components/VideoList';
import SearchBar from './components/SearchBar';
import YTSearch from 'youtube-api-search';






class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      videos: []
    };
    YTSearch({key: process.env.REACT_APP_APIKEY, term: 'tutorials'}, (videos) => {
      console.log({videos})      
      this.setState({videos})
    })
    
  }

  componentWillMount() {
    console.log(process.env)
  }


  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome to uTorial</h2>
          <SearchBar />
        </div>
        <div className="App-intro">
         Want to learn something, type in your topic and get to viewing!
        <VideoList videos={this.state.videos} />
        </div>
      </div>
    );
  }
}

export default App;
