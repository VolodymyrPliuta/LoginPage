import React, { Component } from 'react';
import './App.css';

let button = document.getElementsByTagName('button')
const slideMenu = document.getElementsByClassName('slide-menu')
const form = document.getElementsByClassName('form')

class App extends Component {
  constructor() {
    super();
    this.state = {
      logedin: false,
      mobileMenu: false
    }
  }


  login = () => {
    console.log("log")
    if (this.state.logedin === false) {
      this.setState({
        logedin: true
      })
      button[0].innerHTML = "Log Out"
      form[0].setAttribute('style', 'display: none;')
      console.log(true)
      console.log(button)
    }
    else{
      this.setState({
        logedin: false
      })
      console.log(false)
      button[0].innerHTML = "Log In"
      form[0].setAttribute('style', 'display: flex;')
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
          <div className="login">
            <button className="button" onClick={this.login}>Log In</button>
          </div>
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
              <input type="text" />
              <p>Password: </p>
              <input type="password" />
              <button onClick={this.submit}>Submit</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
