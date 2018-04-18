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
        modestbranding: 1,
        playsinline: 1,
        autoplay: 1
      }
    };

    const Map = ReactMapboxGl({
      accessToken: process.env.REACT_APP_MAPBOX_TOKEN
    });

    return (
      <div
        style={{
          display: 'flex'
        }}
      >
        <div
          style={{
            width: '131.45vh',
            height: '100vh'
          }}
        >
          <YouTube
            videoId={'VxWHKaylRNM'}
            opts={playerOptions}
          />
        </div>

        <div
          style={{
            flex: '1',
            minWidth: '35%',
            position: 'relative'
          }}
        >
          <Map
            style='mapbox://styles/mapbox/streets-v9'
            center={[-73.9, 40.71]}
            zoom={[9.75]}
            containerStyle={{
              width: '100%',
              height: '100%'
            }}
          />

          <div
            style={{
              position: 'absolute',
              bottom: '3rem',
              left: '2rem',
              right: '2rem',
              background: '#fff',
              border: '2px solid #000',
              padding: '1rem'
            }}
          >
            <pre>
              Preformatted text

              box
            </pre>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
