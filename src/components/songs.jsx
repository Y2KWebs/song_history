import React, { Component } from "react";
import Song from "./song";
import Card from "react-bootstrap/Card";

import Accordion from "react-bootstrap/Accordion";

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
      <div className="container-fluid">
        <audio controls autoPlay>
          <source
            src="http://s8.voscast.com:7528/stream/1/"
            type="audio/mpeg"
          />
        </audio>
        <Accordion defaultActiveKey="0">
          {this.state.items.map((song) => (
            <Card key={song.id * 4}>
              <Accordion.Toggle
                as={Card.Header}
                eventKey={song.id}
                key={song.id * 3}
              >
                {song.rtitle}
              </Accordion.Toggle>
              <Accordion.Collapse eventKey={song.id} key={song.id}>
                <Card.Body key={song.id * 2}>
                  <Song rawTitle={song.rtitle} trackInfo={song.trackinfo} />
                </Card.Body>
              </Accordion.Collapse>
            </Card>
          ))}
        </Accordion>
      </div>
    );
  }
}

export default Songs;
