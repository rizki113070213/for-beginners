import React from "react"

function FormComponent(props) {
  return(
    <main>
      <form>
        <input
          name="firstName"
          value={props.data.firstName}
          placeholder="First Name"
          onChange={props.handleChange}
        /><br />

        <input
          name="lastName"
          value={props.data.lastName}
          placeholder="Last Name"
          onChange={props.handleChange}
        /><br />

        <input
          name="age"
          value={props.data.age}
          placeholder="Age"
          onChange={props.handleChange}
        /><br />

        <label>
          <input
            type="radio"
            name="gender"
            value="male"
            checked={props.data.gender === "male"}
            onChange={props.handleChange}
          /> Male
        </label>
        <label>
          <input
            type="radio"
            name="gender"
            value="female"
            checked={props.data.gender === "female"}
            onChange={props.handleChange}
          /> Female
        </label>
        <br />

        <select
          name="destination"
          value={props.data.destination}
          onChange={props.handleChange}
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
            checked={props.data.dietaryRestrictions.isVegan}
            onChange={props.handleChange} /> Vegan
        </label>

        <label>
          <input
            name="isHalal"
            type="checkbox"
            checked={props.data.dietaryRestrictions.isHalal}
            onChange={props.handleChange} /> Halal
        </label>

        <label>
          <input
            name="isLactoseFree"
            type="checkbox"
            checked={props.data.dietaryRestrictions.isLactoseFree}
            onChange={props.handleChange} /> LactoseFree
        </label>
        <br />

        <button>Submit</button>
      </form>

      <hr/>

      <h2>Entered Information:</h2>
      <p>Your name: {props.data.firstName} {props.data.lastName}</p>
      <p>Your age: {props.data.age}</p>
      <p>Your gender: {props.data.gender}</p>
      <p>Your destination: {props.data.destination}</p>
      <p>
        Your dietary restrictions:
        <p>Vegan : {props.data.dietaryRestrictions.isVegan ? "yes" : "no"}</p>
        <p>Halal : {props.data.dietaryRestrictions.isHalal ? "yes" : "no"}</p>
        <p>Lactose Free : {props.data.dietaryRestrictions.isLactoseFree ? "yes" : "no"}</p>
      </p>
    </main>
  )
}

export default FormComponent
