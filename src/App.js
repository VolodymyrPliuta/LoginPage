import React, { Component } from 'react';
import './App.css';
import Login from './Login';

const slideMenu = document.getElementsByClassName('slide-menu')
const form = document.getElementsByClassName('form')
const userName = document.getElementsByClassName('userName')
const password = document.getElementsByClassName('password')

class App extends Component {
  constructor() {
    super();
    this.state = {
      logedin: false,
      mobileMenu: false
    }
  }

  menuSlide = () => {
    if(this.state.mobileMenu === false) {
      this.setState({
        mobileMenu: true
      })
      slideMenu[0].setAttribute('style', 'left: 0')
    }
    else{
      this.setState({
        mobileMenu: false
      })
      slideMenu[0].setAttribute('style', 'left: -40%')
    }
  }

  submit = (e) => {
   e.preventDefault();
    console.log(userName[0].value, password);
    if(userName[0].value === 'admin' && password[0].value === 'admin') {
      alert("you got the most popular password!")
    }
  }


  render() {
    return (
      <div className="body">
        <div className="nav-menu">
          <nav className="nav">
            <ol>
              <li><a href="…">Home</a></li>
              <li><a href="…">Page2</a></li>
              <li><a href="…">Page3</a></li>
              <li><a href="…">Page4</a></li>
            </ol>
          </nav>
          {/*      <nav className="nav-mobile" onClick={this.menuSlide}>
            <a>
              <svg class="hamburger-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M2 6h20v3H2zm0 5h20v3H2zm0 5h20v3H2z"></path></svg>
            </a>
          </nav> */}
          <Login state={this.state}/>
        </div>
        <div className="popupSection">
          <div className="slide-menu" >
            <nav>
              <ol className="mobile-list">
                <li><a href="…">Home</a></li>
                <li><a href="…">Page2</a></li>
                <li><a href="…">Page3</a></li>
                <li><a href="…">Page4</a></li>
              </ol>
            </nav>
          </div>
          <div className="form">
            <form>
              <p>UserName:</p>
              <input className="userName" type="text" />
              <p>Password: </p>
              <input className="password" type="password" />
              <button onClick={this.submit}>Submit</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
