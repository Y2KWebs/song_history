import React from "react";
import SongDetails from "./songdetails";

function Song(props) {
  const info = JSON.parse(props.trackInfo);
  //console.log(info);
  let infoitems = [];
  //console.log(props);
  let caca = "";
  if (info.track) {
    //infoitems = <SongDetails details={info.track.idTrack} />;
    caca = JSON.stringify(info.track[0]);
    console.log(caca);
    //console.log(caca);
  } else {
    caca = "nada";
  }
  return (
    <div>
      <SongDetails details={caca} />
    </div>
  );
}
export default Song;
