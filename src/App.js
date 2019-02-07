import React from "react"

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      firstName: "",
      lastName: "",
      description: "Some description...",
      gender: "male",
      favColor: "",
      isFriendly: true
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event) {
    const {name, value, type, checked} = event.target
    type === "checkbox" ? this.setState({[name]: checked}) : this.setState({[name]: value})
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
        <br />

        <textarea
          name="description"
          value={this.state.description}
          onChange={this.handleChange}
        />
        <br />

        <label>
          <input
            type="checkbox"
            name="isFriendly"
            checked={this.state.isFriendly}
            onChange={this.handleChange}
          /> Is friendly?
        </label>
        <br />

        <label>
          <input
            type="radio"
            name="gender"
            value="male"
            checked={this.state.gender === "male"}
            onChange={this.handleChange}
          /> Male
        </label>

        <label>
          <input
            type="radio"
            name="gender"
            value="female"
            checked={this.state.gender === "female"}
            onChange={this.handleChange}
          /> Female
        </label>
        <br />

        <select
          name="favColor"
          value={this.state.favColor}
          onChange={this.handleChange}
        >
          <option value="red">Red</option>
          <option value="green">Green</option>
          <option value="blue">Blue</option>
        </select>

        <p>{this.state.firstName} {this.state.lastName}</p>
        <p>{this.state.gender}</p>
        <p>{this.state.favColor}</p>

        <button>Submit</button>
      </form>
    )
  }
}

export default App
