import React, { Component } from "react";
import Song from "./song";

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
    this.getData();
    setInterval(this.getData, 5000); // runs every 5 seconds.
  }

  getData = () => {
    fetch(
      "https://musical.y2kwebs.com/musical/hit/upcoming/ultimas_canciones.json"
    )
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
  };

  render() {
    return (
      <div>
        <audio controls autoplay>
          <source
            src="http://s8.voscast.com:7528/stream/1/"
            type="audio/mpeg"
          />
        </audio>

        {this.state.items.map((song) => (
          <Song key={song.id} rawTitle={song.rtitle} />
        ))}
      </div>
    );
  }
}

export default Songs;
