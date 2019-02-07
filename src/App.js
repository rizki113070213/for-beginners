import React, {Component} from "react"

class App extends Component {
  constructor() {
    super()
    this.state = {
      firstName: "",
      lastName: "",
      age: "",
      gender: "",
      destination: "",
      dietaryRestrictions: {
        isVegan: false,
        isHalal: true,
        isLactoseFree: false
      }
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event) {
    const {name, value, type, checked} = event.target
    type === "checkbox" ?
    this.setState(prevState => {
      return {
        dietaryRestrictions: {
          ...prevState.dietaryRestrictions,
          [name]: checked
        }
      }}) :
    this.setState({[name]: value})
  }

  render() {
    return(
      <main>
        <form>
          <input
            name="firstName"
            value={this.state.firstName}
            placeholder="First Name"
            onChange={this.handleChange}
          /><br />

          <input
            name="lastName"
            value={this.state.lastName}
            placeholder="Last Name"
            onChange={this.handleChange}
          /><br />

          <input
            name="age"
            value={this.state.age}
            placeholder="Age"
            onChange={this.handleChange}
          /><br />

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
            name="destination"
            value={this.state.destination}
            onChange={this.handleChange}
          >
            <option selected value="">-- select a destination --</option>
            <option value="padang">Padang</option>
            <option value="jakarta">Jakarta</option>
            <option value="bandung">Bandung</option>
            <option value="palembang">Palembang</option>
          </select>
          <br />

          <label>
            <input
              name="isVegan"
              type="checkbox"
              checked={this.state.dietaryRestrictions.isVegan}
              onChange={this.handleChange} /> Vegan
          </label>

          <label>
            <input
              name="isHalal"
              type="checkbox"
              checked={this.state.dietaryRestrictions.isHalal}
              onChange={this.handleChange} /> Halal
          </label>

          <label>
            <input
              name="isLactoseFree"
              type="checkbox"
              checked={this.state.dietaryRestrictions.isLactoseFree}
              onChange={this.handleChange} /> LactoseFree
          </label>
          <br />

          <button>Submit</button>
        </form>

        <hr/>

        <h2>Entered Information:</h2>
        <p>Your name: {this.state.firstName} {this.state.lastName}</p>
        <p>Your age: {this.state.age}</p>
        <p>Your gender: {this.state.gender}</p>
        <p>Your destination: {this.state.destination}</p>
        <p>
          Your dietary restrictions:
          <p>Vegan : {this.state.dietaryRestrictions.isVegan ? "yes" : "no"}</p>
          <p>Halal : {this.state.dietaryRestrictions.isHalal ? "yes" : "no"}</p>
          <p>Lactose Free : {this.state.dietaryRestrictions.isLactoseFree ? "yes" : "no"}</p>
        </p>
      </main>
    )
  }
}

export default App
