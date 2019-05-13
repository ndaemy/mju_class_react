import _ from 'lodash';
import React, { Component } from 'react';
import searchYoutube from 'youtube-api-v3-search';
import SearchBar from './components/SearchBar';
import VideoList from './components/VideoList';
import VideoDetail from './components/VideoDetail';
import './App.css';

const API_KEY = 'AIzaSyA7ZdAXNrCB16t0bTeq4tMEz6qLI-YgtwA';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      videos: [],
      selectedVideo: null
    };
    this.searchVideo('');
  }

  searchVideo(term) {
    searchYoutube(API_KEY, { q: term }, (error, result) => {
      if (error) return console.log(error);
      console.dir(result);
      let videos = result.items;
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
      });
    });
  }

  render() {
    const searchVideo = _.debounce(term => {
      this.searchVideo(term);
    }, 300);
    return (
      <div className="App container">
        <SearchBar onChangeSearchTerm={searchVideo} />
        <div className="row">
          <VideoDetail video={this.state.selectedVideo} />
          <VideoList
            videos={this.state.videos}
            onSelectVideo={selectedVideo => this.setState({ selectedVideo })}
          />
        </div>
      </div>
    );
  }
}

export default App;
