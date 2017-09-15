

import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import Home from './components/Home';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import UserShow from './components/user/UserShow';
import GlobalNav from './components/GlobalNav.js';


class App extends Component {
  constructor() {
    super();
    this.state = {
      user: {
        favorites: []
      }
    }
  }
  componentWillMount(){
    // this._setUserState();
  }

  _setUserState = (user) => {
    this.setState({ user })
  }


  render() {
    return (
      <Router>
        <div>
          <GlobalNav/>
          <Route exact path="/" component={Home}/>
          <Route exact path="/signup" render={(props) => <SignUp {...props} user={this._setUserState} />}/>
          <Route exact path="/signin" component={SignIn}/>
          <Route exact path="/mypage" render={(props) => <UserShow {...props} user={this.state}/>}/>
        </div>
      </Router>
    );
  }
}



export default App;