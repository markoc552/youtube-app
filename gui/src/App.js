import React, { Component } from "react";
import NavigationBar from "./components/NavigationBar";
import VideoList from "./components/VideoList";
import VideoPlayer from "./components/VideoPlayer";
import axios from "axios";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      videos: [],
      selectedVideo: null,
    };
    this.onVideoSearch("samsung galaxy");
  }

  onVideoSearch(term) {
    axios
      .get(`${window.ENVIRONMENT.YOUTUBE_API}${term}`)
      .then((res) => this.setState({ videos: res.data.items }));
  }

  render() {
    return (
      <div className="main-div">
        <NavigationBar onVideoSearch={(term) => this.onVideoSearch(term)} />
        {this.state.selectedVideo !== null && (
          <VideoPlayer video={this.state.selectedVideo} />
        )}
        <VideoList
          onVideoSelect={(selectedVideo) => {
            this.setState({ selectedVideo });
          }}
          videos={this.state.videos}
        />
      </div>
    );
  }
}

export default App;
