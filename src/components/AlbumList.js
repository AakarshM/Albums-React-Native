//import libraries for making a Component
import React, { Component } from 'react';
import { View, Text } from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail.js';


//components

class AlbumList extends Component {
  state = { albums: [] }; //built in w/ Component
  componentWillMount() {
    //console.log('componentWillMount checked in');
    axios.get('https://rallycoding.herokuapp.com/api/music_albums').then((response) => {
      console.log(response);
      this.setState({ albums: response.data }); //use setState to modify state w/ Component
    }).catch((e) => { console.log(e); });
  }

  renderAlbums() {
    return this.state.albums.map((album) => {
        return <AlbumDetail key={album.title} album = {album} />
    });
  }

  render() {
    console.log(this.state);

    return (
      <View>
      {this.renderAlbums()}
      </View>
    );
  }
}


export default AlbumList;
