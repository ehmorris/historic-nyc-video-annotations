import React, { Component } from 'react';
import Data from './Data';
import DataMarkup from './DataMarkup';
import Styles from './Styles/Infobox.css';

class Infobox extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: 'Blank'
    };
  }

  static getDerivedStateFromProps(nextProps) {
    const newData = Data.find((entry) =>
      nextProps.currentTime > entry.startTime
      && nextProps.currentTime < entry.endTime
    );

    if (newData) {
      return {
        id: newData.id
      };
    } else {
      return {
        id: 'Blank'
      };
    }
  }

  render() {
    const DataThing = DataMarkup[this.state.id];

    return (
      <div className={Styles.Container}>
        <div className={Styles.Content}>
          <DataThing />
        </div>
      </div>
    );
  }
}

export default Infobox;

