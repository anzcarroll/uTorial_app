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
            term: 'tutorial'
        }
        this.videoSearch('tutorials');
    }
    videoSearch (term) {
        YTSearch({key: process.env.REACT_APP_APIKEY, term: term}, (videos) => {
          console.log({videos})      
          this.setState({
            videos: videos,
          selectedVideo: videos[0], 
          })
        });
        
      }

    onInputChange(term) {
        this.setState({term});
        this.props.onSearchTermChange(term);
    }

    render() {
        return (
            <Nav>
                <input 
                value={this.state.term}
                onChange={event => this.onInputChange(event.target.value)}/>
            </Nav>
        );
    }
  
}

export default SearchBar;