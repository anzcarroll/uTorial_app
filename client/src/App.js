// import React, { Component } from 'react';
// import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
// import './App.css';
// import axios from 'axios';
// import _ from 'lodash';
// import VideoList from './components/VideoList';
// import SearchBar from './components/SearchBar';
// import YTSearch from 'youtube-api-search';
// import VideoDetail from './components/VideoDetail';
// import SignUp from './components/SignUp';
// import SignIn from './components/SignIn';

// import { Navbar, Jumbotron, Button } from 'react-bootstrap';






// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       videos: [],
//       selectedVideo: null
//     };
//     this.videoSearch('tutorials');
//   }
//   videoSearch (term) {
//     YTSearch({key: process.env.REACT_APP_APIKEY, term: term}, (videos) => {
//       console.log({videos})      
//       this.setState({
//         videos: videos,
//       selectedVideo: videos[0], 
//       })
//     });
    
//   }

//   componentWillMount() {
//     this.fetchVideos();
//   }

//   fetchVideos = async () => {
//     const key = process.env.REACT_APP_APIKEY
//     const uri = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&order=viewCount&q=tutorial&topicId=/m/01k8wb&key=${key}`;
//     try {
//       const response = await axios.get(uri);
//       await this.setState({videos: response.data.items});
//       console.log(response.data.items);
//     }
//     catch (err) {
//       console.log(err)
//       await this.setState({error: err.message})
//       return err.message
//     }
    
//   }


//   render() {
//     const videoSearch = _.debounce((term) => {this.videoSearch(term)}, 300)

//     return (
//       <div className="App">
//         <div className="App-header">
//           <h2>Welcome to uTorial</h2>
//           <Router>
//           <div className="user-tags">
//           <SearchBar onSearchTermChange= {videoSearch}/>
//           <Link to="/signUp">Sign Up</Link>
//           <Link to="/signIn">Sign In</Link>
//           <Route exact path="/signup" component={SignUp}/>
//           <Route exact path="/signin" component={SignIn}/>
//           </div>
//         </Router>
//         </div>
//         <div className="App-intro">
//           <VideoDetail video={this.state.selectedVideo}/>
//          Want to learn something, type in your topic and get to viewing!
//         <VideoList 
//         onVideoSelect={ selectedVideo => this.setState({selectedVideo}) }
//         videos={this.state.videos} />
//         </div>
//       </div>
//     );
//   }
// }

// export default App;














import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import Home from './components/Home';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import GlobalNav from './components/GlobalNav.js';


class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <GlobalNav/>
          <Route exact path="/" component={Home}/>
          <Route exact path="/signup" component={SignUp}/>
          <Route exact path="/signin" component={SignIn}/>
        </div>
      </Router>
    );
  }
}



export default App;