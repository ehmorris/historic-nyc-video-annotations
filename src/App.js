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
      <div>
        <div
          style={{
            width: '100vw',
            height: '100vh',
            position: 'relative',
            zIndex: '1'
          }}
        >
          <Video updateTime={this.updatePlayerTime} />
        </div>

        <div
          style={{
            position: 'absolute',
            zIndex: '2',
            width: '20vw',
            height: '20vw',
            top: '1rem',
            left: '1rem'
          }}
        >
          <Map currentTime={this.state.playerTime} />
        </div>

        <div
          style={{
            position: 'absolute',
            zIndex: '2',
            width: '20vw',
            height: '20vw',
            bottom: '4rem',
            left: '1rem'
          }}
        >
          <Infobox currentTime={this.state.playerTime} />
        </div>
      </div>
    );
  }
}

export default App;
