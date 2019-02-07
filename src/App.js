import React from "react"

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      firstName: "",
      lastName: ""
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event) {
    const {name, value} = event.target
    this.setState({
      [name]: value
    })
  }

  render() {
    return(
      <form>
        <input
          type="text"
          name="firstName"
          value={this.state.firstName}
          placeholder="First Name"
          onChange={this.handleChange}
        />
        <br />

        <input
          type="text"
          name="lastName"
          value={this.state.lastName}
          placeholder="Last Name"
          onChange={this.handleChange}
        />
        <p>{this.state.firstName} {this.state.lastName}</p>
      </form>
    )
  }
}

export default App
