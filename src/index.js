import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {
  render() {
    return(
      <div>
        <Header username="M Rizki" />
        <Greeting />
      </div>
    )
  }
}

class Header extends React.Component {
  render() {
    return(
      <header>
        <p>Welcome, {this.props.username}!</p>
      </header>
    )
  }
}

class Greeting extends React.Component {
  render() {
    const date = new Date()
    const hours = date.getHours()
    let timeOfDay

    if (hours < 12) {
      timeOfDay = "Good morning"
    } else if (hours < 17) {
      timeOfDay = "Good afternoon"
    } else {
      timeOfDay = "Good night"
    }
    
    return(
      <h1>
        {timeOfDay} to you, sir or madam!
      </h1>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
