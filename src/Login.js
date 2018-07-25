import React, { Component } from 'react';
import fire from './Firebase';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            pword: ''
        }
    }

    login = e => {
        e.preventDefault();
        fire.auth().signInWithEmailAndPassword(this.state.email, this.state.pword)
        .then((u) => {})
        .catch((err) => {
            console.log(err);
        });
    }

    signup = e => {
        e.preventDefault();
        fire.auth().createUserWithEmailAndPassword(this.state.email, this.state.pword)
        .catch((err) => {
            console.log(err);
        });
    }

    handleChangeEmail = e => {
        this.setState({email: e.target.value});
        console.log(this.state.email)
    }

    handleChangePword = e => {
        this.setState({pword: e.target.value});
        console.log(this.state.pword)
    }

    render() {
        return (
            <div>
                <form>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Email address</label>
                        <input 
                        type="email" 
                        className="form-control" 
                        onChange={this.handleChangeEmail} 
                        id="exampleInputEmail1" 
                        aria-describedby="emailHelp" 
                        placeholder="Enter email"/>
                        <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Password</label>
                        <input 
                        type="password" 
                        onChange={this.handleChangePword} 
                        className="form-control" 
                        id="exampleInputPassword1" 
                        placeholder="Password"/>
                    </div>
                    <button type="submit" onClick={this.login} className="btn btn-primary">Sign in</button>
                    <button type="button" onClick={this.signup} className="btn btn-info">Sign up</button>
                    </form>
            </div>
        )
    }
}

export default Login;