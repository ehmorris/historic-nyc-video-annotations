import React, { Component } from 'react';
import YouTube from 'react-youtube';

class Video extends Component {
  constructor(props) {
    super(props);

    this.handleStateChange = this.handleStateChange.bind(this);

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

  handleStateChange({data: state, target: video}) {
    this.props.updateTime(video.getCurrentTime());
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
