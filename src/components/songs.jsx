import React, { Component } from "react";
import Song from "./song";
//import Data from "../data.json";

class Songs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: [],
    };
  }

  componentDidMount() {
    fetch("http://localhost:3000/ultimas_canciones.json")
      .then((res) => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            items: result,
          });
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          this.setState({
            isLoaded: true,
            error,
          });
        }
      );
  }

  render() {
    return (
      <div>
        {this.state.items.map((song) => (
          <Song key={song.id} rawTitle={song.rtitle} />
        ))}
      </div>
    );
  }
}

export default Songs;
