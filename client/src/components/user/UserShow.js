import React, { Component } from 'react';
import axios from 'axios';


class UserShow extends Component {
    constructor() {
        super();
        this.state = {
            username: '',
            favorites: [],


        }
    }
    componentWillMount(){
        this._fetchUserInfo();
      }
    
      _fetchUserInfo = async () => {
        const id = this.props.match.params.id;
        const res = await axios.get(`/api/users/${id}`)
        this.props.user(res.data)
        this.setState({
          username: res.data.username,
          favorites: res.data.favorites
        })
      }

    render() {
        return (
            <div>
                <h1>Welcome Back, {this.props.user.user.username}</h1>
               
            </div>
        );
    }
}

export default UserShow;