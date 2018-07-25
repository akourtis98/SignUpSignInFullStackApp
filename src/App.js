import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './Firebase';
import fire from './Firebase';
import Home from './Home'
import Login from './Login'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {}
    }
  }

  componentDidMount() {
    this.authListener();
  }

  authListener() {
    fire.auth().onAuthStateChanged((user) => {
      console.log(user);
      if (user) {
        this.setState({ user });
        localStorage.setItem('user', user.uid)
      }else {
        this.setState({ user });
        localStorage.removeItem('user')
      }
    })
  }

  render() {
    return (
      <div className="App">
        kek
        {this.state.user
        ?
        (<Home />)
        :
        (<Login />)}
      </div>
    );
  }
}

export default App;
