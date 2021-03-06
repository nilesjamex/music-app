import React, { useState} from 'react';
// adding components
import Player from './components/Player';
import Song from './components/Song';
import Library from './components/Library';
// import styles
import "./styles/app.scss";
// import util
import data from './util'


function App() {
   // ref
   const audioRef = useRef(null);
  //  state
  const [songs, setSongs] = useState(data());
  const [currentSong, setCurrentSong] = useState(songs[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  return (
    <div className="App">
   <Song currentSong={currentSong} />
   <Player
   setIsPlaying={setIsPlaying}
   isPlaying={isPlaying}
   currentSong={currentSong} />
   <Library songs={songs} setCurrentSong={setCurrentSong} />
    </div>
  );
}

export default App;
