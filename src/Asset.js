import React, { Component } from 'react';

class Asset extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: 'Blank'
    };
  }

  render() {
    return (
      <picture>
        <source
          srcSet={require(`./Assets/${this.props.src}.jpg`)}
        />
        <img
          src={require(`./Assets/${this.props.src}.jpg`)}
          alt={this.props.alt}
        />
      </picture>
    );
  }
}

export default Asset;
