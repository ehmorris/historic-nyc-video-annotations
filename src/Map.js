import React, { Component } from 'react';
import ReactMapboxGl, { Layer, Feature } from 'react-mapbox-gl';
import Data from './Data';
import Styles from './Styles/Map.css';

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
      <div className={Styles.Map}>
        <Mapbox
          style='mapbox://styles/ehmorris/cjgs8n2lv00162rlby0q0b66n'
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
              'circle-stroke-width': 4,
              'circle-stroke-color': '#ff0000',
              'circle-opacity': 0,
              'circle-radius': 26,
              'circle-pitch-alignment': 'map'
            }}
          >
            {!this.state.defaultData &&
              <Feature coordinates={[this.state.long, this.state.lat]} />
            }
          </Layer>
        </Mapbox>
      </div>
    );
  }
}

export default Map;
