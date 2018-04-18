import React, { Component } from 'react';
import YouTube from 'react-youtube';
import ReactMapboxGl, { Layer, Feature } from 'react-mapbox-gl';

class App extends Component {
  render() {
    const playerOptions = {
      width: '100%',
      height: '100%',
      playerVars: {
        rel: 0,
        showinfo: 0,
        loop: 1,
        controls: 0,
        modestbranding: 1,
        playsinline: 1,
        autoplay: 1
      }
    };

    const Map = ReactMapboxGl({
      accessToken: process.env.REACT_APP_MAPBOX_TOKEN
    });

    return (
      <div>
        <YouTube
          videoId={'VxWHKaylRNM'}
          opts={playerOptions}
        />

        <Map
          style='mapbox://styles/mapbox/streets-v9'
          center={[-73.9, 40.71]}
          zoom={[9.75]}
          containerStyle={{
            width: '400px',
            height: '400px'
          }}
        />
      </div>
    );
  }
}

export default App;
