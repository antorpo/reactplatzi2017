import React, { Component } from "react";
import Search from "../components/Search";

class SearchContainer extends Component {
  state = {
    search: ""
  };

  handleSubmit = e => {
    e.preventDefault();
    console.log(this.input.value);
  };

  setInputRef = e => {
      this.input = e;
  }

  render() {
    return <Search 
    handleSubmit={this.handleSubmit} 
    setRef={this.setInputRef}/>;
  }
}

export default SearchContainer;
