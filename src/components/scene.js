import React, { Component } from "react";

//Components
import SceneText from "./sceneText.js";

class Scene extends Component {
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
      <div>
        <SceneText text={this.props.text} />
        <img
          src={this.props.image}
          alt="Bard Baby"
          style={{ width: "17em", height: "25em" }}
          className="my-3"
        />
        <div>
          <a className="navbar-brand" href={"/" + this.props.page}>
            Next >
          </a>
        </div>
      </div>
    );
  }
}

export default Scene;
