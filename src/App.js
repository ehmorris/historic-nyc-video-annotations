import React, { Component } from 'react';
import Map from './Map';
import Video from './Video';
import Infobox from './Infobox';

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
      <div
        style={{
          display: 'flex'
        }}
      >
        <div
          style={{
            width: '131.45vh',
            height: '100vh'
          }}
        >
          <Video updateTime={this.updatePlayerTime} />
        </div>

        <div
          style={{
            flex: '1',
            minWidth: '35%',
            position: 'relative',
            padding: '90px'
          }}
        >
          <Map currentTime={this.state.playerTime} />

          <Infobox currentTime={this.state.playerTime} />
        </div>
      </div>
    );
  }
}

export default App;
