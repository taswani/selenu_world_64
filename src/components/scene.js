import React, { Component } from "react";
import selenu_bard from "../images/selenu_bard.png";

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
        <img
          src={selenu_bard}
          alt="Bard Baby"
          style={{ width: "20em", height: "25em" }}
          className="my-3"
        />
        <div className="my-3">
          <span> Welcome to the world of Selenu!</span>
        </div>
      </div>
    );
  }
}

export default Scene;
