import React, { Component } from "react";
import { Search, Image, Icon, Radio } from "semantic-ui-react";
import axios from "axios";

class NavigationBar extends Component {
  constructor(props) {
    super(props);

    this.state = { term: "", darkTheme: true, suggestions: [] };
  }

  onThemeChange() {
    this.setState({ darkTheme: !this.state.darkTheme });

    if (!this.state.darkTheme) {
      this.onWhiteThemeChange();
    } else {
      this.onDarkThemeChange();
    }
  }

  onWhiteThemeChange() {
    const body = document.querySelector("body");

    body.setAttribute("style", "background-color: white");
    body.setAttribute("style", "color: black");
  }

  onDarkThemeChange() {
    const body = document.querySelector("body");

    body.setAttribute(
      "style",
      "background-color: rgb(59, 59, 59); color: white;"
    );
  }

  render() {
    return (
      <div className="navigation-bar">
        <Image
          size="tiny"
          floated="left"
          src={window.ENVIRONMENT.YOUTUBE_LOGO}
        />
        <div className="search-wrapper">
          <Search
            inverted
            size="large"
            value={this.state.term}
            className="search-box"
            onSearchChange={(e, data) => this.onInputChange(e.target.value)}
            icon={
              <Icon
                name="search"
                inverted
                circular
                link
                onClick={() => this.props.onVideoSearch(this.state.term)}
              />
            }
            onChange={(event) => this.onInputChange(event.target.value)}
          />
        </div>
        <Radio
          onChange={() => this.onThemeChange()}
          toggle
          style={{ margin: "auto auto" }}
        />
      </div>
    );
  }

  onInputChange(term) {
    this.setState({ term: term });
    axios
      .get(
        `http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=${term}`
      )
      .then((res) => {
        this.setState({ term: term, suggestions: res.data[1] });
      });
  }
}

export default NavigationBar;
