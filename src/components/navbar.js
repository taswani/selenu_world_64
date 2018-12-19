import React, { Component } from "react";

class Navbar extends Component {
  render() {
    return (
      <div className="Navbar">
        <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-light">
          <span className="navbar-brand">{this.props.game}</span>
          <div>
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <span className="nav-link">
                  {this.props.player} <span className="sr-only">(current)</span>
                </span>
              </li>
              <li className="nav-item">
                <span className="nav-link">
                  Current Health: {this.props.health}/100
                </span>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
