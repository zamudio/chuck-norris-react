import React, { Component } from "react";
import Jokes from "../components/Jokes";
// import "../styles/App.css";

class App extends Component {
  state = {
    jokes: [],
  };

  componentDidMount() {
    fetch("https://api.chucknorris.io/jokes/random")
      .then((res) => res.json())
      .then((data) => {
        this.setState({ jokes: data });
      })
      .catch(console.log);
  }

  render() {
    return <Jokes jokes={this.state.jokes} />;
  }
}

export default App;
