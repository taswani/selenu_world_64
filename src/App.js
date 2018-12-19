import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";

//Components
import Navbar from "./components/navbar.js";
import Scene from "./components/scene.js";

class App extends Component {
  constructor() {
    super();
    this.state = {
      player: "Ana",
      game: "Selenu World 64",
      health: 100
    };
  }

  render() {
    return (
      <div className="App" style={{ background: "#000" }}>
        <Navbar
          player={this.state.player}
          game={this.state.game}
          health={this.state.health}
        />
        <div className="jumbotron jumbotron-fluid App-header">
          <div className="container">
            <Scene />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
