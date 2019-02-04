import React from "react";

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      isLoggedIn: false
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    this.setState(prevState => {
      return {
        isLoggedIn: !prevState.isLoggedIn
      }
    })
  }

  render() {
    const textDisplay = this.state.isLoggedIn ? "logged in" : "logged out"
    return(
      <div>
        <h2>You currently are {textDisplay}</h2>
        <button onClick={this.handleClick}>{!this.state.isLoggedIn ? "Login" : "Logout"}</button>
      </div>
    )
  }
}

export default App
