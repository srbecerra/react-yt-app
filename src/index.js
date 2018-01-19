import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import _ from 'lodash';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
const API_KEY = "AIzaSyBarB22CrHco3Hwasvjbd3635uzwoSd-Fw"



// Create new component
class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      videos : [],
      selectedVideo: null
     };

     this.videoSearch('surfboards');

  }

  videoSearch(term) {
    YTSearch({key: API_KEY, term: term}, (videos) => {
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
      });
    });
  }

  render() {
    const videoSearch = _.debounce(term => {this.videoSearch(term)}, 500);

    return (
      <div>
        <SearchBar onSearchTermChange={videoSearch}/>
        {/* <SearchBar onSearchTermChange={term => this.videoSearch(term)}/> */}
        <VideoDetail video={this.state.selectedVideo}/>
        <VideoList
          onVideoSelect={selectedVideo => this.setState({selectedVideo})}
          videos={this.state.videos} />
      </div>
    );
  }
}

// Take component's generated HTML and put in DOM

ReactDOM.render(<App />, document.querySelector('.container'));
