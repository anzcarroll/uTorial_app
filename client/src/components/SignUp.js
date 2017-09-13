import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';

class SignUp extends Component {
    constructor() {
        super();
        this.state = {
            username: '',
            email: '',
            password: '',
            password_confirmation: '',
            redirect: false
        }
    }

    _signUp = async (e) => {
        e.preventDefault();
        const payload = {
            username: this.state.username,
            email: this.state.email,
            password: this.state.password,
        }
        const response = await axios.post('/users/sign_up', payload);

        this.setState({ redirect: true })
    }

    _signIn = (e) => {
        e.preventDefault();
        this.setState({ redirect: true })
    }

    _handleChange = (e) => {
        const newState = { ...this.state };
        newState[e.target.name] = e.target.value;
        this.setState(newState);
    }

    render() {
        if (this.state.redirect) {
            return <Redirect to='' />
        }
        return (
            <div>
                <form onSubmit={this._signUp}>
                    <div>
                        <label htmlFor="name">Name: </label>
                        <input onChange={this._handleChange} type="text" name="name" value={this.state.name} />
                    </div>
                    <div>
                        <label htmlFor="email">E-mail: </label>
                        <input onChange={this._handleChange} type="text" name="email" value={this.state.email} />
                    </div>
                    <div>
                        <label htmlFor="password">Password: </label>
                        <input onChange={this._handleChange} type="text" name="password" value={this.state.password} />
                    </div>
                    <div>
                        <label htmlFor="password">Confirm Password: </label>
                        <input onChange={this._handleChange} type="text" name="password_confirmation" value={this.state.password_confirmation} />
                    </div>

                    <button>Sign Up</button>
                    <button onClick={this._signIn}>Log In</button>
                </form>
            </div>
        );
    }
}

export default SignUp;