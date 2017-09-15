import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';

import axios from 'axios';
import _ from 'lodash';
import YTSearch from 'youtube-api-search';
import SearchBar from './SearchBar';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';
import SignUp from './SignUp';
import SignIn from './SignIn';

import { Navbar, Jumbotron, Button } from 'react-bootstrap';






class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      videos: [],
      selectedVideo: null,
      term: 'web development',
      error: ''
    };

  }

  componentWillMount() {
    this._fetchVideos(this.state.term);
  }

  _fetchVideos = async (term) => {
      const key = process.env.REACT_APP_APIKEY;
      const uri = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&order=relevance&q=${term}&topicId=%2Fm%2F01k8wb&type=video&videoSyndicated=true&key=${key}`;
      try {

        const response = await axios.get(uri);
        await this.setState({
          videos: response.data.items,
          selectedVideo: response.data.items[0],
          term: term
        });
        // console.log(response.data.items);

      }
      catch (err) {
        console.log(err)
        await this.setState({ error: err.message })
        return err.message
      }

    }
    
  


  _videoSearch = (term) => {
    YTSearch({ key: process.env.REACT_APP_APIKEY, part: 'snippet', term: term, type: 'video' }, (videos) => {
      console.log(videos)
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
      })

    })
  }


  





  render() {
    const videoSearch = _.debounce((term) => { this._videoSearch(term)}, 300)
    return (
      <div className="App">
        <div className="App-header">
          <SearchBar onSearchTermChange={videoSearch} />
        </div>
        <div className="App-intro">
          <VideoDetail video={this.state.selectedVideo} />
          Want to learn something, type in your topic and get to viewing!
        <VideoList
            onVideoSelect={selectedVideo => this.setState({ selectedVideo })}
            videos={this.state.videos} />
        </div>
      </div>
    );
  }
}

export default Home;
