import React, { Component } from 'react';
import Data from './Data';
import Styles from './Styles/Infobox.css';

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
      <div className={Styles.Infobox}>
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

