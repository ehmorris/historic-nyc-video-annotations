import React, { Component } from 'react';
import YouTube from 'react-youtube';
import ReactMapboxGl, { Layer, Feature } from 'react-mapbox-gl';

class App extends Component {
  constructor(props) {
    super(props);
    this.handleStateChange = this.handleStateChange.bind(this);

    this.state = {
      playerTime: 0,
      title: '',
      desc: '',
      lat: 40.71,
      long: -73.9,
      zoom: 9.75
    };

    this.data = [
      {
        startTime: 227.07,
        endTime: 260.36,
        title: 'Brooklyn Bridge',
        desc: 'The Brooklyn Bridge used to carry trollies, trains, cars, and pedestrians',
        lat: 40.7062541,
        long: -74.0058382,
        zoom: 12
      }
    ];
  }

  getDataAtPoint(point) {
    return this.data.find((entry) => {
      return point > entry.startTime && point < entry.endTime
    });
  }

  playFromPoint(point) {
    const data = this.getDataAtPoint(point);

    if (data) {
      this.setState({
        playerTime: point,
        title: data.title,
        desc: data.desc,
        lat: data.lat,
        long: data.long,
        zoom: data.zoom,
      });
    } else {
      this.setState({
        playerTime: point
      });
    }
  }

  handleStateChange({data: state, target: video}) {
    if (state == 1) {
      this.playFromPoint(video.getCurrentTime());
    }
  }

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
            videoId={'2LxxoaIa_uk'}
            opts={playerOptions}
            onStateChange={this.handleStateChange}
          />
        </div>

        <div
          style={{
            flex: '1',
            minWidth: '35%',
            position: 'relative',
            padding: '90px'
          }}
        >
          <Map
            style='mapbox://styles/mapbox/streets-v9'
            center={[this.state.long, this.state.lat]}
            zoom={[this.state.zoom]}
            containerStyle={{
              width: '100%',
              height: '100%',
              zIndex: '1'
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
              padding: '1rem',
              zIndex: '2'
            }}
          >
            <div>{this.state.playerTime}</div>
            <div>
              <div>{this.state.title}</div>
              <div>{this.state.desc}</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
