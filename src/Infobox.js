import React, { Component } from 'react';
import Data from './Data';

class Infobox extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      desc: '',
    };
  }

  static getDerivedStateFromProps(nextProps) {
    const newData = Data.find((entry) =>
      nextProps.currentTime > entry.startTime
      && nextProps.currentTime < entry.endTime
    );

    if (newData) {
      return {
        title: newData.title,
        desc: newData.desc
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
      <div
        style={{
          background: '#fff',
          border: '2px solid #000',
          padding: '1rem',
          width: '100%',
          boxSizing: 'border-box',
          height: '100%'
        }}
      >
        <div>{this.props.currentTime}</div>
        <div>
          <div>{this.state.title}</div>
          <div>{this.state.desc}</div>
        </div>
      </div>
    );
  }
}

export default Infobox;
