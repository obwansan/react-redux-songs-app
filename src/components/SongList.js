import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectSong } from '../actions';

class SongList extends Component {
  
  renderList() {
    // map() returns a (new) array of JSX blobs (song title and select button)
    return this.props.songs.map((song) => {
      // returns each JSX blob to the new array with the interpolated song data.
      return (
        <div className="item" key={song.title}>
          <div className="right floated content">
            <button 
              className="ui button primary" 
              onClick={() => this.props.selectSong(song)}
            >
              Select
            </button>
          </div>
          <div className="content">{song.title}</div>
        </div>
      );
    });
  }
  
  render() {
    return <div className="ui divided list">{this.renderList()}</div>
  }
}

const mapStateToProps = state => {
  return { songs: state.songs }
}

const mapDispatchToProps = dispatch => {
  return { selectSong: selectSong }
}

export default connect(mapStateToProps, mapDispatchToProps)(SongList);


