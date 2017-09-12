import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import './App.css';
import axios from 'axios';
import VideoList from './components/VideoList';
import SearchBar from './components/SearchBar';
import YTSearch from 'youtube-api-search';
import VideoDetail from './components/VideoDetail';
import { Navbar, Jumbotron, Button } from 'react-bootstrap';






class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      videos: [],
      selectedVideo: null
    };

    YTSearch({key: process.env.REACT_APP_APIKEY, term: 'tutorials'}, (videos) => {
      console.log({videos})      
      this.setState({
        videos: videos,
      selectedVideo: videos[0] })
    });
    
  }

  componentWillMount() {
    console.log(process.env)
    this._fetchVideos();
  }

  _fetchVideos = async () => {
    try {
      const response = await axios.get('/api/tutorials');
      await this.setState({videos: response.data});
      return response.data;
    }
    catch (err) {
      console.log(err)
      await this.setState({error: err.message})
      return err.message
    }
    
  }


  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome to uTorial</h2>
          <SearchBar />
        </div>
        <div className="App-intro">
          <VideoDetail video={this.state.selectedVideo}/>
         Want to learn something, type in your topic and get to viewing!
        <VideoList 
        onVideoSelect={ selectedVideo => this.setState({selectedVideo}) }
        videos={this.state.videos} />
        </div>
      </div>
    );
  }
}

export default App;
