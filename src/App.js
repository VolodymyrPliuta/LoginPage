import React, { Component } from 'react';
import './App.css';

class App extends Component {

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
            <button>Log In</button>
          </div>
      </div>
    );
  }
}

export default App;
