import React, { Component } from 'react';
import './App.css';

let button = document.getElementsByTagName('button')

class App extends Component {
  constructor() {
  super();
    this.state = {
      logedin: false
    }
  }


  login = () => {
      console.log("log")
      if (this.state.logedin === false) {
        this.setState({
          logedin: true
        })
        button[0].innerHTML = "Log Out"
        console.log(true)
        console.log(button)
      }
    else{
        this.setState({
          logedin: false
        })
        console.log(false)
        button[0].innerHTML = "Log In"
    }
  }

  render() {
    return (
      <div className="nav-menu">
        <nav className="nav">
          <ol>
            <li><a href="…">Home</a></li>
            <li><a href="…">Page2</a></li>
            <li><a href="…">Page3</a></li>
            <li><a href="…">Page4</a></li>
          </ol>
        </nav>
          <div className="login">
            <button onClick={this.login}>Log In</button>
          </div>
      </div>
    );
  }
}

export default App;
