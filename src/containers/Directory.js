import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

const mapStateToProps = state => ({});
const mapDispatchToProps = dispatch => bindActionCreators({});

class Directory extends Component {
  render() {
    return (
      <div>Directory</div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Directory);
