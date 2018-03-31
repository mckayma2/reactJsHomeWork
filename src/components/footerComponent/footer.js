import React, { Component } from 'react';


class Footer extends Component {
  render() {
    return (
      <footer>
      <h1>footer</h1>
      {this.props.title}
      {this.props.embed_url}
      </footer>
    );
  }
}

export default Footer;
