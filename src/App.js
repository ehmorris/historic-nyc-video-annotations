import React, { Component } from 'react';
import Map from './Map';
import Video from './Video';
import Infobox from './Infobox';
import Styles from './Styles/Container.css';

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
      <div className={Styles.Container}>
        <Video updateTime={this.updatePlayerTime} />
        <Map currentTime={this.state.playerTime} />
        <Infobox currentTime={this.state.playerTime} />
      </div>
    );
  }
}

export default App;
