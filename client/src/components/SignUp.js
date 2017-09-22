import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';



class SignUp extends Component {
    constructor() {
        super();
        this.state = {
            id: '',
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
            password_confirmation: this.state.password_confirmation
        }
        const response = await axios.post('/api/users', payload);
        console.log(response.data)
        this.props.user(response.data)
        this.setState({ 
            id: response.data.id,
            redirect: true })
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
            return <Redirect to='/mypage' />
        }
        return (
            <div>
                <form onSubmit={this._signUp} className="col-md-8 signUpForm">
                    <div className="form-group row">
                        <label htmlFor="username" className="col-sm-2 col-form-label">Username: </label>
                        <input onChange={this._handleChange} className="form-control signUpForm" type="text" name="username" value={this.state.username} />
                    </div>
                    <div className="form-group row">
                        <label htmlFor="email" className="col-sm-2 col-form-label">E-mail: </label>
                        <input onChange={this._handleChange} className="form-control signUpForm" type="text" name="email" value={this.state.email} />
                        <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="password" className="col-sm-2 col-form-label">Password: </label>
                        <input onChange={this._handleChange} className="form-control signUpForm" type="text" name="password" value={this.state.password} />
                    </div>
                    <div className="form-group row">
                        <label htmlFor="password" className="col-sm-2 col-form-label">Confirm Password: </label>
                        <input onChange={this._handleChange} className="form-control signUpForm" type="text" name="password_confirmation" value={this.state.password_confirmation} />
                    </div>
                    <div className="col-md-6 offset-md-3">
                    <button className="btn btn-primary" >Sign Up</button>
                    <button className="btn btn-primary" onClick={this._signIn}>Log In</button>
                    </div>
                </form>
            </div>
        );
    }
}

export default SignUp;