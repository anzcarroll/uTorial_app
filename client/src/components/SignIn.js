import React, { Component } from 'react';
import { Redirect, Link } from 'react-router-dom';
import axios from 'axios';

class SignUp extends Component {
    constructor() {
        super();
        this.state = {
            username: '',
            email: '',
            password: '',
            redirect: false
        }
    }

    _signIn = async (e) => {
        e.preventDefault();
        const payload = {
            username: this.state.username,
            email: this.state.email,
            password: this.state.password,
        }
        const response = await axios.post('/users/sign_in', payload);

        this.setState({ redirect: true })
    }

    _handleChange = (e) => {
        const newState = { ...this.state };
        newState[e.target.name] = e.target.value;
        this.setState(newState);
    }

    render() {
        if (this.state.redirect) {
            return <Redirect to="/" />
        }
        return (
            <div>
                <form onSubmit={this._signIn}>
                    <div>
                        <label htmlFor="email">E-mail: </label>
                        <input onChange={this._handleChange} type="text" name="email" value={this.state.email} />
                    </div>
                    <div>
                        <label htmlFor="password">Password: </label>
                        <input onChange={this._handleChange} type="text" name="password" value={this.state.password} />
                    </div>
                    <button>Sign In</button>
                    <button onClick="/signup">Sign Up</button>
                </form>
            </div>
        );
    }
}

export default SignUp;