import React, { Component } from "react";
import { NavLink } from "react-router-dom";

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
          <NavLink
            to={"/" + this.props.pageBack}
            className="btn btn-outline-danger mx-1"
          >
            Prev
          </NavLink>
          <NavLink
            to={"/" + this.props.page}
            className="btn btn-outline-success mx-1"
          >
            Next
          </NavLink>
        </div>
      </div>
    );
  }
}

export default Scene;
