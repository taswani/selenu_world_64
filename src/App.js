import React, { Component } from "react";
import selenu_bard from "./images/selenu_bard.png";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

//Components
import Navbar from "./components/navbar.js";
import Scene from "./components/scene.js";

class App extends Component {
  constructor() {
    super();
    this.state = {
      player: "Ana and friends",
      game: "Selenu World 64",
      health: 100,
      religion: false,
      bobaEnding: false,
      items: [],
      images: [selenu_bard],
      text: ["Welcome to the world of Selenu!"]
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
            <Scene image={this.state.images[0]} text={this.state.text[0]} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
