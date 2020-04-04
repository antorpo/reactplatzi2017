import React, { Component } from "react";
import Category from "./Category";
import "./Playlist.css";

class Playlist extends Component {
  render() {
    const {
      data: { categories }
    } = this.props;

    return (
      <React.Fragment>
        {categories.map(item => {
          return <Category category={item} key={item.id}/>;
        })}
      </React.Fragment>
    );
  }
}

export default Playlist;
