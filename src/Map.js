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
      lat: '',
      long: '',
      zoom: ''
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
        zoom: newData.zoom
      };
    } else {
      return {
        title: '',
        desc: ''
      };
    }
  }

  render() {
    return (
      <Mapbox
        style='mapbox://styles/mapbox/streets-v9'
        center={[this.state.long, this.state.lat]}
        zoom={[this.state.zoom]}
        containerStyle={{
          width: '100%',
          height: '100%'
        }}
      />
    );
  }
}

export default Map;
