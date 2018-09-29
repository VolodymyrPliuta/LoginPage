import React from 'react'

let button = document.getElementsByClassName('button')
const slideMenu = document.getElementsByClassName('slide-menu')
const form = document.getElementsByClassName('form')

class Login extends React.Component{
  constructor(props) {
    super(props)
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
    return this
  }

  render(){
    return(
      <div className="login">
        <button className="button" onClick={this.login}>Log In</button>
      </div>
    )
  }
}

export default Login;
