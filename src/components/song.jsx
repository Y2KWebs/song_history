import React from "react";

function Song(props) {
  const info = JSON.parse(props.trackInfo);

  let details = {};

  if (info.track) {
    const detailsJson = info.track[0];

    details = Object.keys(detailsJson).map(function (key) {
      if (detailsJson[key]) {
        return (
          <div key={key}>
            {key} : {detailsJson[key]}
          </div>
        );
      } else {
        return null;
      }
    });
  } else {
    details = "No hay información adicional.";
  }
  return <div>{details}</div>;
}

export default Song;
