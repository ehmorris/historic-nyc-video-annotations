import React, { Component } from 'react';
import ReactMapboxGl, { Layer, Feature } from 'react-mapbox-gl';
import Data from './Data';

const Mapbox = ReactMapboxGl({
  accessToken: process.env.REACT_APP_MAPBOX_TOKEN
});

class Map extends Component {
  constructor(props) {
    super(props);

    this.incrementBearing = this.incrementBearing.bind(this);

    this.state = {
      lat: '40.7506',
      long: '-73.9874',
      zoom: '10',
      defaultData: true,
      bearing: 0,
      bearingInterval: null
    };
  }

  incrementBearing() {
    const newBearing = this.state.bearing === 0 ? 180 : 0;

    this.setState({
      bearing: newBearing
    });
  }

  componentDidMount() {
    this.setState({
      bearingInterval: setInterval(this.incrementBearing, 2000)
    });
  }

  componentWillUnmount() {
    clearInterval(this.state.bearingInterval);
  }

  static getDerivedStateFromProps(nextProps) {
    const newData = Data.find((entry) =>
      nextProps.currentTime > entry.startTime
      && nextProps.currentTime < entry.endTime
    );

    if (newData) {
      return {
        lat: newData.lat,
        long: newData.long,
        zoom: newData.zoom,
        defaultData: false
      };
    } else {
      return null;
    }
  }

  render() {
    return (
      <Mapbox
        style='mapbox://styles/mapbox/streets-v9'
        center={[this.state.long, this.state.lat]}
        zoom={[this.state.zoom]}
        pitch={[40]}
        bearing={[this.state.bearing]}
        movingMethod='easeTo'
        animationOptions={{
          duration: 2000,
          easing: (num) => num
        }}
        containerStyle={{
          width: '100%',
          height: '100%'
        }}
      >
        <Layer
          type='circle'
          paint={{
            'circle-color': '#ff0000',
            'circle-radius': 6,
            'circle-pitch-alignment': 'map'
          }}
        >
          {!this.state.defaultData &&
            <Feature coordinates={[this.state.long, this.state.lat]} />
          }
        </Layer>
      </Mapbox>
    );
  }
}

export default Map;
