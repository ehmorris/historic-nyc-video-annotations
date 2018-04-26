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
          perspective: '1000px'
        }}
      >
        <div
          style={{
            width: '100vw',
            height: '100vh',
            position: 'relative',
            zIndex: '1',
            transform: 'translate3D(0, 0, -60px) rotate3d(0, 1, 0, -40deg)'
          }}
        >
          <Video updateTime={this.updatePlayerTime} />
        </div>

        <div
          style={{
            position: 'absolute',
            zIndex: '2',
            width: '40vw',
            height: '40vw',
            top: '50%',
            left: '0',
            transform: 'translate3D(0, -50%, -20px) rotate3d(0, 1, 0, 40deg)'
          }}
        >
          <Map currentTime={this.state.playerTime} />
        </div>

        <div
          style={{
            position: 'absolute',
            zIndex: '2',
            width: '30vw',
            height: '30vw',
            top: '50%',
            right: '0',
            transform: 'translate3D(0, 0, -160px) rotate3d(0, 1, 0, -40deg)'
          }}
        >
          <Infobox currentTime={this.state.playerTime} />
        </div>
      </div>
    );
  }
}

export default App;
