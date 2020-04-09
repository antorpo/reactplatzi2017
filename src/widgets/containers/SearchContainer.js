import React, { Component } from "react";
import Search from "../components/Search";

class SearchContainer extends Component {
  state = {
    value: "Luis Fonsi"
  };

  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state);
  };

  handleChange = (e) => {
      this.setState({
          value: e.target.value.replace(" ", "-")
      });
  };

  render() {
    return <Search 
    handleSubmit={this.handleSubmit} 
    value={this.state.value}
    handleChange={this.handleChange}/>;
  }
}

export default SearchContainer;
