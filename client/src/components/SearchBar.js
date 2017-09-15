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


    _handleChange = (e) => {
        const newState = { ...this.state };
        newState[e.target.name] = e.target.value;
        this.setState(newState);
    }

    _onSubmitSearch = (e, term) => {
        e.preventDefault();
        console.log(term)
        // const newState = { ...this.state };
        // newState[e.target.name] = e.target.value;
        // this.setState(newState);
        this.setState({term})
        this.props.onSearchTermChange(this.state.term);
    }
    render() {
        return (
            <Nav>
                <form onSubmit={(e) => this._onSubmitSearch(e)}>
                    <input
                        name="term"
                        value={this.state.term}
                        onChange={this._handleChange} />
                    <button>Search</button>
                </form>
            </Nav>
        );
    }

}

export default SearchBar;