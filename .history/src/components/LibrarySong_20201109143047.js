import React from 'react';


const LibrarySong = ({currentSong}) => {
    return (
        <div className="librarys-ong">
          <img src="" alt=""></img> 
    <h3>{currentSong.name}</h3>
    <h4>{currentSong.artist}</h4>
        </div>
    )
}


export default LibrarySong