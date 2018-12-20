import React, { Component } from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/jquery/dist/jquery.min.js";
import "./App.css";

//Images
import selenu_bard from "./images/selenu_bard.png";
import arrival_swamp from "./images/arrival_swamp.png";
import bobu_cave from "./images/bobu_cave.png";
import bobu_zombie_landscape from "./images/bobu_zombie_landscape.png";
import bobu_zombie1 from "./images/bobu_zombie1.png";
import bobu_zombie2 from "./images/bobu_zombie2.jpg";
import bobu_zombie3 from "./images/bobu_zombie3.png";
import business_baby from "./images/business_baby.png";
import business_baby2 from "./images/business_baby2.jpeg";
import business_baby3 from "./images/business_baby3.png";
import buttmunch_baby from "./images/buttmunch_baby.png";
import castle_velena from "./images/castle_velena.png";
import drunk_cowboy_baby from "./images/drunk_cowboy_baby.png";
import rabid_baby from "./images/rabid_baby.png";
import religious_baby from "./images/religious_baby.png";
import scouting_baby from "./images/scouting_baby.jpg";
import wasted_baby from "./images/wasted_baby.png";

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
      images: [
        selenu_bard,
        arrival_swamp,
        bobu_cave,
        bobu_zombie_landscape,
        bobu_zombie1,
        bobu_zombie2,
        bobu_zombie3,
        business_baby,
        business_baby2,
        business_baby3,
        buttmunch_baby,
        castle_velena,
        drunk_cowboy_baby,
        rabid_baby,
        religious_baby,
        scouting_baby,
        wasted_baby
      ],
      text: ["Welcome to the world of Selenu!"]
    };
  }

  playerSet = (query = "Ana") => {
    this.setState({ player: query });
  };

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar
            player={this.state.player}
            game={this.state.game}
            health={this.state.health}
            handleInput={this.playerSet}
          />
          <div className="jumbotron jumbotron-fluid App-header">
            <div className="container">
              <Switch>
                <Route exact path="/" render={() => <Redirect to="/start" />} />
                <Route
                  path="/start"
                  render={() => (
                    <Scene
                      image={this.state.images[0]}
                      text={this.state.text[0]}
                      pageBack={"start"}
                      page={1}
                    />
                  )}
                />
                <Route
                  path="/1"
                  render={() => (
                    <Scene
                      image={this.state.images[1]}
                      text={this.state.text[0]}
                      pageBack={"start"}
                      page={2}
                    />
                  )}
                />
                <Route
                  path="/2"
                  render={() => (
                    <Scene
                      image={this.state.images[2]}
                      text={this.state.text[0]}
                      pageBack={1}
                      page={3}
                    />
                  )}
                />
                <Route
                  path="/3"
                  render={() => (
                    <Scene
                      image={this.state.images[3]}
                      text={this.state.text[0]}
                      pageBack={2}
                      page={4}
                    />
                  )}
                />
                <Route
                  path="/4"
                  render={() => (
                    <Scene
                      image={this.state.images[4]}
                      text={this.state.text[0]}
                      pageBack={3}
                      page={5}
                    />
                  )}
                />
                <Route
                  path="/5"
                  render={() => (
                    <Scene
                      image={this.state.images[5]}
                      text={this.state.text[0]}
                      pageBack={4}
                      page={6}
                    />
                  )}
                />
                <Route
                  path="/6"
                  render={() => (
                    <Scene
                      image={this.state.images[6]}
                      text={this.state.text[0]}
                      pageBack={5}
                      page={7}
                    />
                  )}
                />
                <Route
                  path="/7"
                  render={() => (
                    <Scene
                      image={this.state.images[7]}
                      text={this.state.text[0]}
                      pageBack={6}
                      page={8}
                    />
                  )}
                />
                <Route
                  path="/8"
                  render={() => (
                    <Scene
                      image={this.state.images[8]}
                      text={this.state.text[0]}
                      pageBack={7}
                      page={9}
                    />
                  )}
                />
                <Route
                  path="/9"
                  render={() => (
                    <Scene
                      image={this.state.images[9]}
                      text={this.state.text[0]}
                      pageBack={8}
                      page={10}
                    />
                  )}
                />
                <Route
                  path="/10"
                  render={() => (
                    <Scene
                      image={this.state.images[10]}
                      text={this.state.text[0]}
                      pageBack={9}
                      page={11}
                    />
                  )}
                />
                <Route
                  path="/11"
                  render={() => (
                    <Scene
                      image={this.state.images[11]}
                      text={this.state.text[0]}
                      pageBack={10}
                      page={12}
                    />
                  )}
                />
                <Route
                  path="/12"
                  render={() => (
                    <Scene
                      image={this.state.images[12]}
                      text={this.state.text[0]}
                      pageBack={11}
                      page={13}
                    />
                  )}
                />
                <Route
                  path="/13"
                  render={() => (
                    <Scene
                      image={this.state.images[13]}
                      text={this.state.text[0]}
                      pageBack={12}
                      page={14}
                    />
                  )}
                />
                <Route
                  path="/14"
                  render={() => (
                    <Scene
                      image={this.state.images[14]}
                      text={this.state.text[0]}
                      pageBack={13}
                      page={15}
                    />
                  )}
                />
                <Route
                  path="/15"
                  render={() => (
                    <Scene
                      image={this.state.images[15]}
                      text={this.state.text[0]}
                      pageBack={14}
                      page={16}
                    />
                  )}
                />
                <Route
                  path="/16"
                  render={() => (
                    <Scene
                      image={this.state.images[16]}
                      text={this.state.text[0]}
                      pageBack={15}
                      page={"start"}
                    />
                  )}
                />
              </Switch>
            </div>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
