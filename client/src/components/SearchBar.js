import React, { Component } from 'react';
import axios from 'axios';
import YTSearch from 'youtube-api-search';
import styled from "styled-components";

const Nav = styled.div`
  width: 100%;
  align-items: center;
  padding: .30%;

`

class SearchBar extends Component {
    constructor() {
        super();
        this.state = {
            term: ''
        }
        // this.videoSearch('tutorials');
    }
    // videoSearch (term) {
    //     YTSearch({key: process.env.REACT_APP_APIKEY, term: term}, (videos) => {
    //       console.log({videos})      
    //       this.setState({
    //         videos: videos,
    //       selectedVideo: videos[0], 
    //       })
    //     });
        
    //   }

    _handleChange = (e) => {
        const newState = { ...this.state };
        newState[e.target.name] = e.target.value;
        this.setState(newState);
    }
    _onSubmitSearch = (event) => {
        event.preventDefault();
        console.log(this)
        this.props.onSearchTermChange(this.state.term);
    }
    render() {
        return (
            <Nav>
                <form onSubmit={this._onSubmitSearch}>
                    <input 
                    name="term"
                    value={this.state.term}
                    onChange={this._handleChange}/>
                    <button>Search</button>
                </form>
            </Nav>
        );
    }
  
}

export default SearchBar;