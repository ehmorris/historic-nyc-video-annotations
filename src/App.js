import React, { Component } from 'react';
import {Helmet} from 'react-helmet';
import Map from './Map';
import Video from './Video';
import Infobox from './Infobox';
import Styles from './Styles/Base.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.updatePlayerTime = this.updatePlayerTime.bind(this);

    this.state = { playerTime: 0, };
  }

  updatePlayerTime(newTime) {
    if (newTime !== this.state.playerTime) {
      this.setState({ playerTime: newTime });
    }
  }

  render() {
    return (
      <div>
        <Video updateTime={this.updatePlayerTime} />
        <Map currentTime={this.state.playerTime} />
        <Infobox currentTime={this.state.playerTime} />

        <Helmet>
          <body className={Styles.Base} />
        </Helmet>
      </div>
    );
  }
}

export default App;
