import React, { Component } from 'react';
import { connect } from 'react-redux';

class SongList extends Component {
  render() {
    console.log(this.props);
    return <div>SongList</div>
  }
}

// Doesn't have to be called mapStateToProps, just convention.
const mapStateToProps = (state) => {
  return { songs: state.songs };
}

// connect is a React component.
// connect() returns a function. The second pair of parentheses invokes 
// the function it returns (passing it class SongList, which renders the div).
export default connect(mapStateToProps)(SongList);

// The object returned from mapStateToProps will show up as props (the 
// props object) in the SongList component, i.e.
// this.props === { songs: state.songs }

