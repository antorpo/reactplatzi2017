import React, { Component } from "react";

class HandleError extends Component {
  state = {
    handleError: false
  };

  componentDidCatch(error, info) {
    // Envia este error a un servicio como Sentry.
    this.setState({
      handleError: true
    });
  }

  render() {
    if (this.state.handleError) {
      return <h1>{this.props.message}</h1>;
    }

    return(this.props.children);
  }
}

export default HandleError;
