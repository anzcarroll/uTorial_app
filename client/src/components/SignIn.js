import React, { Component } from 'react';
import { Redirect, Link } from 'react-router-dom';
import axios from 'axios';

class SignUp extends Component {
    constructor() {
        super();
        this.state = {
            id: '',
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
        const response = await axios.post('', payload);
        this.props.user(response.data)
        this.setState({
            id:
            response.data.id,
            redirect: true
        })
    }

    _handleChange = (e) => {
        const newState = { ...this.state };
        newState[e.target.name] = e.target.value;
        this.setState(newState);
    }

    render() {
        if (this.state.redirect) {
            return <Redirect to='/' />
        }
                return (
                    <div>
                        <form onSubmit={this._signIn} className="col-md-6">
                            <div>
                                <label htmlFor="email" className="col-sm-2">E-mail: </label>
                                <input onChange={this._handleChange} type="text" className="form-control" name="email" value={this.state.email} />
                            </div>
                            <div>
                                <label htmlFor="password" className="col-sm-2">Password: </label>
                                <input onChange={this._handleChange} type="text" className="form-control" name="password" value={this.state.password} />
                            </div>
                            <button className="btn btn-primary">Sign In</button>
                            <button className="btn btn-primary">Sign Up</button>
                        </form>
                    </div>
                );
        }
    }

    export default SignUp;