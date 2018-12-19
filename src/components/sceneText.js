import React, { Component } from "react";

class SceneText extends Component {
  render() {
    return (
      <div>
        <div className="my-3">
          <span>{this.props.text}</span>
        </div>
      </div>
    );
  }
}

export default SceneText;
