import React from "react"

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      loading: false,
      character: {}
    }
  }

  componentDidMount() {
    this.setState({loading: true})
    fetch("https://swapi.co/api/people/1")
      .then(response => response.json())
      .then(data => {
        this.setState({
          character: data,
          loading: false
        })
      })
  }

  render() {
    return(
      <div>
        {this.state.loading ? <h1>Loading...</h1> : this.state.character.name}
      </div>
    )
  }
}

export default App
