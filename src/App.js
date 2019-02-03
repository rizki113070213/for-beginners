import React from "react";
import Conditional from "./components/Conditional";

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      isLoading: true
    }
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        isLoading: false
      })
    }, 1500)
  }

  render() {
    return this.state.isLoading ? <h1>Loading...</h1> : <Conditional />
  }
}

export default App
