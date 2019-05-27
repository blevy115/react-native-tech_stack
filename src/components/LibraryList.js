import React, { Component } from 'react';
import { connect } from 'react-redux';

class LibraryList extends Component {
  render() {
    return;
  }
}

const mapStatetoProps = state => {
  return { libraries: state.libraries };
};

export default connect(mapStatetoProps)(LibraryList);
