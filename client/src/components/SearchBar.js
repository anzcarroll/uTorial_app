import React, { Component } from 'react';
import axios from 'axios';



class SearchBar extends Component {
    constructor() {
        super();
        this.state = {
            term: 'tutorials',
            searchedFor: ''
        }
    }

componentWillMount(){
    this._onInputChange();
    this._fetchSearchSubmit();
  }

  _fetchSearchSubmit = async () => {
    const key = process.env.REACT_APP_APIKEY
    const response = await axios.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&order=viewCount&q=tutorial&topicId=tutorial&key=${key}`)
    this.setState({
      searchedFor: response.data.description
    })
    console.log(response.data.description)
  }
    _onInputChange(term) {
        this.setState({term});
        this.props.onSearchTermChange(term);
    }
    

    render() {
        return (
            <div className="search-bar">
                <input 
                value={this.state.term}
                onChange={event => this._onInputChange(event.target.value)}
                onSubmit={event => this._fetchSearchSubmit(event.target.value)}/>
            </div>
        );
    }
  
}

export default SearchBar;