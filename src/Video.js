import React, { Component } from 'react';
import YouTube from 'react-youtube';

class Video extends Component {
  constructor(props) {
    super(props);

    this.handleStateChange = this.handleStateChange.bind(this);
    this.emitTime = this.emitTime.bind(this);

    this.state = {
      video: null,
      currentTimeInterval: null
    };

    this.playerOptions = {
      width: '100%',
      height: '100%',
      playerVars: {
        rel: 0,
        showinfo: 0,
        loop: 1,
        modestbranding: 1,
        playsinline: 1,
        autoplay: 1
      }
    };
  }

  emitTime() {
    if (this.state.video) {
      this.props.updateTime(this.state.video.getCurrentTime());
    }
  }

  handleStateChange({data: state, target: video}) {
    if (!this.state.video || !this.state.currentTimeInterval) {
      this.setState({
        video: video,
        currentTimeInterval: setInterval(this.emitTime, 250)
      });
    }
  }

  componentWillUnmount() {
    clearInterval(this.state.currentTimeInterval);
  }

  render() {
    return (
      <YouTube
        videoId={'wxbqYJyOTtI'}
        opts={this.playerOptions}
        onStateChange={this.handleStateChange}
      />
    );
  }
}

export default Video;
