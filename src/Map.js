import React, { Component } from 'react';
import ReactMapboxGl, { Layer, Feature } from 'react-mapbox-gl';
import Data from './Data';

const Mapbox = ReactMapboxGl({
  accessToken: process.env.REACT_APP_MAPBOX_TOKEN
});

class Map extends Component {
  constructor(props) {
    super(props);

    this.state = {
      lat: '40.7506',
      long: '-73.9874',
      zoom: '10',
      defaultData: true,
    };
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
        style='mapbox://styles/ehmorris/cjgfva823000h2rpdryitqsk7'
        center={[this.state.long, this.state.lat]}
        zoom={[this.state.zoom]}
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
