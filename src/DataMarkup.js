import React from 'react';
import Asset from './Asset';
import Styles from './Styles/DataMarkup.css';

const DataMarkup = {
  Blank: function() {
    return <div>Blank</div>;
  },
  JohnEricsson: function() {
    return (
      <div>
        <div>Battery Park, Statue of John Ericsson</div>
        <div>This statue has been moved many times, but in this video you can see him facing towards Battery Park, with the Chesebrough Building in the background.</div>
        <div className={Styles.Gallery}>
          <Asset src="JohnEricssonStatue1903" alt="Statue" />
        </div>
      </div>
    );
  },
  BrooklynBridge: function() {
    return (
      <div>
        <div>Brooklyn Bridge</div>
        <div>The Brooklyn Bridge used to carry trollies, trains, cars, and pedestrians.</div>
      </div>
    );
  }
}

export default DataMarkup;
