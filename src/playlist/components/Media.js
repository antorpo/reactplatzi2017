import React, { Component } from "react";
import  PropTypes from "prop-types";
import "./Media.css";

class Media extends Component {
  render() {
    const {title, author, image} = this.props;

    return (
      <div className="Media">
        <div className="Media-cover">
          <img
            className="Media-image"
            src={image}
            alt="Imagen cover"
            width={260}
            height={160}
          />

          <h3 className="Media-title">{title}</h3>
          <p className="Media-author">{author}</p>
        </div>
      </div>
    );
  }
}

// Validamos el tipo de los props:
Media.propTypes = {
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    type: PropTypes.oneOf(["video", "audio"]).isRequired
};

export default Media;
