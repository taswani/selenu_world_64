import React, { Component } from "react";

class Navbar extends Component {
  state = {
    search: ""
  };

  componentDidMount() {
    this.props.handleInput(this.props.query);
  }

  //Grabs input upon change and updates state accordingly.
  handleChange = e => {
    this.setState({ search: e.target.value });
  };

  //Handles submit by sending the search text to the function search from app.js.
  submit = e => {
    e.preventDefault();
    this.props.handleInput(this.state.search);
    e.currentTarget.reset();
  };

  render() {
    return (
      <div className="Navbar">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand" href="#">
            {this.props.game}
          </a>
          <div className="navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <span className="nav-link">{this.props.player}</span>
              </li>
              <li className="nav-item">
                <span className="nav-link">
                  Current Health: {this.props.health}/100
                </span>
              </li>
            </ul>
            <form
              className="form-inline my-2 my-lg-0 justify-content-center"
              onSubmit={this.submit}
            >
              <input
                className="form-control"
                type="search"
                placeholder="Search"
                aria-label="Search"
                onChange={this.handleChange}
              />
              <button
                className="btn btn-outline-success my-2 my-sm-0"
                type="submit"
              >
                Set Name
              </button>
            </form>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
