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
    }


    _handleChange = (term) => {
        this.setState({term});
        this.props.onSearchTermChange(this.state.term);
    }

    _onSubmitSearch = (e) => {
        const newState = { ...this.state };
        newState[e.target.name] = e.target.value;
        this.setState(newState);
    }
    render() {
        return (
            <Nav>
                <form onSubmit={this._onSubmitSearch}>
                    <input 
                    name="term"
                    value={this.state.term}
                    onChange={event }/>
                    <button>Search</button>
                </form>
            </Nav>
        );
    }
  
}

export default SearchBar;