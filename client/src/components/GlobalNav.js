import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";


const Nav = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2.5%;
  background-color: rgba(2, 178, 208, 1);
  box-shadow: 0px 1px 6px black;
  a {
    text-decoration: none;
    margin: 0 5px;
    color: #EAC67A;
    &:visited {
        color: #EAC67A;
    }
  }
`;




class GlobalNav extends Component {
    constructor() {
      super();
      this.state = {
        user: {},
        loggedIn: false
      };
    }
  
    componentWillMount() {
      // this._isLoggedIn();
    }
    componentWillReceiveProps() {
      // this._isLoggedIn();
    }
  
    _isLoggedIn = async () => {
      const response = await axios.get("/api/users/:id");
      this.setState({
        user: response.data.data,
        loggedIn: response.data.success
      });
    };
    
    _logOut = async () => {
      console.log("CLICK");
      const response = await axios.delete("/api/users/:id");
      //Forces refresh of browser
      window.location.reload();
    };
  
    render() {
      if (this.state.loggedIn) {
        return (
          <Nav>
            <Link to="/">
              <h1>uTorial</h1>
            </Link>
           
              <span>Signed In As: {this.state.users.username}</span>
              <a href="#" onClick={this._logOut}> Log Out </a>
            
          </Nav>
        );
      }
      return (
        <Nav>
          <Link to="/">
            <h1>uTorial</h1>
          </Link>
          <div>
            <Link to="/signup">Sign Up</Link>
            <Link to="/signin">Log In</Link>
          </div>
        </Nav>
      );
    }
  }
  
  export default GlobalNav;
  